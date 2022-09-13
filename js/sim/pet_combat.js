/*****************************************************************************/
/* this script contains relevant calculations for combat of player */
/*****************************************************************************/

function petUpdateDmgMod(){
    pet.combatdmgmod = 1;
    magdmgmod = 1;
    physdmgmod = 1;
    pet_special_mod = 1;
    if(auras.beastwithin?.timer > 0) pet.combatdmgmod *= 1 + auras.beastwithin.effect.dmgmod * 5 / 100; // bestial wrath
    if(debuffs.bloodfrenzy.timer > 0 && !debuffs.bloodfrenzy.inactive) physdmgmod *= debuffs.bloodfrenzy.dmgbonus; // blood frenzy debuff
    if(auras.cullingherd?.timer > 0) pet.combatdmgmod *= pet_talents.cull_herd;
    if(auras.monstrousbite?.timer > 0) pet.combatdmgmod *= Math.pow(1 + auras.monstrousbite.effect.dmgbonus / 100, auras.monstrousbite.stacks);
    if((debuffs.curseofele.timer > 0) && !debuffs.curseofele.inactive) { magdmgmod *= 1.13 } // curse of ele
    if(auras.killcommand?.timer > 0) pet_special_mod = (1 + auras.killcommand.stacks * auras.killcommand.effect.dmgmod / 100);
    if(debuffs.hm.timer > 0 && talents.mark_death > 0) pet_special_mod *= (1 + talents.mark_death);
    if(auras.savagery?.timer > 0) pet.combatdmgmod *= (1 + auras.savagery.effect.dmgbonus / 100); // savage rend crit
    if(steptimeend > (fightduration * 0.65)) pet.combatdmgmod *= pet_talents.feed_frenzy;
    return;
}

function petUpdateHaste(){
    pet.combatspeed = pet.speed;
    pet.combatspeed = (auras.frenzy?.timer > 0) ? pet.combatspeed / 1.3 : pet.combatspeed; // frenzy
    pet.combatspeed = (auras.lust?.timer > 0) ? pet.combatspeed / 1.3 : pet.combatspeed; // lust
    return;
}

function petUpdateStats(){
    let BasePet = BASE_PET[level];
    pet.combatcrit = pet.crit + CritPenalty;
    pet.combatspellcrit = Math.max(0,talents.ferocity + CritPenalty);

    // hunter AP
    let bonusAP = updateAP();
    let petAPfromplayer = bonusAP * PetHunterAPRatio * pet_talents.wild_hunt;
    let tsa_ap = (talents.trueshot_aura > 1) ? talents.trueshot_aura : selectedbuffs.special.percentAPMod;
    let base_apmod = talents.animal_handler * tsa_ap;

    let combat_apmod = 1;
    if (auras.rabid?.timer > 0) combat_apmod *= (1 + (auras.rabid.effect.apmod * auras.rabid.stacks / 100));
    if (auras.serenitydust?.timer > 0) combat_apmod *= (1 + auras.serenitydust.effect.apmod / 100);
    if (auras.callofwild?.timer > 0) combat_apmod *= (1 + auras.callofwild.effect.apmod);

    let howl_ap = (auras.furious_howl?.timer > 0) ? PET_SPELLS.pet_special.ranks.AP : 0;

    pet.combatap = (petAPfromplayer * base_apmod + pet.ap + howl_ap * base_apmod) * combat_apmod;

    // ******************** Crit *******************
    pet.combatcrit += combatAgi / BasePet.AgiToCrit;
    // pet crit imp crusader
    if(debuffs.judgecrusader.timer > 0 && !debuffs.judgecrusader.inactive) { 
        pet.combatcrit += debuffs.judgecrusader.crit;
        pet.combatspellcrit += debuffs.judgecrusader.crit;
    } 
    
}

function procPetFocus(playercrit){
    
    // go for the throat
    if(playercrit === true) {
        pet.focus += talents.GftT;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Pet gains " + talents.GftT + " Focus from Go for the Throat";
            combatlogindex++;
        }
    }
    // cap focus at 100, reset crit flag
    pet.focus = Math.min(100, pet.focus);
    return playercrit = false;
}

function petUpdateFocus(){
    // focus regen per 5s
    let regen = pet.focusregen * steptime;
    pet.focus += regen;
    //console.log(regen)  
    
    // cap focus at 100, reset crit flag
    pet.focus = Math.min(100, pet.focus);
}

function petRollAttack(){
    let tmp = 0;
    let roll = rng10k();
    tmp += pet.miss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += pet.dodge * 100;
    if (roll < tmp) return RESULT.DODGE;
    tmp += GlanceChance * 100;
    if (roll < tmp) return RESULT.GLANCE;
    tmp += pet.combatcrit * 100;
    if (roll < tmp) return RESULT.CRIT; // 1 roll
    return RESULT.HIT;
}

function petRollSpell(specialcrit){
    let tmp = 0;
    let roll = rng10k();
    let crit = pet.combatcrit + specialcrit;
    tmp += pet.miss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += pet.dodge * 100;
    if (roll < tmp) return RESULT.DODGE;
    tmp += (100 - pet.miss - PetBaseDodge) * crit; // pseudo 2 roll
    if (roll < tmp) return RESULT.CRIT;
    return RESULT.HIT;
    
}

function petRollMagicSpell(){
    let tmp = 0;
    let roll = rng10k();
    let miss = BaseMagicMiss - pet.spellhit;
    tmp += miss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += PartialResistRate * 100; // partial resist rate approx. 14.5% based on log data at 0 resistance
    if (roll < tmp) return RESULT.PARTIAL;
    tmp += (100 - miss - PartialResistRate) * pet.combatspellcrit; // pseudo 2 roll
    if (roll < tmp) return RESULT.CRIT;
    return RESULT.HIT;
}

function petAttack(){

    petUpdateStats();
    petUpdateDmgMod();
    
    let dmg = 0;
    let result = petRollAttack(); // check attack table
    spellResultSum(result,'petattack');
    if (result === RESULT.HIT) {
          dmg = petAutoCalc(); // calc damage
    }
    else if (result === RESULT.GLANCE) {
        dmg = petAutoCalc();
        dmg *= GlanceDmgReduction;
    }
    else if (result === RESULT.CRIT) {
        dmg = petAutoCalc();
        dmg *= 2;
        petCrit();
    }
    let spelltype = "physical";
    let done = petdealdamage(dmg,result,spelltype);
    petdmgdone += done;

    petUpdateHaste();
    petsteptime = nextpetattack;
    nextpetattack += pet.combatspeed;

    spellresult.petattack.dmg += done;
    spellresult.petattack.count++;

    petProc(result);

    if(combatlogRun) {
        combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet Auto " + RESULTARRAY[result] + " for " + done + ". AP => " + pet.combatap.toFixed(2) + ". Dmg => " + (pet.combatdmgmod * pet.dmgmod).toFixed(3);
        combatlogindex++;
    }
    return petsteptime;
}

function petSpell(petspell){
    if (petspell !== 'pet_special' && petspell !== 'pet_focus_dump') {
        throw new Error(`Invalid pet spell ${petspell}`);
    }
    petUpdateStats();
    petUpdateDmgMod();
    let dmg = 0;
    result = 0;
    let specialcrit = (auras.killcommand?.timer > 0) ? talents.focused_fire * 10 : 0;
    let spelltype = PET_SPELLS[petspell].type;
    let spellname = PET_SPELLS[petspell].spell_name;
    let dot_only_check = (spellname !== 'Venom Web Spray' && spellname !== 'Spore Cloud' && spellname !== 'Poison Spit' && spellname !== 'Scorpid Poison');
    let hit_and_dot_check = (spellname == 'Fire Breath' || spellname == 'Rake' || spellname == 'Savage Rend' || spellname == 'Spirit Strike')
    //if(nextpetattack < nextpetspell){ nextpetspell = nextpetattack; }
    
    if(spelltype === 'physical' && spellname !== 'Pin'){

        result = petRollSpell(specialcrit); // check attack table
        if(talents.cobra_strike > 0 && pet_special_crit > 0 && result === RESULT.HIT) {
            result = 3;
            pet_special_crit -= 1;
        }
        spellResultSum(result, petspell);
        if (result === RESULT.HIT) {
            dmg = spellPetCalc(petspell); // calc damage
        }
        else if (result === RESULT.CRIT) {
            dmg = spellPetCalc(petspell);
            dmg *= 2;
            petCrit(petspell);
        }

    }
    else if(spelltype === 'bleed') {
        result = petRollSpell(specialcrit); // check attack table
        if(talents.cobra_strike > 0 && pet_special_crit > 0 && result === RESULT.HIT) {
            result = 3;
            pet_special_crit -= 1;
        }
        spellResultSum(result, petspell);
        if (result === RESULT.HIT) {
            dmg = spellPetCalc(petspell); // calc damage
        }
        else if (result === RESULT.CRIT) {
            dmg = spellPetCalc(petspell);
            dmg *= 2;
            petCrit(petspell);
        }
    }
    else if(spelltype === 'AP') {

        auras.furious_howl.timer = auras.furious_howl.effect.duration;
    }
    else if(spelltype !== 'physical' && dot_only_check){
        
        result = petRollMagicSpell(); // check attack table
        if(talents.cobra_strike > 0 && pet_special_crit > 0 && result === RESULT.HIT) {
            result = 3;
            pet_special_crit -= 1;
        }
        spellResultSum(result, petspell);
        if (result === RESULT.HIT) {
            dmg = spellPetCalc(petspell); // calc damage
        }
        else if (result === RESULT.CRIT) {
            dmg = spellPetCalc(petspell);
            dmg *= 1.5; // spell crits are 150%
            petCrit();
        }
        else if (result === RESULT.PARTIAL) {
            dmg = spellPetCalc(petspell);
            dmg *= PartialResistDmg; // average reduction of 35% on partial resists
        }

    }
    if (!dot_only_check || hit_and_dot_check) {
        // roll for initial hit if dot only
        let hit = (spelltype === 'bleed' || spelltype === 'physical') ? pet.hit : pet.spellhit;
        result = (!dot_only_check) ? rollMagicDoT(hit, spelltype) : result;
        if (result !== RESULT.MISS) {
            let ticks = PET_SPELLS.pet_special.duration / PET_SPELLS.pet_special.tick_rate;
            let ap_mod = (hit_and_dot_check) ? PET_SPELLS.pet_special.ap_mod * ticks : PET_SPELLS.pet_special.ap_mod;
            auras['pet_special'].damage = petSpecialDoTCalc(ap_mod);
            dotHandler('pet_special', 'pet', true, spelltype);
        }
    }

    petsteptime = nextpetspell; // since pet steps don't change time (all instants) set time to current time
    nextpetspell = (PET_SPELLS[petspell].gcd) ? nextpetspell + 1.5 : nextpetspell; // set next available spell time by 1.5
    
    let done = petdealdamage(dmg,result,spelltype); // need special case for magic spells pet or player

    petdmgdone += done;
    spellresult[petspell].dmg += done;
    spellresult[petspell].count++;
    
    if(auras.killcommand?.timer > 0 && (result === RESULT.HIT || result === RESULT.CRIT || result === RESULT.PARTIAL)) {
        auras.killcommand.stacks = Math.max(0, auras.killcommand.stacks - 1);
    }
    if(auras.killcommand?.timer > 0 && auras.killcommand.stacks === 0) {
        auras.killcommand.timer = 0;
    }
    petProc(result, petspell);
    petUpdateHaste();
    
    if(combatlogRun && !dot_only_check){
        combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet casts " + spellname + " on Target - " + RESULTARRAY[result];
        combatlogindex++;
    } 
    else if(combatlogRun && spellname === 'Furious Howl'){
        combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet casts " + spellname + " AP: " + PET_SPELLS.pet_special.ranks.AP;
        combatlogindex++;
    } 
    else if (combatlogRun) {
        combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet " + spellname + " " + RESULTARRAY[result] + " for " + done + ". AP => " + pet.combatap.toFixed(2) + ". Focus => " + pet.focus.toFixed(2);
        combatlogindex++;
        
    }
    return petsteptime;
}
/** final damage calculation after rolls */
function petdealdamage(dmg, result, spelltype) {
    if (result != RESULT.MISS && result != RESULT.DODGE && spelltype === "physical") {
       // randomizes the result to be always ±1 damage as in-game results show even with fine light crossbow
        let mindmg = Math.floor(dmg * (1 - PetArmorReduc));
        let maxdmg = Math.ceil(dmg * (1 - PetArmorReduc));
        dmg = rng(mindmg,maxdmg);
        return dmg;
    }
    else if (result != RESULT.MISS && (spelltype !== 'physical')){
        let mindmg = Math.floor(dmg);
        let maxdmg = Math.ceil(dmg);
        dmg = rng(mindmg,maxdmg);
        
        return dmg;
    }
    else {
       return 0;
    }
}

function petProc(result, petspell){
    let roll = 0;
    let check_spell = (petspell !== undefined) ? PET_SPELLS[petspell].spell_name : '';

    if (pet_talents.owl_focus > 0 && check_spell !== '') {
        roll = rng10k();
        let procchance = pet_talents.owl_focus;
        auras.owlfocus.timer = (roll <= procchance * 10000) ? auras.owlfocus.effect.duration : auras.owlfocus.timer;
        if (auras.owlfocus.timer > 0 && combatlogRun){
            combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet gains Owl's Focus";
            combatlogindex++;
        }
    }
    if (result !== RESULT.MISS && auras.rabid?.timer > 0) {
        roll = rng10k();
        let procchance = auras.rabid.effect.proc_chance;
        let curr_stacks = auras.rabid.stacks;
        auras.rabid.stacks = (roll <= procchance * 100) ? Math.min(auras.rabid.stacks + 1, auras.rabid.effect.stacks) : auras.rabid.stacks;
        if(curr_stacks < auras.rabid.stacks && combatlogRun) { 
           combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet gains " + auras.rabid.effect_name + " stacks: " + auras.rabid.stacks;
           combatlogindex++;
        }
    }
    // activate plus refresh
    if (check_spell === 'Monstrous Bite'){
        auras.monstrousbite.timer = auras.monstrousbite.effect.duration;
        auras.monstrousbite.stacks = Math.min(auras.monstrousbite.stacks + 1, auras.monstrousbite.effect.stacks);
    }
}

function petCrit(petspell){

    let check_spell = (petspell !== undefined) ? petspell : '';
    if (petspell === 'pet_special' && PET_SPELLS.pet_special.spell_name === 'Savage Rend') {
        auras.savagery.timer = auras.savagery.effect.duration;
        if (combatlogRun){
            combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet gains Savagery";
            combatlogindex++;
        }
    }
    if (check_spell === 'pet_focus_dump') {
        if(!!auras.cullingherd) {
            auras.cullingherd.timer = auras.cullingherd.effect.duration;
            if (combatlogRun){
                combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Player/Pet gains Culling the Herd";
                combatlogindex++;
            }
        }
    }
    let roll = 0;
    //frenzy
    if (!!auras.frenzy) {
        roll = rng10k();
        let frenzychance = talents.frenzy * 2000;
        auras.frenzy.timer = (roll <= frenzychance) ? auras.frenzy.effect.duration : auras.frenzy.timer; // proc check
        if(auras.frenzy.timer === auras.frenzy.effect.duration) { 
            if(combatlogRun && nextpetspell >= nextpetattack) {
                    combatlogarray[combatlogindex] = nextpetattack.toFixed(3) + " - Pet gains Frenzy";
                    combatlogindex++;
            } 
            else if (combatlogRun){
                combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet gains Frenzy";
                combatlogindex++;
            }
        }
    }
    // invigoration
    if (talents.invigoration > 0) {
        roll = rng10k();
        if (roll <= talents.invigoration * 1000) currentMana = Math.min(Mana * 0.01 + currentMana, Mana); // 1% mana restore
    }
}
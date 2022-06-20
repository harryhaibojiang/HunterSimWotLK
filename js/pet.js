
const PetBaseDodge = 6.5;
const PetBaseCrit  = 1.1515;
const PetBaseSpeed = 2;
const PetMinDmg = 42;
const PetMaxDmg = 68;
const PetBaseAgi = 127;
const PetBaseStr = 162;
const PetHappiness = 1.25;
const PetFamilyMod = 1.05; // WotLK all pets have same family dmg mod of 5% idk why
const PetHunterAPRatio = 0.22;
const PetAgiToCrit = 33;
const CobraReflexesPenalty = 0.85;
const BaseFocusRegen = 25;
// initial pet object - trying something different from how I did player 1 global object instead of a bunch of variables
var pet = {
    agi: 0,
    ap: 0,
    combatap: 0,
    crit: 0,
    combatcrit:0,
    dmgmod: 1,
    hit: 0,
    miss: 0,
    combatmiss:0,
    speed: 2,
    combatspeed:0,
    str: 0,
    focusregen:0,
    focus: 100,
};
var petconsumestats = {};
var petdmgdone = 0;
var petautodmg = 0;
var petduration = 0;
var petsteptime = 0;
var pet_special = 0;
var beast_tame_weight = false;

var pet_talents = {
    blood_of_rhino: 0,
    bloodthirst: 1,
    boar_speed: 0,
    bullheaded: 0,
    call_of_wild: 1,
    carrion_feeder: 0,
    charge: 0,
    cobra_reflex: 1.3,
    cornered: 0,
    cull_herd: 1.03,
    dash: 1,
    dive: 0,
    feed_frenzy: 1,
    grace_mantis: 0,
    great_resist: 0,
    great_stam: 0,
    guard_dog: 0,
    imp_cower: 0,
    intervene: 0,
    last_stand: 0,
    lick_wounds: 0,
    lionheart: 0,
    mobility: 0,
    nat_armor: 0,
    owl_focus: 0,
    pet_barding: 0,
    pheonix: 0,
    rabid: 1,
    roar_recovery: 0,
    roar_sacrifice: 0,
    shark_attack: 1.03,
    silverback: 0,
    spider_bite: 0.09,
    spike_collar: 1.09,
    taunt: 0,
    thunderstomp: 0,
    wild_hunt: 0,
    wolverine_bite: 0
};

var selectedPet = 0;

var petdmg = {
    attackdmg:0,
    specialdmg:0,
}

function petStatsCalc(){
    pet_talents = Ferocitypet
    let racialmod = (selectedRace === 3) ? 1.05 : 1; // 5% pet dmg if orc
    let beasttamers_crit = 0;
    let beasttamers_dmg = 1;
    if (gear.shoulder.id === 30892 || beast_tame_weight) {
        beasttamers_dmg = 1.02;
        beasttamers_crit = 2;
    };
    
    pet.dmgmod = PetHappiness * talents.unleash_fury * PetFamilyMod * racialmod * beasttamers_dmg * talents.ferocious_insp;

    pet.str = Math.floor((PetBaseStr + (selectedbuffs.stats.Str || 0) + (petconsumestats.Str || 0)) * selectedbuffs.special.kingsMod);
    pet.agi = Math.floor((PetBaseAgi + (selectedbuffs.stats.Agi || 0) + (petconsumestats.Agi || 0)) * selectedbuffs.special.kingsMod);

    //ap
    let petAPfromplayer = BaseRAP * PetHunterAPRatio;
    let apmod = (1 + talents.animal_handler);
    pet.ap = ((pet.str - 10) * 2 + (selectedbuffs.stats.MAP || 0) + petAPfromplayer) * apmod;
    //crit
    pet.crit = PetBaseCrit + pet.agi / PetAgiToCrit + talents.ferocity + (selectedbuffs.stats.CritChance || 0) + beasttamers_crit + CritPenalty; // need to add special gear items w/ pet crit
    //hit
    pet.hit = Math.floor(BaseHitChance);
    let penalty = (RangeHitChance >= 1) ? HitPenalty : 0; // include penalty here? assumes lvl 73 target
    pet.miss = Math.max(8 - pet.hit - penalty,0);
    //speed
    pet.speed = PetBaseSpeed / talents.serp_swift / pet_talents.cobra_reflex; // 1.3 for cobra reflexes
    // spell selection by pet
    let special_spell = PET_FAMILY[selectedPet].special;
    switch (special_spell){
        case 'Ravage': pet_special = 0; break;
        case 'Rake': pet_special = 1; break;
        case 'Savage Rend': pet_special = 2; break;
        case 'Snatch': pet_special = 3; break;
        case 'Lightning Breath': pet_special = 4; break;
        case 'Sonic Blast': pet_special = 5; break;
    }
    let focus_dump_spell = PET_FAMILY[selectedPet].focus_dump;
    switch (focus_dump_spell){
        case 'Bite': pet_focus_dump = 0; break;
        case 'Claw': pet_focus_dump = 1; break;
        case 'Smack': pet_focus_dump = 2; break;
    }
    
    pet.focusregen = BaseFocusRegen * (1 + talents.bestial_disc * 0.5);
}

function petUpdateDmgMod(){
    pet.combatdmgmod = 1;
    naturedmgmod = 1;
    if(!!auras.beastwithin && auras.beastwithin.timer > 0) pet.combatdmgmod *= 1.5; // bestial wrath
    if(debuffs.bloodfrenzy.timer > 0 && !debuffs.bloodfrenzy.inactive) pet.combatdmgmod *= 1.04; // blood frenzy debuff
    
    return;
}

function petUpdateHaste(){
    pet.combatspeed = pet.speed;
    pet.combatspeed = (auras.frenzy?.timer > 0) ? pet.combatspeed / 1.3 : pet.combatspeed; // frenzy
    pet.combatspeed = (auras.lust?.timer > 0) ? pet.combatspeed / 1.3 : pet.combatspeed; // lust
    return;
}

function petUpdateStats(){

    pet.combatcrit = pet.crit;
    pet.combatspellcrit = Math.max(0,talents.ferocity + CritPenalty);
    pet.combatmiss = pet.miss;
    // hunter AP
    let bonusAP = updateAP();
    pet.combatap = bonusAP * 0.22 + pet.ap;

    // ******************** Crit *******************
    pet.combatcrit += combatAgi / 33;
    // pet crit imp crusader
    if(debuffs.judgecrusader.timer > 0 && !debuffs.judgecrusader.inactive) { 
        pet.combatcrit += debuffs.judgecrusader.crit;
        pet.combatspellcrit += debuffs.judgecrusader.crit;
    } // imp crusader debuff
    
}

function petUpdateFocus(playercrit){
    // bestial discipline
    
    // go for the throat
    if(playercrit === true) {
        pet.focus += talents.GftT;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = playertimeend.toFixed(3) + " - Pet gains " + talents.GftT + " Focus from Go for the Throat";
            combatlogindex++;
        }
    }
    // focus regen per 5s
    if (steptimeend > 5 * Math.ceil(prevtimeend / 5)) {
        pet.focus += pet.focusregen;    
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Pet regens " + pet.focusregen + " Focus";
            combatlogindex++;
        }
    }
    // cap focus at 100, reset crit flag
    pet.focus = Math.min(100, pet.focus);
    return playercrit = false;
}

function petAuras(steptime){
    // update uptime
    
    
}

function petRollAttack(){
    let tmp = 0;
    let roll = rng10k();
    tmp += pet.combatmiss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += PetBaseDodge * 100;
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
    tmp += pet.combatmiss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += PetBaseDodge * 100;
    if (roll < tmp) return RESULT.DODGE;
    tmp += (100 - pet.combatmiss - PetBaseDodge) * crit; // pseudo 2 roll
    if (roll < tmp) return RESULT.CRIT;
    return RESULT.HIT;
    
}

function petRollMagicSpell(){
    let tmp = 0;
    let roll = rng10k();
    let hit = (17);
    tmp += hit * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += 14.5 * 100; // partial resist rate approx. 14.5% based on log data at 0 resistance
    if (roll < tmp) return RESULT.PARTIAL;
    tmp += (100 - hit - 14.5) * pet.combatspellcrit; // pseudo 2 roll
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
    let spelltype = "phys";
    let done = petdealdamage(dmg,result,spelltype);
    petdmgdone += done;
    petautodmg += done;
    petUpdateHaste();
    petsteptime = nextpetattack;
    nextpetattack += pet.combatspeed;
    petautocount++;
    petdmg.attackdmg += done;
    if(combatlogRun) {
        combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet Auto " + RESULTARRAY[result] + " for " + done;
        combatlogindex++;
    }
    return petsteptime;
}

function petSpell(petspell){

    petUpdateStats();
    petUpdateDmgMod();
    let dmg = 0;
    result = 0;
    let specialcrit = (auras.killcommand?.timer > 0) ? talents.focused_fire * 10 : 0;
    let spelltype = "";
    

    if(petspell === 'special') {
        let spellcost = PET_SPELLS[pet_special].cost;
        if(nextpetattack < nextpetspell){ nextpetspell = nextpetattack; }

        if(pet_special <= 3){

            result = petRollSpell(specialcrit); // check attack table
            spellResultSum(result, 'special');
            if (result === RESULT.HIT) {
                dmg = spellPetCalc(pet_special); // calc damage
            }
            else if (result === RESULT.CRIT) {
                dmg = spellPetCalc(pet_special);
                dmg *= 2;
                petCrit();
            }
            spelltype = "phys";
        } 
        else if(pet_special <= 5 && pet_special > 3){

            result = petRollMagicSpell(); // check attack table
            spellResultSum(result, 'special');
            if (result === RESULT.HIT) {
                dmg = spellPetCalc(pet_special); // calc damage
            }
            else if (result === RESULT.CRIT) {
                dmg = spellPetCalc(pet_special);
                dmg *= 1.5; // spell crits are 150%
                petCrit();
            }
            else if (result === RESULT.PARTIAL) {
                dmg = spellPetCalc(pet_special);
                dmg *= 0.65; // average reduction of 35% on partial resists
            }
            spelltype = "magic";
        }
        
        petsteptime = nextpetspell; // since pet steps don't change time (all instants) set time to current time
        nextpetspell = nextpetspell + 1.5; // set next available spell time by 1.5
        petspecialcount++;
    }
    //{
    //PET_SPELLS[pet_focus_dump].cost;
    //}
    let done = petdealdamage(dmg,result,spelltype); // need special case for magic spells pet or player
    petdmgdone += done;
    if (petspell === 'special'){
        petdmg.specialdmg += done;
    }
    petUpdateHaste();
    
    if(combatlogRun){
        combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet " + PET_SPELLS[pet_special].name + " " + RESULTARRAY[result] + " for " + done;
        combatlogindex++;
    }
    return petsteptime;
}
/** final damage calculation after rolls */
function petdealdamage(dmg, result, spelltype) {
    if (result != RESULT.MISS && result != RESULT.DODGE && spelltype === "phys") {
       // randomizes the result to be always ±1 damage as in-game results show even with fine light crossbow
        let mindmg = Math.floor(dmg * (1 - PetArmorReduc));
        let maxdmg = Math.ceil(dmg * (1 - PetArmorReduc));
        dmg = rng(mindmg,maxdmg);
       
        return dmg;
    }
    else if (result != RESULT.MISS && spelltype === "magic"){
        let mindmg = Math.floor(dmg);
        let maxdmg = Math.ceil(dmg);
        dmg = rng(mindmg,maxdmg);
        
        return dmg;
    }
    else {
       return 0;
    }
}

function petCrit(){
    let roll = 0;
    //frenzy
    if (!!auras.frenzy) {
        roll = rng10k();
        let frenzychance = talents.frenzy * 2000;
        auras.frenzy.timer = (roll <= frenzychance) ? 8 : pet.frenzy.timer; // proc check
        if(pet.frenzy.timer === 8) { 
            if(combatlogRun && nextpetspell >= nextpetattack) {
                    combatlogarray[combatlogindex] = nextpetattack.toFixed(3) + " - Pet gains Frenzy";
                    combatlogindex++;
            } 
            else if (combatlogRun){
                combatlogarray[combatlogindex] = nextpetspell.toFixed(3) + " - Pet gains Frenzy";
                combatlogindex++;
            }
        }
    }
    if (talents.invigoration > 0) {
        roll = rng10k();
        if (roll <= talents.invigoration * 1000) currentMana = Math.min(Mana * 0.01 + currentMana, Mana); // 1% mana restore
    }
}
/*****************************************************************************/
/* this script contains relevant calculations for combat of player */
/*****************************************************************************/
var combatAgi = 0;
var combatRAP = 0;
var combatMAP = 0;
var combatdmgmod = 1;
var targetdmgmod = 1;
var physdmgmod = 1;
var magdmgmod = 1;
var bleeddmgmod = 1;

function update() {

    updateHaste();
    updateArmorReduction();
    updateAgi();
    updateAP();

    return;
 }
 
 // handling for mana changes per gain/loss
 function procMana(attack,result, spell){
    let BasePlayer = BASE_PLAYER[level];
    let tmp = 0;
    let roll = 0;
    // judgement of wisdom gain if active
    if(debuffs.judgewisdom.timer > 0 && !debuffs.judgewisdom.inactive) {
       if ((result === RESULT.CRIT) || (result === RESULT.HIT) || (result === RESULT.GLANCE)) {
          if (!useAverages) {
             tmp = 3000; // 50% chance
             roll = rng10k();
             if (tmp < roll) {
                let gain = Math.floor(2 / 100 * BasePlayer.BaseMana)
                mana_result.jow += gain;
                currentMana += gain;
                if(combatlogRun) {
                   combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + gain + " Mana from Judgement of Wisdom";
                   combatlogindex++;
                }
             }
          }
          else { // adds 50 every time instead of 100 and rolls it when average is selected
             currentMana += Math.floor(1 / 100 * BasePlayer.BaseMana);
             if(combatlogRun) {
                combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + Math.floor(1 / 100 * BasePlayer.BaseMana) + " Mana from Judgement of Wisdom";
                combatlogindex++;
             }
          }
       }
    }
    // Mark of conquest
    if (gear.trinket1.id === 27921 || gear.trinket2.id === 27921) {
       tmp = 500; // 5% chance to proc
       roll = rng10k();
       if (tmp < roll) {
          let gain = rng(128,172);
          mana_result.conquest += gain;
          currentMana += gain;
          if(combatlogRun) {
             combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + gain + " Mana from Mark of Conquest";
             combatlogindex++;
          }
       }
    }
    // black bow
    if (gear.range.id === 32336 && attack === 'ranged'){
       if ((result === RESULT.CRIT) || (result === RESULT.HIT)) {
          mana_result.blackbow += 8;
          currentMana += 8;
       }
    } // black grasp of the destroyer 
    else if (gear.hand.id === 22194){
       if ((result === RESULT.CRIT) || (result === RESULT.HIT) || (result === RESULT.GLANCE)) {
          currentMana += 8;
       }
    }
    currentMana = Math.min(currentMana,Mana);
 
    return;
 }

 function updateMana() {
    // spirit tick gain (if no casting condition)
    let spiregen = 0;
    if (recentcast === false) {
       //spiregen = fiveSecRulemp5; 
    } 
    else { spiregen = 0; 
    }
 
    // mp5 tick gain
    let replenish_mana = (replenishment) ? (Mana * 0.01) / 5 * steptime : 0;
    
    mana_result.replenish += replenish_mana;
    mana_result.mp5 += ManaPer5 / 5 * steptime;
    let managain = (ManaPer5 / 5 * steptime + spiregen + replenish_mana) ;
    currentMana += managain;
    
    if(combatlogRun) {
       //combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player regens " + (managain) + " Mana";
       //combatlogindex++;
    }
 
    if (auras.rapid?.timer > 0){
       if (steptimeend > 3 * Math.ceil(prevtimeend / 3)) {
         mana_result.rapid_recup += Mana * talents.rapid_recup;
         currentMana += Mana * talents.rapid_recup;
          //console.log('rapid recup '+ Mana * talents.rapid_recup)
       }
       
    }
 
    currentMana = Math.min(currentMana, Mana);
    currentMana = Math.floor(currentMana);
    //console.log("mana => "+ currentMana);
    return;
 }
 // handling for dynamic armor reduction 
 function updateArmorReduction() {
    let arp = 0;
    let BasePlayer = BASE_PLAYER[level];
    let debuffarp = 1;
    let armorPenReduc = 0;
    // formula consts for level 60 or higher
    let attacker_const = 400 + 85 * level + 4.5 * 85 * (level-59);
    
    arp = ArPsumStat(arp_auras, arp);
    arp += ArPRating;

    arp = Math.min(ArPRatingCap, arp);
    armorPenReduc = arp / BasePlayer.ArPRatingRatio / 100;
 
    // armor debuffs
    debuffarp *= (debuffs.faeriefire.timer > 0 && !debuffs.faeriefire.inactive) ? ( 1 - debuffs.faeriefire.arp ) : 1;
    if (debuffs.expose.timer > 0 && !debuffs.expose.inactive) {
       debuffarp *= 1 - debuffs.expose.arp;
    }
    else if (debuffs.sunder.timer > 0 && !debuffs.sunder.inactive) {
       debuffarp *= 1 - debuffs.sunder.stacks * debuffs.sunder.arp;
    }
    else {debuffs.sunder.stacks = 0;}
    let debuffArmor = target.armor * (debuffarp);
 
    let armor_cap = (debuffArmor + attacker_const) / 3;
    let playerRemainingArmor = debuffArmor - Math.min(debuffArmor, armor_cap) * armorPenReduc;
    //console.log(debuffArmor)
    // target armor reduction calculation
    PlyrArmorReduc = playerRemainingArmor / (playerRemainingArmor + attacker_const);
    PetArmorReduc = debuffArmor / (debuffArmor + attacker_const);
    //console.log("reduction " + PlyrArmorReduc);
    return;
 }
 
 // handling for AP changes from auras - remember target specific AP needs to be separate for pet calcs
 function updateAP() {
    // AP trinkets
    combatRAP = BaseRAP;
    combatMAP = BaseMAP;
    let bonusAP = 0;
   
    bonusAP = APsumStat(ap_auras, bonusAP);
     // AP from combat agi
    bonusAP += combatAgi;
    // target AP - expose weakness
    let targetAP = 0;
    bonusAP += (!!auras.exp_weakness && auras.exp_weakness.timer > 0) ? (Agi + combatAgi) / 4 : 0; // expose from player if talented
 
    // demonslaying AP
    if (target.type === 'Demon'){
       targetAP += (playerconsumes.battle_elixir === 9224) ? 105 : 0;
    }
    // scourgebane AP
    if (target.type === 'Undead'){
       targetAP += (!!gear.mainhand.enchant && gear.mainhand.enchant === 44595) ? 140 : 0;
    }
    // consecrated stones AP
    if (target.type === 'Undead'){
       targetAP += (!!gear.mainhand.attachment && gear.mainhand.attachment === 23122) ? 108 : 0;
       targetAP += (!!gear.offhand?.attachment && gear.offhand.attachment === 23122) ? 108 : 0;
    }
    // Hunter's mark
    
    let HM_rap = (debuffs.hm.timer > 0 && !debuffs.hm.inactive) ? debuffs.hm.rap : 0;
 
    // HM - bonus from talents and glyph
    if (debuffs.hm.timer > 0 && !debuffs.hm.inactive) {
       let apbonus = 0;
       if(talents.imp_hunter_mark > 1) {
          apbonus += talents.hunters_mark;
       }
       else if (debuffs.hm.improved === 1) {
          apbonus += talents.hunters_mark;
       }
       if (!!glyphs.hunters_mark) {
          apbonus += glyphs.hunters_mark;
       }
       else if (debuffs.hm.improved === 2) {
          apbonus += talents.hunters_mark + GLYPHS_DATA[42907].bonus;
       }
       HM_rap *= 1 + apbonus;
    }
    
    let combat_apmod = 1;
    let bonusBaseRAP = 0;
    let bonusBaseMAP = 0;
    if (auras.callofwild?.timer > 0) {
       combat_apmod = (1 + auras.callofwild.effect.apmod);
       bonusBaseRAP = combatRAP * auras.callofwild.effect.apmod;
       bonusBaseMAP += combatMAP * auras.callofwild.effect.apmod;
    }
    // totals AP - HM and targetAP do not buff pet
    combatRAP += bonusBaseRAP + (bonusAP + targetAP + HM_rap) * rapmod * combat_apmod;
    combatMAP += bonusBaseMAP + (bonusAP + targetAP) * mapmod * combat_apmod;
 
    //console.log("rap: " + targetAP);
    // returns AP used in the pet function call
    return bonusBaseRAP + bonusAP * rapmod * combat_apmod;
 }
 
 // handling for Agi changes
 function updateAgi() {
    combatAgi = 0;
    combatAgi = AgisumStat(agi_auras, combatAgi);
    combatAgi = Math.floor(combatAgi * agimod);
    //console.log("agi bonus: " + combatAgi);
    // updating crit and AP from the gained agi - in AP and crit funct
    return;
 }
 // handling for updating speed
 function updateHaste() {
    let BasePlayer = BASE_PLAYER[level];
 
    let hasted_speed = 1;
    rangespeed = BaseRangeSpeed;
    meleespeed = BaseMeleeSpeed;
    let hasterating = 0;
    
    hasterating = HastesumStat(haste_auras, hasterating);
    hasterating += HasteRating;
    
    hasted_speed = (auras.berserking?.timer > 0) ? hasted_speed * 1.2 : hasted_speed;  // troll berserking (20% in wotlk)
    hasted_speed = (auras.lust?.timer > 0) ? hasted_speed * 1.3 : hasted_speed; // lust
 
    let hasteRatingSpeed = (hasterating / BasePlayer.HasteRatingRatio / 100) + 1;
    hasted_speed *= hasteRatingSpeed;
 
    // ranged only
    let rapid_bonus = (!!glyphs.rapid_fire) ? glyphs.rapid_fire : 0;
    rangespeed = (auras.rapid?.timer > 0) ? rangespeed / (1+ (auras.rapid.effect.rangespeed + rapid_bonus) / 100) : rangespeed; // rapid fire
    let hawk_bonus = (!!glyphs.aspect_hawk) ? glyphs.aspect_hawk : 0;
    rangespeed = (auras.imp_hawk?.timer > 0) ? rangespeed / (1 + talents.imp_hawk + hawk_bonus) : rangespeed; // quick shots
    // melee only
    meleespeed = (auras.mongoose?.timer > 0) ? meleespeed / 1.02 : meleespeed; // mongoose
 
    rangespeed = rangespeed / hasted_speed;
    meleespeed = meleespeed / hasted_speed;
    //console.log("haste rating: " + hasterating);
    //console.log("range spd: " + (Math.round(rangespeed * 100) / 100));
    //console.log("melee spd: " + (Math.round(meleespeed * 100) / 100));
    return;
 }
 // handling for dmg mod changes from auras
 function updateDmgMod(spell) {
    combatdmgmod = 1;
    targetdmgmod = 1;
    physdmgmod = 1;
    magdmgmod = 1;
    bleeddmgmod = 1;
    let spell_ranged_shot = (spell !== 'raptorstrike') && (spell !== 'melee') && (spell !== 'mongoosebite') && (spell !== 'serpentsting');
 
    // player damage mods
    if(auras.beastwithin?.timer > 0) combatdmgmod *= 1 + auras.beastwithin.effect.dmgmod / 100; // beast within
    if(auras.cullingherd?.timer > 0) combatdmgmod *= pet_talents.cull_herd;
 
    if((debuffs.bloodfrenzy.timer > 0) && !debuffs.bloodfrenzy.inactive) physdmgmod *= debuffs.bloodfrenzy.dmgbonus; // blood frenzy
    
    // special mods for non-physical dmg
    if((debuffs.curseofele.timer > 0) && !debuffs.curseofele.inactive) magdmgmod *= debuffs.curseofele.dmgbonus; // curse of ele
    if((debuffs.mangle.timer > 0) && !debuffs.mangle.inactive) bleeddmgmod *= debuffs.mangle.dmgbonus; // mangle
 
    // target damage mods
    if(auras.blackarrow?.timer > 0) targetdmgmod *= 1 + auras.blackarrow.effect.dmgmod / 100;
    if((talents.nox_stings > 1) && (auras.serpentsting?.timer > 0)) targetdmgmod *= talents.nox_stings;
    if((debuffs.hm.timer > 0) && !debuffs.hm.inactive && (talents.mark_death > 0) && spell_ranged_shot) targetdmgmod *= (1 + talents.mark_death);
 
    return;
 }
 
 // handling for crit changes
 function updateCritChance(attack) {
    let BasePlayer = BASE_PLAYER[level];
 
    let critsuppression = CritAuraPenalty + CritPenalty; // future base this on target level
    let attackcrit = (attack === 'melee') ? MeleeCritChance : RangeCritChance; 
    let combatCrit = attackcrit + critsuppression;
    let critrating = 0;
 
    critrating = CritsumStat(crit_auras, critrating);

    if(auras.master_tact?.timer > 0) { combatCrit += talents.master_tact; } // master tactician
    
    combatCrit += critrating / BasePlayer.CritRatingRatio;
    // from agi changes
    combatCrit += combatAgi / BasePlayer.AgiToCrit;
    if(debuffs.judgecrusader.timer > 0 && !debuffs.judgecrusader.inactive) { 
       combatCrit += debuffs.judgecrusader.crit; 
    } // imp crusader debuff
 
 
    return combatCrit;
 }
 
 // hit table calc for mainhand
 function rollMainhandWep(combatCrit) {
    let tmp = 0;
    let roll = rng10k();
    let meleemiss = Math.max(MeleeMissChance,0);
    tmp += meleemiss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += DodgeChance * 100;
    if (roll < tmp) return RESULT.DODGE;
    tmp += GlanceChance * 100;
    if (roll < tmp) return RESULT.GLANCE;
    tmp += combatCrit * 100;
    if (roll < tmp) return RESULT.CRIT; // 1 roll
    return RESULT.HIT;
 
 }
 // hit table calc for ranged
 function rollRangeWep(combatCrit) {
    let tmp = 0;
    let roll = rng10k();
    let rangemiss = Math.max(RangeMissChance,0);
    tmp += rangemiss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += (100 - rangemiss) * combatCrit; // pseudo 2 roll
    if (roll < tmp) return RESULT.CRIT;
    return RESULT.HIT;
    
 }
 /** hit table for spells 2 roll for all */
 function rollSpell(attack,combatCrit,specialcrit, spell) {
    let tmp = 0;
    let roll = rng10k();
    let meleemiss = Math.max(RaptorMissChance,0);
    let rangemiss = Math.max(RangeMissChance,0);
    let crit = specialcrit + combatCrit;
 
    if (attack === 'melee'){
       tmp += meleemiss * 100;
       if (roll < tmp) return RESULT.MISS;
       tmp += DodgeChance * 100;
       if (roll < tmp) return RESULT.DODGE;
       tmp += (100 - meleemiss - DodgeChance) * crit; // pseudo 2 roll
       if (roll < tmp) return RESULT.CRIT;
       return RESULT.HIT;
    }
    else if (attack === 'ranged'){
       let partial = (!!spell && (spell === 'arcaneshot' || spell === 'chimera_serpent' || spell === 'explosiveshot' || spell === 'wild_quiver' || spell === 'chimerashot')) ? PartialResistRate : 0;
       let temp_miss = (!!spell && spell === 'chimera_serpent') ? 0 : rangemiss;
       tmp += temp_miss * 100;
       if (roll < tmp) return RESULT.MISS;
       tmp += partial * 100; // partial resist rate approx. 14.5% based on log data at 0 resistance
       if (roll < tmp) return RESULT.PARTIAL;
       tmp += (100 - temp_miss) * crit; // pseudo 2 roll
       if (roll < tmp) return RESULT.CRIT;
       return RESULT.HIT;
    }
 }
 function rollMagicSpell(){
    let BasePlayer = BASE_PLAYER[level];
    let tmp = 0;
    let roll = rng10k();
    let miss = BaseMagicMiss;
    let crit = BaseSpellCrit + (Int / BasePlayer.IntToCrit); // spell crit
    tmp += miss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += PartialResistRate * 100; // partial resist rate approx. 14.5% based on log data at 0 resistance
    if (roll < tmp) return RESULT.PARTIAL;
    tmp += (100 - miss) * crit; // pseudo 2 roll
    if (roll < tmp) return RESULT.CRIT;
    return RESULT.HIT;
 }
 
 function rollMagicDoT(hit, type){
    let tmp = 0;
    let roll = rng10k();
    let miss = (type === 'physical') ? Math.max(0, BasePhysicalMiss - hit) : Math.max(0, BaseMagicMiss - hit);
    tmp += miss * 100;
    if (roll < tmp) return RESULT.MISS;
    return RESULT.HIT;
 }
 
 function rollDamageOverTime(crittable, dotname){
    let tmp = 0;
    let roll = rng10k();
    let crit = (crittable) ? RangeCritChance : 0; 
    let partial = PartialResistRate;
    tmp += partial * 100;
    if (roll < tmp) return RESULT.PARTIAL;
    tmp += crit * 100;
    if (roll < tmp) return RESULT.CRIT;
    return RESULT.HIT;
 }
 /** attack with mainhand */
 function attackMainhand(meleeAP) {
 
    let attack = 'melee';
    let dmg = 0;
    let combatCrit = updateCritChance(attack);
    let result = rollMainhandWep(combatCrit); // check attack table
    spellResultSum(result, 'melee');
    if (result === RESULT.HIT) {
       dmg = meleeStrikeCalc(mainhand_wep, meleeAP); // calc damage
    }
    else if (result === RESULT.CRIT) {
       dmg = meleeStrikeCalc(mainhand_wep, meleeAP); // calc damage
       dmg *= MeleeCritDamage;
       proccrit(0, attack, 'melee');
    }
    else if (result === RESULT.GLANCE) {
       dmg = meleeStrikeCalc(mainhand_wep, meleeAP); // calc damage
       dmg *= GlanceDmgReduction;
    }
 
    dmg *= targetdmgmod;
    let done = dealdamage(dmg,result);
    
    totaldmgdone += done;
    spellresult.melee.dmg += done;
    spellresult.melee.count++;
    procattack(attack,result);
    procMana(attack,result, 'melee'); // expensiveish
    //magicproc(attack);
 
    if(combatlogRun) {
       combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player Melee " + RESULTARRAY[result] + " for " + done;
       combatlogindex++;
    }
    
 
    return;
 }
 
 /** attack with auto shot */
 function attackRange(shot) {
 
    if (shot === undefined) shot = 'autoshot';
    updateDmgMod(shot);
    let attack = 'ranged';
    let combatCrit = updateCritChance(attack);
 
    let dmg = 0;
    let result = 0;
    let dmg_type = '';
    let spellname = '';
 
    if(shot === 'wild_quiver') {
       result = rollSpell('ranged', combatCrit, 0, shot); // check attack table
       spellResultSum(result, shot);
       if (result === RESULT.HIT) {
          dmg = wildQuiverCalc(range_wep,combatRAP); // calc damage
       }
       else if (result === RESULT.CRIT) {
          dmg = wildQuiverCalc(range_wep,combatRAP);
          dmg *= MeleeCritDamage; // double damage without mortal shots
          proccrit(0, attack, 'wild_quiver');
       }
       else if (result === RESULT.PARTIAL) {
          dmg = wildQuiverCalc(range_wep,combatRAP);
          dmg *= PartialResistDmg;
       }
       spellname = 'Wild Quiver';
       dmg_type = 'magic';
    }
    else if(shot === 'zods_repeat') {
       result = rollRangeWep(combatCrit); // check attack table
       spellResultSum(result, shot);
       if (result === RESULT.HIT) {
          dmg = ScatterSilenceShotCalc(range_wep,combatRAP); // 50% damage formula
       }
       else if (result === RESULT.CRIT) {
          dmg = ScatterSilenceShotCalc(range_wep,combatRAP); // 50% damage formula
          dmg *= MeleeCritDamage; // double damage without mortal shots
          proccrit(0, attack, 'zods_repeat');
       }
       spellname = 'Zod\'s Repeating Shot';
       dmg_type = 'physical';
    }
    else {
       result = rollRangeWep(combatCrit); // check attack table
       spellResultSum(result, shot);
       if (result === RESULT.HIT) {
          dmg = autoShotCalc(range_wep,combatRAP); // calc damage
       }
       else if (result === RESULT.CRIT) {
          dmg = autoShotCalc(range_wep,combatRAP);
          dmg *= MeleeCritDamage; // double damage without mortal shots
          proccrit(0, attack, 'autoshot');
       }
       spellname = 'Auto Shot';
       dmg_type = 'physical';
       procauto();
 
    }
    
    dmg *= targetdmgmod;
    let done = dealdamage(dmg,result, dmg_type);
    
    totaldmgdone += done;
    spellresult[shot].dmg += done;
    spellresult[shot].count++;
 
    procattack(attack,result);
    procMana(attack,result, 'autoshot'); // expensiveish
    //magicproc(attack);
 
    if(combatlogRun) {
       combatlogarray[combatlogindex] = nextauto.toFixed(3) + " - Player " + spellname + " " + RESULTARRAY[result] + " for " + done + ". RAP => " + combatRAP.toFixed(2);
       combatlogindex++;
    }
 
    return;
 }
 /** attack with a damage over time spell: roll for dmg, deal dmg, apply dots, and trigger any procs */
 function attackDoT(spell,spellcost) {
 
     let combatCrit = 0;
     let dmg = 0;
     let result = 0;
     let attack = "ranged";
     let specialcrit = 0;
     let cost = 0;
     let dot_check = (spell === 'immolatetrap' || spell === 'serpentsting' || spell === 'blackarrow');
 
     // rolls for hit first before dot application
     if(spell === 'explosivetrap'){
         attack = 'ranged'; // used for crit 
         cost = Math.floor(spellcost * beastwithinreduc * (1 - talents.resourcefulness));
         currentMana -= cost;

         combatCrit = updateCritChance(attack);
         result = rollSpell(attack, combatCrit, specialcrit); // check attack table
         //spellResultSum(result, spell);
         if (result !== RESULT.MISS) {
             dmg = explosiveTrapCalc(combatRAP, false); // calc damage
             auras.explosivetrap.damage = explosiveTrapCalc(combatRAP, true);
         }
         if (result === RESULT.CRIT) {
             dmg *= MeleeCritDamage;
             proccrit(cost, attack, spell);
         }
         attack = ''; // used again for checking procs, and traps don't proc melee or range hits
         //console.log(auras.explosivetrap.damage);
     } 
     // rolls for hit first before dot application
     else if(spell === 'explosiveshot') {
         attack = 'ranged';
 
         if (auras.lock_load?.timer > 0) {
             cost = 0;
             auras.lock_load.stacks -= 1;
         } else {
             cost = Math.floor(spellcost * (1 - talents.efficiency) * beastwithinreduc);
         }
         currentMana -= cost;
 
         combatCrit = updateCritChance(attack);
         let exp_glyph = (!!glyphs.explosive_shot) ? glyphs.explosive_shot : 0;
         specialcrit = talents.surv_instincts + exp_glyph;
         result = rollSpell(attack, combatCrit, specialcrit, spell); // check attack table
         spellResultSum(result, spell);
         if (result !== RESULT.MISS) {
             dmg = explosiveShotCalc(combatRAP); // calc damage
             let ticks = auras.explosiveshot.effect.duration / auras.explosiveshot.effect.tick_rate;
             auras.explosiveshot.damage = dmg * ticks; // remove mag mod to prevent double dip on ticks
             dmg *= magdmgmod;
         }
         if (result === RESULT.CRIT) {
             dmg *= RangeCritDamage;
             proccrit(cost, attack, spell);
         }
         else if (result === RESULT.PARTIAL) {
             dmg *= PartialResistDmg;
         }
         
     } 
     else if(spell === 'immolatetrap') {
         cost = Math.floor(spellcost * beastwithinreduc * (1 - talents.resourcefulness));
         currentMana -= cost;
         auras.immolatetrap.damage = immolateTrapCalc(combatRAP);
     } 
     else if(spell === 'serpentsting') {
         cost = Math.floor(spellcost * (1 - talents.efficiency) * beastwithinreduc);
         currentMana -= cost;
         auras.serpentsting.damage = serpentStingCalc(combatRAP);
         //auras.serpentsting.mod_snapshot = range_wep.basedmgmod * combatdmgmod;
     } 
     else if(spell === 'blackarrow') {
         cost = Math.floor(spellcost * (1 - talents.efficiency) * beastwithinreduc * (1 - talents.resourcefulness));
         currentMana -= cost;
         auras.blackarrow.damage = blackArrowCalc(combatRAP);
         
     } 
     else throw new Error(`invalid spell name: ${spell}`)
 
     // roll for application if just a dot with no hit
     if (dot_check) {
         result = rollMagicDoT(RangeHitChance, 'physical');
         spellResultSum(result, spell);
         spellresult[spell].count++;
     }
     // if not a miss, apply dot
     if (result !== RESULT.MISS) {
         dotHandler(spell, 'player', true, USED_SPELLS[spell].type);
     }
 
     if (!dot_check){
         dmg *= targetdmgmod;
         let done = dealdamage(dmg, result, USED_SPELLS[spell].type);
         totaldmgdone += done;
         spellresult[spell].dmg += done;
         spellresult[spell].count++;
         procattack(attack,result);
         procMana(attack,result, spell); // expensiveish
         //magicproc(attack);
 
         // initial hit 
         if(combatlogRun) {
             combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player " + USED_SPELLS[spell].spell_name + " " + RESULTARRAY[result] + " for " + done + ". RAP => " + combatRAP.toFixed(2) + ". Mana => " + currentMana;
             combatlogindex++;
         }
     }
     // application of dot
     if(combatlogRun && result !== RESULT.MISS) {
         combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Target is afflicted by " + USED_SPELLS[spell].spell_name + ". RAP => " + combatRAP.toFixed(2) + ". Mana => " + currentMana;
         combatlogindex++;
     } 
     else if(combatlogRun && result === RESULT.MISS) {
         combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - " + USED_SPELLS[spell].spell_name + " Missed on target. Mana => " + currentMana;
         combatlogindex++;
     }
 
    return;
 }
 /** attack with a spell (yellow) roll for dmg, deal dmg, and trigger any procs */
 function attackSpell(spell,spellcost) {
 
     let combatCrit = 0;
     let dmg = 0;
     let result = 0;
     let attack = "";
     let specialcrit = 0;
     let cost = 0;
     let mastermarksreduc = 1 - talents.master_marksman * 5;
     let impsteadyreduc = (auras.imp_steady_shot?.timer > 0) ? 0.8 : 1;
 
     if (spell === 'steadyshot'){
         attack = 'ranged';
         cost = Math.floor(spellcost * (1 - talents.efficiency) * beastwithinreduc * mastermarksreduc);
         currentMana -= cost;
         
         combatCrit = updateCritChance(attack);
         specialcrit = talents.surv_instincts;
         result = rollSpell(attack, combatCrit, specialcrit); // check attack table
 
         spellResultSum(result, spell);
         if (result === RESULT.HIT) {
             dmg = steadyShotCalc(range_wep,combatRAP); // calc damage
         }
         else if (result === RESULT.CRIT) {
             dmg = steadyShotCalc(range_wep,combatRAP);
             dmg *= SpecialCritDamage;
             proccrit(cost, attack, spell, dmg);   
         }
         procSteady(attack);
 
     } 
     else if (spell === 'multishot') {
         attack = 'ranged';
         cost = Math.floor(spellcost * (1 - talents.efficiency) * beastwithinreduc);
         currentMana -= cost;
 
         combatCrit = updateCritChance(attack);
         specialcrit = talents.imp_barrage;
         result = rollSpell(attack, combatCrit, specialcrit); // check attack table
         spellResultSum(result, spell);
         if (result === RESULT.HIT) {
             dmg = multiShotCalc(range_wep,combatRAP); // calc damage
         }
         else if (result === RESULT.CRIT) {
             dmg = multiShotCalc(range_wep,combatRAP);
             dmg *= RangeCritDamage;
             proccrit(cost, attack, spell);
         }
 
     }
     else if (spell === 'silencingshot') {
         attack = 'ranged';
         cost = Math.floor(spellcost * (1 - talents.efficiency));
         currentMana -= cost;
 
         combatCrit = updateCritChance(attack);
         result = rollSpell(attack, combatCrit, specialcrit); // check attack table
         spellResultSum(result, spell);
         if (result === RESULT.HIT) {
             dmg = ScatterSilenceShotCalc(range_wep,combatRAP); // calc damage
         }
         else if (result === RESULT.CRIT) {
             dmg = ScatterSilenceShotCalc(range_wep,combatRAP);
             dmg *= RangeCritDamage;
             proccrit(cost, attack, spell);
         }
 
     }
     else if (spell === 'aimedshot') {
         attack = 'ranged';
         cost = Math.floor(spellcost * (1 - talents.efficiency) * beastwithinreduc * mastermarksreduc * impsteadyreduc);
         currentMana -= cost;
 
         combatCrit = updateCritChance(attack);
         let trueshotglyph = (!!glyphs.trueshot_aura) ? glyphs.trueshot_aura : 0;
         specialcrit = talents.imp_barrage + trueshotglyph;
         result = rollSpell(attack, combatCrit, specialcrit); // check attack table
         spellResultSum(result, spell);
         if (result === RESULT.HIT) {
             dmg = aimedShotCalc(range_wep,combatRAP); // calc damage
         }
         else if (result === RESULT.CRIT) {
             dmg = aimedShotCalc(range_wep,combatRAP);
             dmg *= SpecialCritDamage;
             proccrit(cost, attack, spell, dmg);
         }
         if (impsteadyreduc !== 1) auras.imp_steady_shot.timer = 0;
 
     }
     else if (spell === 'chimerashot') {
         attack = 'ranged';
         cost = Math.floor(spellcost * (1 - talents.efficiency) * mastermarksreduc * impsteadyreduc);
         currentMana -= cost;
 
         combatCrit = updateCritChance(attack);
         result = rollSpell(attack, combatCrit, specialcrit, spell); // check attack table
         spellResultSum(result, spell);
         if (result === RESULT.HIT) {
             dmg = chimeraShotCalc(range_wep,combatRAP); // calc damage
         }
         else if (result === RESULT.CRIT) {
             dmg = chimeraShotCalc(range_wep,combatRAP);
             dmg *= SpecialCritDamage;
             proccrit(cost, attack, spell, dmg);
         }
         if (result === RESULT.PARTIAL) {
             dmg = chimeraShotCalc(range_wep,combatRAP);
             dmg *= PartialResistDmg;
         }
         if (impsteadyreduc !== 1) auras.imp_steady_shot.timer = 0;
 
     }
     else if (spell === 'killshot') {
         attack = 'ranged';
         cost = Math.floor(spellcost * (1 - talents.efficiency));
         currentMana -= cost;
 
         combatCrit = updateCritChance(attack);
         specialcrit = talents.sniper_training * 5 * 100; // 5% per point, scaled to integer
         result = rollSpell(attack, combatCrit, specialcrit); // check attack table
         spellResultSum(result, spell);
         if (result === RESULT.HIT) {
             dmg = killShotCalc(range_wep,combatRAP); // calc damage
         }
         else if (result === RESULT.CRIT) {
             dmg = killShotCalc(range_wep,combatRAP);
             dmg *= SpecialCritDamage;
             proccrit(cost, attack, spell);
         }
 
     }
     else if (spell === 'arcaneshot') {
         attack = 'ranged';
         if (auras.lock_load?.timer > 0) {
             cost = 0;
             auras.lock_load.stacks -= 1;
         }
         else {
             let cost_glyph = (!!glyphs.arcane_shot && auras.serpentsting?.timer > 0) ? 1 - glyphs.arcane_shot : 1;
             cost = Math.floor(spellcost * (1 - talents.efficiency) * beastwithinreduc * impsteadyreduc * cost_glyph);
         }
         currentMana -= cost;
 
         combatCrit = updateCritChance(attack);
         specialcrit = talents.surv_instincts;
         result = rollSpell(attack, combatCrit, specialcrit, spell); // check attack table
         spellResultSum(result, spell);
         if (result === RESULT.HIT) {
             dmg = arcaneShotCalc(range_wep,combatRAP); // calc damage
         }
         else if (result === RESULT.CRIT) {
             dmg = arcaneShotCalc(range_wep,combatRAP);
             dmg *= SpecialCritDamage;
             proccrit(cost, attack, spell);
         }
         if (result === RESULT.PARTIAL) {
             dmg = arcaneShotCalc(range_wep,combatRAP);
             dmg *= PartialResistDmg;
         }
         if (impsteadyreduc !== 1) auras.imp_steady_shot.timer = 0;
 
     }
     else if (spell === 'raptorstrike') {
         attack = 'melee';
         cost = Math.floor(spellcost * (1 - talents.resourcefulness) * beastwithinreduc);
         currentMana -= cost;
 
         combatCrit = updateCritChance(attack);
         specialcrit = talents.savage_strikes;
         result = rollSpell(attack, combatCrit, specialcrit); // check attack table
         spellResultSum(result, spell);
         if (result === RESULT.HIT) {
             dmg = raptorStrikeCalc(mainhand_wep,combatMAP); // calc damage
         }
         else if (result === RESULT.CRIT) {
             dmg = raptorStrikeCalc(mainhand_wep,combatMAP); // calc damage
             dmg *= MeleeCritDamage;
             proccrit(cost, attack, spell);
         }
 
     }
     else throw new Error(`invalid spell name: ${spell}`)
 
     dmg *= targetdmgmod;
     let done = dealdamage(dmg, result, USED_SPELLS[spell].type);
     totaldmgdone += done;
     spellresult[spell].dmg += done;
     spellresult[spell].count++;
 
     procattack(attack,result);
     procMana(attack,result,spell); // expensiveish
     //magicproc(attack);
 
     if(combatlogRun) {
         combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player " + USED_SPELLS[spell].spell_name + " " + RESULTARRAY[result] + " for " + done + ". RAP => " + combatRAP + ". Mana => " + currentMana;
         combatlogindex++;
     }
     // check and roll for dmg hit on chimera from serpent active, added to combatlog after initial hit
     if (spell === 'chimerashot' && auras.serpentsting?.timer > 0 && result !== RESULT.MISS) {
         procChimera();
     }
     return;
 }
 /** cast spell (possibly add individual spells) */
 function cast(spell) {
     let BasePlayer = BASE_PLAYER[level];
     let spellcost = 0;
     
     updateDmgMod(spell);
     let dot_check = (spell === 'immolatetrap' || spell === 'serpentsting' || spell === 'blackarrow' || spell === 'explosivetrap' || spell === 'explosiveshot');
 
     if (spell === 'raptorstrike'){
         spellcost = USED_SPELLS.raptorstrike.cost / 100 * BasePlayer.BaseMana;
         attackSpell(spell,spellcost);
     }
     else if (spell === 'melee'){
         attackMainhand(combatMAP);
     } 
     else if (dot_check) {
         spellcost = USED_SPELLS[spell].cost / 100 * BasePlayer.BaseMana;
         attackDoT(spell,spellcost);
     }
     else if (spell === 'readiness') {
         return;
     }
     else {
         
         spellcost = USED_SPELLS[spell].cost / 100 * BasePlayer.BaseMana;
         attackSpell(spell,spellcost);
         recentcast = true;
     }
     return;
 }
 
 /** final damage calculation after rolls */
 function dealdamage(dmg, result, type) {
     if (result === RESULT.MISS) {
         return 0;
     }
     else if (result != RESULT.MISS && result != RESULT.DODGE && type === 'physical') {
         // randomizes the result to be always ±1 damage as in-game results show even with fine light crossbow
         let mindmg = Math.floor(dmg * (1 - PlyrArmorReduc));
         let maxdmg = Math.ceil(dmg * (1 - PlyrArmorReduc));
         dmg = rng(mindmg,maxdmg);
         //console.log(mindmg + " - " + maxdmg)
         return dmg;
     } 
     else if (result != RESULT.MISS && type !== 'physical') {
         let mindmg = Math.floor(dmg);
         let maxdmg = Math.ceil(dmg);
         dmg = rng(mindmg,maxdmg);
         //console.log(type + ": " + mindmg + " - " + maxdmg)
         return dmg;
     }
     else {
         throw new Error(`invalid damage of type ${type}, result ${result}, dmg ${dmg}`)
     }
 }
 
 /** handling for procs by crits */
 function proccrit(cost, attack, spell, dmg) {
 
     let roll = 0;
 
     if(talents.cobra_strike > 0) {
         if (spell === 'arcaneshot' || spell === 'steadyshot' || spell === 'killshot') {
             roll = rng10k();
             if (roll <= talents.cobra_strike * 100) pet_special_crit = 2;
         }
     }
     if (talents.pierce_shot > 0) {
         let type = (spell === 'chimerashot') ? 'nature' : 'physical'; 
         if (spell === 'aimedshot' || spell === 'steadyshot' || spell === 'chimerashot') {
             dotHandler('pierce_shot', 'player', true, type, dmg);
             spellresult['pierce_shot'].count++;
             if(combatlogRun) {
                 combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Target is affected by Piercing Shots.";
                 combatlogindex++;
             }
         }
     }
 
     let trink1_has_aura = (Object.values(auras.trink1).length !== 0);
     let trink2_has_aura = (Object.values(auras.trink2).length !== 0);
     let slot = '';
 
     if (trink1_has_aura) {
         slot = 'trink1';
         // if effect is proc and cd is up verify proc type condition is met
         if ((auras[slot].effect?.is_proc && auras[slot].cd === 0 )){
             if (auras[slot].effect.proc_type === 'Melee or Range Crit') rollTrinkProc(slot,attack);
         }
     }
     if (trink2_has_aura) {
         slot = 'trink2';
         // if effect is proc and cd is up verify proc type condition is met
         if ((auras[slot].effect?.is_proc && auras[slot].cd === 0 )){
             if (auras[slot].effect.proc_type === 'Melee or Range Crit') rollTrinkProc(slot,attack);
         }
     }
 
     // thrill of the hunt
     if (talents.TotH > 0 && cost > 0 && attack === 'ranged'){
         roll = rng10k();
         let prevmana = currentMana;
         if (roll <= talents.TotH * 3333) { currentMana += Math.floor(cost * 0.4); 
             if(combatlogRun) {
                 combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + (currentMana - prevmana) + " Mana from Thrill of the Hunt.";
                 combatlogindex++;
             }
         }
     }
     if (!!auras.exp_weakness && attack === 'ranged') {
         roll = rng10k();
         auras.exp_weakness.timer = (roll <= talents.exp_weakness * 3333) ? auras.exp_weakness.effect.duration : auras.exp_weakness.timer;
         if(auras.exp_weakness.timer === auras.exp_weakness.effect.duration && combatlogRun) {
             combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains <span style='color:#e5cc80'>Expose Weakness</span>";
             combatlogindex++;
         }
     }
     // go for the throat proc
     if(talents.GftT > 0 && attack === 'ranged'){
         let playercrit = true;
         procPetFocus(playercrit);
     }
     return;
 }
 /** handling for procs by autos (quick shots only) */
 function procauto() {
     if (!!auras.imp_hawk) {
         let roll = rng10k();
 
         auras.imp_hawk.timer = (roll <= auras.imp_hawk.effect.proc_chance * 100) ? auras.imp_hawk.effect.duration : auras.imp_hawk.timer; // proc check
         if((auras.imp_hawk.timer === auras.imp_hawk.effect.duration) && combatlogRun) {
             combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Quick Shots (Imp Hawk Proc)";
             combatlogindex++;
         }
     }
 
     if (talents.wild_quiver > 0) {
         let roll = rng10k();
         if (roll <= talents.wild_quiver * 10000) {
             attackRange('wild_quiver');
         }
     }
     if (gear.range.id === 50034) { // zod's repeating longbow
         let procchance = 4;
         let roll = rng10k();
         if (roll <= procchance * 100) {
             attackRange('zods_repeat');
         }
     } else if (gear.range.id === 50638) { // zod's repeating longbow heroic
         let procchance = 5;
         let roll = rng10k();
         if (roll <= procchance * 100) {
             attackRange('zods_repeat');
         }
     }
 
 }
 /** handling for chimera shot proc with a sting active */
function procChimera() {
 
     if (auras.serpentsting?.timer > 0) {
         let attack = 'ranged';
         let combatCrit = 0;
         let specialcrit = 0;
         let result = 0;
         let dmg = 0;
 
         combatCrit = updateCritChance(attack);
 
         result = rollSpell(attack, combatCrit, specialcrit, 'chimera_serpent'); // check attack table
         spellResultSum(result, 'chimera_serpent');
         if (result === RESULT.HIT) {
             dmg = auras.serpentsting.damage * CHIMERA_SHOT.serpent.dmgmod * magdmgmod; // calc damage
         }
         else if (result === RESULT.CRIT) {
             dmg = auras.serpentsting.damage * CHIMERA_SHOT.serpent.dmgmod * magdmgmod;
             dmg *= RangeCritDamage;
             //proccrit(cost, attack, spell); does it proc crit effects??
         }
         if (result === RESULT.PARTIAL) {
             dmg = auras.serpentsting.damage * CHIMERA_SHOT.serpent.dmgmod * magdmgmod;
             dmg *= PartialResistDmg;
         }
         dmg *= targetdmgmod;
         let done = dealdamage(dmg, result, 'nature');
         totaldmgdone += done;
         spellresult['chimera_serpent'].dmg += done;
         spellresult['chimera_serpent'].count++;
 
         if(combatlogRun) {
             combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player Chimera Shot - Serpent " + RESULTARRAY[result] + " for " + done + ". DMG => " + auras.serpentsting.damage.toFixed(2) + ".";
             combatlogindex++;
         }
 
         // refresh serpent sting
         auras.serpentsting.damage = serpentStingCalc(combatRAP); // overwrites regardless, need to only overwrite if more dmg
         dotHandler('serpentsting', 'player', true, USED_SPELLS.serpentsting.type);
     }
 
}
 
function procDoT() {
 
     if (talents.lock_load > 0 && auras.lock_load.cd === 0) {
         let roll = rng10k(); 
       let procchance = (talents.lock_load === 6) ? 20 : talents.lock_load;
       auras.lock_load.timer = (roll <= procchance * 100) ? auras.lock_load.effect.duration : 0;
 
         if(auras.lock_load.timer > 0) { 
             auras.lock_load.cd = auras.lock_load.effect.base_cd; 
          auras.lock_load.stacks = auras.lock_load.effect.stacks;
             if(combatlogRun) {
                 combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Lock and Load";
                 combatlogindex++;
             }
         }
     }
}
 /** handling for procs by steady only */
function procSteady(attack) {
 
    let trink1_has_aura = (Object.values(auras.trink1).length !== 0);
    let trink2_has_aura = (Object.values(auras.trink2).length !== 0);
    let slot = '';
 
    if (trink1_has_aura) {
       slot = 'trink1';
       // if effect is proc and cd is up verify proc type condition is met
       if ((auras[slot].effect?.is_proc && auras[slot].cd === 0 )){
          if (auras[slot].effect.proc_type === 'Steady') rollTrinkProc(slot,attack);
       }
    }
    if (trink2_has_aura) {
       slot = 'trink2';
       // if effect is proc and cd is up verify proc type condition is met
       if ((auras[slot].effect?.is_proc && auras[slot].cd === 0 )){
          if (auras[slot].effect.proc_type === 'Steady') rollTrinkProc(slot,attack);
       }
    }
 
       // imp steady shot
   if (!!auras.imp_steady_shot){
      let roll = rng10k(); 
      auras.imp_steady_shot.timer = (roll <= talents.imp_steady_shot * 10000) ? auras.imp_steady_shot.effect.duration : auras.imp_steady_shot.timer;
         if((auras.imp_steady_shot.timer === auras.imp_steady_shot.effect.duration) && combatlogRun) { 
          
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.imp_steady_shot.effect_name;
            combatlogindex++;
         }
   }
   // t8 4pc bonus
   if (!!auras.t8_4p_precision_shots){
      let roll = rng10k(); 
      auras.t8_4p_precision_shots.timer = (roll <= auras.t8_4p_precision_shots.effect.proc_chance * 100) ? auras.t8_4p_precision_shots.effect.duration : auras.t8_4p_precision_shots.timer;

      if((auras.t8_4p_precision_shots.timer === auras.t8_4p_precision_shots.effect.duration) && combatlogRun) { 
         combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.t8_4p_precision_shots.effect_name;
         combatlogindex++;
      }
   }
}
 
function rollTrinkProc(slot,attack) {
    let meleehit = (attack === "melee") ? true:false;
    let rangehit = (attack === "ranged") ? true:false;
    let meleePPM = BaseMeleeSpeed / 60 * 100;
    let rangePPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100;
    
    let roll = rng10k();
    if (!!auras[slot].effect.ppm) {
       if(rangehit) procchance = auras[slot].effect.ppm * rangePPM;
       if(meleehit) procchance = auras[slot].effect.ppm * meleePPM;
    } // force proc chance to be 100% if no proc chance found
    else procchance = (!!auras[slot].effect.proc_chance) ? auras[slot].effect.proc_chance : 100;
    
    if (roll <= procchance * 100) {
       
       auras[slot].timer = auras[slot].effect.duration;
       auras[slot].cd = (!!auras[slot].effect.base_cd) ? auras[slot].effect.base_cd : 0;

       if(procchance == 100 && !!auras[slot].effect.stacks) {
         // increment stacks with auras that always apply stacks per hit
         auras[slot].stacks = Math.min(auras[slot].stacks + 1, auras[slot].effect.stacks);
       }
       if(auras[slot].timer === auras[slot].effect.duration && combatlogRun) {
          let stack_string = (!!auras[slot].stacks) ? " stacks: " + auras[slot].stacks : '';
          combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras[slot].effect_name + stack_string;
          combatlogindex++;
       }
    }
 }
 
 // handling for procs by normal hits - melee or ranegd
 function procattack(attack,result) {
    let roll = 0;
    let procchance = 0;
    let meleehit = (attack === "melee") ? true:false;
    let rangehit = (attack === "ranged") ? true:false;
    let meleePPM = BaseMeleeSpeed / 60 * 100;
    let rangePPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100;
    let success = (result === RESULT.HIT) || (result === RESULT.CRIT) || (result === RESULT.GLANCE);
 
    let trink1_has_aura = (Object.values(auras.trink1).length !== 0);
    let trink2_has_aura = (Object.values(auras.trink2).length !== 0);
    let naarutrink = '';
    let swarmguard = '';
    let slot = '';
 
    
    if (trink1_has_aura) {
       slot = 'trink1';
       // condition swarmguard and naaru for stack tracking
       if ((auras[slot].timer > 0) && auras[slot].effect_name === TRINKET_CDS.swarmguard.effect_name) {
          swarmguard = slot;
       } else if ((auras[slot].timer > 0) && (auras[slot].effect_name === TRINK_PROCS.naarusliver.effect_name)) {
          naarutrink = slot;
       }
       // if effect is proc and cd is up verify proc type condition is met
       if ((auras[slot].effect?.is_proc && auras[slot].cd === 0 )){
          if ((auras[slot].effect.proc_type === 'Melee or Range') || 
                (success && (auras[slot].effect.proc_type === 'Melee or Range Hit'))) {
                
             rollTrinkProc(slot,attack);
          } 
       }
    }
 
    if (trink2_has_aura) {
       slot = 'trink2';
       // condition swarmguard and naaru for stack tracking
       if ((auras[slot].timer > 0) && auras[slot].effect_name === TRINKET_CDS.swarmguard.effect_name) {
          swarmguard = slot;
       } else if ((auras[slot].timer > 0) && (auras[slot].effect_name === TRINK_PROCS.naarusliver.effect_name)) {
          naarutrink = slot;
       }
       // if effect is proc and cd is up verify proc type condition is met
       if ((auras[slot].effect?.is_proc && auras[slot].cd === 0 )){
          if ((auras[slot].effect.proc_type === 'Melee or Range') || 
                (success && (auras[slot].effect.proc_type === 'Melee or Range Hit'))) {
                
             rollTrinkProc(slot,attack);
          } 
       }
    }
 
    // executioner enchant
    if (!!auras.executioner && meleehit){
       roll = rng10k();
       procchance = auras.executioner.ppm * meleePPM;
       auras.executioner.timer = (roll <= procchance * 100) ? auras.executioner.effect.duration : auras.executioner.timer;
       if(auras.executioner.timer === auras.executioner.effect.duration && combatlogRun) { 
          combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Executioner";
          combatlogindex++;
       }
    } 
    // mongoose enchant
    if (!!auras.mongoose && meleehit){
       roll = rng10k(); 
       procchance = auras.mongoose.ppm * meleePPM;
       auras.mongoose.timer = (roll <= procchance * 100) ? auras.mongoose.effect.duration : auras.mongoose.timer;
       if(auras.mongoose.timer === auras.mongoose.effect.duration && combatlogRun) { 
          combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Mongoose";
          combatlogindex++;
       }
    }
    // add stacks
    if (naarutrink !== '') {
       auras[naarutrink].stacks = Math.min(auras[naarutrink].stacks + 1, auras[naarutrink].effect.stacks);
       //console.log("naaru stacks: " + auras[naarutrink].stacks);
    }
    
    // swarmguard stack handling
    if (swarmguard !== '') {
       roll = rng10k();
       if(rangehit) procchance = auras[swarmguard].effect.ppm * rangePPM;
       if(meleehit) procchance = auras[swarmguard].effect.ppm * meleePPM;
       let curr_stacks = auras[swarmguard].stacks;
       auras[swarmguard].stacks = (roll <= procchance * 100) ? Math.min(auras[swarmguard].stacks + 1,auras[swarmguard].effect.stacks) : auras[swarmguard].stacks;
       if(curr_stacks < auras[swarmguard].stacks && combatlogRun) { 
          combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras[swarmguard].effect_name + " stacks: " + auras[swarmguard].stacks;
          combatlogindex++;
       }//console.log("swarmguard stacks: " + auras[swarmguard].stacks);
    }
 
    // don santos hunting rifle (only ranged attacks)
    if (!!auras.donsantos && rangehit){
       roll = rng10k(); 
       procchance = auras.donsantos.effect.ppm * rangePPM;
       auras.donsantos.timer = (roll <= procchance * 100) ? auras.donsantos.effect.duration : auras.donsantos.timer;
       if(auras.donsantos.timer === auras.donsantos.effect.duration && combatlogRun) { 
          combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Santos' Blessing (DSFHR Proc)";
          combatlogindex++;
       }
    }  
    // master tactician (only successful ranged attacks)
    if (!!auras.master_tact && rangehit && success){
       roll = rng10k(); 
       auras.master_tact.timer = (roll <= auras.master_tact.effect.proc_chance * 100) ? auras.master_tact.effect.duration : auras.master_tact.timer;
       if(auras.master_tact.timer === auras.master_tact.effect.duration && combatlogRun) { 
          combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.master_tact.effect_name;
          combatlogindex++;
       }
    }
    // band of eternal champion
    if (!!auras.eternalchamp && auras.eternalchamp.cd === 0){
       roll = rng10k(); 
       if(rangehit) PPM = procchance = auras.eternalchamp.effect.ppm * rangePPM;
       if(meleehit) PPM = procchance = auras.eternalchamp.effect.ppm * meleePPM;
       auras.eternalchamp.timer = (roll <= procchance * 100) ? auras.eternalchamp.effect.duration : 0;
       if(auras.eternalchamp.timer > 0) { 
          auras.eternalchamp.cd = 60; 
          if(combatlogRun) {
             combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Band of the Eternal Champion";
             combatlogindex++;
          }
       }
    }  
    
    // righteous weapon coating
    if (!!auras.righteousness && auras.righteousness.cd === 0){
       roll = rng10k(); 
       auras.righteousness.timer = (roll <= auras.righteousness.effect.proc_chance * 100) ? auras.righteousness.effect.duration : 0;
       if(auras.righteousness.timer > 0) { 
          auras.righteousness.cd = auras.righteousness.effect.base_cd; 
          if(combatlogRun) {
             combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains Righteousness";
             combatlogindex++;
          }
       }
    } 
 
    // swordguard embroidery
    if (!!auras.swordguard && auras.swordguard.cd === 0){
       roll = rng10k(); 
       auras.swordguard.timer = (roll <= auras.swordguard.effect.proc_chance * 100) ? auras.swordguard.effect.duration : 0;
       if(auras.swordguard.timer > 0) { 
          auras.swordguard.cd = auras.swordguard.effect.base_cd; 
          if(combatlogRun) {
             combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.swordguard.effect_name;
             combatlogindex++;
          }
       }
    } 
    return;
 }
 
 // handling for magic dmg procs from items (think rumulo's)
 function magicproc(attack) {
 
    let dmg = 0;
    let result = 0;
    let procchance = 0;
    let roll = 0;
    PPM = 0;
    let meleehit = (attack === "melee") ? true:false;
    let rangehit = (attack === "ranged") ? true:false;
    // romulo's proc
    if ((gear.trinket1.id === 28579) || (gear.trinket2.id === 28579)){
       roll = rng10k(); 
       if(rangehit) {PPM = 1/60 * RANGED_WEAPONS[gear.range.id].speed * 100; }
       if(meleehit) {PPM = BaseMeleeSpeed / 60 * 100; }
       procchance = 1 * PPM;
       if (roll <= procchance * 100) {
          
          result = rollMagicSpell();
          if (result === RESULT.HIT) {
             dmg = rng(222,322); 
          }
          else if (result === RESULT.CRIT) {
             dmg = rng(222,322);
             dmg *= 1.5; // spell crits are 150%
          }
          else if (result === RESULT.PARTIAL) {
             dmg = rng(222,322);
             dmg *= PartialResistDmg; // average reduction of 35% on partial resists
          }
          let done = dealdamage(dmg,result,'magic');
          totaldmgdone += done;
          if(combatlogRun) {
             combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player Romulo's Poison " + RESULTARRAY[result] + " for " + done;
             combatlogindex++;
          }
       }
    }
 }
 
 // using runes
 function runeHandling() {
    let runemana = 0;
    let prev_mana = 0;
    let gain = 0;
    let over = 0;
    if (Mana - currentMana >= auras.rune.effect.maxMana) {
       
       runemana = rng(auras.rune.effect.minMana,auras.rune.effect.maxMana);
       prev_mana = currentMana;
       currentMana = Math.min(currentMana + runemana, Mana);
       gain = currentMana - prev_mana;
       over = runemana - gain;
       auras.rune.cd = auras.rune.effect.base_cd;
       if(combatlogRun) {
          combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player used rune for " + gain + " Mana (O: " + over + ")";
          combatlogindex++;
       }
 
    } else {
       return false;
    }
    return true;
 }
 
 // using potions
 function potionHandling() {
 
    let primary = auras.potion.primary;
    let secondary = auras.potion.secondary;
    // use secondary if no primary or if mana below 4k
    if ((secondary && (Mana - currentMana >= 3000))) {
          
          if (secondaryPotion === 'Super') {
             let supermana = rng(1800, 3000); // super mana amount
             let prev_mana = currentMana;
             currentMana = Math.min(currentMana + supermana, Mana);
             let gain = currentMana - prev_mana;
             let over = supermana - gain;
             if(combatlogRun) {
                combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player used Runic Mana Potion for " + gain + " Mana (O: " + over + ")";
                combatlogindex++;
             }
          }
          auras.potion.used = 'Secondary';
    }
    else if (primary) {
       auras.potion.timer = 15;
       auras.potion.used = 'Haste';
    } 
    else {
       return false;
    }
    auras.potion.cd = 60;
    return true;
 }
 
 /** rng function for randomizing an integer from 2 values such as the damage range on weapons.
  * @param min min value to be used
  * @param max max value to be used
 */
 function rng(min, max) {
    return ~~(Math.random() * (max - min + 1) + min); // "~~" operator floors to nearest integer
 }
 /** rng function for randomizing between 1-9999, avoiding decimals and rounded to nearest integer. */
 function rng10k() {
    return ~~(Math.random() * 10000);
 }
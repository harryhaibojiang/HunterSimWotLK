const DmgAPRatio = 14;
const avgConst = 0.5;

var Used_Spells = {};

function initializeSpells(){
    // set spell CDs to 0
    SPELLS.autoshot.cd = 0;
    SPELLS.steadyshot.cd = 0;
    SPELLS.multishot.cd = 0.5;
    SPELLS.arcaneshot.cd = 0.5;
    SPELLS.raptorstrike.cd = 4; // set to 4 for initial delay for melee due to running in
    SPELLS.melee.cd = 4; // set to 4 for initial delay for melee due to running in
    //SPELLS.aimedshot.cd = 0;
    // set pet spell CDs to 0
    PET_SPELLS[0].cd = 0;

}

function updateSpellCDs(spell,petspell) {
    SPELLS.autoshot.cd = (spell === 'autoshot') ? (rangespeed - SPELLS.autoshot.cast) : Math.max(SPELLS.autoshot.cd - steptime, 0);
    SPELLS.steadyshot.cd = (spell === 'steadyshot') ? (1.5 - SPELLS.steadyshot.cast) : Math.max(SPELLS.steadyshot.cd - steptime, 0);
    PET_SPELLS[0].cd = ((petspell === 'primary') && (spellindex === 0)) ? 10 : Math.max(PET_SPELLS[0].cd - steptime, 0);
    SPELLS.multishot.cd = (spell === 'multishot') ? 10 : Math.max(SPELLS.multishot.cd - steptime, 0);
    SPELLS.arcaneshot.cd = (spell === 'arcaneshot') ? (6 - talents.imp_arc_shot) : Math.max(SPELLS.arcaneshot.cd - steptime, 0);
    //SPELLS.aimedshot.cd = Math.max(SPELLS.aimedshot.cd - steptime, 0);
    
    if(spell === 'readiness'){ // set spell cd's to 0
        SPELLS.steadyshot.cd = 0;
        SPELLS.multishot.cd = 0;
        SPELLS.arcaneshot.cd = 0;
        SPELLS.raptorstrike.cd = (SPELLS.melee.cd == 0) ? 0 : SPELLS.melee.cd;
        //SPELLS.aimedshot.cd = 0;
    }
	else if(spell === 'raptorstrike'){
		SPELLS.melee.cd = meleespeed;
		SPELLS.raptorstrike.cd = 6;
	}
	else if(spell === 'melee'){
		SPELLS.melee.cd = meleespeed;
		SPELLS.raptorstrike.cd = Math.max(SPELLS.melee.cd, SPELLS.raptorstrike.cd);
	}
	else{
		SPELLS.melee.cd = Math.max(SPELLS.melee.cd - steptime, 0);
		SPELLS.raptorstrike.cd = Math.max(SPELLS.raptorstrike.cd - steptime, 0);
	}

    if (currentgcd > playertimeend && spell != undefined) {
        let remaininggcd = currentgcd - playertimeend;
        //console.log("remaining gcd: " + remaininggcd);
        SPELLS.steadyshot.cd = (remaininggcd > SPELLS.steadyshot.cd) ? (currentgcd - playertimeend) : SPELLS.steadyshot.cd;
        SPELLS.multishot.cd = (remaininggcd > SPELLS.multishot.cd) ? (currentgcd - playertimeend) : SPELLS.multishot.cd;
        SPELLS.arcaneshot.cd = (remaininggcd > SPELLS.arcaneshot.cd) ? (currentgcd - playertimeend) : SPELLS.arcaneshot.cd;
        //console.log("update timers w/ gcd");
    }
    //console.log("speed: " + rangespeed);
    //console.log("auto cd: "+SPELLS.autoshot.cd);
    //console.log("steady cd: "+SPELLS.steadyshot.cd);
    //console.log("multi cd: "+SPELLS.multishot.cd);
    //console.log("arcane cd: "+SPELLS.arcaneshot.cd);
}
// checking dmg formulas/etc.
function getDamageEachAttack() {
    let dmg = []
    dmg[0] = ['Auto Shot',autoShotCalc(range_wep, BaseRAP)]
    dmg[1] = ['Steady Shot',steadyShotCalc(range_wep, BaseRAP)]
    dmg[2] = ['Multi Shot',multiShotCalc(range_wep, BaseRAP)]
    dmg[3] = ['Arcane Shot',arcaneShotCalc(range_wep, BaseRAP)]
    dmg[4] = ['Aimed Shot',aimedShotCalc(range_wep, BaseRAP)]
    dmg[5] = ['Raptor Strike',raptorStrikeCalc(mainhand_wep, BaseMAP)]
    dmg[6] = ['Melee',meleeStrikeCalc(mainhand_wep, BaseMAP)]
    dmg[7] = ['Mongoose Bite',mongooseBiteCalc(BaseMAP)]
    dmg[8] = ['Black Arrow',blackArrowCalc(BaseRAP)]
    dmg[9] = ['Chimera Shot',chimeraShotCalc(range_wep, BaseRAP)]
    dmg[10] = ['Explosive Shot',explosiveShotCalc(BaseRAP)]
    dmg[11] = ['Serpent Sting',serpentStingCalc(BaseRAP)]
    dmg[12] = ['Explosive Trap',explosiveTrapCalc(BaseRAP)]
    dmg[13] = ['Immolation Trap',immolateTrapCalc(BaseRAP)]
    dmg[14] = ['Volley',volleyCalc(BaseRAP)]
    dmg[15] = ['Kill Shot',killShotCalc(range_wep, BaseRAP)]
    dmg[16] = ['Silencing Shot',ScatterSilenceShotCalc(range_wep, BaseRAP)]
    console.log(dmg)
}
/*************************************************************************/
/* All formulas below are tested and confirmed in-game as of patch 2.5.3 */
/*************************************************************************/

function autoShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / DmgAPRatio + dmg + range_wep.flatdmg) * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}

function steadyShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let gronnstalkermod = currentgear.special.gronnstalker_4p_steady_shot_dmg_ratio;
    let shotDmg = (combatRAP * 0.2 + range_wep.ammodps * range_wep.speed + dmg * 2.8 / range_wep.speed + SPELLS.steadyshot.rankdmg) * range_wep.basedmgmod * gronnstalkermod * combatdmgmod * physdmgmod;
    return shotDmg;
}

function multiShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let multimod = (!!currentgear.special.multishot_dmg_inc_ratio) ? currentgear.special.multishot_dmg_inc_ratio * talents.barrage : talents.barrage;
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * 0.2 + dmg + range_wep.flatdmg + SPELLS.multishot.rankdmg) * range_wep.basedmgmod * multimod * combatdmgmod * physdmgmod;
    return shotDmg;
}

function arcaneShotCalc(range_wep, combatRAP) {

    let shotDmg = (combatRAP * 0.15 + SPELLS.arcaneshot.rankdmg) * range_wep.basedmgmod * combatdmgmod * magdmgmod;
    return shotDmg;
}

function aimedShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * 0.2 + dmg + range_wep.flatdmg + SPELLS.aimedshot.rankdmg) * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}

function raptorStrikeCalc(mainhand_wep, combatMAP) {

    let dmg = (useAverages) ? (mainhand_wep.mindmg + mainhand_wep.maxdmg) * avgConst : rng(mainhand_wep.mindmg,mainhand_wep.maxdmg);
    let outDmg = (combatMAP * mainhand_wep.speed / DmgAPRatio + dmg + mainhand_wep.flatdmg + SPELLS.raptorstrike.rankdmg) * mainhand_wep.basedmgmod * combatdmgmod * physdmgmod;
    return outDmg;
}

function meleeStrikeCalc(mainhand_wep, combatMAP) {

    let dmg = (useAverages) ? (mainhand_wep.mindmg + mainhand_wep.maxdmg) * avgConst : rng(mainhand_wep.mindmg,mainhand_wep.maxdmg);
    let outDmg = (combatMAP * mainhand_wep.speed / DmgAPRatio + dmg + mainhand_wep.flatdmg) * mainhand_wep.basedmgmod * combatdmgmod * physdmgmod;
    return outDmg;
}
    // Mongoose Bite
function mongooseBiteCalc(combatMAP) {

    let outDmg = (combatMAP * 0.2 + SPELLS.mongoose.rankdmg) * mainhand_wep.basedmgmod * combatdmgmod * physdmgmod;
    return outDmg;
}
    // Black Arrow
function blackArrowCalc(combatRAP) {

    let shotDmg = (combatRAP * 0.1 + SPELLS.blackarrow.rankdmg) * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}
    // Chimera Shot
function chimeraShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / DmgAPRatio + dmg + range_wep.flatdmg) * 1.25 * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}
    // Explosive Shot
function explosiveShotCalc(combatRAP) {

    let dmg = (useAverages) ? (SPELLS.explosiveshot.mindmg + SPELLS.explosiveshot.maxdmg) * avgConst : rng(SPELLS.explosiveshot.mindmg,SPELLS.explosiveshot.maxdmg);
    let shotDmg = (combatRAP * 0.13 + dmg) * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}
    // Serpent Sting
function serpentStingCalc(combatRAP) {
    let shotDmg = (combatRAP * 0.2 + SPELLS.serpentsting.rankdmg * 5) * range_wep.basedmgmod * combatdmgmod * naturedmgmod * magdmgmod;
    return shotDmg;
}
    // Explosive Trap
function explosiveTrapCalc(combatRAP, dotcheck) {

    let dot = dotcheck;
    let dmg = 0;
    let dotDmg = 0;
    let trapDmg = 0;
    if(!!dot) {
        dotDmg = SPELLS.explosivetrap.tickdmg * 10 + combatRAP;
        return dotDmg;
    } else {
        dmg = (useAverages) ? (SPELLS.explosivetrap.mindmg + SPELLS.explosivetrap.maxdmg) * avgConst : rng(SPELLS.explosivetrap.mindmg,SPELLS.explosivetrap.maxdmg);
        trapDmg = (combatRAP * 0.10 + dmg) * combatdmgmod * firedmgmod * magdmgmod;
        return trapDmg;
    }
}
    // Immolation Trap
function immolateTrapCalc(combatRAP) {
    let dmg = (combatRAP * 0.02 + SPELLS.immolatetrap.rankdmg * 5) * combatdmgmod * firedmgmod * magdmgmod;
    return dmg;
}
    // Volley
function volleyCalc(combatRAP) {

    let shotDmg = (combatRAP * 0.0837 + SPELLS.volley.rankdmg) * combatdmgmod * arcanedmgmod * magdmgmod;
    return shotDmg;
}

    // Killshot
function killShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let bonusDmg = (combatRAP * 0.4 + SPELLS.killshot.rankdmg * 2);
    let wepDmg = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / DmgAPRatio + dmg + range_wep.flatdmg) * 2
    let shotDmg = (bonusDmg + wepDmg) * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}
    // Silencing Shot, Scatter Shot
function ScatterSilenceShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / DmgAPRatio + dmg + range_wep.flatdmg) * avgConst * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}

function petAutoCalc(){
    let dmg = (useAverages) ? (PetMinDmg + PetMaxDmg) * avgConst : rng(PetMinDmg,PetMaxDmg);
    let autoDmg = (dmg + pet.combatap * 2 / DmgAPRatio) * pet.dmgmod * pet.combatdmgmod * CobraReflexesPenalty;
    return autoDmg;
}

function spellPetCalc(spellindex){
    let mindmg = 0;
    let maxdmg = 0;
    let dmg = 0;
    let spelldmg = 0;
    let spellpwr = (pet.combatap - pet.ap) * 0.581818 + BaseRAP * 0.128; // spell power from hunter 12.8% - 58% of AP gained from combat
    let basedmgmod = pet.dmgmod * pet.combatdmgmod / PET_FAMILY[selectedPet].dmgmod;
    if(spellindex <= 3){ // phys spells
        mindmg = PET_SPELLS[spellindex].mindmg; // min dmg of phys spell selected
        maxdmg = PET_SPELLS[spellindex].maxdmg; 
        dmg = (useAverages) ? (mindmg + maxdmg) * avgConst : rng(mindmg,maxdmg);
        spelldmg = dmg * basedmgmod;
    } 
    else if (spellindex <= 5 && spellindex > 3){ // lightning breath/stomp
        mindmg = PET_SPELLS[spellindex].mindmg; // min dmg of phys spell selected
        maxdmg = PET_SPELLS[spellindex].maxdmg; 
        dmg = (useAverages) ? (mindmg + maxdmg) * avgConst : rng(mindmg,maxdmg);
        spelldmg = (dmg + spellpwr * PET_SPELLS[spellindex].sp_coeff) * basedmgmod * naturedmgmod;
    } 
    else if (spellindex === 6) { // fire breath
        dmg = PET_SPELLS[spellindex].tick;
        spelldmg = (dmg + spellpwr * PET_SPELLS[spellindex].sp_coeff) * basedmgmod * 3 * magdmgmod; // 3 ticks over 3 sec, just doing x3
    } 
    else if (spellindex === 7) { // poison spit
        dmg = PET_SPELLS[spellindex].tick;
        spelldmg = dmg * basedmgmod * 4 * naturedmgmod; // 4 ticks over 8 sec, just doing x4
    }
    else if (spellindex === 8) { // scorpid poison
        dmg = PET_SPELLS[spellindex].tick;
        // add stacking logic up to 5
        //spelldmg = (dmg + spellpwr * PET_SPELLS[spellindex].sp_coeff) * basedmgmod * basecombatdmgmod * 3; // 3 ticks over 3 sec, just doing x3
    } 

    // gore bonus dmg
    if(spellindex === 3) {
        let roll = 0;
        if (!useAverages) { 
            roll = rng10k();
            if(roll < 5000) {
                spelldmg *= 2;
            }
        }
        else { spelldmg *= 1.5; } // use 150% damage instead of rolling 50% double dmg
    }
    return spelldmg;
}
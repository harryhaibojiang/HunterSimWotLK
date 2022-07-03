const DmgAPRatio = 14;
const avgConst = 0.5;

var USED_SPELLS = {};

function initializeSpells(){
    // set spell CDs to 0
    if(!!USED_SPELLS.autoshot) USED_SPELLS.autoshot.cd = 0;
    if(!!USED_SPELLS.steadyshot) USED_SPELLS.steadyshot.cd = 0;
    if(!!USED_SPELLS.multishot) USED_SPELLS.multishot.cd = 0;
    if(!!USED_SPELLS.arcaneshot) USED_SPELLS.arcaneshot.cd = 0;
    if(!!USED_SPELLS.aimedshot) USED_SPELLS.aimedshot.cd = 0;
    if(!!USED_SPELLS.raptorstrike) USED_SPELLS.raptorstrike.cd = 4; // set to 4 for initial delay for melee due to running in
    if(!!USED_SPELLS.melee) USED_SPELLS.melee.cd = 4; // set to 4 for initial delay for melee due to running in
    if(!!USED_SPELLS.mongoose) USED_SPELLS.mongoose.cd = 4;
    if(!!USED_SPELLS.blackarrow) USED_SPELLS.blackarrow.cd = 0;
    if(!!USED_SPELLS.chimerashot) USED_SPELLS.chimerashot.cd = 0;
    if(!!USED_SPELLS.explosiveshot) USED_SPELLS.explosiveshot.cd = 0;
    if(!!USED_SPELLS.serpentsting) USED_SPELLS.serpentsting.cd = 0;
    if(!!USED_SPELLS.explosivetrap) USED_SPELLS.explosivetrap.cd = 0;
    if(!!USED_SPELLS.immolatetrap) USED_SPELLS.immolatetrap.cd = 0;
    if(!!USED_SPELLS.frosttrap) USED_SPELLS.frosttrap.cd = 0;
    if(!!USED_SPELLS.snaketrap) USED_SPELLS.snaketrap.cd = 0;
    if(!!USED_SPELLS.volley) USED_SPELLS.volley.cd = 0;
    if(!!USED_SPELLS.killshot) USED_SPELLS.killshot.cd = 0;
    if(!!USED_SPELLS.silencingshot) USED_SPELLS.silencingshot.cd = 0;
    if(!!USED_SPELLS.scattershot) USED_SPELLS.scattershot.cd = 0;
    // set pet spell CDs to 0
    //PET_SPELLS[0].cd = 0;

}

// readiness updates all hunter main gcd spells to 0 excluding bestial wrath
function readinessCDUpdate() {

    if(USED_SPELLS.steadyshot?.cd > 0) USED_SPELLS.steadyshot.cd = 0;
    if(USED_SPELLS.multishot?.cd > 0) USED_SPELLS.multishot.cd = 0;
    if(USED_SPELLS.arcaneshot?.cd > 0) USED_SPELLS.arcaneshot.cd = 0;
    if(USED_SPELLS.aimedshot?.cd > 0) USED_SPELLS.aimedshot.cd = 0;
    if(USED_SPELLS.raptorstrike?.cd > 0) USED_SPELLS.raptorstrike.cd = (USED_SPELLS.melee.cd == 0) ? 0 : USED_SPELLS.melee.cd;
    if(USED_SPELLS.mongoose?.cd > 0) USED_SPELLS.mongoose.cd = 4;
    if(USED_SPELLS.blackarrow?.cd > 0) USED_SPELLS.blackarrow.cd = 0;
    if(USED_SPELLS.chimerashot?.cd > 0) USED_SPELLS.chimerashot.cd = 0;
    if(USED_SPELLS.explosiveshot?.cd > 0) USED_SPELLS.explosiveshot.cd = 0;
    if(USED_SPELLS.serpentsting?.cd > 0) USED_SPELLS.serpentsting.cd = 0;
    if(USED_SPELLS.explosivetrap?.cd > 0) USED_SPELLS.explosivetrap.cd = 0;
    if(USED_SPELLS.immolatetrap?.cd > 0) USED_SPELLS.immolatetrap.cd = 0;
    if(USED_SPELLS.frosttrap?.cd > 0) USED_SPELLS.frosttrap.cd = 0;
    if(USED_SPELLS.snaketrap?.cd > 0) USED_SPELLS.snaketrap.cd = 0;
    if(USED_SPELLS.volley?.cd > 0) USED_SPELLS.volley.cd = 0;
    if(USED_SPELLS.killshot?.cd > 0) USED_SPELLS.killshot.cd = 0;
    if(USED_SPELLS.silencingshot?.cd > 0) USED_SPELLS.silencingshot.cd = 0;
    if(USED_SPELLS.scattershot?.cd > 0) USED_SPELLS.scattershot.cd = 0;
}

function updateSpellCDs(spell,petspell) {

    USED_SPELLS.autoshot.cd = roundFloat(Math.max(USED_SPELLS.autoshot.cd - steptime, 0));
    if (!!USED_SPELLS.steadyshot)   {
        let spell_cd = 1.5 - USED_SPELLS.steadyshot.cast; // gcd minus cast time
        USED_SPELLS.steadyshot.cd = (spell === 'steadyshot') ? (spell_cd) : Math.max(USED_SPELLS.steadyshot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.multishot)   {
        let glyph_cd = 0;
        if (!!glyphs.multi_shot) glyph_cd = glyphs.multi_shot.bonus
        let spell_cd = USED_SPELLS.multishot.base_cd; // add glyph
        USED_SPELLS.multishot.cd = (spell === 'multishot' || spell === 'aimedshot') ? spell_cd : Math.max(USED_SPELLS.multishot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.arcaneshot)   {
        let spell_cd = USED_SPELLS.arcaneshot.base_cd;
        USED_SPELLS.arcaneshot.cd = (spell === 'arcaneshot' || spell === 'explosiveshot') ? spell_cd : Math.max(USED_SPELLS.arcaneshot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.explosiveshot)   {
        let spell_cd = USED_SPELLS.explosiveshot.base_cd;
        USED_SPELLS.explosiveshot.cd = (spell === 'arcaneshot' || spell === 'explosiveshot') ? spell_cd : Math.max(USED_SPELLS.explosiveshot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.aimedshot)   {
        let glyph_cd = 0;
        if (!!glyphs.aimed_shot) glyph_cd = glyphs.aimed_shot.bonus
        let spell_cd = USED_SPELLS.aimedshot.base_cd
        USED_SPELLS.aimedshot.cd = (spell === 'multishot' || spell === 'aimedshot') ? spell_cd : Math.max(USED_SPELLS.aimedshot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.chimerashot)   {
        let glyph_cd = 0;
        if (!!glyphs.chimera_shot) glyph_cd = glyphs.chimera_shot.bonus
        let spell_cd = USED_SPELLS.chimerashot.base_cd - glyph_cd; // add glyph
        USED_SPELLS.chimerashot.cd = (spell === 'chimerashot') ? spell_cd : Math.max(USED_SPELLS.chimerashot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.blackarrow)   {
        let spell_cd = USED_SPELLS.blackarrow.base_cd // add resourcefulness
        USED_SPELLS.blackarrow.cd = (spell === 'blackarrow' || spell === 'explosivetrap' || spell === 'immolatetrap') ? spell_cd : Math.max(USED_SPELLS.blackarrow.cd - steptime, 0);
    }
    if (!!USED_SPELLS.serpentsting)   {
        let spell_cd = 1.5 // gcd
        USED_SPELLS.serpentsting.cd = (spell === 'serpentsting') ? spell_cd : Math.max(USED_SPELLS.serpentsting.cd - steptime, 0);
    }
    if (!!USED_SPELLS.explosivetrap)   {
        let spell_cd = USED_SPELLS.explosivetrap.base_cd // add resourcefulness
        USED_SPELLS.explosivetrap.cd = (spell === 'blackarrow' || spell === 'explosivetrap' || spell === 'immolatetrap') ? spell_cd : Math.max(USED_SPELLS.explosivetrap.cd - steptime, 0);
    }
    if (!!USED_SPELLS.immolatetrap)   {
        let spell_cd = USED_SPELLS.immolatetrap.base_cd // add resourcefulness
        USED_SPELLS.immolatetrap.cd = (spell === 'blackarrow' || spell === 'explosivetrap' || spell === 'immolatetrap') ? spell_cd : Math.max(USED_SPELLS.immolatetrap.cd - steptime, 0);
    }
    if (!!USED_SPELLS.frosttrap)   {
        let spell_cd = USED_SPELLS.frosttrap.base_cd // add resourcefulness
        USED_SPELLS.frosttrap.cd = (spell === 'frosttrap') ? spell_cd : Math.max(USED_SPELLS.frosttrap.cd - steptime, 0);
    }
    if (!!USED_SPELLS.snaketrap)   {
        let spell_cd = USED_SPELLS.snaketrap.base_cd // add resourcefulness
        USED_SPELLS.snaketrap.cd = (spell === 'snaketrap') ? spell_cd : Math.max(USED_SPELLS.snaketrap.cd - steptime, 0);
    }
    if (!!USED_SPELLS.volley)   {
        let spell_cd = 8 // channeled duration
        USED_SPELLS.volley.cd = (spell === 'volley') ? spell_cd : Math.max(USED_SPELLS.volley.cd - steptime, 0);
    }
    if (!!USED_SPELLS.killshot)   {
        let glyph_cd = 0;
        if (!!glyphs.kill_shot) glyph_cd = glyphs.kill_shot.bonus
        let spell_cd = USED_SPELLS.killshot.base_cd - glyph_cd;
        USED_SPELLS.killshot.cd = (spell === 'killshot') ? spell_cd : Math.max(USED_SPELLS.killshot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.silencingshot)   {
        let spell_cd = USED_SPELLS.silencingshot.base_cd
        USED_SPELLS.silencingshot.cd = (spell === 'silencingshot') ? spell_cd : Math.max(USED_SPELLS.silencingshot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.scattershot)   {
        let spell_cd = USED_SPELLS.scattershot.base_cd
        USED_SPELLS.scattershot.cd = (spell === 'scattershot') ? spell_cd : Math.max(USED_SPELLS.scattershot.cd - steptime, 0);
    }


    if (spell === 'readiness') readinessCDUpdate();
    else if(spell === 'raptorstrike'){
		USED_SPELLS.melee.cd = meleespeed;
		USED_SPELLS.raptorstrike.cd = 6;
	}
	else if(spell === 'melee'){
		USED_SPELLS.melee.cd = meleespeed;
		USED_SPELLS.raptorstrike.cd = Math.max(USED_SPELLS.melee.cd, USED_SPELLS.raptorstrike.cd);
	}
	else {
		if (!!USED_SPELLS.melee) USED_SPELLS.melee.cd = Math.max(USED_SPELLS.melee.cd - steptime, 0);
		if (!!USED_SPELLS.raptorstrike) USED_SPELLS.raptorstrike.cd = Math.max(USED_SPELLS.raptorstrike.cd - steptime, 0);
	}

    // if gcd greater than the last time end, set all spells listed to next gcd time
    if (currentgcd > playertimeend && spell != undefined) {
        let remaininggcd = currentgcd - playertimeend;
        //console.log("remaining gcd: " + remaininggcd);
        if (!!USED_SPELLS.steadyshot) USED_SPELLS.steadyshot.cd = (remaininggcd > USED_SPELLS.steadyshot.cd) ? (remaininggcd) : USED_SPELLS.steadyshot.cd;
        if (!!USED_SPELLS.multishot) USED_SPELLS.multishot.cd = (remaininggcd > USED_SPELLS.multishot.cd) ? (remaininggcd) : USED_SPELLS.multishot.cd;
        if (!!USED_SPELLS.chimerashot) USED_SPELLS.chimerashot.cd = (remaininggcd > USED_SPELLS.chimerashot.cd) ? (remaininggcd) : USED_SPELLS.chimerashot.cd;
        if (!!USED_SPELLS.arcaneshot) USED_SPELLS.arcaneshot.cd = (remaininggcd > USED_SPELLS.arcaneshot.cd) ? (remaininggcd) : USED_SPELLS.arcaneshot.cd;
        if (!!USED_SPELLS.aimedshot) USED_SPELLS.aimedshot.cd = (remaininggcd > USED_SPELLS.aimedshot.cd) ? (remaininggcd) : USED_SPELLS.aimedshot.cd;
        if (!!USED_SPELLS.explosiveshot) USED_SPELLS.explosiveshot.cd = (remaininggcd > USED_SPELLS.explosiveshot.cd) ? (remaininggcd) : USED_SPELLS.explosiveshot.cd;
        if (!!USED_SPELLS.explosivetrap) USED_SPELLS.explosivetrap.cd = (remaininggcd > USED_SPELLS.explosivetrap.cd) ? (remaininggcd) : USED_SPELLS.explosivetrap.cd;
        if (!!USED_SPELLS.serpentsting) USED_SPELLS.serpentsting.cd = (remaininggcd > USED_SPELLS.serpentsting.cd) ? (remaininggcd) : USED_SPELLS.serpentsting.cd;
        if (!!USED_SPELLS.frosttrap) USED_SPELLS.frosttrap.cd = (remaininggcd > USED_SPELLS.frosttrap.cd) ? (remaininggcd) : USED_SPELLS.frosttrap.cd;
        if (!!USED_SPELLS.snaketrap) USED_SPELLS.snaketrap.cd = (remaininggcd > USED_SPELLS.snaketrap.cd) ? (remaininggcd) : USED_SPELLS.snaketrap.cd;
        if (!!USED_SPELLS.immolatetrap) USED_SPELLS.immolatetrap.cd = (remaininggcd > USED_SPELLS.immolatetrap.cd) ? (remaininggcd) : USED_SPELLS.immolatetrap.cd;
        if (!!USED_SPELLS.killshot) USED_SPELLS.killshot.cd = (remaininggcd > USED_SPELLS.killshot.cd) ? (remaininggcd) : USED_SPELLS.killshot.cd;
        if (!!USED_SPELLS.volley) USED_SPELLS.volley.cd = (remaininggcd > USED_SPELLS.volley.cd) ? (remaininggcd) : USED_SPELLS.volley.cd;
        if (!!USED_SPELLS.scattershot) USED_SPELLS.scattershot.cd = (remaininggcd > USED_SPELLS.scattershot.cd) ? (remaininggcd) : USED_SPELLS.scattershot.cd;
        if (!!USED_SPELLS.blackarrow) USED_SPELLS.blackarrow.cd = (remaininggcd > USED_SPELLS.blackarrow.cd) ? (remaininggcd) : USED_SPELLS.blackarrow.cd;
        //console.log("update timers w/ gcd");
    }
    //console.log("speed: " + rangespeed);
    //console.log("auto cd: "+USED_SPELLS.autoshot.cd);
    //console.log("steady cd: "+USED_SPELLS.steadyshot.cd);
    //console.log("multi cd: "+USED_SPELLS.multishot.cd);
    //console.log("arcane cd: "+USED_SPELLS.arcaneshot.cd);
}
// checking dmg formulas/etc.
function getDamageEachAttack() {
    let dmg = []
    generateSpellData()
    updateArmorReduction()
    dmg[0] = ['Auto Shot',autoShotCalc(range_wep, BaseRAP), dealdamage(autoShotCalc(range_wep, BaseRAP),0,'physical')]
    dmg[1] = ['Steady Shot',steadyShotCalc(range_wep, BaseRAP),dealdamage(steadyShotCalc(range_wep, BaseRAP),0,'physical')]
    dmg[2] = ['Multi Shot',multiShotCalc(range_wep, BaseRAP),dealdamage(multiShotCalc(range_wep, BaseRAP),0,'physical')]
    dmg[3] = ['Arcane Shot',arcaneShotCalc(range_wep, BaseRAP),dealdamage(arcaneShotCalc(range_wep, BaseRAP),0,'arcane')]
    dmg[4] = ['Aimed Shot',aimedShotCalc(range_wep, BaseRAP),dealdamage(aimedShotCalc(range_wep, BaseRAP),0,'physical')]
    //dmg[5] = ['Raptor Strike',raptorStrikeCalc(mainhand_wep, BaseMAP)]
    //dmg[6] = ['Melee',meleeStrikeCalc(mainhand_wep, BaseMAP)]
    //dmg[7] = ['Mongoose Bite',mongooseBiteCalc(BaseMAP)]
    //dmg[8] = ['Black Arrow',blackArrowCalc(BaseRAP)]
    dmg[9] = ['Chimera Shot',chimeraShotCalc(range_wep, BaseRAP),dealdamage(chimeraShotCalc(range_wep, BaseRAP),0,'nature')]
    //dmg[10] = ['Explosive Shot',explosiveShotCalc(BaseRAP)]
    dmg[11] = ['Serpent Sting',serpentStingCalc(BaseRAP) / 5]
    //dmg[12] = ['Explosive Trap',explosiveTrapCalc(BaseRAP)]
    //dmg[13] = ['Immolation Trap',immolateTrapCalc(BaseRAP)]
    //dmg[14] = ['Volley',volleyCalc(BaseRAP)]
    //dmg[15] = ['Kill Shot',killShotCalc(range_wep, BaseRAP)]
    //dmg[16] = ['Silencing Shot',ScatterSilenceShotCalc(range_wep, BaseRAP)]
    console.log(dmg)
}
/*************************************************************************/
/* All formulas below are tested and confirmed in-game as of patch 2.5.3 */
/*************************************************************************/

function autoShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / DmgAPRatio + dmg + range_wep.flatdmg) * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    //console.log(shotDmg)
    return shotDmg;
}

function steadyShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let steadymod_1 = (!!currentgear.special.gronnstalker_4p_steady_shot_dmg_bonus) ? currentgear.special.gronnstalker_4p_steady_shot_dmg_bonus : 0;
    let steadymod_2 = (!!glyphs.steadyshot) ? glyphs.steadyshot.bonus : 0;
    let sniper_training = (auras.sniper_training?.timer > 0) ? talents.sniper_training * 2 : 0;
    let specials_mod = (steadymod_1 > 0) ? (1 + steadymod_1 + sniper_training) * (1 + steadymod_2) : (1 + steadymod_2 + sniper_training);
    let shotDmg = (combatRAP * 0.1 + range_wep.ammodps * 2.8 + dmg + SPELLS.steadyshot.ranks.rankdmg) * range_wep.basedmgmod * specials_mod * combatdmgmod * physdmgmod;
    //console.log(shotDmg)
    return shotDmg;
}

function multiShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let specials_mod = (!!currentgear.special.multishot_dmg_inc_bonus) ? (1 + currentgear.special.multishot_dmg_inc_bonus + talents.barrage) : (1 + talents.barrage);
    let shotDmg = (combatRAP * 0.2 + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg + SPELLS.multishot.ranks.rankdmg) * range_wep.basedmgmod * specials_mod * combatdmgmod * physdmgmod;
    //console.log(shotDmg)
    return shotDmg;
}

function arcaneShotCalc(range_wep, combatRAP) {
    let arc_mod = talents.imp_arc_shot;
    let imp_steady_shot = (auras.imp_steady_shot?.timer > 0) ? talents.imp_steady_shot : 0;
    let specials_mod = (1 + arc_mod + imp_steady_shot);
    let shotDmg = (combatRAP * 0.15 + SPELLS.arcaneshot.ranks.rankdmg) * range_wep.basedmgmod * specials_mod * combatdmgmod * magdmgmod;
    //console.log(shotDmg)
    return shotDmg;
}

function aimedShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let imp_steady_shot = (auras.imp_steady_shot?.timer > 0) ? talents.imp_steady_shot : 0;
    let sniper_training = (auras.sniper_training?.timer > 0) ? talents.sniper_training * 2 : 0;
    let specials_mod = (1 + imp_steady_shot + sniper_training + talents.barrage);
    let shotDmg = (combatRAP * 0.2 + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg + SPELLS.aimedshot.ranks.rankdmg) * range_wep.basedmgmod * specials_mod * combatdmgmod * physdmgmod;
    return shotDmg;
}

function raptorStrikeCalc(mainhand_wep, combatMAP) {

    let dmg = (useAverages) ? (mainhand_wep.mindmg + mainhand_wep.maxdmg) * avgConst : rng(mainhand_wep.mindmg,mainhand_wep.maxdmg);
    let outDmg = (combatMAP * mainhand_wep.speed / DmgAPRatio + dmg + mainhand_wep.flatdmg + SPELLS.raptorstrike.ranks.rankdmg) * mainhand_wep.basedmgmod * combatdmgmod * physdmgmod;
    return outDmg;
}

function meleeStrikeCalc(mainhand_wep, combatMAP) {

    let dmg = (useAverages) ? (mainhand_wep.mindmg + mainhand_wep.maxdmg) * avgConst : rng(mainhand_wep.mindmg,mainhand_wep.maxdmg);
    let outDmg = (combatMAP * mainhand_wep.speed / DmgAPRatio + dmg + mainhand_wep.flatdmg) * mainhand_wep.basedmgmod * combatdmgmod * physdmgmod;
    return outDmg;
}
    // Mongoose Bite
function mongooseBiteCalc(combatMAP) {

    let outDmg = (combatMAP * 0.2 + SPELLS.mongoose.ranks.rankdmg) * mainhand_wep.basedmgmod * combatdmgmod * physdmgmod;
    return outDmg;
}
    // Black Arrow
function blackArrowCalc(combatRAP) {

    let sniper_training = (auras.sniper_training?.timer > 0) ? talents.sniper_training * 2 : 0;
    let specials_mod = 1 + talents.t_n_t + sniper_training;
    let shotDmg = (combatRAP * 0.1 + SPELLS.blackarrow.ranks.rankdmg) * range_wep.basedmgmod * specials_mod * combatdmgmod * physdmgmod;
    return shotDmg;
}
    // Chimera Shot
function chimeraShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let imp_steady_shot = (auras.imp_steady_shot?.timer > 0) ? talents.imp_steady_shot : 0;
    let specials_mod = (1 + imp_steady_shot);
    let shotDmg = (combatRAP * 0.2 + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg) * 1.25 * specials_mod * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}
    // Explosive Shot
function explosiveShotCalc(combatRAP) {

    let sniper_training = (auras.sniper_training?.timer > 0) ? talents.sniper_training * 2 : 0;
    let dmg = (useAverages) ? (SPELLS.explosiveshot.mindmg + SPELLS.explosiveshot.maxdmg) * avgConst : rng(SPELLS.explosiveshot.mindmg,SPELLS.explosiveshot.maxdmg);
    let specials_mod = 1 + talents.t_n_t + sniper_training;
    let shotDmg = (combatRAP * 0.14 + dmg) * range_wep.basedmgmod * specials_mod * combatdmgmod * magdmgmod;
    return shotDmg;
}
    // Serpent Sting
function serpentStingCalc(combatRAP) {

    let serpent_mod = (!!currentgear.special.t8_serpent_dmg_bonus) ? currentgear.special.t8_serpent_dmg_bonus : 0;
    let specials_mod = (1 + talents.imp_stings + serpent_mod) / (1 + Math.floor(talents.ranged_weap_spec * 100) / 100); // remove RWS
    let shotDmg = (combatRAP * 0.2 + SPELLS.serpentsting.ranks.rankdmg * 15 / 3) * range_wep.basedmgmod * specials_mod * combatdmgmod * magdmgmod;
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
        trapDmg = (combatRAP * 0.10 + dmg) * combatdmgmod * magdmgmod;
        return trapDmg;
    }
}
    // Immolation Trap
function immolateTrapCalc(combatRAP) {
    let dmg = (combatRAP * 0.02 + SPELLS.immolatetrap.ranks.rankdmg * 5) * combatdmgmod * magdmgmod;
    return dmg;
}
    // Volley
function volleyCalc(combatRAP) {

    let shotDmg = (combatRAP * 0.0837 + SPELLS.volley.ranks.rankdmg) * combatdmgmod * magdmgmod;
    return shotDmg;
}

    // Killshot
function killShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let bonusDmg = (combatRAP * 0.4 + SPELLS.killshot.ranks.rankdmg * 2);
    let wepDmg = (combatRAP * 0.2 + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg) * 2;
    let shotDmg = (bonusDmg + wepDmg) * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}
    // Silencing Shot, Scatter Shot
function ScatterSilenceShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (combatRAP * range_wep.speed / 14 + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg) * avgConst * range_wep.basedmgmod * combatdmgmod * physdmgmod;
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
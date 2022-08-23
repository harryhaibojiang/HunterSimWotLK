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
    if(!!PET_SPELLS.pet_special) PET_SPELLS.pet_special.cd = 0;
    PET_SPELLS.pet_focus_dump.cd = 0;

}

// readiness updates all hunter main gcd spells to 0 excluding bestial wrath
function readinessCDUpdate() {

    if(USED_SPELLS.steadyshot?.cd > 0) USED_SPELLS.steadyshot.cd = 0;
    if(USED_SPELLS.multishot?.cd > 0) USED_SPELLS.multishot.cd = 0;
    if(USED_SPELLS.arcaneshot?.cd > 0) USED_SPELLS.arcaneshot.cd = 0;
    if(USED_SPELLS.aimedshot?.cd > 0) USED_SPELLS.aimedshot.cd = 0;
    if(USED_SPELLS.raptorstrike?.cd > 0) USED_SPELLS.raptorstrike.cd = (USED_SPELLS.melee.cd == 0) ? 0 : USED_SPELLS.melee.cd;
    if(USED_SPELLS.mongoose?.cd > 0) USED_SPELLS.mongoose.cd = 0;
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

function updateSpellCDs(spell) {

    // pet spells
    if(!!PET_SPELLS.pet_special) {
        PET_SPELLS.pet_special.cd = (spell === 'pet_special' && !!PET_SPELLS.pet_special.base_cd) ? PET_SPELLS.pet_special.base_cd * (1 - talents.longevity) : Math.max(PET_SPELLS.pet_special.cd - steptime, 0);
    }
    PET_SPELLS.pet_focus_dump.cd = (spell === 'pet_focus_dump' && !!PET_SPELLS.pet_focus_dump.base_cd) ? PET_SPELLS.pet_focus_dump.base_cd : Math.max(PET_SPELLS.pet_focus_dump.cd - steptime, 0);

    // player spells
    USED_SPELLS.autoshot.cd = roundFloat(Math.max(USED_SPELLS.autoshot.cd - steptime, 0));

    let expl_arcane_cd = (auras.lock_load?.timer > 0) ? 2.1 : 6; 
    if (!!USED_SPELLS.steadyshot)   {
        let spell_cd = 1.5 - USED_SPELLS.steadyshot.cast; // gcd minus cast time
        USED_SPELLS.steadyshot.cd = (spell === 'steadyshot') ? Math.max(spell_cd,0) : Math.max(USED_SPELLS.steadyshot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.multishot)   {
        let glyph_cd = 0;
        if (!!glyphs.multi_shot) glyph_cd = glyphs.multi_shot;
        let spell_cd = USED_SPELLS.multishot.base_cd - glyph_cd; // add glyph
        USED_SPELLS.multishot.cd = (spell === 'multishot' || spell === 'aimedshot') ? spell_cd : Math.max(USED_SPELLS.multishot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.arcaneshot)   {
        let spell_cd = expl_arcane_cd;
        USED_SPELLS.arcaneshot.cd = (spell === 'arcaneshot' || spell === 'explosiveshot') ? spell_cd : Math.max(USED_SPELLS.arcaneshot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.explosiveshot)   {
        let spell_cd = expl_arcane_cd;
        USED_SPELLS.explosiveshot.cd = (spell === 'arcaneshot' || spell === 'explosiveshot') ? spell_cd : Math.max(USED_SPELLS.explosiveshot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.aimedshot)   {
        let glyph_cd = 0;
        if (!!glyphs.aimed_shot) glyph_cd = glyphs.aimed_shot;
        let spell_cd = USED_SPELLS.aimedshot.base_cd - glyph_cd;
        USED_SPELLS.aimedshot.cd = (spell === 'multishot' || spell === 'aimedshot') ? spell_cd : Math.max(USED_SPELLS.aimedshot.cd - steptime, 0);
    }
    if (!!USED_SPELLS.chimerashot)   {
        let glyph_cd = 0;
        if (!!glyphs.chimera_shot) glyph_cd = glyphs.chimera_shot;
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
        if (!!glyphs.kill_shot) glyph_cd = glyphs.kill_shot;
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
    if (auras.lock_load?.timer > 0 && auras.lock_load.stacks === 0) {
        auras.lock_load.timer = 0;
    }
    //console.log("speed: " + rangespeed);
    //console.log("auto cd: "+USED_SPELLS.autoshot.cd);
    //console.log("steady cd: "+USED_SPELLS.steadyshot.cd);
    //console.log("multi cd: "+USED_SPELLS.multishot.cd);
    //console.log("arcane cd: "+USED_SPELLS.arcaneshot.cd);
}
/*************************************************************************/
/* All formulas below are tested and confirmed in-game as of patch 3.4.0 */
/*************************************************************************/

function autoShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let shotDmg = (range_wep.ammodps * range_wep.speed + combatRAP * range_wep.speed / DmgAPRatio + dmg + range_wep.flatdmg) * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    //console.log(shotDmg)
    return shotDmg;
}
function wildQuiverCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let wild_quiver_mod = 0.8;
    let shotDmg = (combatRAP * range_wep.speed / DmgAPRatio + dmg + range_wep.flatdmg) * range_wep.basedmgmod * combatdmgmod * magdmgmod * wild_quiver_mod;
    //console.log(shotDmg)
    return shotDmg;
}

function steadyShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let ferocious_insp = (talents.ferocious_insp - 1) * 3;
    let steadymod_1 = (!!currentgear.special.gronnstalker_4p_steady_shot_dmg_bonus) ? currentgear.special.gronnstalker_4p_steady_shot_dmg_bonus : 0;
    let steadymod_2 = (!!glyphs.steady_shot && auras.serpentsting?.timer > 0) ? glyphs.steady_shot / 100 : 0;
    let sniper_training = (auras.sniper_training?.timer > 0) ? talents.sniper_training * 2 : 0;
    
    let specials_mod = (steadymod_1 > 0) ? (1 + steadymod_1 + sniper_training + ferocious_insp) * (1 + steadymod_2) : (1 + steadymod_2 + sniper_training);
    
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
    let ferocious_insp = (talents.ferocious_insp - 1) * 3;
    let imp_steady_shot = (auras.imp_steady_shot?.timer > 0) ? talents.imp_steady_shot : 0;
    let specials_mod = (1 + arc_mod + imp_steady_shot + ferocious_insp);
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
    let specials_mod = 1 + talents.t_n_t + sniper_training + talents.trap_mastery;
    let shotDmg = (combatRAP * 0.1 + SPELLS.blackarrow.ranks.rankdmg * 5) * range_wep.basedmgmod * specials_mod * combatdmgmod;
    return shotDmg;
}
    // Chimera Shot
function chimeraShotCalc(range_wep, combatRAP) {

    let dmg = (useAverages) ? (range_wep.mindmg + range_wep.maxdmg) * avgConst : rng(range_wep.mindmg,range_wep.maxdmg);
    let imp_steady_shot = (auras.imp_steady_shot?.timer > 0) ? auras.imp_steady_shot.effect.dmgmod / 100 : 0;
    let specials_mod = (1 + imp_steady_shot);
    let shotDmg = (combatRAP * 0.2 + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg) * 1.25 * specials_mod * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}
    // Explosive Shot
function explosiveShotCalc(combatRAP) {

    let sniper_training = (auras.sniper_training?.timer > 0) ? talents.sniper_training * 2 : 0;
    let dmg = (useAverages) ? (SPELLS.explosiveshot.ranks.mindmg + SPELLS.explosiveshot.ranks.maxdmg) * avgConst : rng(SPELLS.explosiveshot.ranks.mindmg,SPELLS.explosiveshot.ranks.maxdmg);
    let specials_mod = 1 + talents.t_n_t + sniper_training;
    let shotDmg = (combatRAP * 0.14 + dmg) * range_wep.basedmgmod * specials_mod * combatdmgmod;
    return shotDmg;
}
    // Serpent Sting
function serpentStingCalc(combatRAP) {

    let serpent_mod = (!!currentgear.special.t8_serpent_dmg_bonus) ? currentgear.special.t8_serpent_dmg_bonus : 0;
    let specials_mod = (1 + talents.imp_stings + serpent_mod);
    let ticks = (auras.serpentsting.effect.duration + (glyphs.serpent_sting || 0)) / auras.serpentsting.effect.tick_rate;
    let shotDmg = (combatRAP * 0.04 + SPELLS.serpentsting.ranks.rankdmg) * ticks * dmgmod * specials_mod * combatdmgmod;
    return shotDmg;
}
    // Explosive Trap
function explosiveTrapCalc(combatRAP, dotcheck) {

    let dmg = 0;
    let dotDmg = 0;
    let trapDmg = 0;
    let specialmod = (1 + talents.t_n_t + talents.trap_mastery);
    if(dotcheck) {
        dotDmg = (SPELLS.explosivetrap.ranks.tickdmg * 10 + combatRAP) * combatdmgmod * specialmod;
        return dotDmg;
    } else {
        dmg = (useAverages) ? (SPELLS.explosivetrap.ranks.mindmg + SPELLS.explosivetrap.ranks.maxdmg) * avgConst : rng(SPELLS.explosivetrap.ranks.mindmg,SPELLS.explosivetrap.ranks.maxdmg);
        trapDmg = (combatRAP * 0.10 + dmg) * specialmod * combatdmgmod * magdmgmod;
        return trapDmg;
    }
}
    // Immolation Trap
function immolateTrapCalc(combatRAP) {
    let ticks = auras.immolatetrap.effect.duration / auras.immolatetrap.effect.tick_rate;
    let specialmod = (1 + talents.t_n_t + talents.trap_mastery);
    let dmg = (combatRAP * 0.02 + SPELLS.immolatetrap.ranks.rankdmg * ticks) * combatdmgmod * specialmod;
    return dmg;
}
    // Volley
function volleyCalc(combatRAP) {

    let barragemod = 1 + talents.barrage;
    let shotDmg = (combatRAP * 0.0837 + SPELLS.volley.ranks.rankdmg) * barragemod * combatdmgmod * magdmgmod;
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
    let shotDmg = (combatRAP * range_wep.speed / DmgAPRatio + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg) * avgConst * range_wep.basedmgmod * combatdmgmod * physdmgmod;
    return shotDmg;
}

function petAutoCalc(){
    let BasePet = BASE_PET[level];
    let dmg = (useAverages) ? (BasePet.MinDmg + BasePet.MaxDmg) * avgConst : rng(BasePet.MinDmg,BasePet.MaxDmg);
    let basedmgmod = pet.dmgmod * pet.combatdmgmod * PetFamilyMod;
    let apbonus = pet.combatap * PetBaseSpeed / DmgAPRatio;
    let autoDmg = (dmg + apbonus) * basedmgmod * physdmgmod * PetFamilyMod * CobraReflexesPenalty;
    // debugging
    //let minauto = (PetMinDmg + apbonus) * basedmgmod * physdmgmod * CobraReflexesPenalty;
    //let maxauto = (PetMaxDmg + apbonus) * basedmgmod * physdmgmod * CobraReflexesPenalty;
    //console.log(Math.floor(minauto) + " - " + Math.ceil(maxauto))
    return autoDmg;
}

function spellPetCalc(petspell){
    let mindmg = 0;
    let maxdmg = 0;
    let dmg = 0;
    let spelldmg = 0;
    let apbonus = pet.combatap * PET_SPELLS[petspell].ap_mod / 100;

    let basedmgmod = pet.dmgmod * pet.combatdmgmod * pet_special_mod;

    if(PET_SPELLS[petspell].type === 'physical' || PET_SPELLS[petspell].type === 'bleed'){ // phys spells
        mindmg = PET_SPELLS[petspell].ranks.mindmg; 
        maxdmg = PET_SPELLS[petspell].ranks.maxdmg; 
        dmg = (useAverages) ? (mindmg + maxdmg) * avgConst : rng(mindmg,maxdmg);
        spelldmg = (dmg + apbonus) * basedmgmod * physdmgmod * PetFamilyMod;

    }
    else if ((PET_SPELLS[petspell].type === 'nature' || PET_SPELLS[petspell].type === 'fire' 
    || PET_SPELLS[petspell].type === 'frost' || PET_SPELLS[petspell].type === 'arcane' || PET_SPELLS[petspell].type === 'shadow')) {
        mindmg = PET_SPELLS[petspell].ranks.mindmg; 
        maxdmg = PET_SPELLS[petspell].ranks.maxdmg; 
        dmg = (useAverages) ? (mindmg + maxdmg) * avgConst : rng(mindmg,maxdmg);
        spelldmg = (dmg + apbonus) * basedmgmod * magdmgmod;

    }
    
    return spelldmg;
}
function petSpecialDoTCalc(ap_mod) {

    let mindmg = 0;
    let maxdmg = 0;
    let dmg = 0;
    let spelldmg = 0;
    let apbonus = pet.combatap * ap_mod / 100;

    let basedmgmod = pet.dmgmod * pet.combatdmgmod * pet_special_mod;

    if(PET_SPELLS.pet_special.type === 'physical' || PET_SPELLS.pet_special.type === 'bleed'){ // phys spells
        mindmg = PET_SPELLS.pet_special.ranks.dot_mindmg; 
        maxdmg = PET_SPELLS.pet_special.ranks.dot_maxdmg; 
        dmg = (useAverages) ? (mindmg + maxdmg) * avgConst : rng(mindmg,maxdmg);
        spelldmg = (dmg + apbonus) * basedmgmod * PetFamilyMod;
        
    }
    else if ((PET_SPELLS.pet_special.type === 'nature' || PET_SPELLS.pet_special.type === 'fire' 
    || PET_SPELLS.pet_special.type === 'frost' || PET_SPELLS.pet_special.type === 'arcane')) {
        mindmg = PET_SPELLS.pet_special.ranks.dot_mindmg;
        maxdmg = PET_SPELLS.pet_special.ranks.dot_maxdmg;
        dmg = (useAverages) ? (mindmg + maxdmg) * avgConst : rng(mindmg,maxdmg);
        spelldmg = (dmg + apbonus) * basedmgmod;
    }
    
    return spelldmg;
}
/*****************************************************************************/
/* this script contains relevant calculations for stats of player */
/*****************************************************************************/
// initialize constants
const BASE_PLAYER = {
   70: {
      HitRatingRatio: 15.77,
      CritRatingRatio: 22.08,
      HasteRatingRatio: 15.77,
      ArPRatingRatio: 6.73,
      ExpertiseRatio: 3.9423081875, 
      AgiToCrit: 40,
      IntToCrit: 80,
      BaseMana: 3383,
      BaseRegen: 0.009327,
   },
   80: {
      HitRatingRatio: 32.79,
      CritRatingRatio: 45.91,
      HasteRatingRatio: 32.79,
      ArPRatingRatio: 14,
      ExpertiseRatio: 8.1974973675, 
      AgiToCrit: 83.33,
      IntToCrit: 166.6667,
      BaseMana: 5046,
      BaseRegen: 0.005575,
   },
}

const BaseCritChance = -1.53;
const BaseHitChance = 0;
const CritPenalty = -3;
const CritAuraPenalty = -1.8;

const GlanceDmgReduction = 0.75;
const GlanceChance = 24;
const QuiverSpeed = 1.15;
const ExpertiseReduction = 0.25;
const BaseMagicMiss = 17;
const BasePhysicalMiss = 8;
const PartialResistRate = 14.5;
const PartialResistDmg = 0.65;
const BaseSpellCrit = 3.6;

// initialize stat variables
var RangeCritRating = 0;
var RangeCritChance = 0;
var Str = 0;
var Agi = 0;
var Stam = 0;
var Int = 0;
var Spi = 0;
var BaseMAP = 0;
var BaseRAP = 0;
var MeleeCritRating = 0;
var MeleeCritChance = 0;
var ManaPer5 = 0;
var Resilience = 0;
var ArPRating = 0;
var HasteRating = 0;
var RangeHitRating = 0;
var RangeHitChance = 0;
var RangeMissChance = 0;
var MeleeHitRating = 0;
var MeleeHitChance = 0;
var MeleeMissChance = 0;
var RaptorMissChance = 0;
var Expertise = 0;
var ExpertiseRating = 0;
var Mana = 0;
var MeleeCritDamage = 2;
var RangeCritDamage = 2;
var SpecialCritDamage = 2;
var fiveSecRulemp5 = 0;
var pet_special_crit = 0;

var currentMana = 0;
var rangespeed = 3.0;
var meleespeed = 3.0;

var recentcast = false;
var BaseRangeSpeed = 3.0;
var BaseMeleeSpeed = 3.0;

var haste = 1;
var PlyrArmorReduc = 1;
var PetArmorReduc = 1;

// stat modifiers
var strmod = 1;
var agimod = 1;
var stammod = 1;
var intmod = 1;
var spimod = 1;
var mapmod = 1;
var rapmod = 1;
var dmgmod = 1;
var rangedmgmod = 1;

// 0 for night elf, 1 for dwarf, 2 for draenei, 3 for orc, 4 for troll, 5 for tauren, 6 for blood elf
var selectedRace = 3; 
var offhandDisabled = false;

var level = 70;

var useAverages = false;

var range_wep = {};
var mainhand_wep = {};
var consumestats = {};
var target = {
   armor: 10463,
   level: 83,
   name: "Level 83 10463",
   phase: 1,
   resilience: 0,
   type: "Humanoid"
};
var currentgear = {auras:{0:{}}, stats:{},special:{}};
var custom = {
   str: 0,
   agi: 0,
   int: 0,
   RAP: 0,
   rangehit: 0,
   rangecrit: 0,
   haste: 0,
   arp: 0,
   MAP: 0,
   meleehit: 0,
   meleecrit: 0,
   expertise: 0,
   mp5: 0
};

const GearStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, Hit:0, MP5:0, Resil:0, ArP:0, Haste:0,Exp:0,dmgbonus:0, rangedmgbonus:0}; 
const BuffStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, CritChance:0, Hit:0, HitChance:0, MP5:0, Resil:0, ArP:0, Haste:0};
const EnchantStats = {Str:0, Agi:0, Stam:0, Int:0, Spi:0, RAP:0, MAP:0, Crit:0, RangeCrit:0, Hit:0, RangeHit:0, MP5:0, Resil:0, ArP:0, Haste:0, dmgbonus:0, rangedmgbonus:0}; 

// initial variables for itemid's (like a profile)
var gear = {
   head:{id:32235,gems:[32409,32194],enchant:35452},
   neck:{id:32260,gems:[]},
   shoulder:{id:31006,gems:[32222,32212],enchant:29483},
   back:{id:32323,gems:[],enchant:34004},
   chest:{id:31004,gems:[32194,32222,32226],enchant:27960},
   wrist:{id:32324,gems:[32222],enchant:34002},
   mainhand:{id:33389,gems:[],enchant:42620,attachment:23529},
   offhand:{id:33389,gems:[],enchant:42620,attachment:23529},
   hand:{id:31001,gems:[32194],enchant:25080},
   waist:{id:32346,gems:[]},
   leg:{id:31005,gems:[32194],enchant:35490},
   feet:{id:32366,gems:[32194,32222],enchant:27951},
   ring1:{id:29301},
   ring2:{id:33496,gems:[],enchant:0},
   trinket1:{id:28830},
   trinket2:{id:33831},
   range:{id:15808}, // 15808 for fine light crossbow for testing
   ammo:{id:31737},
   quiver:{id:34105},
};

// initialize variables for use
var selectedbuffs = {
   stats: { MAP:0, RAP:0, Str:0, Agi:0 },
   special: { percentAPMod: 1, swiftRetAura: 1, FerociousInsp: 1, melee_haste: 1, kingsMod: 1 } 
};
var glyphs = {}
var talents = {
   imp_hawk: 1.15, //
   end_training: 1.01, // -
   focused_fire: 2, //
   imp_monkey: 0, // -
   thick_hide: 0,// -
   imp_ress_pet: 2, // - 
   pathfinding: 0,// -
   aspect_mast: 0.1, // ---
   unleash_fury: 1.15, //
   imp_mend_pet: 1,// -
   ferocity: 10, // 
   spirit_bond: 0,// -
   intimidation: 1,// -
   bestial_disc: 2, //
   animal_handler: 1.1, // 
   frenzy: 4, //
   ferocious_insp: 1.03, //
   bestial_wrath: 1, //
   catlike_reflex: 0, //
   invigoration: 0, //
   serp_swift: 1.2, // 
   longevity: 3, //
   beast_within: 1, // 
   cobra_strike: 0.60, //
   kindred_spirit: 1.2, //
   beast_mast: 1, 
   imp_conc_shot: 0,// -
   focus_aim: 3, //
   lethal_shots: 5, //
   careful_aim: 0, //
   imp_hunter_mark: 1, //
   mortal_shots: 1.3, //
   GftT: 50, // 
   imp_arc_shot: 1, // 
   aimed_shot: 1,
   rapid_killing: 0, //
   imp_stings: 1, //
   efficiency: 1, // ---
   conc_barrage: 0,// -
   readiness: 0, //
   barrage: 1, //
   combat_exp: 0, //
   ranged_weap_spec: 1, //
   pierce_shot: 0, 
   trueshot_aura: 1, //
   imp_barrage: 0, //
   master_marksman: 0, //
   rapid_recup: 0, //
   wild_quiver: 0, //
   silencing_shot: 0,
   imp_steady_shot: 0, //
   mark_death: 0, //
   chimera_shot: 0,
   imp_tracking: 1.02, //
   hawk_eye: 0,// -
   savage_strikes: 0, //
   surefooted: 0,// -
   entrapment: 0,// -
   trap_mastery: 0,//
   surv_instincts: 0,//
   survivalist: 1,//
   scatter_shot: 0,
   deflection: 0,// -
   surv_tactics: 0,// -
   t_n_t: 1, //
   lock_load: 0,
   hunt_vs_wild: 0,//
   killer_instinct: 0,//
   counterattack: 0,// -
   light_reflexes: 1,//
   resourcefulness: 0,//
   exp_weakness: 0,//
   wyvern_sting: 0,// -
   TotH: 0, //
   master_tact: 0, //
   nox_stings: 0,
   no_escape: 0,
   sniper_training: 0, // except ks crit
   hunt_party: 1, // no replenishment
   exp_shot: 0 // coded but not in sim logic
 }

/********************/
/* Start functions  */
/********************/
function checkWeaponType(){
   let equippedRangeType = RANGED_WEAPONS[gear.range.id].type; 
   let equippedMHType = MELEE_WEAPONS[gear.mainhand.id].type;
   // check for gun and dwarf, or bow and troll
   if ((equippedRangeType === 'Gun' && selectedRace === 1) || (equippedRangeType === 'Bow' && selectedRace === 4)) {
      races[selectedRace][level].critchance = 1;
   } else {
      races[selectedRace][level].critchance = 0;
   }
   // check for axe and orc
   if (equippedMHType === 'axe' && selectedRace === 3) {
      races[selectedRace][level].expertise = 5;
   } else {
      races[selectedRace][level].expertise = 0;
   }
   // disable offhand if two hand selected
   offhandDisabled = (MELEE_WEAPONS[gear.mainhand.id].hand === 'Two') ? true:false; 
   
}
      
// totals stats for gear and buffs - for each property that matches it equals the value. Else if not found it's 0
function addGear(){
      for(let prop in GearStats) {
        GearStats[prop] = currentgear.stats[prop] || 0; 
      }
}
function addBuffs(){
   let stats = selectedbuffs.stats;
   for(let prop in BuffStats) {
         BuffStats[prop] = (stats[prop] || 0) + (consumestats[prop] || 0);

   }
}

// initialize base stats - called when talents, gear/enchants, static buffs/consumes, race are changed
function calcBaseStats() {
    let BasePlayer = BASE_PLAYER[level];

    let imp_tracking = 1;
    let racialmod = 1;
    if (target.type === 'Beast'){
        imp_tracking = talents.imp_tracking;
        racialmod = (selectedRace === 4) ? 1.05 : 1;
    } else if ((target.type !== 'Unknown') && (target.type !== 'Mechanical') && (target.type !== 'Other')){
        imp_tracking = talents.imp_tracking;
    }
    let group_dmg_mod = (talents.ferocious_insp > 0) ? talents.ferocious_insp : selectedbuffs.special.FerociousInsp;
    let beastwithin_mod = (talents.beast_within > 0) ? 1.1 : 1;
    dmgmod = (1 + talents.focused_fire / 100) * imp_tracking * racialmod * group_dmg_mod * beastwithin_mod;
    rangedmgmod = dmgmod * (1 + Math.floor(talents.ranged_weap_spec * 100) / 100);

    strmod = selectedbuffs.special.kingsMod;
    agimod = selectedbuffs.special.kingsMod * talents.combat_exp * talents.light_reflexes * (1 + talents.hunt_party);
    stammod = selectedbuffs.special.kingsMod * talents.survivalist;
    intmod = selectedbuffs.special.kingsMod * talents.combat_exp;
    spimod = selectedbuffs.special.kingsMod;

    // Main Stats
    Str  = Math.floor(Math.floor(GearStats.Str + BuffStats.Str + EnchantStats.Str + races[selectedRace][level].str + custom.str) * strmod);
    Agi  = Math.floor(Math.floor(GearStats.Agi + BuffStats.Agi + EnchantStats.Agi + races[selectedRace][level].agi + custom.agi) * agimod);
    Stam = Math.floor(Math.floor(GearStats.Stam + BuffStats.Stam + EnchantStats.Stam + races[selectedRace][level].sta) * stammod);
    Int  = Math.floor(Math.floor(GearStats.Int + BuffStats.Int + EnchantStats.Int + races[selectedRace][level].int + custom.int) * intmod);
    Spi  = Math.floor(Math.floor(GearStats.Spi + BuffStats.Spi + EnchantStats.Spi + races[selectedRace][level].spi) * spimod);
    
    let tsa_ap = (talents.trueshot_aura > 1) ? talents.trueshot_aura : selectedbuffs.special.percentAPMod;
    mapmod = tsa_ap;
    rapmod = tsa_ap;
    // Attack Power
    let hawkAP = (level == 70) ? 155 * (1 + talents.aspect_mast * 3) : 300 * (1 + talents.aspect_mast * 3);
    let sharedAP = Agi + (Stam * talents.hunt_vs_wild);
    BaseMAP = (GearStats.MAP + BuffStats.MAP + EnchantStats.MAP + sharedAP + Str + races[selectedRace][level].mAP + custom.MAP) * mapmod;
    BaseRAP = (hawkAP + GearStats.RAP + BuffStats.RAP + EnchantStats.RAP + sharedAP + races[selectedRace][level].rAP + (Int * talents.careful_aim) + custom.RAP) * rapmod;
    // Crit rating and crit chance
    let critrating = GearStats.Crit + BuffStats.Crit + EnchantStats.Crit;
    MeleeCritRating = critrating + (currentgear.stats.MeleeCrit || 0) + custom.meleecrit;
    RangeCritRating = critrating + (currentgear.stats.RangeCrit || 0) + custom.rangecrit;
    let crit = BaseCritChance + Agi / BasePlayer.AgiToCrit + BuffStats.CritChance + talents.killer_instinct + talents.master_marksman * 100;

    MeleeCritChance = crit + MeleeCritRating / BasePlayer.CritRatingRatio;
    RangeCritChance = crit + RangeCritRating / BasePlayer.CritRatingRatio + talents.lethal_shots + races[selectedRace][level].critchance;

    MeleeCritDamage = 1 + (2 * currentgear.special.relentless_metagem_crit_dmg_inc - 1);
    RangeCritDamage = 1 + (talents.mortal_shots) * (2 * currentgear.special.relentless_metagem_crit_dmg_inc - 1);
    SpecialCritDamage = 1 + (talents.mortal_shots + talents.mark_death * 2) * (2 * currentgear.special.relentless_metagem_crit_dmg_inc - 1);
    
    // Hit rating and hit chance - split between ranged and melee because of hit scope and crit scope and racial
    let hitrating = GearStats.Hit + BuffStats.Hit + EnchantStats.Hit;
    MeleeHitRating = hitrating + custom.meleehit;

    RangeHitRating = hitrating + (currentgear.stats.RangeHit || 0) + custom.rangehit;
    let racialhit = (selectedRace == 2 && buffslist[1] == 0) ? 1 : 0;

    let hit = talents.focus_aim + BuffStats.HitChance + racialhit;
    MeleeHitChance = hit + MeleeHitRating / BasePlayer.HitRatingRatio; // need dual wield condition
    RangeHitChance = hit + RangeHitRating / BasePlayer.HitRatingRatio;


    let dw_penalty = 0;
    if (!offhandDisabled && (gear.offhand !== undefined)) {
        dw_penalty = (gear.offhand.id > 0) ? -19:0; // offhand penalty for dual wielding 
    } else { dw_penalty = 0; }

    MeleeMissChance = Math.max(BasePhysicalMiss - MeleeHitChance - dw_penalty,0);
    RaptorMissChance = Math.max(BasePhysicalMiss - MeleeHitChance,0); // yellow melee miss
    RangeMissChance = Math.max(BasePhysicalMiss - RangeHitChance,0);

    // Expertise and Dodge - every 8.19 rating is 1 expertise, 1 expertise = 0.25% reduction rounded down to nearest integer
    Expertise = Math.floor(GearStats.Exp / BasePlayer.ExpertiseRatio + races[selectedRace][level].expertise + custom.expertise);
    DodgeChance = 6.5 - Expertise * ExpertiseReduction;

    ArPRating = GearStats.ArP + custom.arp;
    ManaPer5 = Math.floor(BuffStats.MP5 + GearStats.MP5 + EnchantStats.MP5 + custom.mp5);
    // formula for spirit regen -> (5 * sqrt(intellect) * spirit * 0.009327) for hunters
    fiveSecRulemp5 = Math.floor(5 * (Math.sqrt(Int) * Spi * BasePlayer.BaseRegen));

    // base mana by level then add int
    Mana = BasePlayer.BaseMana + (Int - 20) * 15 + 20;
    // initialize current Mana to Max mana
    currentMana = Mana;

    HasteRating = BuffStats.Haste + GearStats.Haste + EnchantStats.Haste + custom.haste;

    BaseRangeSpeed = RANGED_WEAPONS[gear.range.id].speed / QuiverSpeed / talents.serp_swift / selectedbuffs.special.swiftRetAura;
    BaseMeleeSpeed = MELEE_WEAPONS[gear.mainhand.id].speed / selectedbuffs.special.swiftRetAura / selectedbuffs.special.melee_haste;

}

function initializeWeps() {
   // initialize range_wep obj
   range_wep.speed = RANGED_WEAPONS[gear.range.id].speed;
   range_wep.mindmg = RANGED_WEAPONS[gear.range.id].mindmg;
   range_wep.maxdmg = RANGED_WEAPONS[gear.range.id].maxdmg;
   range_wep.ammodps = (gear.range.id === 34334) ? 0: AMMOS[gear.ammo.id].ammo_dps;
   range_wep.flatdmg = currentgear.special.dmgbonus || 0 + currentgear.special.rangedmgbonus || 0;
   range_wep.basedmgmod = rangedmgmod;
   // initialize mainhand_wep obj

   mainhand_wep.speed = MELEE_WEAPONS[gear.mainhand.id].speed;
   mainhand_wep.mindmg = MELEE_WEAPONS[gear.mainhand.id].mindmg;
   mainhand_wep.maxdmg = MELEE_WEAPONS[gear.mainhand.id].maxdmg;
   mainhand_wep.flatdmg = currentgear.special.dmgbonus || 0;
   mainhand_wep.basedmgmod = dmgmod;
   
}

function initialize(){
   checkWeaponType();
   currentgear = getStatsFromGear(gear);
   addGear();
   addBuffs();
   calcBaseStats();
   petStatsCalc();
   initializeWeps();
   buildSpellsObj();
   buildAurasObj();
   getStatsCapData(); // used for gear display, simple formula to set stats cap goals
}

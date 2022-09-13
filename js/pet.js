
const PetBaseDodge = 6.5;
const PetBaseCrit  = 3.2;
const PetBaseSpeed = 2;

const BASE_PET = {
    70: {
        MinDmg: 44,
        MaxDmg: 68,
        BaseAgi: 54,
        BaseStr: 162,
        AgiToCrit: 30,
    },
    80: {
        MinDmg: 59,
        MaxDmg: 87,
        BaseAgi: 113,
        BaseStr: 331,
        AgiToCrit: 62.77
    }
}

const PetHappiness = 1.25;
const PetFamilyMod = 1.05; // WotLK all pets have same family dmg mod of 5% idk why
const PetHunterAPRatio = 0.22;
const BaseFocusRegen = 10; // per 1 sec
// initial pet object - trying something different from how I did player 1 global object instead of a bunch of variables
var pet = {
    agi: 0,
    ap: 0,
    combatap: 0,
    crit: 0,
    combatcrit:0,
    combatspellcrit: 0,
    dmgmod: 1,
    hit: 0,
    spellhit: 0,
    miss: 0,
    dodge: 0,
    expertise: 0,
    speed: 2,
    combatspeed:0,
    str: 0,
    focusregen:0,
    focus: 100,
};
var petconsumestats = {};

var pet_special_mod = 1;
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
    cull_herd: 1.03, // 
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
    shark_attack: 1.03, // 
    silverback: 0,
    spider_bite: 0.09, //
    spike_collar: 1.09,
    taunt: 0,
    thunderstomp: 0,
    wild_hunt: 0,
    wolverine_bite: 0
};

var selectedPet = 0;

function petStatsCalc(){
    let BasePet = BASE_PET[level];

    if (talents.beast_mast === 0) {
        if(PET_FAMILY[selectedPet].family === 'Ferocity'){
            if (level === 70) {
                pet_talents = Ferocity70_NonBM2;
            } else {
                pet_talents = Ferocity80_NonBM1;
            }
        }
        else if(PET_FAMILY[selectedPet].family === 'Cunning'){
            if (level === 70) {
                pet_talents = Cunning70_NonBM;
            } else {
                pet_talents = Cunning80_NonBM;
            }
        }
        else if(PET_FAMILY[selectedPet].family === 'Tenacity'){
            if (level === 70) {
                pet_talents = Tenacity70_NonBM;
            } else {
                pet_talents = Tenacity80_NonBM;
            }
        }
    } else {
        if(PET_FAMILY[selectedPet].family === 'Ferocity'){
            if (level === 70) {
                pet_talents = Ferocity70_BM2;
            } else {
                pet_talents = Ferocity80_BM;
            }
        }
        else if(PET_FAMILY[selectedPet].family === 'Cunning'){
            if (level === 70) {
                pet_talents = Cunning70_BM;
            } else {
                pet_talents = Cunning80_BM;
            }
        }
        else if(PET_FAMILY[selectedPet].family === 'Tenacity'){
            if (level === 70) {
                pet_talents = Tenacity70_BM;
            } else {
                pet_talents = Tenacity80_BM;
            }
        }
    }
    let racialmod = (selectedRace === 3) ? 1.05 : 1; // 5% pet dmg if orc
    let beasttamers_crit = 0;
    let beasttamers_dmg = 1;
    if (gear.shoulder.id === 30892 || beast_tame_weight) {
        beasttamers_dmg = 1.02;
        beasttamers_crit = 2;
    };
    let group_dmg_mod = (talents.ferocious_insp > 0) ? talents.ferocious_insp : selectedbuffs.special.FerociousInsp;
    pet.dmgmod = PetHappiness * talents.unleash_fury * racialmod * beasttamers_dmg * group_dmg_mod * pet_talents.spike_collar * talents.kindred_spirit * pet_talents.shark_attack;

    pet.str = Math.floor(Math.floor(BasePet.BaseStr + (selectedbuffs.stats.Str || 0) + (petconsumestats.Str || 0)) * selectedbuffs.special.kingsMod);
    pet.agi = Math.floor(Math.floor(BasePet.BaseAgi + (selectedbuffs.stats.Agi || 0) + (petconsumestats.Agi || 0)) * selectedbuffs.special.kingsMod);

    //ap
    let petAPfromplayer = BaseRAP * PetHunterAPRatio * pet_talents.wild_hunt;
    let tsa_ap = (talents.trueshot_aura > 1) ? talents.trueshot_aura : selectedbuffs.special.percentAPMod;
    let apmod = talents.animal_handler * tsa_ap;
    
    pet.ap = ((pet.str - 10) * 2 + (selectedbuffs.stats.MAP || 0) + (Stam * talents.hunt_vs_wild) + petAPfromplayer) * apmod;
    //crit
    pet.crit = PetBaseCrit + pet.agi / BasePet.AgiToCrit + talents.ferocity + (selectedbuffs.stats.CritChance || 0) + beasttamers_crit + 0 + pet_talents.spider_bite; // need to add special gear items w/ pet crit
    //hit
    pet.hit = Math.floor(RangeHitChance);
    pet.miss = Math.max(BasePhysicalMiss - pet.hit,0);
    pet.spellhit = Math.floor(RangeHitChance * 2.125);
    let pet_expertise_scale = PetBaseDodge / ExpertiseReduction / BasePhysicalMiss; // dodge / expertise ratio and max hit value
    pet.expertise = Math.floor(pet_expertise_scale * pet.hit);
    pet.dodge = PetBaseDodge - pet.expertise * ExpertiseReduction;
    //speed
    pet.speed = PetBaseSpeed / talents.serp_swift / pet_talents.cobra_reflex / selectedbuffs.special.swiftRetAura / selectedbuffs.special.melee_haste; // 1.3 for cobra reflexes
    
    generatePetSpellObj();
    
    pet.focusregen = BaseFocusRegen * talents.bestial_disc;
}


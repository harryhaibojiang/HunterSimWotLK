const PET_FAMILY = [
    { 
        name: 'Ravager',
        pet_special: 'Ravage',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Cat',
        pet_special: 'Rake',
        pet_focus_dump: 'Claw',
    },
    { 
        name: 'Raptor',
        pet_special: 'Savage Rend',
        pet_focus_dump: 'Claw',
    },
    { 
        name: 'Bird of Prey',
        pet_special: 'Snatch',
        pet_focus_dump: 'Claw',
    },
    { 
        name: 'Bat',
        pet_special: 'Sonic Blast',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Wind Serpent',
        pet_special: 'Lightning Breath',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Wolf',
        pet_special: 'Furious Howl',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Wasp',
        pet_special: 'Sting',
        pet_focus_dump: 'Smack',
    },
    { 
        name: 'Worm',
        pet_special: 'Acid Spit',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Warp Stalker',
        pet_special: 'Warp',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Turtle',
        pet_special: 'Shell Shield',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Tallstrider',
        pet_special: 'Dust Cloud',
        pet_focus_dump: 'Claw',
    },
    { 
        name: 'Spore Bat',
        pet_special: 'Spore Cloud',
        pet_focus_dump: 'Smack',
    },
    { 
        name: 'Spirit Beast',
        pet_special: 'Spirit Strike',
        pet_focus_dump: 'Claw',
    },
    { 
        name: 'Silithid',
        pet_special: 'Venom Web Spray',
        pet_focus_dump: 'Claw',
    },
    { 
        name: 'Serpent',
        pet_special: 'Poison Spit',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Spider',
        pet_special: 'Web',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Scorpid',
        pet_special: 'Scorpid Poison',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Rhino',
        pet_special: 'Stampede',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Nether Ray',
        pet_special: 'Nether Shock',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Moth',
        pet_special: 'Serenity Dust',
        pet_focus_dump: 'Smack',
    },
    { 
        name: 'Hyena',
        pet_special: 'Tendon Rip',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Gorrilla',
        pet_special: 'Pummel',
        pet_focus_dump: 'Smack',
    },
    { 
        name: 'Dragonhawk',
        pet_special: 'Fire Breath',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Devilsaur',
        pet_special: 'Monstrous Bite',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Crocolisk',
        pet_special: 'Bad Attitude',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Crab',
        pet_special: 'Pin',
        pet_focus_dump: 'Claw',
    },
    { 
        name: 'Core Hound',
        pet_special: 'Lava Breath',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Bear',
        pet_special: 'Swipe',
        pet_focus_dump: 'Claw',
    },
    { 
        name: 'Boar',
        pet_special: 'Gore',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Carrion Bird',
        pet_special: 'Demoralizing Screech',
        pet_focus_dump: 'Bite',
    },
    { 
        name: 'Chimaera',
        pet_special: 'Froststorm Breath',
        pet_focus_dump: 'Bite',
    },
];

const PET_BITE = {
    base: {
        cost: 25,
        gcd: true,
        spell_name: 'Bite',
        type: 'physical'
    },
    9: {
        mindmg: 54,
        maxdmg: 76,
        level: 70
    },
    10: {
        mindmg: 91,
        maxdmg: 129,
        level: 80
    },
    11: {
        mindmg: 118,
        maxdmg: 168,
        level: 80
    },
}
const PET_CLAW = {
    base: {
        cost: 25,
        gcd: true,
        spell_name: 'Claw',
        type: 'physical'
    },
    9: {
        mindmg: 54,
        maxdmg: 76,
        level: 70
    },
    10: {
        mindmg: 91,
        maxdmg: 129,
        level: 80
    },
    11: {
        mindmg: 118,
        maxdmg: 168,
        level: 80
    },
}
const PET_SMACK = {
    base: {
        cost: 25,
        gcd: true,
        spell_name: 'Smack',
        type: 'physical'
    },
    9: {
        mindmg: 54,
        maxdmg: 76,
        level: 70
    },
    10: {
        mindmg: 91,
        maxdmg: 129,
        level: 80
    },
    11: {
        mindmg: 118,
        maxdmg: 168,
        level: 80
    },
}
const PET_ACID_SPIT = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Acid Spit',
        type: 'nature'
    },
    5: {
        mindmg: 58,
        maxdmg: 82,
        level: 70
    },
    6: {
        mindmg: 124,
        maxdmg: 176,
        level: 80
    }
}
const PET_DEMORALIZING_SCREECH = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Demoralizing Screech',
        type: 'physical'
    },
    5: {
        mindmg: 42,
        maxdmg: 58,
        level: 70
    },
    6: {
        mindmg: 85,
        maxdmg: 129,
        level: 80
    }
}
const PET_FIRE_BREATH = {
    base: {
        cost: 20,
        duration: 2,
        ticks: 1,
        base_cd: 10,
        gcd: true,
        spell_name: 'Fire Breath',
        type: 'fire'
    },
    5: {
        mindmg: 22,
        maxdmg: 26,
        dot_mindmg: 23,
        dot_maxdmg: 26,
        level: 70
    },
    6: {
        mindmg: 43,
        maxdmg: 57,
        dot_mindmg: 44,
        dot_maxdmg: 57,
        level: 80
    }
}
const PET_FROSTSTORM_BREATH = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Froststorm Breath',
        type: 'frost'
    },
    5: {
        mindmg: 59,
        maxdmg: 81,
        level: 70
    },
    6: {
        mindmg: 128,
        maxdmg: 172,
        level: 80
    }
}
const PET_FURIOUS_HOWL = {
    base: {
        cost: 20,
        base_cd: 40,
        gcd: true,
        spell_name: 'Furious Howl',
        type: 'AP'
    },
    5: {
        AP: 204,
        level: 70
    },
    6: {
        AP: 320,
        level: 80
    }
}
const PET_GORE = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Gore',
        type: 'physical'
    },
    5: {
        mindmg: 57,
        maxdmg: 75,
        level: 70
    },
    6: {
        mindmg: 122,
        maxdmg: 164,
        level: 80
    }
}
const PET_LAVA_BREATH = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Lava Breath',
        type: 'fire'
    },
    5: {
        mindmg: 60,
        maxdmg: 80,
        level: 70
    },
    6: {
        mindmg: 128,
        maxdmg: 172,
        level: 80
    }
}
const PET_LIGHTNING_BREATH = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Lightning Breath',
        type: 'nature'
    },
    5: {
        mindmg: 40,
        maxdmg: 52,
        level: 70
    },
    6: {
        mindmg: 80,
        maxdmg: 120,
        level: 80
    }
}
const PET_MONSTROUS_BITE = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Monstrous Bite',
        type: 'physical'
    },
    5: {
        mindmg: 43,
        maxdmg: 57,
        level: 70
    },
    6: {
        mindmg: 91,
        maxdmg: 123,
        level: 80
    }
}
const PET_NETHER_SHOCK = {
    base: {
        cost: 0,
        base_cd: 40,
        gcd: true,
        spell_name: 'Nether Shock',
        type: 'shadow'
    },
    5: {
        mindmg: 30,
        maxdmg: 40,
        level: 70
    },
    6: {
        mindmg: 64,
        maxdmg: 86,
        level: 80
    }
}
const PET_PIN = {
    base: {
        cost: 0,
        cast: 4,
        base_cd: 40,
        gcd: true,
        spell_name: 'Pin',
        type: 'physical'
    },
    5: {
        mindmg: 56,
        maxdmg: 72,
        level: 70
    },
    6: {
        mindmg: 112,
        maxdmg: 144,
        level: 80
    }
}
const PET_POISON_SPIT = {
    base: {
        cost: 20,
        base_cd: 10,
        duration: 8,
        ticks: 2,
        gcd: true,
        spell_name: 'Poison Spit',
        type: 'nature'
    },
    5: {
        mindmg: 48,
        maxdmg: 64,
        level: 70
    },
    6: {
        mindmg: 104,
        maxdmg: 136,
        level: 80
    }
}
const PET_RAKE = {
    base: {
        cost: 20,
        duration: 2,
        ticks: 1,
        base_cd: 10,
        gcd: true,
        spell_name: 'Rake',
        type: 'bleed'
    },
    5: {
        mindmg: 22,
        maxdmg: 30,
        dot_mindmg: 7,
        dot_maxdmg: 13,
        level: 70
    },
    6: {
        mindmg: 47,
        maxdmg: 67,
        dot_mindmg: 19,
        dot_maxdmg: 25,
        level: 80
    }
}
const PET_RAVAGE = {
    base: {
        cost: 0,
        base_cd: 10,
        gcd: true,
        spell_name: 'Ravage',
        type: 'physical'
    },
    5: {
        mindmg: 50,
        maxdmg: 70,
        level: 70
    },
    6: {
        mindmg: 106,
        maxdmg: 150,
        level: 80
    }
}
const PET_SAVAGE_REND = {
    base: {
        cost: 20,
        duration: 15,
        ticks: 3,
        base_cd: 60,
        gcd: true,
        spell_name: 'Savage Rend',
        type: 'physical'
    },
    5: {
        mindmg: 28,
        maxdmg: 38,
        dot_mindmg: 10,
        dot_maxdmg: 12,
        level: 70
    },
    6: {
        mindmg: 59,
        maxdmg: 83,
        dot_mindmg: 21,
        dot_maxdmg: 27,
        level: 80
    }
}
const PET_SCORPID_POISON = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Scorpid Poison',
        type: 'nature'
    },
    5: {
        mindmg: 35,
        maxdmg: 65,
        level: 70
    },
    6: {
        mindmg: 100,
        maxdmg: 130,
        level: 80
    }
}
const PET_SNATCH = {
    base: {
        cost: 20,
        base_cd: 60,
        gcd: true,
        spell_name: 'Snatch',
        type: 'physical'
    },
    5: {
        mindmg: 42,
        maxdmg: 58,
        level: 70
    },
    6: {
        mindmg: 89,
        maxdmg: 125,
        level: 80
    }
}
const PET_SONIC_BLAST = {
    base: {
        cost: 80,
        base_cd: 60,
        gcd: true,
        spell_name: 'Sonic Blast',
        type: 'nature'
    },
    5: {
        mindmg: 29,
        maxdmg: 41,
        level: 70
    },
    6: {
        mindmg: 62,
        maxdmg: 88,
        level: 80
    }
}
const PET_SPIRIT_STRIKE = {
    base: {
        cost: 20,
        base_cd: 10,
        duration: 6,
        ticks: 6,
        gcd: true,
        spell_name: 'Spirit Strike',
        type: 'arcane'
    },
    5: {
        mindmg: 23,
        maxdmg: 29,
        dot_mindmg: 23,
        dot_maxdmg: 29,
        level: 70
    },
    6: {
        mindmg: 49,
        maxdmg: 65,
        dot_mindmg: 49,
        dot_maxdmg: 65,
        level: 80
    }
}
const PET_SPORE_CLOUD = {
    base: {
        cost: 20,
        base_cd: 10,
        duration: 9,
        ticks: 3,
        gcd: true,
        spell_name: 'Spore Cloud',
        type: 'nature'
    },
    5: {
        dot_mindmg: 11,
        dot_maxdmg: 13,
        level: 70
    },
    6: {
        dot_mindmg: 22,
        dot_maxdmg: 28,
        level: 80
    }
}
const PET_STAMPEDE = {
    base: {
        cost: 0,
        base_cd: 60,
        gcd: true,
        spell_name: 'Stampede',
        type: 'physical'
    },
    5: {
        mindmg: 85,
        maxdmg: 115,
        level: 70
    },
    6: {
        mindmg: 182,
        maxdmg: 246,
        level: 80
    }
}
const PET_STING = {
    base: {
        cost: 20,
        base_cd: 6,
        gcd: true,
        spell_name: 'Sting',
        type: 'nature'
    },
    5: {
        mindmg: 30,
        maxdmg: 40,
        level: 70
    },
    6: {
        mindmg: 64,
        maxdmg: 86,
        level: 80
    }
}
const PET_SWIPE = {
    base: {
        cost: 20,
        base_cd: 5,
        gcd: true,
        spell_name: 'Swipe',
        type: 'physical'
    },
    5: {
        mindmg: 42,
        maxdmg: 58,
        level: 70
    },
    6: {
        mindmg: 90,
        maxdmg: 126,
        level: 80
    }
}
const PET_TENDON_RIP = {
    base: {
        cost: 20,
        base_cd: 20,
        gcd: true,
        spell_name: 'Tendon Rip',
        type: 'physical'
    },
    5: {
        mindmg: 33,
        maxdmg: 45,
        level: 70
    },
    6: {
        mindmg: 49,
        maxdmg: 69,
        level: 80
    }
}
const PET_VENOM_WEB_SPRAY = {
    base: {
        cost: 20,
        base_cd: 40,
        duration: 4,
        ticks: 1,
        gcd: true,
        spell_name: 'Venom Web Spray',
        type: 'nature'
    },
    5: {
        dot_mindmg: 33,
        dot_maxdmg: 33,
        level: 70
    },
    6: {
        dot_mindmg: 46,
        dot_maxdmg: 46,
        level: 80
    }
}

PET_SPELLS_DATA_MAPPER = {
    bite: PET_BITE,
    claw: PET_CLAW,
    smack: PET_SMACK,
    ravage: PET_RAVAGE,
    rake: PET_RAKE,
    savage_rend: PET_SAVAGE_REND,
    snatch: PET_SNATCH,
    sonic_blast: PET_SONIC_BLAST,
    lightning_breath: PET_LIGHTNING_BREATH,
    furious_howl: PET_FURIOUS_HOWL,
    sting: PET_STING,
    acid_spit: PET_ACID_SPIT,
    //warp: PET_WARP,
    //shell_shield: PET_SHELL_SHIELD,
    //dust_cloud: PET_DUST_CLOUD,
    spore_cloud: PET_SPORE_CLOUD,
    spirit_strike: PET_SPIRIT_STRIKE,
    venom_web_spray: PET_VENOM_WEB_SPRAY,
    poison_spit: PET_POISON_SPIT,
    //web: PET_WEB,
    stampede: PET_STAMPEDE,
    scorpid_poison: PET_SCORPID_POISON,
    nether_shock: PET_NETHER_SHOCK,
    //serenity_dust: PET_SERENITY_DUST,
    tendon_rip: PET_TENDON_RIP,
    //pummel: PET_PUMMEL,
    fire_breath: PET_FIRE_BREATH,
    monstrous_bite: PET_MONSTROUS_BITE,
    //bad_attitude: PET_BAD_ATTITUDE,
    pin: PET_PIN,
    lava_breath: PET_LAVA_BREATH,
    swipe: PET_SWIPE,
    gore: PET_GORE,
    demoralizing_screech: PET_DEMORALIZING_SCREECH,
    froststorm_breath: PET_FROSTSTORM_BREATH
}

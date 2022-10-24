const HEAD_ENCHANTS = {
  22840: {
    name: 'Arcanum of Rapidity',
    effectId: 2543,
    stats: {
        Haste: 10
    },
    Phase: 0,
    quality: "Uncommon",
    icon: 'inv_misc_gem_02',
    desc: '+10 Haste'
  },
  24162: {
    name: "Falcon's Call",
    effectId: 2586,
    stats: {
      Stam: 10,
      Hit: 10,
      RAP: 24
    },
    Phase: 0,
    icon: 'spell_nature_forceofnature',
    quality: "Rare",
    desc: '+10 Stam, +10 Hit, +24 RAP'
  },
  35452: {
    name: 'Glyph of Ferocity',
    effectId: 3003,
    stats: {
        MAP: 34,
        RAP: 34,
        Hit: 16
    },
    Phase: 0,
    quality: "Uncommon",
    icon: 'classic_ability_druid_demoralizingroar',
    desc: '+34 AP, +16 Hit'
  },
  35453: {
    name: 'Glyph of the Gladiator',
    effectId: 3004,
    stats: {
        Stam: 18,
        Resil: 20
    },
    Phase: 0,
    quality: "Uncommon",
    icon: 'inv_misc_statue_04',
    desc: '+18 Stam, +20 Resil'
  },
  50909: {
    name: 'Heavy Borean Armor Kit',
    effectId: 3330,
    stats: {
      Stam: 18
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_armorkit_30',
    desc: '+18 Stam'
  },
  61271: {
    name: 'Arcanum of the Savage Gladiator',
    effectId: 3842,
    stats: {
        Stam: 30,
        Resil: 25
    },
    Phase: 1,
    quality: "Heirloom",
    icon: 'ability_warrior_shieldmastery',
    desc: '+30 Stam, +25 Resil'
  },
  59954: {
    name: 'Arcanum of Torment',
    effectId: 3817,
    stats: {
        RAP: 50,
        MAP: 50,
        Crit: 20
    },
    Phase: 1,
    quality: "Heirloom",
    icon: 'ability_warrior_rampage',
    desc: '+50 AP, +20 Crit'
  },
  59777: {
    name: 'Arcanum of Triumph',
    effectId: 3795,
    stats: {
        RAP: 50,
        MAP: 50,
        Resil: 20
    },
    Phase: 1,
    quality: "Rare",
    icon: 'ability_warrior_shieldmastery',
    desc: '+50 AP, +20 Resil'
  }
}

const SHOULDER_ENCHANTS = {
  35439: {
    name: 'Greater Inscription of the Blade',
    effectId: 2997,
    stats: {
      MAP: 20,
      RAP: 20,
      Crit: 15
    },
    Phase: 0,
    quality: "Rare",
    icon: 'spell_holy_weaponmastery',
    desc: '+20 AP, +15 Crit'
  },
  35417: {
    name: 'Greater Inscription of Vengeance',
    effectId: 2986,
    stats: {
      MAP: 30,
      RAP: 30,
      Crit: 10
    },
    Phase: 0,
    quality: "Rare",
    icon: 'spell_holy_greaterblessingofkings',
    desc: '+30 AP, +10 Crit'
  },
  50909: {
    name: 'Heavy Borean Armor Kit',
    effectId: 3330,
    stats: {
      Stam: 18
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_armorkit_30',
    desc: '+18 Stam'
  },
  59934: {
    name: 'Greater Inscription of the Axe',
    effectId: 3808,
    stats: {
      RAP: 40,
      MAP: 40,
      Crit: 15
    },
    Phase: 1,
    quality: "Heirloom",
    icon: 'inv_axe_85',
    desc: '+40 AP, +15 Crit'
  },
  62384: {
    name: 'Greater Inscription of the Gladiator',
    effectId: 3852,
    stats: {
      Stam: 30,
      Resil: 15
    },
    Phase: 1,
    quality: "Epic",
    icon: 'inv_shoulder_61',
    desc: '+30 Stam, +15 Resil'
  },
  29483: {
    name: 'Might of the Scourge',
    effectId: 2717,
    stats: {
      MAP: 26,
      RAP: 26,
      Crit: 14
    },
    Phase: 0,
    quality: "Epic",
    icon: 'spell_shadow_deathpact',
    desc: '+26 AP, +14 Crit'
  },
  59929: {
    name: 'Lesser Inscription of the Axe',
    effectId: 3875,
    stats: {
      RAP: 30,
      MAP: 30,
      Crit: 10
    },
    Phase: 1,
    quality: "Rare",
    icon: 'inv_axe_82',
    desc: '+30 AP, +10 Crit'
  },
  61117: {
    name: 'Master\'s Inscription of the Axe',
    effectId: 3835,
    stats: {
      RAP: 120,
      MAP: 120,
      Crit: 15
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_inscription_tradeskill01',
    desc: '+120 AP, +15 Crit (Inscript)'
  },
}

const BACK_ENCHANTS = {
  34004: {
    name: 'Greater Agility',
    effectId: 368,
    stats: {
      Agi: 12
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+12 Agi'
  },
  60663: {
    name: 'Major Agility',
    effectId: 1099,
    stats: {
      Agi: 22
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+22 Agi'
  },
  44500: {
    name: 'Superior Agility',
    effectId: 983,
    stats: {
      Agi: 16
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+16 Agi'
  },
  60609: {
    name: 'Speed',
    effectId: 3825,
    stats: {
      Haste: 15
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+15 Haste'
  },
  47898: {
    name: 'Greater Speed',
    effectId: 3831,
    stats: {
      Haste: 23
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+23 Haste'
  },
  55002: {
    name: 'Flexweave Underlay',
    effectId: 3605,
    stats: {
      Agi: 23
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engineering',
    desc: '+23 Agi and Parachute (Engi)'
  },
  44631: {
    name: 'Shadow Armor',
    effectId: 3256,
    stats: {
      Agi: 10
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+10 Agi'
  },
  55777: {
    name: 'Swordguard Embroidery',
    effectId: 3730,
    stats: {
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_thread_01',
    desc: '+400 AP Chance on Hit (Tailor)'
  },
}

const CHEST_ENCHANTS = {
  27957: {
    name: 'Exceptional Health',
    effectId: 2659,
    stats: {
      Health: 150
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+150 HP'
  },
  27958: {
    name: 'Exceptional Mana',
    effectId: 2660,
    stats: {
      Mana: 250
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+250 Mana'
  },
  27960: {
    name: 'Exceptional Stats',
    effectId: 2661,
    stats: {
      Agi: 6,
      Str: 6,
      Stam: 6,
      Spi: 6,
      Int: 6
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+6 All Stats'
  },
  44623: {
    name: 'Super Stats',
    effectId: 3252,
    stats: {
      Agi: 8,
      Str: 8,
      Stam: 8,
      Spi: 8,
      Int: 8
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+8 All Stats'
  },
  50909: {
    name: 'Heavy Borean Armor Kit',
    effectId: 3330,
    stats: {
      Stam: 18
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_armorkit_30',
    desc: '+18 Stam'
  },
  33992: {
    name: 'Major Resilience',
    effectId: 2933,
    stats: {
      Resil: 15
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+15 Resil'
  },
  44588: {
    name: 'Exceptional Resilience',
    effectId: 3245,
    stats: {
      Resil: 20
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+20 Resil'
  },
  44509: {
    name: 'Greater Mana Restoration',
    effectId: 2381,
    stats: {
      MP5: 8
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+8 Mp5'
  },
  33991: {
    name: 'Restore Mana Prime',
    effectId: 3150,
    stats: {
      MP5: 7
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+7 Mp5'
  },
  60692: {
    name: 'Powerful Stats',
    effectId: 3832,
    stats: {
      Agi: 10,
      Str: 10,
      Stam: 10,
      Spi: 10,
      Int: 10
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+10 All Stats'
  },
}

const WRIST_ENCHANTS = {
  44575: {
    name: 'Greater Assault',
    effectId: 3845,
    stats: {
      MAP: 50,
      RAP: 50
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+50 AP'
  },
  34002: {
    name: 'Assault',
    effectId: 1593,
    stats: {
      MAP: 24,
      RAP: 24
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+24 AP'
  },
  60616: {
    name: 'Striking',
    effectId: 1600,
    stats: {
      RAP: 38,
      MAP: 38
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+38 AP'
  },
  62256: {
    name: 'Major Stamina',
    effectId: 3850,
    stats: {
      Stam: 40
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+40 Stam'
  },
  44555: {
    name: 'Exceptional Intellect',
    effectId: 1119,
    stats: {
      Int: 16
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+16 Int'
  },
  27913: {
    name: 'Restore Mana Prime',
    effectId: 2679,
    stats: {
      MP5: 6
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+6 Mp5'
  },
  44616: {
    name: 'Greater Stats',
    effectId: 2661,
    stats: {
      Agi: 6,
      Str: 6,
      Stam: 6,
      Spi: 6,
      Int: 6
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+4 All Stats'
  },
  57690: {
    name: 'Fur Lining - Stamina',
    effectId: 3757,
    stats: {
      Stam: 102
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_leatherworking',
    desc: '+102 Stam (Leatherworking)'
  },
  57683: {
    name: 'Fur Lining - Attack Power',
    effectId: 3756,
    stats: {
      MAP: 130,
      RAP: 130
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_leatherworking',
    desc: '+130 AP (Leatherworking)'
  },
}

const HAND_ENCHANTS = {
  44529: {
    name: 'Major Agility',
    effectId: 3222,
    stats: {
      Agi: 20
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+20 Agi'
  },
  44513: {
    name: 'Greater Assault',
    effectId: 3829,
    stats: {
      MAP: 35,
      RAP: 35
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+35 AP'
  },
  60668: {
    name: 'Crusher',
    effectId: 1603,
    stats: {
      RAP: 44,
      MAP: 44
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+44 AP'
  },
  54998: {
    name: 'Hand-Mounted Pyro Rocket',
    effectId: 3603,
    stats: {
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engineering',
    desc: '1800 Dmg Rocket on Use (Engi)'
  },
  54999: {
    name: 'Hyperspeed Accelerators',
    effectId: 3604,
    stats: {
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engineering',
    desc: '+340 Haste on Use (Engi)'
  },
  50909: {
    name: 'Heavy Borean Armor Kit',
    effectId: 3330,
    stats: {
      Stam: 18
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_armorkit_30',
    desc: '+18 Stam'
  },
  25080: {
    name: 'Superior Agility',
    effectId: 2564,
    stats: {
      Agi: 15
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+15 Agi'
  },
  33994: {
    name: 'Precise Strikes',
    effectId: 2935,
    stats: {
      Hit: 15
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+15 Hit'
  },
  44488: {
    name: 'Precision',
    effectId: 3234,
    stats: {
      Hit: 20
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+20 Hit'
  },
}

const WAIST_ENCHANTS = {
  54793: {
    name: 'Frag Belt',
    effectId: 3601,
    stats: {
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engineering',
    desc: 'Cobalt Bomb every 6 min'
  },
  55655: {
    name: 'Eternal Belt Buckle',
    effectId: 3729,
    stats: {
    },
    Phase: 1,
    quality: "Rare",
    icon: 'inv_belt_36',
    desc: '+1 Prismatic Gem Socket'
  },
}

const LEG_ENCHANTS = {
  35489: {
    name: 'Clefthide Leg Armor',
    effectId: 3011,
    stats: {
      Agi: 10,
      Stam: 30
    },
    Phase: 0,
    quality: "Rare",
    icon: 'inv_misc_armorkit_23',
    desc: '+10 Agi, +30 Stam'
  },
  35488: {
    name: 'Cobrahide Leg Armor',
    effectId: 3010,
    stats: {
      MAP: 40,
      RAP: 40,
      Crit: 10
    },
    Phase: 0,
    quality: "Rare",
    icon: 'inv_misc_armorkit_21',
    desc: '+40 AP, +10 Crit'
  },
  50909: {
    name: 'Heavy Borean Armor Kit',
    effectId: 3330,
    stats: {
      Stam: 18
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_armorkit_30',
    desc: '+18 Stam'
  },
  35495: {
    name: 'Nethercleft Leg Armor',
    effectId: 3013,
    stats: {
      Agi: 12,
      Stam: 40
    },
    Phase: 0,
    quality: "Epic",
    icon: 'inv_misc_armorkit_25',
    desc: '+12 Agi, +40 Stam'
  },
  35490: {
    name: 'Nethercobra Leg Armor',
    effectId: 3012,
    stats: {
      MAP: 50,
      RAP: 50,
      Crit: 12
    },
    Phase: 0,
    quality: "Epic",
    icon: 'inv_misc_armorkit_25',
    desc: '+50 AP, +12 Crit'
  },
  50901: {
    name: 'Jormungar Leg Armor',
    effectId: 3325,
    stats: {
      Agi: 15,
      Stam: 45
    },
    Phase: 1,
    quality: "Rare",
    icon: 'inv_misc_armorkit_31',
    desc: '+15 Agi, +45 Stam'
  },
  50902: {
    name: 'Nerubian Leg Armor',
    effectId: 3326,
    stats: {
      MAP: 55,
      RAP: 55,
      Crit: 15
    },
    Phase: 1,
    quality: "Rare",
    icon: 'inv_misc_armorkit_29',
    desc: '+55 AP, +15 Crit'
  },
  60581: {
    name: 'Frosthide Leg Armor',
    effectId: 3822,
    stats: {
      Agi: 22,
      Stam: 55
    },
    Phase: 1,
    quality: "Epic",
    icon: 'inv_misc_armorkit_32',
    desc: '+22 Agi, +55 Stam'
  },
  60582: {
    name: 'Icescale Leg Armor',
    effectId:  3823,
    stats: {
      MAP: 75,
      RAP: 75,
      Crit: 22
    },
    Phase: 1,
    quality: "Epic",
    icon: 'inv_misc_armorkit_33',
    desc: '+75 AP, +22 Crit'
  },
  60583: {
    name: 'Jormungar Leg Reinforcements',
    effectId: 3327,
    stats: {
      Agi: 22,
      Stam: 55
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_leatherworking',
    desc: '+22 Agi, +55 Stam'
  },
  60584: {
    name: 'Nerubian Leg Reinforcements',
    effectId: 3328,
    stats: {
      MAP: 75,
      RAP: 75,
      Crit: 22
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_leatherworking',
    desc: '+75 AP, +22 Crit'
  },
  62447: {
    name: 'Earthen Leg Armor',
    effectId: 3853,
    stats: {
      Stam: 28,
      Resil: 40
    },
    Phase: 1,
    quality: "Epic",
    icon: 'inv_misc_armorkit_18',
    desc: '+28 Stam, +40 Resil'
  }
}

const FEET_ENCHANTS = {
  47901: {
    name: "Tuskarr's Vitality",
    effectId: 3232,
    stats: {
      Stam: 15
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+15 Stam, 8% Speed'
  },
  60763: {
    name: "Greater Assault",
    effectId: 1597,
    stats: {
      MAP: 32,
      RAP: 32
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+32 AP'
  },
  44589: {
    name: "Superior Agility",
    effectId: 983,
    stats: {
      Agi: 16
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+16 Agi'
  },
  60623: {
    name: "Icewalker",
    effectId: 3826,
    stats: {
      Hit: 12,
      Crit: 12
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+12 Hit, +12 Crit'
  },
  44528: {
    name: "Greater Fortitude",
    effectId: 1075,
    stats: {
      Stam: 22
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+22 Stam'
  },
  60606: {
    name: "Assault",
    effectId: 3824,
    stats: {
      MAP: 24,
      RAP: 24
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+24 AP'
  },
  34008: {
    name: "Boar's Speed",
    effectId: 2940,
    special: { moveSpeed: 1.08 },
    stats: {
      Stam: 9,
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+9 Stam, +8% Speed'
  },
  34007: {
    name: "Cat's Switfness",
    effectId: 2939,
    special: { moveSpeed: 1.08 },
    stats: {
      Agi: 6,
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+6 Agi, +8% Speed'
  },
  27951: {
    name: 'Dexterity',
    effectId: 2657,
    stats: {
      Agi: 12
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+12 Agi'
  },
  27950: {
    name: 'Fortitude',
    effectId: 2649,
    stats: {
      Stam: 12
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+12 Stam'
  },
  20023: {
    name: 'Greater Agility',
    effectId: 1887,
    stats: {
      Agi: 7
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+7 Agi'
  },
  50909: {
    name: 'Heavy Borean Armor Kit',
    effectId: 3330,
    stats: {
      Stam: 18
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_armorkit_30',
    desc: '+18 Stam'
  },
  27954: {
    name: 'Surefooted',
    effectId: 2658,
    stats: {
      Hit: 10,
      Crit: 10
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+10 Hit, +10 Crit'
  },
  55016: {
    name: 'Nitro Boosts',
    effectId: 3606,
    stats: {
      Crit: 24
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+24 Crit, 150% Speed Boost'
  },
}

const RING_ENCHANTS = {
  44645: {
    name: 'Assault',
    effectId: 3839,
    stats: {
      MAP: 40,
      RAP: 40
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+40 AP'
  },
  59636: {
    name: 'Stamina',
    effectId: 3791,
    stats: {
      Stam: 30
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+30 Stam'
  },
  27927: {
    name: 'Stats',
    effectId: 2931,
    stats: {
      Agi: 4,
      Str: 4,
      Stam: 4,
      Spi: 4,
      Int: 4
    },
    Phase: 0,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+4 All Stats'
  }
}

const MELEE_ENCHANTS = {
  59619: {
    name: 'Accuracy',
    effectId: 3788,
    stats: {
      Hit: 25,
      Crit: 25
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+25 Hit, +25 Crit'
  },
  60707: {
    name: 'Superior Potency',
    effectId: 3833,
    stats: {
      MAP: 65,
      RAP: 65
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+65 AP'
  },
  60691: {
    name: 'Massacre (2H)',
    effectId: 3827,
    for_two_handed: true,
    stats: {
      MAP: 110,
      RAP: 110
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+110 AP'
  },
  44595: {
    name: 'Scourgebane (2H)',
    effectId: 3247,
    for_two_handed: true,
    stats: {
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+140 AP to Undead' 
  },
  44633: {
    name: 'Exceptional Agility',
    effectId: 1103,
    stats: {
      Agi: 26
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+26 Agi'
  },
  44630: {
    name: 'Greater Savagery (2H)',
    effectId: 3828,
    for_two_handed: true,
    stats: {
      MAP: 85,
      RAP: 85
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+85 AP'
  },
  60621: {
    name: 'Superior Potency',
    effectId: 1606,
    stats: {
      MAP: 50,
      RAP: 50
    },
    Phase: 1,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+50 AP'
  },
  23800: {
    name: 'Agility',
    effectId: 2564,
    stats: {
      Agi: 15,
    },
    Phase: 0,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+15 Agi'
  },
  27837: {
    name: 'Agility (2H)',
    effectId: 2646,
    for_two_handed: true,
    stats: {
      Agi: 25,
    },
    Phase: 0,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+25 Agi (2H)'
  },
  42620: {
    name: 'Greater Agility',
    effectId: 3222,
    stats: {
      Agi: 20
    },
    Phase: 0,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+20 Agi'
  },
  27977: {
    name: 'Major Agility (2H)',
    effectId: 2670,
    for_two_handed: true,
    stats: {
      Agi: 35
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+35 Agi (2H)'
  },
  27968: {
    name: 'Major Intellect',
    effectId: 2666,
    stats: {
      Int: 30
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+30 Int'
  },
  23804: {
    name: 'Mighty Intellect',
    effectId: 2568,
    stats: {
      Int: 22
    },
    Phase: 0,
    quality: "Common",
    icon: 'inv_misc_note_01',
    desc: '+22 Int'
  },
  27971: {
    name: 'Savagery (2H)',
    effectId: 2667,
    for_two_handed: true,
    stats: {
      MAP: 70,
      RAP: 70
    },
    Phase: 0,
    quality: "Common",
    icon: 'trade_engraving',
    desc: '+70 AP (2H)'
  }
}

const RANGE_ENCHANTS = {
  55135: {
    name: 'Heartseeker Scope',
    effectId: 3608,
    stats: {
      RangeCrit: 40
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engineering',
    desc: '+40 Ranged Crit'
  },
  55076: {
    name: 'Sun Scope',
    effectId: 3607,
    stats: {
      Haste: 40
    },
    Phase: 1,
    quality: "Common",
    icon: 'trade_engineering',
    desc: '+40 Ranged Haste'
  },
  61468: {
    name: 'Diamond Cut Refractor Scope',
    effectId: 3843,
    special: {
      rangedmgbonus: 15
    },
    Phase: 1,
    quality: "Rare",
    icon: 'trade_engineering',
    desc: '+15 Ranged Weapon Damage'
  },
  22779: {
    name: 'Biznicks 247x128 Accurascope',
    effectId: 2523,
    stats: {
      RangeHit: 30
    },
    Phase: 0,
    quality: "Rare",
    icon: 'trade_engineering',
    desc: '+30 Ranged Hit'
  },
  30252: {
    name: 'Khorium Scope',
    effectId: 2723,
    special: {
      rangedmgbonus: 12
    },
    Phase: 0,
    quality: "Rare",
    icon: 'trade_engineering',
    desc: '+12 Ranged Weapon Damage'
  },
  30260: {
    name: 'Stabilitzed Eternium Scope',
    effectId: 2724,
    stats: {
      RangeCrit: 28
    },
    Phase: 0,
    quality: "Rare",
    icon: 'trade_engineering',
    desc: '+28 Ranged Crit'
  }
}

const ATTACHMENTS = {
  1:{
    name: 'None',
  },
  23122: {
    name: 'Consecrated Weapon (ilvl 165)',
    effectId: 2955,
    stats: {
    },
    Phase: 0,
    quality: "Uncommon",
    icon: 'inv_stone_sharpeningstone_02'
  },
  28421: {
    name: 'Adamantite Weightstone',
    effectId: 2955,
    stats: {
      RangeCrit: 14,
      MeleeCrit: 14
    },
    special: {
      rangedmgbonus: 12,
      dmgbonus: 12,
    },
    type: 'blunt',
    Phase: 0,
    quality: "Uncommon",
    icon: 'inv_stone_weightstone_07'
  },
  23529: {
    name: 'Adamantite Sharpening Stone (ilvl 165)',
    effectId: 2713,
    stats: {
      MeleeCrit: 14
    },
    special: {
      rangedmgbonus: 12,
      dmgbonus: 12,
    },
    type: 'sharp',
    Phase: 0,
    quality: "Uncommon",
    icon: 'inv_stone_sharpeningstone_07'
  },
  22521: {
    name: 'Superior Mana Oil (ilvl 165)',
    effectId: 2677,
    stats: {
      MP5: 14
    },
    Phase: 0,
    quality: "Common",
    icon: 'inv_potion_101'
  },
  34539: {
    name: 'Righteous Weapon Coating (ilvl 165)',
    effectId: 3266,
    Phase: 0,
    quality: "Common",
    icon: 'inv_potion_101'
  },
}

const ENCHANT_MAP = {
  back: BACK_ENCHANTS,
  chest: CHEST_ENCHANTS,
  feet: FEET_ENCHANTS,
  hand: HAND_ENCHANTS,
  head: HEAD_ENCHANTS,
  leg: LEG_ENCHANTS,
  mainhand: MELEE_ENCHANTS,
  offhand: MELEE_ENCHANTS,
  range: RANGE_ENCHANTS,
  ring1: RING_ENCHANTS,
  ring2: RING_ENCHANTS,
  shoulder: SHOULDER_ENCHANTS,
  waist: WAIST_ENCHANTS,
  wrist: WRIST_ENCHANTS,
  attachment: ATTACHMENTS
};

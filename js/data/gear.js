const SETS = {
    263: {
        name: "Ahn'Kahar Blood Hunter",
        abrv: 't10',
        bonuses: {
         2: { exploit_weakness: 15 },
         4: { stinger: 20 }
        }
    },
    859: {
        name: 'Windrunner',
        abrv: 't9',
        bonuses: {
         2: { serpent_crits: 1 },
         4: { pet_ap: 600 }
        }
    },
    170: {
        name: 'Scourgestalker',
        abrv: 't8',
        bonuses: {
         2: { serpent_dmg: 10 },
         4: { precision_shots: 600 }
        }
    },
    140: {
        name: 'Cryptstalker',
        abrv: 't7',
        bonuses: {
         2: { pet_dmg: 1.05 },
         4: { speed_viper: 20 }
        }
    },
    650: {
        name: 'Beast Lord Armor',
        abrv: 'beast_lord',
        bonuses: {
         2: { trap_cdr: 4 },
         4: { kc_arp: 85 }
        }
    },
    '-7': {
        name: "Brutal Gladiator's Pursuit",
        abrv: 'brutal_gladiator_pursuit',
        bonuses: {
         2: { stats: { Resil: 35 } },
         4: { multishot_cdr: 1 }
        }
    },
    '-58': {
        name: "Deadly Gladiator's Pursuit",
        abrv: 'deadly_gladiator_pursuit',
        bonuses: {
         2: { stats: { Resil: 100, RAP: 50, MAP: 50 } },
         4: { trap_cdr: 2, stats: { RAP: 150, MAP: 150 } }
        }
    },
    530: {
        name: 'Cryptstalker Armor',
        abrv: 'cryptstalker',
        bonuses: {
         2: { rf_duration: 4 },
         4: { stats: { RAP: 50, MAP: 50 } },
         6: { crit_mana_return: 50 },
         8: { reduced_mana_cost: 20 },
        }
    },
    651: {
        name: 'Demon Stalker Armor',
        abrv: 'demon_stalker',
        bonuses: {
         2: { fd_resist: 0.05 },
         4: { reduced_ms_mana_ratio: 0.9 },
        }
    },
    586: {
        name: "Gladiator's Pursuit",
        abrv: 'gladiator_pursuit',
        bonuses: {
         2: { stats: { Resil: 35 } },
         4: { multishot_cdr: 1 }
        }
    },
    669: {
        name: "Gronnstalker's Armor",
        abrv: 'gronnstalker',
        bonuses: {
         2: { viper_mana_gain_ratio: 0.05 },
         4: { steady_shot_dmg_bonus: 0.1 }
        }
    },
    706: {
        name: "Merciless Gladiator's Pursuit",
        abrv: 'merciless_gladiator_pursuit',
        bonuses: {
         2: { stats: { Resil: 35 } },
         4: { multishot_cdr: 1 }
        }
    },
    652: {
        name: 'Rift Stalker Armor',
        abrv: 'rift_stalker',
        bonuses: {
         2: { pet_heal_on_dmg: 0.15 },
         4: { ss_crit: 5 }
        }
    },
    749: {
        name: "Stalker's Chain Battlegear",
        abrv: 'stalker_chain_battlegear',
        bonuses: {
            2: { stats: { Resil: 35 } },
            4: { conc_shot_cdr: 1 }
        }
    },
    723: {
        name: "Vengeful Gladiator's Pursuit",
        abrv: 'vengeful_gladiator_pursuit',
        bonuses: {
         2: { stats: { Resil: 35 } },
         4: { multishot_cdr: 1 }
        }
    },
}

const QUIVERS = {
    18714: {
        name: "Ancient Sinew Wrapped Lamina",
        Location: "Petrified Leaf MC Quest and Blue Sinew",
        icon: "inv_misc_quiver_03",
        quality: "Epic"
    },
    19319: {
        name: "Knothide Quiver",
        Location: "Crafted - LW",
        icon: "inv_misc_quiver_06",
        quality: "Rare"
    },
    19320: {
        name: "Harpy Hide Quiver",
        Location: "Honor Reward",
        icon: "inv_misc_ammo_bullet_01",
        quality: "Rare"
    },
    29118: {
        name: "Netherscale Ammo Pouch",
        Location: "Crafted - LW",
        icon: "inv_misc_bag_10_black",
        quality: "Rare"
    },
    29143: {
        name: "Clefthoof Hide Quiver",
        Location: "The Mag'har - Honored",
        icon: "inv_misc_quiver_08",
        quality: "Rare"
    },
    29144: {
        name: "Smuggler's Ammo Pouch",
        Location: "Reputation Reward",
        icon: "inv_misc_quiver_06",
        quality: "Rare"
    },
    34099: {
        name: "Quiver of a Thousand Feathers",
        Location: "Crafted - LW",
        icon: "inv_misc_bag_09",
        quality: "Uncommon"
    },
    34100: {
        name: "Worg Hide Quiver",
        Location: "Reputation Reward",
        icon: "inv_misc_quiver_06",
        quality: "Uncommon"
    },
    34105: {
        name: "Knothide Ammo Pouch",
        Location: "Crafted - LW",
        icon: "classic_inv_misc_quiver_05",
        quality: "Rare"
    },
    34106: {
        name: "Gnoll Skin Bandolier",
        Location: "Honor Reward",
        icon: "inv_misc_bag_21",
        quality: "Rare"
    }
}

const GEAR_MAP = {
  ammo: AMMOS,
  back: BACKS,
  chest: CHESTS,
  feet: FEET,
  hand: HANDS,
  head: HEADS,
  leg: LEGS,
  mainhand: MELEE_WEAPONS,
  neck: NECKS,
  offhand: MELEE_WEAPONS,
  quiver: QUIVERS,
  range: RANGED_WEAPONS,
  ring1: RINGS,
  ring2: RINGS,
  shoulder: SHOULDERS,
  trinket1: TRINKETS,
  trinket2: TRINKETS,
  waist: WAISTS,
  wrist: WRISTS
};

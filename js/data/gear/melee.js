const MELEE_WEAPONS = {
    23039: {
        name: "The Eye of Nerub",
        stats: {
            Agi: 30,
            Stam: 22,
            MAP: 60,
            RAP: 60,
            Hit: 16
        },
        Location: "Naxx",
        type: "polearm",
        speed: 2.3,
        mindmg: 132,
        maxdmg: 199,
        hand: "Two",
        Phase: 0,
        icon: "inv_weapon_halberd_04",
        quality: "Epic"
    },
    23499: {
        name: "Fel Iron Greatsword",
        stats: {
            MAP: 62,
            RAP: 62,
            Crit: 30
        },
        Location: "Crafting",
        type: "sword",
        speed: 3.2,
        mindmg: 172,
        maxdmg: 259,
        hand: "Two",
        Phase: 0,
        icon: "inv_sword_26",
        quality: "Uncommon"
    },
    23503: {
        name: "Adamantite Cleaver",
        stats: {
            Agi: 25,
            tam: 39,
            MAP: 52,
            RAP: 52
        },
        Location: "Crafting",
        type: "axe",
        speed: 3.5,
        mindmg: 203,
        maxdmg: 305,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_09",
        quality: "Uncommon"
    },
    23504: {
        name: "Adamantite Dagger",
        stats: {
            Crit: 10,
            Hit: 15
        },
        Location: "Crafting",
        type: "dagger",
        speed: 1.9,
        mindmg: 74,
        maxdmg: 138,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_12",
        quality: "Uncommon"
    },
    23540: {
        name: "Felsteel Longblade",
        stats: {
            Agi: 25,
            Stam: 14
        },
        Location: "Crafting",
        type: "sword",
        speed: 2.2,
        mindmg: 128,
        maxdmg: 239,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_59",
        quality: "Epic"
    },
    23542: {
        name: "Fel Edged Battleaxe",
        stats: {
            Crit: 21,
            Hit: 14
        },
        Location: "Crafting",
        sockets: [
            "Red"
        ],
        socketBonus: {
            Stam: 3
        },
        type: "axe",
        speed: 2.2,
        mindmg: 128,
        maxdmg: 239,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_15",
        quality: "Epic"
    },
    23543: {
        name: "Felsteel Reaper",
        stats: {
            MAP: 112,
            RAP: 112,
            Crit: 30
        },
        Location: "Crafting",
        type: "sword",
        speed: 3.4,
        mindmg: 295,
        maxdmg: 443,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_02",
        quality: "Epic"
    },
    23555: {
        name: "Dirge",
        stats: {
            MAP: 36,
            RAP: 36,
            Crit: 20
        },
        Location: "Crafting",
        type: "dagger",
        speed: 1.4,
        mindmg: 81,
        maxdmg: 152,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_05",
        quality: "Epic"
    },
    24020: {
        name: "Shadowrend Longblade",
        stats: {
            Stam: 12,
            MAP: 22,
            RAP: 22,
            Crit: 12
        },
        Location: "Dungeon",
        type: "sword",
        speed: 2.6,
        mindmg: 96,
        maxdmg: 179,
        hand: "Main",
        Phase: 0,
        icon: "inv_sword_63",
        quality: "Rare"
    },
    24356: {
        name: "Wastewalker Shiv",
        stats: {
            Stam: 12,
            MAP: 28,
            RAP: 28,
            Hit: 12
        },
        Location: "Dungeon",
        type: "dagger",
        speed: 1.8,
        mindmg: 69,
        maxdmg: 130,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_shortblade_33",
        quality: "Rare"
    },
    24394: {
        name: "Warsong Howling Axe",
        stats: {
            Stam: 37,
            MAP: 80,
            RAP: 80
        },
        Location: "Dungeon",
        type: "axe",
        speed: 3.1,
        mindmg: 174,
        maxdmg: 262,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_61",
        quality: "Rare"
    },
    24464: {
        name: "The Stalker's Fangs",
        stats: {
            Stam: 16,
            MAP: 20,
            RAP: 20,
            Crit: 15
        },
        Location: "Dungeon",
        type: "dagger",
        speed: 1.8,
        mindmg: 71,
        maxdmg: 133,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_53",
        quality: "Rare"
    },
    25495: {
        name: "Wolfrider's Dagger",
        stats: {
            Stam: 13,
            MAP: 18,
            RAP: 18,
            Crit: 10
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 61,
        maxdmg: 115,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_03",
        quality: "Uncommon"
    },
    25538: {
        name: "Sporeling Claw",
        stats: {
            Stam: 18,
            MAP: 24,
            RAP: 24,
            Hit: 12
        },
        Location: "Quest Reward",
        type: "fist",
        speed: 2.5,
        mindmg: 99,
        maxdmg: 184,
        hand: "One",
        Phase: 0,
        icon: "inv_gauntlets_11",
        quality: "Rare"
    },
    25545: {
        name: "Talbuk Dirk",
        stats: {
            MAP: 20,
            RAP: 20,
            Hit: 11
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 70,
        maxdmg: 131,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_03",
        quality: "Uncommon"
    },
    25763: {
        name: "Ceremonial Warmaul Blood-blade",
        stats: {
            Agi: 13,
            Stam: 19,
            MAP: 26,
            RAP: 26
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.7,
        mindmg: 74,
        maxdmg: 139,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_05",
        quality: "Rare"
    },
    25823: {
        name: "Gladiator's Slicer",
        stats: {
            Stam: 21,
            MAP: 28,
            RAP: 28,
            Crit: 15,
            Hit: 9,
            Resil: 10
        },
        Location: "Honor Reward",
        type: "sword",
        speed: 2.6,
        mindmg: 189,
        maxdmg: 285,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_11",
        quality: "Rare"
    },
    25825: {
        name: "Footman's Longsword",
        stats: {
            Stam: 16,
            MAP: 22,
            RAP: 22,
            Hit: 11
        },
        Location: "Reputation Reward",
        type: "sword",
        speed: 2.1,
        mindmg: 77,
        maxdmg: 145,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_20",
        quality: "Rare"
    },
    25916: {
        name: "Terokkar Axe",
        stats: {
            Stam: 13,
            MAP: 20,
            RAP: 20,
            Crit: 10
        },
        Location: "Quest Reward",
        type: "axe",
        speed: 2.6,
        mindmg: 90,
        maxdmg: 169,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_03",
        quality: "Uncommon"
    },
    25918: {
        name: "Blood-Guided Knife",
        stats: {
            Stam: 15,
            Hit: 10
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.3,
        mindmg: 45,
        maxdmg: 84,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_15",
        quality: "Uncommon"
    },
    25943: {
        name: "Creepjacker",
        stats: {
            Stam: 13,
            MAP: 28,
            RAP: 28,
            Crit: 13
        },
        Location: "Dungeon",
        type: "fist",
        speed: 2.6,
        mindmg: 106,
        maxdmg: 197,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_shortblade_16",
        quality: "Rare"
    },
    25952: {
        name: "Scimitar of the Nexus-Stalkers",
        stats: {
            Agi: 14,
            Stam: 16,
            Hit: 12
        },
        Location: "Dungeon",
        type: "sword",
        speed: 1.5,
        mindmg: 61,
        maxdmg: 114,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_09",
        quality: "Rare"
    },
    27424: {
        name: "Amani Venom-Axe",
        stats: {
            Stam: 15,
            MAP: 26,
            RAP: 26,
            Crit: 15
        },
        Location: "Dungeon",
        type: "axe",
        speed: 2.3,
        mindmg: 101,
        maxdmg: 188,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_15",
        quality: "Rare"
    },
    27673: {
        name: "Phosphorescent Blade",
        stats: {
            Stam: 12,
            MAP: 40,
            RAP: 40,
            Crit: 11
        },
        Location: "Dungeon",
        type: "sword",
        speed: 2.4,
        mindmg: 120,
        maxdmg: 224,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_27",
        quality: "Rare"
    },
    27751: {
        name: "Survivalist's Pike",
        stats: {
            Agi: 21,
            Stam: 30,
            Int: 20,
            MAP: 40,
            RAP: 40
        },
        Location: "Quest Reward",
        type: "polearm",
        speed: 3.2,
        mindmg: 172,
        maxdmg: 259,
        hand: "Two",
        Phase: 0,
        icon: "inv_spear_02",
        quality: "Uncommon"
    },
    27754: {
        name: "Hungering Spineripper",
        stats: {
            Stam: 13,
            MAP: 30,
            RAP: 30,
            Hit: 16
        },
        Location: "Dungeon",
        type: "dagger",
        speed: 1.8,
        mindmg: 103,
        maxdmg: 155,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_36",
        quality: "Uncommon"
    },
    27756: {
        name: "Marshfang Blade Axe",
        stats: {
            Agi: 12,
            MAP: 24,
            RAP: 24
        },
        Location: "Quest Reward",
        type: "axe",
        speed: 1.5,
        mindmg: 51,
        maxdmg: 96,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_14",
        quality: "Uncommon"
    },
    27767: {
        name: "Bogreaver",
        stats: {
            Stam: 15,
            MAP: 28,
            RAP: 28,
            Crit: 18
        },
        Location: "Dungeon",
        type: "axe",
        speed: 1.7,
        mindmg: 85,
        maxdmg: 159,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_55",
        quality: "Rare"
    },
    27846: {
        name: "Claw of the Watcher",
        stats: {
            MAP: 24,
            RAP: 24,
            Crit: 12
        },
        Location: "Dungeon",
        sockets: [
            "Blue",
            "Red"
        ],
        socketBonus: {
            Crit: 3
        },
        type: "fist",
        speed: 2.5,
        mindmg: 125,
        maxdmg: 233,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_hand_07",
        quality: "Rare"
    },
    27903: {
        name: "Sonic Spear",
        stats: {
            Agi: 35,
            Stam: 30,
            MAP: 62,
            RAP: 62,
            Hit: 24
        },
        Location: "Dungeon",
        type: "polearm",
        speed: 3.5,
        mindmg: 261,
        maxdmg: 392,
        hand: "Two",
        Phase: 0,
        icon: "inv_spear_08",
        quality: "Rare"
    },
    28189: {
        name: "Latro's Shifting Sword",
        stats: {
            Agi: 15,
            MAP: 26,
            RAP: 26
        },
        Location: "Dungeon",
        type: "sword",
        speed: 1.4,
        mindmg: 70,
        maxdmg: 131,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_76",
        quality: "Rare"
    },
    28222: {
        name: "Reaver of the Infinites",
        stats: {
            Stam: 22,
            MAP: 50,
            RAP: 50,
            Resil: 27
        },
        Location: "Dungeon",
        sockets: [
            "Red",
            "Blue",
            "Yellow"
        ],
        socketBonus: {
            Resil: 4
        },
        type: "axe",
        speed: 3.6,
        mindmg: 268,
        maxdmg: 403,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_71",
        quality: "Rare"
    },
    28226: {
        name: "Timeslicer",
        stats: {
            Stam: 13,
            MAP: 30,
            RAP: 30
        },
        Location: "Dungeon",
        type: "dagger",
        speed: 1.4,
        mindmg: 80,
        maxdmg: 121,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_51",
        quality: "Rare"
    },
    28263: {
        name: "Stellaris",
        stats: {
            Agi: 21,
            Stam: 12,
            MAP: 22,
            RAP: 22
        },
        Location: "Dungeon",
        type: "axe",
        speed: 1.9,
        mindmg: 95,
        maxdmg: 177,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_63",
        quality: "Rare"
    },
    28267: {
        name: "Edge of the Cosmos",
        stats: {
            Stam: 13,
            MAP: 30,
            RAP: 30,
            Crit: 16
        },
        Location: "Dungeon",
        type: "sword",
        speed: 2.6,
        mindmg: 130,
        maxdmg: 243,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_77",
        quality: "Rare"
    },
    28295: {
        name: "Gladiator's Shanker",
        stats: {
            Stam: 21,
            MAP: 28,
            RAP: 28,
            Crit: 15,
            Hit: 9,
            Resil: 10
        },
        Location: "Honor Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 131,
        maxdmg: 197,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_71",
        quality: "Epic"
    },
    28298: {
        name: "Gladiator's Decapitator",
        stats: {
            Stam: 48,
            MAP: 64,
            RAP: 64,
            Crit: 35,
            Hit: 20,
            Resil: 28
        },
        Location: "Honor Reward",
        type: "axe",
        speed: 3.6,
        mindmg: 341,
        maxdmg: 513,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_68",
        quality: "Epic"
    },
    28300: {
        name: "Gladiator's Painsaw",
        stats: {
            Stam: 48,
            MAP: 70,
            RAP: 70,
            Crit: 35,
            Resil: 36
        },
        Location: "Honor Reward",
        type: "axe",
        speed: 2.2,
        mindmg: 208,
        maxdmg: 313,
        hand: "Two",
        Phase: 0,
        icon: "inv_weapon_halberd15",
        quality: "Epic"
    },
    28307: {
        name: "Gladiator's Quickblade",
        stats: {
            Stam: 21,
            MAP: 28,
            RAP: 28,
            Crit: 15,
            Hit: 9,
            Resil: 10
        },
        Location: "Honor Reward",
        type: "sword",
        speed: 1.5,
        mindmg: 95,
        maxdmg: 175,
        hand: "Off",
        Phase: 0,
        icon: "inv_sword_71",
        quality: "Epic"
    },
    28308: {
        name: "Gladiator's Cleaver",
        stats: {
            Stam: 21,
            MAP: 28,
            RAP: 28,
            Crit: 15,
            Hit: 9,
            Resil: 10
        },
        Location: "Honor Reward",
        type: "axe",
        speed: 2.6,
        mindmg: 166,
        maxdmg: 309,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_54",
        quality: "Epic"
    },
    28309: {
        name: "Gladiator's Hacker",
        stats: {
            Stam: 21,
            MAP: 28,
            RAP: 28,
            Crit: 15,
            Hit: 9,
            Resil: 10
        },
        Location: "Honor Reward",
        type: "axe",
        speed: 1.5,
        mindmg: 95,
        maxdmg: 175,
        hand: "Off",
        Phase: 0,
        icon: "inv_axe_54",
        quality: "Epic"
    },
    28310: {
        name: "Gladiator's Shiv",
        stats: {
            Stam: 21,
            MAP: 28,
            RAP: 28,
            Crit: 15,
            Hit: 9,
            Resil: 10
        },
        Location: "Honor Reward",
        type: "dagger",
        speed: 1.4,
        mindmg: 89,
        maxdmg: 166,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_shortblade_45",
        quality: "Epic"
    },
    28312: {
        name: "Gladiator's Cleaver",
        stats: {
            Stam: 21,
            MAP: 28,
            RAP: 28,
            Crit: 15,
            Hit: 9,
            Resil: 10
        },
        Location: "Honor Reward",
        type: "axe",
        speed: 2.6,
        mindmg: 166,
        maxdmg: 309,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_45",
        quality: "Epic"
    },
    28313: {
        name: "Gladiator's Right Ripper",
        stats: {
            Stam: 21,
            MAP: 28,
            RAP: 28,
            Crit: 15,
            Hit: 9,
            Resil: 10
        },
        Location: "Honor Reward",
        type: "fist",
        speed: 2.6,
        mindmg: 166,
        maxdmg: 309,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_hand_13",
        quality: "Epic"
    },
    28314: {
        name: "Gladiator's Left Ripper",
        stats: {
            Stam: 21,
            MAP: 28,
            RAP: 28,
            Crit: 15,
            Hit: 9,
            Resil: 10
        },
        Location: "Honor Reward",
        type: "fist",
        speed: 1.5,
        mindmg: 95,
        maxdmg: 178,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_13",
        quality: "Epic"
    },
    28315: {
        name: "Stormreaver Warblades",
        stats: {
            Stam: 13,
            MAP: 22,
            RAP: 22,
            Crit: 21
        },
        Location: "Dungeon",
        type: "fist",
        speed: 1.6,
        mindmg: 80,
        maxdmg: 149,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_08",
        quality: "Rare"
    },
    28345: {
        name: "Warp Splinter's Thorn",
        stats: {
            Agi: 16,
            Stam: 13,
            Hit: 15
        },
        Location: "Dungeon",
        type: "dagger",
        speed: 1.3,
        mindmg: 74,
        maxdmg: 112,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_57",
        quality: "Rare"
    },
    28416: {
        name: "Hope Ender",
        stats: {
            MAP: 70,
            RAP: 70
        },
        Location: "World Boss",
        type: "sword",
        speed: 2.6,
        mindmg: 163,
        maxdmg: 304,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_35",
        quality: "Rare"
    },
    28425: {
        name: "Fireguard",
        stats: {
            Agi: 16,
            Stam: 23,
            Hit: 16
        },
        Location: "Crafting",
        type: "sword",
        speed: 1.6,
        mindmg: 94,
        maxdmg: 176,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_1h_blacksmithing_01",
        quality: "Epic"
    },
    28426: {
        name: "Blazeguard",
        stats: {
            Agi: 17,
            Stam: 25,
            Hit: 17
        },
        Location: "Crafting",
        type: "sword",
        speed: 1.6,
        mindmg: 102,
        maxdmg: 190,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_1h_blacksmithing_02",
        quality: "Epic"
    },
    28427: {
        name: "Blazefury",
        stats: {
            Agi: 19,
            Stam: 28,
            Hit: 18
        },
        Location: "Crafting",
        type: "sword",
        speed: 1.6,
        mindmg: 109,
        maxdmg: 203,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_1h_blacksmithing_03",
        quality: "Epic"
    },
    28431: {
        name: "The Planar Edge",
        stats: {
            MAP: 42,
            RAP: 42,
            Crit: 20
        },
        Location: "Crafting",
        type: "axe",
        speed: 2.7,
        mindmg: 159,
        maxdmg: 296,
        hand: "Main",
        Phase: 0,
        icon: "inv_axe_1h_blacksmithing_01",
        quality: "Epic"
    },
    28432: {
        name: "Black Planar Edge",
        stats: {
            MAP: 44,
            RAP: 44,
            Crit: 21
        },
        Location: "Crafting",
        type: "axe",
        speed: 2.7,
        mindmg: 172,
        maxdmg: 320,
        hand: "Main",
        Phase: 0,
        icon: "inv_axe_1h_blacksmithing_02",
        quality: "Epic"
    },
    28433: {
        name: "Wicked Edge of the Planes",
        stats: {
            MAP: 48,
            RAP: 48,
            Crit: 23
        },
        Location: "Crafting",
        type: "axe",
        speed: 2.7,
        mindmg: 184,
        maxdmg: 343,
        hand: "Main",
        Phase: 0,
        icon: "inv_axe_1h_blacksmithing_03",
        quality: "Epic"
    },
    28434: {
        name: "Lunar Crescent",
        stats: {
            MAP: 96,
            RAP: 96,
            Crit: 47
        },
        Location: "Crafting",
        type: "axe",
        speed: 3.7,
        mindmg: 324,
        maxdmg: 487,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_50",
        quality: "Epic"
    },
    28435: {
        name: "Mooncleaver",
        stats: {
            MAP: 106,
            RAP: 106,
            Crit: 52
        },
        Location: "Crafting",
        type: "axe",
        speed: 3.7,
        mindmg: 351,
        maxdmg: 527,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_51",
        quality: "Epic"
    },
    28436: {
        name: "Bloodmoon",
        stats: {
            MAP: 112,
            RAP: 112,
            Crit: 56
        },
        Location: "Crafting",
        type: "axe",
        speed: 3.7,
        mindmg: 375,
        maxdmg: 564,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_52",
        quality: "Epic"
    },
    28524: {
        name: "Emerald Ripper",
        stats: {
            Agi: 19,
            Stam: 18,
            MAP: 36,
            RAP: 36
        },
        Location: "Karazhan",
        type: "dagger",
        speed: 1.8,
        mindmg: 126,
        maxdmg: 189,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_38",
        quality: "Epic"
    },
    28572: {
        name: "Blade of the Unrequited",
        stats: {
            MAP: 18,
            RAP: 18,
            Crit: 9
        },
        Location: "Karazhan",
        sockets: [
            "Red",
            "Yellow",
            "Blue"
        ],
        type: "dagger",
        speed: 1.6,
        mindmg: 112,
        maxdmg: 168,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_39",
        quality: "Epic"
    },
    28584: {
        name: "Big Bad Wolf's Paw",
        stats: {
            Agi: 17,
            Stam: 18,
            Crit: 20
        },
        Location: "Karazhan",
        type: "fist",
        speed: 2.5,
        mindmg: 153,
        maxdmg: 285,
        hand: "Main",
        Phase: 0,
        icon: "inv_misc_monsterclaw_04",
        quality: "Epic"
    },
    28587: {
        name: "Legacy",
        stats: {
            Agi: 40,
            Stam: 46,
            MAP: 80,
            RAP: 80,
            MP5: 8
        },
        Location: "Karazhan",
        type: "axe",
        speed: 3.5,
        mindmg: 319,
        maxdmg: 479,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_46",
        quality: "Epic"
    },
    28729: {
        name: "Spiteblade",
        stats: {
            Agi: 14,
            Stam: 16,
            MAP: 46,
            RAP: 46
        },
        Location: "Karazhan",
        type: "sword",
        speed: 2.7,
        mindmg: 165,
        maxdmg: 308,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_74",
        quality: "Epic"
    },
    28768: {
        name: "Malchazeen",
        stats: {
            Stam: 16,
            MAP: 50,
            RAP: 50,
            Hit: 15
        },
        Location: "Karazhan",
        type: "dagger",
        speed: 1.8,
        mindmg: 132,
        maxdmg: 199,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_40",
        quality: "Epic"
    },
    28773: {
        name: "Gorehowl",
        stats: {
            Str: 49,
            Agi: 43,
            Stam: 51
        },
        Location: "Karazhan",
        type: "axe",
        speed: 3.6,
        mindmg: 345,
        maxdmg: 518,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_60",
        quality: "Epic"
    },
    28794: {
        name: "Axe of the Gronn Lords",
        stats: {
            Stam: 66,
            MAP: 124,
            RAP: 124
        },
        Location: "Gruul's Lair",
        type: "axe",
        speed: 3.6,
        mindmg: 345,
        maxdmg: 518,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_64",
        quality: "Epic"
    },
    29108: {
        name: "Blade of the Unyielding",
        stats: {
            Agi: 8,
            Stam: 10,
            MAP: 16,
            RAP: 16,
            Hit: 7
        },
        Location: "Quest Reward",
        type: "sword",
        speed: 2.4,
        mindmg: 78,
        maxdmg: 146,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_23",
        quality: "Uncommon"
    },
    29121: {
        name: "Grunt's Waraxe",
        stats: {
            Stam: 16,
            MAP: 22,
            RAP: 22,
            Hit: 11
        },
        Location: "Reputation Reward",
        type: "axe",
        speed: 1.9,
        mindmg: 70,
        maxdmg: 131,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_31",
        quality: "Epic"
    },
    29124: {
        name: "Vindicator's Brand",
        stats: {
            MAP: 38,
            RAP: 38,
            Hit: 19
        },
        Location: "Reputation Reward",
        type: "sword",
        speed: 2.6,
        mindmg: 147,
        maxdmg: 275,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_draenei_01",
        quality: "Epic"
    },
    29125: {
        name: "Retainer's Blade",
        stats: {
            Agi: 22,
            Stam: 21
        },
        Location: "Reputation Reward",
        type: "dagger",
        speed: 1.5,
        mindmg: 97,
        maxdmg: 146,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_29",
        quality: "Epic"
    },
    29137: {
        name: "Hellscream's Will",
        stats: {
            MAP: 84,
            RAP: 84,
            Hit: 42
        },
        Location: "Reputation Reward",
        type: "axe",
        speed: 3.5,
        mindmg: 261,
        maxdmg: 392,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_44",
        quality: "Rare"
    },
    29150: {
        name: "Guile of Khoraazi",
        stats: {
            Agi: 19,
            MAP: 38,
            RAP: 38
        },
        Location: "Reputation Reward",
        type: "dagger",
        speed: 1.6,
        mindmg: 104,
        maxdmg: 156,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_08",
        quality: "Rare"
    },
    29166: {
        name: "Hellforged Halberd",
        stats: {
            Agi: 26,
            MAP: 92,
            RAP: 92,
            Hit: 19
        },
        Location: "Reputation Reward",
        type: "polearm",
        speed: 3.5,
        mindmg: 261,
        maxdmg: 392,
        hand: "Two",
        Phase: 0,
        icon: "inv_weapon_halberd_12",
        quality: "Rare"
    },
    29167: {
        name: "Blackened Spear",
        stats: {
            Agi: 26,
            MAP: 92,
            RAP: 92,
            Hit: 19
        },
        Location: "Reputation Reward",
        type: "polearm",
        speed: 3.5,
        mindmg: 261,
        maxdmg: 392,
        hand: "Two",
        Phase: 0,
        icon: "inv_spear_03",
        quality: "Rare"
    },
    29182: {
        name: "Riftmaker",
        stats: {
            Agi: 21,
            MAP: 22,
            RAP: 22
        },
        Location: "Reputation Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 117,
        maxdmg: 176,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_26",
        quality: "Epic"
    },
    29275: {
        name: "Searing Sunblade",
        stats: {
            Agi: 24,
            Stam: 22
        },
        Location: "Badge Reward",
        type: "dagger",
        speed: 1.3,
        mindmg: 77,
        maxdmg: 145,
        hand: "Off",
        Phase: 0,
        icon: "inv_knife_1h_stratholme_d_03",
        quality: "Epic"
    },
    29329: {
        name: "Terokk's Quill",
        stats: {
            Agi: 54,
            Stam: 33
        },
        Location: "Quest Reward",
        type: "polearm",
        speed: 3.3,
        mindmg: 246,
        maxdmg: 370,
        hand: "Two",
        Phase: 0,
        icon: "inv_spear_08",
        quality: "Rare"
    },
    29346: {
        name: "Feltooth Eviscerator",
        stats: {
            MAP: 34,
            RAP: 34,
            Crit: 22
        },
        Location: "Dungeon",
        type: "dagger",
        speed: 1.4,
        mindmg: 83,
        maxdmg: 156,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_38",
        quality: "Epic"
    },
    29356: {
        name: "Quantum Blade",
        stats: {
            Stam: 31,
            MAP: 102,
            RAP: 102,
            Crit: 30
        },
        Location: "Dungeon",
        type: "sword",
        speed: 3.5,
        mindmg: 304,
        maxdmg: 456,
        hand: "Two",
        Phase: 0,
        icon: "inv_sword_81",
        quality: "Epic"
    },
    29360: {
        name: "Vileblade of the Betrayer",
        stats: {
            MAP: 56,
            RAP: 56
        },
        Location: "Dungeon",
        type: "dagger",
        speed: 1.8,
        mindmg: 120,
        maxdmg: 181,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_33",
        quality: "Epic"
    },
    29372: {
        name: "Void-Talon",
        stats: {
            Agi: 14,
            MAP: 28,
            RAP: 28
        },
        Location: "Vendor",
        type: "fist",
        speed: 2.4,
        mindmg: 78,
        maxdmg: 146,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_01",
        quality: "Uncommon"
    },
    29391: {
        name: "Pulse Dagger",
        stats: {
            Hit: 21
        },
        Location: "Vendor",
        type: "dagger",
        speed: 1.3,
        mindmg: 52,
        maxdmg: 95,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_07",
        quality: "Uncommon"
    },
    29456: {
        name: "Gift of the Ethereal",
        stats: {
            Agi: 12,
            Stam: 18,
            MAP: 24,
            RAP: 24
        },
        Location: "Reputation Reward",
        type: "sword",
        speed: 2,
        mindmg: 79,
        maxdmg: 147,
        hand: "Main",
        Phase: 0,
        icon: "inv_sword_draenei_01",
        quality: "Rare"
    },
    29908: {
        name: "Rage Reaver",
        stats: {
            Agi: 19,
            Stam: 30,
            MAP: 38,
            RAP: 38
        },
        Location: "Quest Reward",
        type: "axe",
        speed: 3.6,
        mindmg: 167,
        maxdmg: 251,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_12",
        quality: "Uncommon"
    },
    29909: {
        name: "Screaming Dagger",
        stats: {
            Agi: 7,
            Stam: 12,
            MAP: 16,
            RAP: 16
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 56,
        maxdmg: 105,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_03",
        quality: "Uncommon"
    },
    29914: {
        name: "Hellfire Skiver",
        stats: {
            Agi: 7,
            Stam: 9,
            MAP: 16,
            RAP: 16,
            Hit: 5
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.4,
        mindmg: 43,
        maxdmg: 81,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_shortblade_15",
        quality: "Uncommon"
    },
    29924: {
        name: "Netherbane",
        stats: {
            Agi: 25,
            Stam: 21,
            MAP: 40,
            RAP: 40
        },
        Location: "The Eye",
        type: "axe",
        speed: 2.6,
        mindmg: 175,
        maxdmg: 327,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_62",
        quality: "Epic"
    },
    29948: {
        name: "Claw of the Phoenix",
        stats: {
            Agi: 21,
            Stam: 30,
            MAP: 40,
            RAP: 40
        },
        Location: "The Eye",
        type: "fist",
        speed: 1.5,
        mindmg: 101,
        maxdmg: 189,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_12",
        quality: "Epic"
    },
    31422: {
        name: "Heartless",
        stats: {
            Stam: 30,
            MAP: 42,
            RAP: 42,
            Haste: 20
        },
        Location: "Zul'Aman",
        type: "sword",
        speed: 2.6,
        mindmg: 174,
        maxdmg: 323,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_46",
        quality: "Epic"
    },
    29993: {
        name: "Twinblade of the Phoenix",
        stats: {
            Stam: 53,
            MAP: 110,
            RAP: 110,
            Crit: 37
        },
        Location: "The Eye",
        sockets: [
            "Red",
            "Yellow",
            "Blue"
        ],
        socketBonus: {
            MAP: 8,
            RAP: 8
        },
        type: "sword",
        speed: 3.6,
        mindmg: 375,
        maxdmg: 564,
        hand: "Two",
        Phase: 0,
        icon: "inv_sword_2h_blood_c_01",
        quality: "Epic"
    },
    30013: {
        name: "Twin-Bladed Ripper",
        stats: {
            Agi: 12,
            Stam: 12,
            MAP: 24,
            RAP: 24,
            Hit: 11
        },
        Location: "Dungeon",
        type: "dagger",
        speed: 1.8,
        mindmg: 84,
        maxdmg: 157,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_15",
        quality: "Rare"
    },
    30077: {
        name: "Windforged Rapier",
        stats: {
            Hit: 24
        },
        Location: "Crafting",
        type: "sword",
        speed: 1.7,
        mindmg: 72,
        maxdmg: 134,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_30",
        quality: "Rare"
    },
    30082: {
        name: "Talon of Azshara",
        stats: {
            Agi: 15,
            MAP: 40,
            RAP: 40,
            Hit: 20
        },
        Location: "Serpentshrine Cavern",
        type: "sword",
        speed: 2.7,
        mindmg: 182,
        maxdmg: 339,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_50",
        quality: "Epic"
    },
    30087: {
        name: "Stormforged Axe",
        stats: {
            Agi: 24
        },
        Location: "Crafting",
        type: "axe",
        speed: 2.6,
        mindmg: 110,
        maxdmg: 205,
        hand: "Main",
        Phase: 0,
        icon: "inv_axe_39",
        quality: "Rare"
    },
    30088: {
        name: "Skyforged Great Axe",
        stats: {
            MAP: 80,
            RAP: 80,
            Crit: 35
        },
        Location: "Crafting",
        type: "axe",
        speed: 3.4,
        mindmg: 213,
        maxdmg: 321,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_46",
        quality: "Rare"
    },
    30103: {
        name: "Fang of Vashj",
        stats: {
            Stam: 19,
            MAP: 56,
            RAP: 56
        },
        Location: "Serpentshrine Cavern",
        type: "dagger",
        speed: 1.8,
        mindmg: 144,
        maxdmg: 217,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_39",
        quality: "Epic"
    },
    30364: {
        name: "Resonating Axe",
        stats: {
            MAP: 22,
            RAP: 22,
            Crit: 11
        },
        Location: "Quest Reward",
        type: "axe",
        speed: 2.8,
        mindmg: 113,
        maxdmg: 211,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_40",
        quality: "Uncommon"
    },
    33465: {
        name: "Staff of Primal Fury",
        stats: {
            Agi: 49,
            Stam: 70,
            ArP: 45
        },
        Location: "Zul'Aman",
        type: "staff",
        speed: 3,
        mindmg: 135,
        maxdmg: 285,
        hand: "Two",
        Phase: 0,
        icon: "inv_staff_12",
        quality: "Epic"
    },
    30396: {
        name: "Jeweled Halberd",
        stats: {
            Agi: 21,
            Int: 16,
            MAP: 78,
            RAP: 78
        },
        Location: "Quest Reward",
        type: "polearm",
        speed: 2.7,
        mindmg: 173,
        maxdmg: 260,
        hand: "Two",
        Phase: 0,
        icon: "inv_spear_05",
        quality: "Uncommon"
    },
    30733: {
        name: "Heavy Elven Dirk",
        stats: {
            Agi: 17,
            MAP: 14,
            RAP: 14
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 67,
        maxdmg: 126,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_74",
        quality: "Epic"
    },
    30855: {
        name: "Shatterstone Pick",
        stats: {
            Stam: 7,
            MAP: 24,
            RAP: 24,
            Crit: 7
        },
        Location: "Quest Reward",
        type: "axe",
        speed: 1.8,
        mindmg: 57,
        maxdmg: 107,
        hand: "One",
        Phase: 0,
        icon: "inv_pick_01",
        quality: "Uncommon"
    },
    30865: {
        name: "Tracker's Blade",
        stats: {
            MAP: 44,
            RAP: 44,
            Crit: 23,
            Hit: 20
        },
        Location: "Mount Hyjal",
        type: "dagger",
        speed: 1.5,
        mindmg: 105,
        maxdmg: 196,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_59",
        quality: "Epic"
    },
    30881: {
        name: "Blade of Infamy",
        stats: {
            Agi: 28,
            MAP: 56,
            RAP: 56
        },
        Location: "Mount Hyjal",
        type: "sword",
        speed: 2.6,
        mindmg: 182,
        maxdmg: 339,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_85",
        quality: "Epic"
    },
    30901: {
        name: "Boundless Agony",
        stats: {
            Crit: 24,
            ArP: 30
        },
        Location: "Mount Hyjal",
        type: "dagger",
        speed: 1.8,
        mindmg: 144,
        maxdmg: 217,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_59",
        quality: "Epic"
    },
    30902: {
        name: "Cataclysm's Edge",
        stats: {
            Str: 75,
            Stam: 49,
            ArP: 48
        },
        Location: "Hyjal",
        type: "sword",
        speed: 3.5,
        mindmg: 386,
        maxdmg: 580,
        hand: "Two",
        Phase: 0,
        icon: "inv_sword_68",
        quality: "Epic"
    },
    30999: {
        name: "Ashtongue Blade",
        stats: {
            Agi: 11,
            Stam: 10,
            MAP: 40,
            RAP: 40
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.4,
        mindmg: 65,
        maxdmg: 122,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_29",
        quality: "Rare"
    },
    31073: {
        name: "Borak's Reminder",
        stats: {
            Agi: 11,
            MAP: 40,
            RAP: 40,
            Hit: 7
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 84,
        maxdmg: 157,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_14",
        quality: "Rare"
    },
    31291: {
        name: "Crystalforged War Axe",
        stats: {
            Stam: 50,
            MAP: 80,
            RAP: 80,
            Crit: 27
        },
        Location: "World Drop",
        type: "axe",
        speed: 3.5,
        mindmg: 253,
        maxdmg: 380,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_40",
        quality: "Rare"
    },
    31305: {
        name: "Ced's Carver",
        stats: {
            Stam: 13,
            MAP: 30,
            RAP: 30,
            Crit: 16
        },
        Location: "World Drop",
        type: "axe",
        speed: 1.8,
        mindmg: 103,
        maxdmg: 155,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_03",
        quality: "Rare"
    },
    29962: {
        name: "Heartrazor",
        stats: {
            Agi: 20,
            Stam: 30
        },
        Location: "The Eye",
        type: "dagger",
        speed: 1.8,
        mindmg: 121,
        maxdmg: 226,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_03",
        quality: "Uncommon"
    },
    31476: {
        name: "Slow Death Dirk",
        stats: {
            Agi: 17,
            MAP: 14,
            RAP: 14
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 70,
        maxdmg: 131,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_16",
        quality: "Uncommon"
    },
    31492: {
        name: "Claw of the Netherwing Flight",
        stats: {
            Agi: 15,
            MAP: 30,
            RAP: 30,
            Hit: 15
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 83,
        maxdmg: 156,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_38",
        quality: "Rare"
    },
    31541: {
        name: "Whistling Sword",
        stats: {
            Stam: 11,
            MAP: 22,
            RAP: 22,
            Crit: 11
        },
        Location: "Quest Reward",
        type: "sword",
        speed: 1.6,
        mindmg: 64,
        maxdmg: 120,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_33",
        quality: "Uncommon"
    },
    31542: {
        name: "Fanged Axe",
        stats: {
            Stam: 39,
            MAP: 52,
            RAP: 52,
            Crit: 26
        },
        Location: "Quest Reward",
        type: "axe",
        speed: 3.2,
        mindmg: 192,
        maxdmg: 289,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_44",
        quality: "Uncommon"
    },
    31701: {
        name: "Saboteur's Axe",
        stats: {
            Str: 37,
            Stam: 22,
            MAP: 72,
            RAP: 72,
            Crit: 21,
            MP5: 7
        },
        Location: "Quest Reward",
        type: "axe",
        speed: 3.3,
        mindmg: 198,
        maxdmg: 298,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_18",
        quality: "Uncommon"
    },
    31703: {
        name: "Nether-Stalker's Blade",
        stats: {
            Agi: 8,
            MAP: 32,
            RAP: 32
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 72,
        maxdmg: 135,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_12",
        quality: "Uncommon"
    },
    31723: {
        name: "Madman's Blade",
        stats: {
            Agi: 6,
            MAP: 34,
            RAP: 34
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.4,
        mindmg: 48,
        maxdmg: 91,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_15",
        quality: "Uncommon"
    },
    31733: {
        name: "Akuno's Blade",
        stats: {
            MAP: 14,
            RAP: 14,
            Crit: 8,
            Hit: 7
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.9,
        mindmg: 69,
        maxdmg: 128,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_05",
        quality: "Uncommon"
    },
    31756: {
        name: "Dib'Muad's Crysknife",
        stats: {
            MAP: 18,
            RAP: 18,
            Crit: 19
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.4,
        mindmg: 55,
        maxdmg: 103,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_15",
        quality: "Rare"
    },
    31759: {
        name: "Shani's Crysknife",
        stats: {
            Agi: 9,
            MAP: 38,
            RAP: 38
        },
        Location: "Quest Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 71,
        maxdmg: 133,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_15",
        quality: "Rare"
    },
    31965: {
        name: "Merciless Gladiator's Cleaver",
        stats: {
            Stam: 27,
            MAP: 30,
            RAP: 30,
            Crit: 19,
            Hit: 10,
            Resil: 12
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 2.6,
        mindmg: 177,
        maxdmg: 330,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_54",
        quality: "Epic"
    },
    31966: {
        name: "Merciless Gladiator's Decapitator",
        stats: {
            Stam: 55,
            MAP: 84,
            RAP: 84,
            Crit: 42,
            Hit: 18,
            Resil: 33
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 3.6,
        mindmg: 365,
        maxdmg: 549,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_68",
        quality: "Epic"
    },
    31985: {
        name: "Merciless Gladiator's Hacker",
        stats: {
            Stam: 27,
            MAP: 30,
            RAP: 30,
            Crit: 19,
            Hit: 10,
            Resil: 12
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 1.5,
        mindmg: 102,
        maxdmg: 191,
        hand: "Off",
        Phase: 0,
        icon: "inv_axe_54",
        quality: "Epic"
    },
    32003: {
        name: "Merciless Gladiator's Left Ripper",
        stats: {
            Stam: 27,
            MAP: 30,
            RAP: 30,
            Crit: 19,
            Hit: 10,
            Resil: 12
        },
        Location: "Arena Reward",
        type: "fist",
        speed: 1.5,
        mindmg: 102,
        maxdmg: 191,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_13",
        quality: "Epic"
    },
    32025: {
        name: "Merciless Gladiator's Painsaw",
        stats: {
            Stam: 55,
            MAP: 82,
            RAP: 82,
            Crit: 42,
            Resil: 42
        },
        Location: "Arena Reward",
        type: "polearm",
        speed: 2.2,
        mindmg: 223,
        maxdmg: 335,
        hand: "Two",
        Phase: 0,
        icon: "inv_weapon_halberd15",
        quality: "Epic"
    },
    32027: {
        name: "Merciless Gladiator's Quickblade",
        stats: {
            Stam: 27,
            MAP: 30,
            RAP: 30,
            Crit: 19,
            Hit: 10,
            Resil: 12
        },
        Location: "Arena Reward",
        type: "sword",
        speed: 1.5,
        mindmg: 102,
        maxdmg: 191,
        hand: "Off",
        Phase: 0,
        icon: "inv_sword_71",
        quality: "Epic"
    },
    32028: {
        name: "Merciless Gladiator's Right Ripper",
        stats: {
            Stam: 27,
            MAP: 30,
            RAP: 30,
            Crit: 19,
            Hit: 10,
            Resil: 12
        },
        Location: "Arena Reward",
        type: "fist",
        speed: 2.6,
        mindmg: 177,
        maxdmg: 330,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_hand_13",
        quality: "Epic"
    },
    32044: {
        name: "Merciless Gladiator's Shanker",
        stats: {
            Stam: 27,
            MAP: 30,
            RAP: 30,
            Crit: 19,
            Hit: 10,
            Resil: 12
        },
        Location: "Arena Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 140,
        maxdmg: 211,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_45",
        quality: "Epic"
    },
    32046: {
        name: "Merciless Gladiator's Shiv",
        stats: {
            Stam: 27,
            MAP: 30,
            RAP: 30,
            Crit: 19,
            Hit: 10,
            Resil: 12
        },
        Location: "Arena Reward",
        type: "dagger",
        speed: 1.4,
        mindmg: 95,
        maxdmg: 175,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_shortblade_45",
        quality: "Epic"
    },
    32052: {
        name: "Merciless Gladiator's Slicer",
        stats: {
            Stam: 27,
            MAP: 30,
            RAP: 30,
            Crit: 19,
            Hit: 10,
            Resil: 12
        },
        Location: "Arena Reward",
        type: "sword",
        speed: 2.6,
        mindmg: 203,
        maxdmg: 305,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_71",
        quality: "Epic"
    },
    32236: {
        name: "Rising Tide",
        stats: {
            Stam: 33,
            MAP: 44,
            RAP: 44,
            Hit: 21
        },
        Location: "Black Temple",
        type: "axe",
        speed: 2.6,
        mindmg: 208,
        maxdmg: 313,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_56",
        quality: "Epic"
    },
    32248: {
        name: "Halberd of Desolation",
        stats: {
            Agi: 51,
            Stam: 57,
            MAP: 100,
            RAP: 100,
            Hit: 30
        },
        Location: "Black Temple",
        type: "polearm",
        speed: 3.5,
        mindmg: 365,
        maxdmg: 548,
        hand: "Two",
        Phase: 0,
        icon: "inv_weapon_halberd_20",
        quality: "Epic"
    },
    32269: {
        name: "Messenger of Fate",
        stats: {
            Agi: 22,
            Stam: 31,
            MAP: 44,
            RAP: 44
        },
        Location: "Black Temple",
        type: "dagger",
        speed: 1.4,
        mindmg: 112,
        maxdmg: 169,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_63",
        quality: "Epic"
    },
    32369: {
        name: "Blade of Savagery",
        stats: {
            Stam: 19,
            MAP: 44,
            RAP: 44,
            Crit: 22,
            Hit: 15
        },
        Location: "Black Temple",
        type: "sword",
        speed: 1.4,
        mindmg: 98,
        maxdmg: 183,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_87",
        quality: "Epic"
    },
    32781: {
        name: "Talon of Anzu",
        stats: {
            Agi: 10,
            MAP: 36,
            RAP: 36
        },
        Location: "Dungeon",
        sockets: [
            "Red"
        ],
        socketBonus: {
            Stam: 3
        },
        type: "dagger",
        speed: 1.5,
        mindmg: 75,
        maxdmg: 140,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_16",
        quality: "Rare"
    },
    32829: {
        name: "Windcharger's Lance",
        stats: {
            Stam: 60,
            MAP: 80,
            RAP: 80
        },
        Location: "Quest Reward",
        type: "polearm",
        speed: 3.4,
        mindmg: 237,
        maxdmg: 357,
        hand: "Two",
        Phase: 0,
        icon: "inv_spear_05",
        quality: "Rare"
    },
    32944: {
        name: "Talon of the Phoenix",
        stats: {
            MAP: 52,
            RAP: 52,
            Crit: 19,
            Hit: 15
        },
        Location: "The Eye",
        type: "fist",
        speed: 2.7,
        mindmg: 182,
        maxdmg: 339,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_hand_12",
        quality: "Epic"
    },
    32945: {
        name: "Fist of Molten Fury",
        stats: {
            Agi: 20,
            Stam: 28,
            MAP: 38,
            RAP: 38
        },
        Location: "Mount Hyjal",
        type: "fist",
        speed: 1.5,
        mindmg: 120,
        maxdmg: 181,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_14",
        quality: "Epic"
    },
    32946: {
        name: "Claw of Molten Fury",
        stats: {
            Agi: 20,
            Stam: 28,
            MAP: 38,
            RAP: 38
        },
        Location: "Mount Hyjal",
        type: "fist",
        speed: 2.7,
        mindmg: 216,
        maxdmg: 325,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_hand_14",
        quality: "Epic"
    },
    33214: {
        name: "Akil'zon's Talonblade",
        stats: {
            Stam: 25,
            MAP: 52,
            RAP: 52,
            Haste: 18
        },
        Location: "Zul'Aman",
        type: "sword",
        speed: 1.5,
        mindmg: 100,
        maxdmg: 187,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_108",
        quality: "Epic"
    },
    33298: {
        name: "Prowler's Strikeblade",
        stats: {
            Stam: 30,
            MAP: 42,
            RAP: 42,
            ArP: 20
        },
        Location: "Zul'Aman",
        type: "dagger",
        speed: 1.5,
        mindmg: 100,
        maxdmg: 187,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_65",
        quality: "Epic"
    },
    33388: {
        name: "Hardened Stone Shard",
        stats: {
            Stam: 16,
            MAP: 22,
            RAP: 22,
            Hit: 12
        },
        Location: "Zul'Aman",
        type: "dagger",
        speed: 1.8,
        mindmg: 79,
        maxdmg: 120,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_107",
        quality: "Epic"
    },
    33389: {
        name: "Dagger of Bad Mojo",
        stats: {
            Agi: 21,
            MAP: 40,
            RAP: 40,
            ArP: 20
        },
        Location: "Zul'Aman",
        type: "dagger",
        speed: 1.8,
        mindmg: 137,
        maxdmg: 207,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_60",
        quality: "Epic"
    },
    33478: {
        name: "Jin'rohk, the Great Apocalypse",
        stats: {
            Stam: 49,
            MAP: 120,
            RAP: 120,
            Haste: 45
        },
        Location: "Zul'Aman",
        type: "sword",
        speed: 3.7,
        mindmg: 380,
        maxdmg: 570,
        hand: "Two",
        Phase: 0,
        icon: "inv_sword_108",
        quality: "Epic"
    },
    33492: {
        name: "Trollbane",
        stats: {
            Agi: 39,
            Stam: 58,
            MAP: 94,
            RAP: 94
        },
        Location: "Zul'Aman",
        sockets: [
            "Red",
            "Blue"
        ],
        socketBonus: {
            MAP: 6,
            RAP: 6
        },
        type: "axe",
        speed: 3.6,
        mindmg: 358,
        maxdmg: 537,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_85",
        quality: "Epic"
    },
    33493: {
        name: "Umbral Shiv",
        stats: {
            Agi: 12,
            Stam: 30,
            Hit: 13
        },
        Location: "Zul'Aman",
        sockets: [
            "Red",
            "Yellow"
        ],
        socketBonus: {
            MAP: 6,
            RAP: 6
        },
        type: "dagger",
        speed: 1.8,
        mindmg: 137,
        maxdmg: 207,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_66",
        quality: "Epic"
    },
    33495: {
        name: "Rage",
        stats: {
            Agi: 20,
            Stam: 18,
            Crit: 13
        },
        Location: "Zul'Aman",
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            MAP: 4,
            RAP: 4
        },
        type: "fist",
        speed: 2.6,
        mindmg: 174,
        maxdmg: 323,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_hand_15",
        quality: "Epic"
    },
    33640: {
        name: "Fury",
        stats: {
            Stam: 20,
            MAP: 26,
            RAP: 26,
            Hit: 20
        },
        Location: "Zul'Aman",
        sockets: [
            "Red"
        ],
        socketBonus: {
            MAP: 4,
            RAP: 4
        },
        type: "fist",
        speed: 2.6,
        mindmg: 174,
        maxdmg: 323,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_15",
        quality: "Epic"
    },
    33669: {
        name: "Vengeful Gladiator's Cleaver",
        stats: {
            Stam: 30,
            MAP: 34,
            RAP: 34,
            Crit: 21,
            Hit: 8,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 2.6,
        mindmg: 187,
        maxdmg: 349,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_84",
        quality: "Epic"
    },
    33670: {
        name: "Vengeful Gladiator's Decapitator",
        stats: {
            Stam: 62,
            MAP: 92,
            RAP: 92,
            Crit: 47,
            Resil: 42
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 3.6,
        mindmg: 386,
        maxdmg: 580,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_60",
        quality: "Epic"
    },
    33688: {
        name: "Vengeful Gladiator's Greatsword",
        stats: {
            Stam: 62,
            MAP: 92,
            RAP: 92,
            Crit: 47,
            Resil: 42
        },
        Location: "Arena Reward",
        type: "sword",
        speed: 3.6,
        mindmg: 386,
        maxdmg: 580,
        hand: "Two",
        Phase: 0,
        icon: "inv_sword_108",
        quality: "Epic"
    },
    33689: {
        name: "Vengeful Gladiator's Hacker",
        stats: {
            Stam: 30,
            MAP: 34,
            RAP: 34,
            Crit: 21,
            Hit: 8,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 1.5,
        mindmg: 108,
        maxdmg: 201,
        hand: "Off",
        Phase: 0,
        icon: "inv_axe_84",
        quality: "Epic"
    },
    33705: {
        name: "Vengeful Gladiator's Left Ripper",
        stats: {
            Stam: 30,
            MAP: 34,
            RAP: 34,
            Crit: 21,
            Hit: 8,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "fist",
        speed: 1.5,
        mindmg: 108,
        maxdmg: 201,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_13",
        quality: "Epic"
    },
    33727: {
        name: "Vengeful Gladiator's Painsaw",
        stats: {
            Stam: 62,
            MAP: 92,
            RAP: 92,
            Crit: 47,
            Resil: 42
        },
        Location: "Arena Reward",
        type: "polearm",
        speed: 2.2,
        mindmg: 236,
        maxdmg: 354,
        hand: "Two",
        Phase: 0,
        icon: "inv_weapon_halberd15",
        quality: "Epic"
    },
    33734: {
        name: "Vengeful Gladiator's Quickblade",
        stats: {
            Stam: 30,
            MAP: 34,
            RAP: 34,
            Crit: 21,
            Hit: 8,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "sword",
        speed: 1.5,
        mindmg: 108,
        maxdmg: 201,
        hand: "Off",
        Phase: 0,
        icon: "inv_sword_89",
        quality: "Epic"
    },
    33737: {
        name: "Vengeful Gladiator's Right Ripper",
        stats: {
            Stam: 30,
            MAP: 34,
            RAP: 34,
            Crit: 21,
            Hit: 8,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "fist",
        speed: 2.6,
        mindmg: 187,
        maxdmg: 349,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_hand_13",
        quality: "Epic"
    },
    33754: {
        name: "Vengeful Gladiator's Shanker",
        stats: {
            Stam: 30,
            MAP: 34,
            RAP: 34,
            Crit: 21,
            Hit: 8,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 148,
        maxdmg: 223,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_62",
        quality: "Epic"
    },
    33756: {
        name: "Vengeful Gladiator's Shiv",
        stats: {
            Stam: 30,
            MAP: 34,
            RAP: 34,
            Crit: 21,
            Hit: 8,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "dagger",
        speed: 1.4,
        mindmg: 101,
        maxdmg: 188,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_shortblade_62",
        quality: "Epic"
    },
    33762: {
        name: "Vengeful Gladiator's Slicer",
        stats: {
            Stam: 30,
            MAP: 34,
            RAP: 34,
            Crit: 21,
            Hit: 8,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "sword",
        speed: 2.6,
        mindmg: 214,
        maxdmg: 322,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_89",
        quality: "Epic"
    },
    33801: {
        name: "Vengeful Gladiator's Mutilator",
        stats: {
            Stam: 30,
            MAP: 34,
            RAP: 34,
            Crit: 21,
            Hit: 8,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 130,
        maxdmg: 241,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_shortblade_62",
        quality: "Epic"
    },
    34014: {
        name: "Vengeful Gladiator's Waraxe",
        stats: {
            Stam: 62,
            MAP: 92,
            RAP: 92,
            Crit: 46,
            Hit: 15,
            Resil: 33,
            ArP: 14
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 3,
        mindmg: 321,
        maxdmg: 483,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_61",
        quality: "Epic"
    },
    34015: {
        name: "Vengeful Gladiator's Chopper",
        stats: {
            Stam: 30,
            MAP: 34,
            RAP: 34,
            Crit: 21,
            Hit: 8,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 2.6,
        mindmg: 187,
        maxdmg: 349,
        hand: "Off",
        Phase: 0,
        icon: "inv_axe_84",
        quality: "Epic"
    },
    34016: {
        name: "Vengeful Gladiator's Left Render",
        stats: {
            Stam: 30,
            MAP: 34,
            RAP: 34,
            Crit: 21,
            Hit: 8,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "fist",
        speed: 2.6,
        mindmg: 187,
        maxdmg: 349,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_13",
        quality: "Epic"
    },
    34165: {
        name: "Fang of Kalecgos",
        stats: {
            Agi: 25,
            MAP: 48,
            RAP: 48,
            Haste: 25
        },
        Location: "Sunwell",
        type: "dagger",
        speed: 1.5,
        mindmg: 113,
        maxdmg: 211,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_74",
        quality: "Epic"
    },
    34183: {
        name: "Shivering Felspine",
        stats: {
            Agi: 52,
            MAP: 120,
            RAP: 120,
            Haste: 53
        },
        Location: "Sunwell",
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            MAP: 4,
            RAP: 4
        },
        type: "polearm",
        speed: 3.5,
        mindmg: 393,
        maxdmg: 590,
        hand: "Two",
        Phase: 0,
        icon: "inv_weapon_halberd_20",
        quality: "Epic"
    },
    34203: {
        name: "Grip of Mannoroth",
        stats: {
            Hit: 20,
            MAP: 46,
            RAP: 46,
            Haste: 31
        },
        Location: "Sunwell",
        type: "fist",
        speed: 1.5,
        mindmg: 113,
        maxdmg: 211,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_15",
        quality: "Epic"
    },
    34197: {
        name: "Shiv of Exsanguination",
        stats: {
            Agi: 25,
            MAP: 42,
            RAP: 42,
            ArP: 28
        },
        Location: "Sunwell",
        type: "dagger",
        speed: 1.8,
        mindmg: 136,
        maxdmg: 253,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_75",
        quality: "Epic"
    },
    34214: {
        name: "Muramasa",
        stats: {
            Stam: 27,
            Hit: 17,
            Haste: 35
        },
        Location: "Sunwell",
        type: "sword",
        speed: 2.6,
        mindmg: 196,
        maxdmg: 365,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_114",
        quality: "Epic"
    },
    34329: {
        name: "Crux of the Apocalypse",
        stats: {
            Agi: 18,
            Stam: 15,
            MAP: 56,
            RAP: 56,
            Haste: 27
        },
        Location: "Sunwell",
        sockets: [
            "Red"
        ],
        socketBonus: {
            MAP: 4,
            RAP: 4
        },
        type: "dagger",
        speed: 1.8,
        mindmg: 164,
        maxdmg: 247,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_75",
        quality: "Epic"
    },
    34331: {
        name: "Hand of the Deceiver",
        stats: {
            Stam: 28,
            MAP: 54,
            RAP: 54,
            ArP: 28
        },
        Location: "Sunwell",
        sockets: [
            "Yellow",
            "Yellow"
        ],
        socketBonus: {
            MAP: 6,
            RAP: 6
        },
        type: "fist",
        speed: 2.6,
        mindmg: 238,
        maxdmg: 357,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_hand_15",
        quality: "Epic"
    },
    34346: {
        name: "Mounting Vengeance",
        stats: {
            Stam: 22,
            MAP: 46,
            RAP: 46,
            ArP: 20
        },
        Location: "Sunwell",
        sockets: [
            "Yellow",
            "Blue"
        ],
        socketBonus: {
            Str: 3
        },
        type: "fist",
        speed: 2.6,
        mindmg: 196,
        maxdmg: 365,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_13",
        quality: "Epic"
    },
    34606: {
        name: "Edge of Oppression",
        stats: {
            Stam: 25,
            MAP: 36,
            RAP: 36,
            Haste: 17
        },
        Location: "Dungeon",
        type: "dagger",
        speed: 1.3,
        mindmg: 79,
        maxdmg: 148,
        hand: "One",
        Phase: 0,
        icon: "inv_knife_1h_stratholme_d_03",
        quality: "Epic"
    },
    34616: {
        name: "Breeching Comet",
        stats: {
            Agi: 18,
            Stam: 15,
            MAP: 40,
            RAP: 40
        },
        Location: "Dungeon",
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            MAP: 4,
            RAP: 4
        },
        type: "axe",
        speed: 2.6,
        mindmg: 167,
        maxdmg: 312,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_62",
        quality: "Epic"
    },
    34665: {
        name: "Bombardier's Blade",
        stats: {
            Agi: 14,
            Stam: 12,
            MAP: 26,
            RAP: 26,
            Hit: 11
        },
        Location: "Reputation Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 90,
        maxdmg: 168,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_14",
        quality: "Rare"
    },
    34666: {
        name: "The Sunbreaker",
        stats: {
            Agi: 14,
            Stam: 12,
            MAP: 26,
            RAP: 26,
            Hit: 11
        },
        Location: "Reputation Reward",
        type: "sword",
        speed: 2.7,
        mindmg: 155,
        maxdmg: 233,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_91",
        quality: "Rare"
    },
    34699: {
        name: "Sun-forged Cleaver",
        stats: {
            MAP: 28,
            RAP: 28,
            Crit: 13,
            Haste: 15
        },
        Location: "Dungeon",
        type: "axe",
        speed: 2.6,
        mindmg: 130,
        maxdmg: 243,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_02",
        quality: "Rare"
    },
    34703: {
        name: "Latro's Dancing Blade",
        stats: {
            Stam: 21,
            MAP: 28,
            RAP: 28,
            ArP: 14
        },
        Location: "Dungeon",
        type: "sword",
        speed: 2.6,
        mindmg: 130,
        maxdmg: 243,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_76",
        quality: "Rare"
    },
    34891: {
        name: "The Blade of Harbingers",
        stats: {
            MAP: 108,
            RAP: 108,
            Crit: 55,
            Haste: 53
        },
        Location: "Badge Reward",
        type: "sword",
        speed: 3.5,
        mindmg: 375,
        maxdmg: 563,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_04",
        quality: "Epic"
    },
    34893: {
        name: "Vanir's Right Fist of Brutality",
        stats: {
            Agi: 23,
            MAP: 44,
            RAP: 44,
            Haste: 21
        },
        Location: "Badge Reward",
        type: "fist",
        speed: 2.5,
        mindmg: 180,
        maxdmg: 335,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_hand_16",
        quality: "Epic"
    },
    34894: {
        name: "Blade of Serration",
        stats: {
            Stam: 30,
            MAP: 44,
            RAP: 44,
            Crit: 24
        },
        Location: "Badge Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 130,
        maxdmg: 241,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_78",
        quality: "Epic"
    },
    34949: {
        name: "Swift Blade of Uncertainty",
        stats: {
            Stam: 30,
            MAP: 44,
            RAP: 44,
            Hit: 24
        },
        Location: "Badge Reward",
        type: "dagger",
        speed: 1.5,
        mindmg: 108,
        maxdmg: 201,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_shortblade_78",
        quality: "Epic"
    },
    34950: {
        name: "Vanir's Left Fist of Savagery",
        stats: {
            MAP: 44,
            RAP: 44,
            Hit: 21,
            Haste: 23
        },
        Location: "Badge Reward",
        type: "fist",
        speed: 1.5,
        mindmg: 108,
        maxdmg: 201,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_16",
        quality: "Epic"
    },
    34951: {
        name: "Vanir's Left Fist of Brutality",
        stats: {
            MAP: 44,
            RAP: 44,
            Hit: 21,
            Haste: 23
        },
        Location: "Badge Reward",
        type: "fist",
        speed: 2.5,
        mindmg: 180,
        maxdmg: 335,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_16",
        quality: "Epic"
    },
    34247: {
        name: "Apolyon, the Soul-Render",
        stats: {
            Stam: 75,
            Crit: 42,
            Haste: 32,
            MAP: 126,
            RAP: 126
        },
        Location: "Sunwell",
        sockets: [
            "Red",
            "Red",
            "Red"
        ],
        socketBonus: {
            Stam: 6
        },
        type: "sword",
        speed: 3.4,
        mindmg: 404,
        maxdmg: 607,
        hand: "Two",
        Phase: 0,
        icon: "inv_sword_116",
        quality: "Epic"
    },
    34198: {
        name: "Stanchion of Primal Instinct",
        stats: {
            Agi: 75,
            MAP: 94,
            RAP: 94,
            Stam: 50,
            ArP: 50
        },
        Location: "Sunwell",
        type: "staff",
        speed: 3.0,
        mindmg: 137,
        maxdmg: 306,
        hand: "Two",
        Phase: 0,
        icon: "inv_staff_12",
        quality: "Epic"
    },
    34952: {
        name: "The Mutilator",
        stats: {
            Stam: 30,
            MAP: 44,
            RAP: 44,
            Hit: 24
        },
        Location: "Badge Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 130,
        maxdmg: 241,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_shortblade_78",
        quality: "Epic"
    },
    34996: {
        name: "Brutal Gladiator's Cleaver",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 2.6,
        mindmg: 196,
        maxdmg: 365,
        hand: "One",
        Phase: 0,
        icon: "inv_axe_1h_blacksmithing_02",
        quality: "Epic"
    },
    34997: {
        name: "Brutal Gladiator's Decapitator",
        stats: {
            Stam: 66,
            MAP: 100,
            RAP: 100,
            Crit: 50,
            Hit: 19,
            ArP: 14,
            Resil: 33
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 3.6,
        mindmg: 404,
        maxdmg: 606,
        hand: "Two",
        Phase: 0,
        icon: "inv_axe_73",
        quality: "Epic"
    },
    35015: {
        name: "Brutal Gladiator's Greatsword",
        stats: {
            Stam: 66,
            Str: 50,
            Crit: 50,
            Hit: 19,
            ArP: 14,
            Resil: 33
        },
        Location: "Arena Reward",
        type: "sword",
        speed: 3.6,
        mindmg: 404,
        maxdmg: 606,
        hand: "Two",
        Phase: 0,
        icon: "inv_sword_116",
        quality: "Epic"
    },
    35017: {
        name: "Brutal Gladiator's Hacker",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 1.5,
        mindmg: 113,
        maxdmg: 211,
        hand: "Off",
        Phase: 0,
        icon: "inv_axe_1h_blacksmithing_02",
        quality: "Epic"
    },
    35038: {
        name: "Brutal Gladiator's Left Ripper",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "fist",
        speed: 1.5,
        mindmg: 113,
        maxdmg: 211,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_15",
        quality: "Epic"
    },
    35064: {
        name: "Brutal Gladiator's Painsaw",
        stats: {
            Stam: 68,
            MAP: 102,
            RAP: 102,
            Crit: 51,
            Resil: 42
        },
        Location: "Arena Reward",
        type: "polearm",
        speed: 2.2,
        mindmg: 247,
        maxdmg: 371,
        hand: "Two",
        Phase: 0,
        icon: "inv_weapon_halberd_20",
        quality: "Epic"
    },
    35072: {
        name: "Brutal Gladiator's Quickblade",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "sword",
        speed: 1.5,
        mindmg: 113,
        maxdmg: 211,
        hand: "Off",
        Phase: 0,
        icon: "inv_sword_114",
        quality: "Epic"
    },
    35076: {
        name: "Brutal Gladiator's Right Ripper",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "fist",
        speed: 2.6,
        mindmg: 196,
        maxdmg: 365,
        hand: "Main",
        Phase: 0,
        icon: "inv_weapon_hand_15",
        quality: "Epic"
    },
    35093: {
        name: "Brutal Gladiator's Shanker",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 155,
        maxdmg: 233,
        hand: "One",
        Phase: 0,
        icon: "inv_weapon_shortblade_75",
        quality: "Epic"
    },
    35095: {
        name: "Brutal Gladiator's Shiv",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "dagger",
        speed: 1.4,
        mindmg: 105,
        maxdmg: 197,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_shortblade_75",
        quality: "Epic"
    },
    35101: {
        name: "Brutal Gladiator's Slicer",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "sword",
        speed: 2.6,
        mindmg: 224,
        maxdmg: 337,
        hand: "One",
        Phase: 0,
        icon: "inv_sword_114",
        quality: "Epic"
    },
    35058: {
        name: "Brutal Gladiator's Mutilator",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "dagger",
        speed: 1.8,
        mindmg: 136,
        maxdmg: 253,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_shortblade_75",
        quality: "Epic"
    },
    35110: {
        name: "Brutal Gladiator's Waraxe",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 2.6,
        mindmg: 196,
        maxdmg: 365,
        hand: "Main",
        Phase: 0,
        icon: "inv_axe_1h_blacksmithing_02",
        quality: "Epic"
    },
    34995: {
        name: "Brutal Gladiator's Chopper",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "axe",
        speed: 2.6,
        mindmg: 196,
        maxdmg: 365,
        hand: "Off",
        Phase: 0,
        icon: "inv_axe_1h_blacksmithing_02",
        quality: "Epic"
    },
    35037: {
        name: "Brutal Gladiator's Left Render",
        stats: {
            Stam: 31,
            MAP: 38,
            RAP: 38,
            Crit: 22,
            Hit: 9,
            Resil: 12,
            ArP: 7
        },
        Location: "Arena Reward",
        type: "fist",
        speed: 2.6,
        mindmg: 196,
        maxdmg: 365,
        hand: "Off",
        Phase: 0,
        icon: "inv_weapon_hand_15",
        quality: "Epic"
    },
    35595: {
        name: "Glacier Sharpened Vileblade",
        iLevel: 159,
        Version: "Normal",
        stats: {
            MAP: 56,
            RAP: 56,
            Haste: 29
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_71"
    },
    35601: {
        name: "Drakonid Arm Blade",
        iLevel: 159,
        Version: "Normal",
        stats: {
            Agi: 32,
            MAP: 0,
            RAP: 0,
            Hit: 32,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "Off",
        quality: "Rare",
        icon: "inv_weapon_hand_09"
    },
    35655: {
        name: "Cobweb Machete",
        iLevel: 163,
        Version: "Normal",
        stats: {
            Agi: 39,
            Stam: 20,
            MAP: 0,
            RAP: 0,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_69"
    },
    36944: {
        name: "Lifeblade of Belgaristrasz",
        iLevel: 187,
        Version: "Normal",
        stats: {
            Agi: 29,
            Stam: 24,
            MAP: 56,
            RAP: 56,
            Hit: 20,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_72"
    },
    36962: {
        name: "Wyrmclaw Battleaxe",
        iLevel: 187,
        Version: "Normal",
        stats: {
            Agi: 69,
            Stam: 60,
            MAP: 138,
            RAP: 138,
            Haste: 50
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "Two",
        quality: "Rare",
        icon: "inv_axe_81"
    },
    36980: {
        name: "Hewn Sparring Quarterstaff",
        iLevel: 187,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 103,
            MAP: 138,
            RAP: 138,
            Crit: 34,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "Two",
        quality: "Rare",
        icon: "inv_staff_71"
    },
    37037: {
        name: "Ritualistic Athame",
        iLevel: 187,
        Version: "Normal",
        stats: {
            Agi: 29,
            MAP: 58,
            RAP: 58,
            Haste: 30
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_71"
    },
    37081: {
        name: "Meathook's Slicer",
        iLevel: 187,
        Version: "Normal",
        stats: {
            Agi: 29,
            Stam: 24,
            MAP: 60,
            RAP: 60,
            ArP: 22,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_sword_99"
    },
    37181: {
        name: "Dagger of Betrayal",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 24,
            Stam: 28,
            MAP: 66,
            RAP: 66,
            Hit: 32,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_72"
    },
    37190: {
        name: "Enraged Feral Staff",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 78,
            Stam: 117,
            MAP: 104,
            RAP: 104,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "Two",
        quality: "Rare",
        icon: "inv_staff_71"
    },
    37235: {
        name: "Crypt Lord's Deft Blade",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 19,
            MAP: 66,
            RAP: 66,
            Hit: 24,
            Haste: 33
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_sword_97"
    },
    37255: {
        name: "The Interrogator",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 48,
            MAP: 70,
            RAP: 70,
            Hit: 32,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_sword_99"
    },
    37631: {
        name: "Fist of the Deity",
        iLevel: 200,
        Version: "Normal",
        stats: {
            MAP: 66,
            RAP: 66,
            Hit: 25,
            Haste: 38
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "Main",
        quality: "Rare",
        icon: "inv_sword_draenei_05"
    },
    37667: {
        name: "The Fleshshaper",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 22,
            Stam: 58,
            MAP: 76,
            RAP: 76,
            Hit: 27,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_70"
    },
    37693: {
        name: "Greed",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 29,
            Stam: 57,
            MAP: 80,
            RAP: 80,
            ArP: 22,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "Main",
        quality: "Rare",
        icon: "inv_weapon_hand_06"
    },
    37802: {
        name: "Elanor's Edge",
        iLevel: 146,
        Version: "Normal",
        stats: {
            Agi: 17,
            MAP: 32,
            RAP: 32,
            ArP: 17,
            Haste: 17
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_72"
    },
    37813: {
        name: "Banner Slicer",
        iLevel: 154,
        Version: "Normal",
        stats: {
            MAP: 100,
            RAP: 100,
            Crit: 72,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "Two",
        quality: "Rare",
        icon: "inv_spear_08"
    },
    37848: {
        name: "Lightning Giant Staff",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 76,
            Stam: 84,
            MAP: 158,
            RAP: 158,
            Crit: 45,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "Two",
        quality: "Rare",
        icon: "inv_staff_71"
    },
    37856: {
        name: "Librarian's Paper Cutter",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 25,
            MAP: 0,
            RAP: 0,
            Crit: 26,
            Haste: 46
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_71"
    },
    37871: {
        name: "The Key",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 34,
            Stam: 28,
            MAP: 64,
            RAP: 64,
            Hit: 24,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_axe_97"
    },
    37883: {
        name: "Staff of Trickery",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 89,
            Stam: 133,
            MAP: 180,
            RAP: 180,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "Two",
        quality: "Rare",
        icon: "inv_staff_84"
    },
    38238: {
        name: "Borean Smasher",
        iLevel: 138,
        Version: "Normal",
        stats: {
            Agi: 15,
            Stam: 21,
            MAP: 32,
            RAP: 32,
            ArP: 17,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "Main",
        quality: "Uncommon",
        icon: "inv_weapon_hand_18"
    },
    38242: {
        name: "Fang of the Desolate Soul",
        iLevel: 138,
        Version: "Normal",
        stats: {
            Agi: 16,
            Stam: 22,
            MAP: 32,
            RAP: 32,
            Crit: 15,
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Uncommon",
        icon: "inv_weapon_shortblade_67"
    },
    39140: {
        name: "Knife of Incision",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 19,
            Stam: 37,
            MAP: 78,
            RAP: 78,
            Crit: 29,
            Haste: 26
        },
        Location: "Naxxramas-10",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_knife_1h_stratholme_d_01"
    },
    39221: {
        name: "Wraith Spear",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 90,
            Stam: 79,
            MAP: 126,
            RAP: 126,
            Crit: 68,
            Haste: 45
        },
        Location: "Naxxramas-10",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_04"
    },
    39255: {
        name: "Staff of the Plague Beast",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 89,
            Stam: 135,
            MAP: 136,
            RAP: 136,
        },
        Location: "Naxxramas-10",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_77"
    },
    39270: {
        name: "Hatestrike",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 25,
            Stam: 39,
            MAP: 76,
            RAP: 76,
            Crit: 27,
            Hit: 22,
        },
        Location: "Naxxramas-10",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_61"
    },
    39291: {
        name: "Torment of the Banished",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 27,
            Stam: 39,
            MAP: 76,
            RAP: 76,
            Crit: 26,
            Haste: 22
        },
        Location: "Naxxramas-10",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_60"
    },
    39393: {
        name: "Claymore of Ancient Power",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 64,
            Stam: 78,
            MAP: 180,
            RAP: 180,
            Crit: 89,
        },
        Location: "Naxxramas-10",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_sword_46"
    },
    39416: {
        name: "Kel'Thuzad's Reach",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 21,
            Stam: 43,
            MAP: 86,
            RAP: 86,
            Crit: 31,
            Haste: 28
        },
        Location: "Naxxramas-10",
        Phase: 1,
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_03"
    },
    39420: {
        name: "Anarchy",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 29,
            Stam: 46,
            MAP: 86,
            RAP: 86,
            Hit: 28,
            ArP: 25,
        },
        Location: "Naxxramas-10",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_37"
    },
    39422: {
        name: "Staff of the Plaguehound",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 72,
            Stam: 150,
            MAP: 200,
            RAP: 200,
        },
        Location: "Naxxramas-10",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_80"
    },
    39427: {
        name: "Omen of Ruin",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 29,
            Stam: 37,
            MAP: 76,
            RAP: 76,
            Crit: 29,
            ArP: 19,
        },
        Location: "Naxxramas-10",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_knife_1h_stratholme_d_03"
    },
    39468: {
        name: "The Stray",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 22,
            Stam: 39,
            MAP: 76,
            RAP: 76,
            Hit: 27,
            Haste: 26
        },
        Location: "Naxxramas-10",
        Phase: 1,
        hand: "Off",
        quality: "Epic",
        icon: "inv_weapon_hand_03"
    },
    39714: {
        name: "Webbed Death",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 43,
            Stam: 37,
            MAP: 66,
            RAP: 66,
            Crit: 31,
            Hit: 21,
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_58"
    },
    39730: {
        name: "Widow's Fury",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 43,
            Stam: 42,
            MAP: 62,
            RAP: 62,
            Crit: 29,
            Haste: 25
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_98"
    },
    40208: {
        name: "Cryptfiend's Bite",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 51,
            Stam: 108,
            MAP: 200,
            RAP: 200,
            Crit: 58,
            Haste: 77
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_26"
    },
    40233: {
        name: "The Undeath Carrier",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 100,
            Stam: 151,
            MAP: 153,
            RAP: 153,
            Crit: 51,
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_86"
    },
    40239: {
        name: "The Hand of Nerub",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 33,
            Stam: 42,
            MAP: 86,
            RAP: 86,
            Crit: 29,
            Hit: 21,
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "Off",
        quality: "Epic",
        icon: "inv_weapon_hand_05"
    },
    40280: {
        name: "Origin of Nightmares",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 100,
            Stam: 150,
            MAP: 154,
            RAP: 154,
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_90"
    },
    40281: {
        name: "Twilight Mist",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 25,
            Stam: 46,
            MAP: 86,
            RAP: 86,
            Hit: 21,
            Haste: 33
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_77"
    },
    40368: {
        name: "Murder",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 25,
            Stam: 46,
            MAP: 86,
            RAP: 86,
            Hit: 21,
            Haste: 33
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_84"
    },
    40383: {
        name: "Calamity's Grasp",
        iLevel: 226,
        Version: "Normal",
        stats: {
            Agi: 36,
            Stam: 42,
            MAP: 98,
            RAP: 98,
            Crit: 37,
            Haste: 24
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_20"
    },
    40384: {
        name: "Betrayer of Humanity",
        iLevel: 226,
        Version: "Normal",
        stats: {
            Agi: 66,
            Stam: 121,
            MAP: 226,
            RAP: 226,
            Crit: 87,
            Haste: 57
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_axe_99"
    },
    40386: {
        name: "Sinister Revenge",
        iLevel: 226,
        Version: "Normal",
        stats: {
            Agi: 36,
            Stam: 42,
            MAP: 98,
            RAP: 98,
            Hit: 37,
            Haste: 24
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_92"
    },
    40388: {
        name: "Journey's End",
        iLevel: 226,
        Version: "Normal",
        stats: {
            Agi: 87,
            Stam: 114,
            MAP: 228,
            RAP: 228,
            Crit: 57,
            Haste: 75
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_89"
    },
    40407: {
        name: "Silent Crusader",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 21,
            Stam: 49,
            MAP: 86,
            RAP: 86,
            Hit: 31,
            ArP: 25,
        },
        Location: "Naxx-25",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_120"
    },
    40429: {
        name: "Crimson Steel",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 19,
            Stam: 29,
            MAP: 78,
            RAP: 78,
            Crit: 22,
            Hit: 27,
        },
        Location: "Obsidian Sanctum-10",
        Phase: 1,
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_18"
    },
    40491: {
        name: "Hailstorm",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 31,
            Stam: 39,
            MAP: 86,
            RAP: 86,
            Hit: 31,
            ArP: 25,
        },
        Location: "Eye of Eternity-10",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_122"
    },
    40497: {
        name: "Black Ice",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 108,
            Stam: 88,
            MAP: 134,
            RAP: 134,
            Hit: 72,
            Haste: 58
        },
        Location: "Eye of Eternity-10",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd17"
    },
    40702: {
        name: "Rolfsen's Ripper",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 39,
            MAP: 78,
            RAP: 78,
            Haste: 50
        },
        Location: "Emblem of Heroism",
        Phase: 1,
        hand: "Off",
        quality: "Epic",
        icon: "inv_weapon_shortblade_88"
    },
    40703: {
        name: "Grasscutter",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 25,
            Stam: 39,
            MAP: 76,
            RAP: 76,
            Crit: 38,
        },
        Location: "Emblem of Heroism",
        Phase: 1,
        hand: "Off",
        quality: "Epic",
        icon: "inv_sword_123"
    },
    40704: {
        name: "Pride",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 39,
            MAP: 76,
            RAP: 76,
            Hit: 50,
        },
        Location: "Emblem of Heroism",
        Phase: 1,
        hand: "Off",
        quality: "Epic",
        icon: "inv_weapon_hand_06"
    },
    41181: {
        name: "Honed Cobalt Cleaver",
        iLevel: 159,
        Version: "Normal",
        stats: {
            MAP: 154,
            RAP: 154,
            Haste: 51
        },
        Location: "Blacksmithing",
        Phase: 1,
        hand: "Two",
        quality: "Rare",
        icon: "inv_axe_87"
    },
    41183: {
        name: "Saronite Ambusher",
        iLevel: 167,
        Version: "Normal",
        stats: {
            MAP: 62,
            RAP: 62,
            Haste: 30
        },
        Location: "Blacksmithing",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_68"
    },
    41184: {
        name: "Saronite Shiv",
        iLevel: 171,
        Version: "Normal",
        stats: {
            MAP: 56,
            RAP: 56,
            Hit: 55,
        },
        Location: "Blacksmithing",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_68"
    },
    41186: {
        name: "Corroded Saronite Edge",
        iLevel: 179,
        Version: "Normal",
        stats: {
            Agi: 50,
            Stam: 21,
            MAP: 60,
            RAP: 60,
            Hit: 14,
        },
        Location: "Crafting",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_sword_97"
    },
    41187: {
        name: "Corroded Saronite Woundbringer",
        iLevel: 179,
        Version: "Normal",
        stats: {
            Agi: 28,
            Stam: 21,
            MAP: 60,
            RAP: 60,
        },
        Location: "Crafting",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_sword_97"
    },
    42214: {
        name: "Savage Gladiator's Waraxe",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 49,
            MAP: 66,
            RAP: 66,
            Crit: 22,
            Resil: 22,
        },
        Location: "Honor",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_axe_97"
    },
    42237: {
        name: "Deadly Gladiator's Waraxe",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Stam: 64,
            MAP: 86,
            RAP: 86,
            Crit: 29,
            Resil: 28,
        },
        Location: "Season 5",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_97"
    },
    42294: {
        name: "Savage Gladiator's Decapitator",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 117,
            MAP: 156,
            RAP: 156,
            Crit: 52,
            Resil: 51,
        },
        Location: "Honor",
        Phase: 1,
        hand: "Two",
        quality: "Rare",
        icon: "inv_axe_98"
    },
    42296: {
        name: "Savage Gladiator's Pike",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 117,
            MAP: 156,
            RAP: 156,
            Crit: 52,
            Resil: 51,
        },
        Location: "Honor",
        Phase: 1,
        hand: "Two",
        quality: "Rare",
        icon: "inv_weapon_halberd_29"
    },
    42297: {
        name: "Savage Gladiator's Greatsword",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 117,
            MAP: 156,
            RAP: 156,
            Crit: 52,
            Resil: 51,
        },
        Location: "Honor",
        Phase: 1,
        hand: "Two",
        quality: "Rare",
        icon: "inv_sword_131"
    },
    42316: {
        name: "Hateful Gladiator's Decapitator",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 135,
            MAP: 178,
            RAP: 178,
            Crit: 60,
            Resil: 59,
        },
        Location: "Season 5",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_axe_98"
    },
    42326: {
        name: "Hateful Gladiator's Pike",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 135,
            MAP: 178,
            RAP: 178,
            Crit: 60,
            Resil: 59,
        },
        Location: "Season 5",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_29"
    },
    42331: {
        name: "Hateful Gladiator's Greatsword",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 135,
            MAP: 178,
            RAP: 178,
            Crit: 60,
            Resil: 59,
        },
        Location: "Season 5",
        Phase: 1,
        hand: "Two",
        quality: "Epic",
        icon: "inv_sword_131"
    },
    42435: {
        name: "Titansteel Shanker",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 45,
            MAP: 106,
            RAP: 106,
            Crit: 23,
        },
        Location: "Blacksmithing",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_76"
    },
    43611: {
        name: "Krol Cleaver",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 36,
            Stam: 42,
            MAP: 70,
            RAP: 70,
            ArP: 28,
        },
        Location: "World Drop",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_18"
    },
    44166: {
        name: "Lightblade Rivener",
        iLevel: 187,
        Version: "Normal",
        stats: {
            Agi: 29,
            MAP: 58,
            RAP: 58,
            Haste: 30
        },
        Location: "Kirin Tor",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_71"
    },
    44187: {
        name: "Fang of Truth",
        iLevel: 187,
        Version: "Normal",
        stats: {
            Agi: 32,
            Stam: 29,
            MAP: 48,
            RAP: 48,
            Hit: 33,
        },
        Location: "Wyrmrest Accord",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_sword_99"
    },
    44192: {
        name: "Stalactite Chopper",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 49,
            MAP: 32,
            RAP: 32,
            Crit: 34,
            ArP: 26,
        },
        Location: "Sons of Hodir",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_axe_30"
    },
    44193: {
        name: "Broken Stalactite",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 26,
            MAP: 48,
            RAP: 48,
            Crit: 33,
            Hit: 28,
        },
        Location: "Sons of Hodir",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_71"
    },
    44249: {
        name: "Runeblade of Demonstrable Power",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 63,
            MAP: 168,
            RAP: 168,
            Crit: 67,
            Haste: 33
        },
        Location: "Knights of the Ebon Blade",
        Phase: 1,
        hand: "Two",
        quality: "Rare",
        icon: "inv_sword_95"
    },
    44250: {
        name: "Reaper of Dark Souls",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 24,
            MAP: 66,
            RAP: 66,
            Crit: 26,
            Hit: 33,
        },
        Location: "Knights of the Ebon Blade",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_sword_97"
    },
    44311: {
        name: "Avool's Sword of Jin",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 38,
            Stam: 36,
            MAP: 62,
            RAP: 62,
            Hit: 31,
        },
        Location: "World Drop",
        Phase: 1,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_109"
    },
    44746: {
        name: "Knife of the Tarnished Soul",
        iLevel: 174,
        Version: "Normal",
        stats: {
            Agi: 25,
            Stam: 29,
            MAP: 0,
            RAP: 0,
            Crit: 19,
            Haste: 27
        },
        Location: "WotLK 5-man",
        Phase: 1,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_71"
    },
    45075: {
        name: "Ironforge Smasher",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 39,
            Stam: 48,
            MAP: 0,
            RAP: 0,
            Crit: 28,
            Haste: 25
        },
        Location: "Argent Tournament",
        Phase: 4,
        hand: "One",
        quality: "Rare",
        icon: "inv_mace_29"
    },
    45077: {
        name: "Dagger of the Rising Moon",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 43,
            MAP: 78,
            RAP: 78,
            Crit: 22,
            Hit: 38,
        },
        Location: "Argent Tournament",
        Phase: 4,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_96"
    },
    45128: {
        name: "Silvery Sylvan Stave",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 103,
            Stam: 98,
            MAP: 134,
            RAP: 134,
            Crit: 52,
        },
        Location: "Argent Tournament",
        Phase: 4,
        hand: "Two",
        quality: "Rare",
        icon: "inv_staff_96"
    },
    45132: {
        name: "Golden Saronite Dragon",
        iLevel: 239,
        Version: "Normal",
        stats: {
            Agi: 32,
            Stam: 48,
            MAP: 94,
            RAP: 94,
            Hit: 40,
            Haste: 32
        },
        Location: "Ulduar-25 Hard",
        Phase: 2,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Hit: 4
        },
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_23"
    },
    45142: {
        name: "Remorse",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 51,
            MAP: 74,
            RAP: 74,
            Haste: 34
        },
        Location: "Ulduar-25",
        Phase: 2,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_135"
    },
    45212: {
        name: "Staff of Feral Furies",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Agi: 103,
            Stam: 98,
            MAP: 134,
            RAP: 134,
            Crit: 52,
        },
        Location: "Argent Tournament",
        Phase: 4,
        hand: "Two",
        quality: "Rare",
        icon: "inv_staff_81"
    },
    45222: {
        name: "Spinal Destroyer",
        iLevel: 200,
        Version: "Normal",
        stats: {
            Stam: 43,
            MAP: 78,
            RAP: 78,
            Crit: 22,
            Hit: 38,
        },
        Location: "Tournament?",
        Phase: 4,
        hand: "One",
        quality: "Rare",
        icon: "inv_weapon_shortblade_97"
    },
    45233: {
        name: "Stormrune Edge",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 121,
            Stam: 120,
            MAP: 160,
            RAP: 160,
            Crit: 86,
            ArP: 70,
        },
        Location: "Ulduar-25",
        Phase: 2,
        hand: "Two",
        quality: "Epic",
        icon: "inv_sword_136"
    },
    45246: {
        name: "Golem-Shard Sticker",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 51,
            MAP: 74,
            RAP: 74,
            Crit: 34,
        },
        Location: "Ulduar-25",
        Phase: 2,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_78"
    },
    45256: {
        name: "Twisted Visage",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 120,
            Stam: 121,
            MAP: 160,
            RAP: 160,
            Crit: 86,
            Hit: 70,
        },
        Location: "Ulduar-25",
        Phase: 2,
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_95"
    },
    45266: {
        name: "Malice",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 51,
            MAP: 76,
            RAP: 76,
            Crit: 37,
            Haste: 29
        },
        Location: "Ulduar-25",
        Phase: 2,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_133"
    },
    45284: {
        name: "Kinetic Ripper",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 46,
            Stam: 38,
            MAP: 70,
            RAP: 70,
            Hit: 22,
            Haste: 34
        },
        Location: "Ulduar-10",
        Phase: 2,
        hand: "Off",
        quality: "Epic",
        icon: "inv_weapon_hand_22"
    },
    45298: {
        name: "Razorscale Talon",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 36,
            Stam: 51,
            MAP: 90,
            RAP: 90,
            Crit: 33,
            Haste: 20
        },
        Location: "Ulduar-10",
        Phase: 2,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_133"
    },
    45311: {
        name: "Relentless Edge",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 65,
            Stam: 111,
            MAP: 212,
            RAP: 212,
            Crit: 76,
            Haste: 62
        },
        Location: "Ulduar-10",
        Phase: 2,
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_30"
    },
    45331: {
        name: "Rune-Etched Nightblade",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 46,
            Stam: 50,
            MAP: 56,
            RAP: 56,
            Crit: 32,
            ArP: 26,
        },
        Location: "Ulduar-10",
        Phase: 2,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_135"
    },
    45448: {
        name: "Perilous Bite",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 51,
            Stam: 53,
            MAP: 62,
            RAP: 62,
            Hit: 34,
            ArP: 24,
        },
        Location: "Ulduar-10 Hard",
        Phase: 2,
        sockets: [
            "Red"
        ],
        socketBonus: {
            ArP: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_77"
    },
    45449: {
        name: "The Masticator",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 42,
            Stam: 45,
            MAP: 80,
            RAP: 80,
            Crit: 30,
            Hit: 34,
        },
        Location: "Ulduar-10 Hard",
        Phase: 2,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_22"
    },
    45484: {
        name: "Bladetwister",
        iLevel: 239,
        Version: "Normal",
        stats: {
            Agi: 55,
            Stam: 48,
            MAP: 64,
            RAP: 64,
            Crit: 28,
            Haste: 37
        },
        Location: "Ulduar-25 Hard",
        Phase: 2,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_93"
    },
    45489: {
        name: "Insanity's Grip",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 51,
            MAP: 80,
            RAP: 80,
            Crit: 34,
        },
        Location: "Ulduar-25",
        Phase: 2,
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_23"
    },
    45494: {
        name: "Delirium's Touch",
        iLevel: 239,
        Version: "Normal",
        stats: {
            Agi: 35,
            Stam: 54,
            MAP: 94,
            RAP: 94,
            Crit: 27,
            ArP: 37,
        },
        Location: "Ulduar-25 Hard",
        Phase: 2,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Crit: 4
        },
        hand: "Off",
        quality: "Epic",
        icon: "inv_weapon_hand_23"
    },
    45498: {
        name: "Lotrafen Spear of the Damned",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 120,
            Stam: 105,
            MAP: 160,
            RAP: 160,
            Crit: 87,
            ArP: 80,
        },
        Location: "Ulduar-25",
        Phase: 2,
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_30"
    },
    45533: {
        name: "Dark Edge of Depravity",
        iLevel: 239,
        Version: "Normal",
        stats: {
            Agi: 112,
            Stam: 129,
            MAP: 165,
            RAP: 165,
            Hit: 64,
            Haste: 85
        },
        Location: "Ulduar-25 Hard",
        Phase: 2,
        sockets: [
            "Red",
            "Blue"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_30"
    },
    45605: {
        name: "Daschal's Bite",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 55,
            MAP: 68,
            RAP: 68,
            ArP: 29,
            Haste: 34
        },
        Location: "Ulduar-25",
        Phase: 2,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_74"
    },
    45607: {
        name: "Fang of Oblivion",
        iLevel: 239,
        Version: "Normal",
        stats: {
            Agi: 47,
            Stam: 54,
            MAP: 80,
            RAP: 80,
            Crit: 29,
            Haste: 24
        },
        Location: "Ulduar-25 Hard",
        Phase: 2,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_84"
    },
    45613: {
        name: "Dreambinder",
        iLevel: 239,
        Version: "Normal",
        stats: {
            Agi: 112,
            Stam: 105,
            MAP: 140,
            RAP: 140,
            ArP: 85,
            Haste: 86
        },
        Location: "Ulduar-25 Hard",
        Phase: 2,
        sockets: [
            "Yellow",
            "Blue"
        ],
        socketBonus: {
            Agi: 8
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_93"
    },
    45695: {
        name: "Spire of Withering Dreams",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 73,
            Stam: 93,
            MAP: 212,
            RAP: 212,
            ArP: 67,
            Haste: 76
        },
        Location: "Ulduar-10",
        Phase: 2,
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_93"
    },
    45930: {
        name: "Combatant's Bootblade",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 44,
            Stam: 40,
            MAP: 74,
            RAP: 74,
            Crit: 32,
            Haste: 34
        },
        Location: "Ulduar-10 Hard",
        Phase: 2,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Haste: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_79"
    },
    45947: {
        name: "Serilas Blood Blade of Invar One-Arm",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 34,
            MAP: 72,
            RAP: 72,
            Hit: 32,
        },
        Location: "Ulduar-10 Hard",
        Phase: 2,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Crit: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_133"
    },
    45996: {
        name: "Hoperender",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 106,
            Stam: 86,
            MAP: 138,
            RAP: 138,
            Hit: 62,
            ArP: 78,
        },
        Location: "Ulduar-10",
        Phase: 2,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            Stam: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_30"
    },
    46011: {
        name: "Shadowbite",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 45,
            Stam: 34,
            MAP: 60,
            RAP: 60,
            Hit: 35,
        },
        Location: "Ulduar-10",
        Phase: 2,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_94"
    },
    46024: {
        name: "Kingsbane",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 46,
            Stam: 34,
            MAP: 70,
            RAP: 70,
            Hit: 36,
        },
        Location: "Ulduar-10",
        Phase: 2,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_79"
    },
    46031: {
        name: "Touch of Madness",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 24,
            Stam: 52,
            MAP: 92,
            RAP: 92,
            Crit: 26,
            Hit: 34,
        },
        Location: "Ulduar-10",
        Phase: 2,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_101"
    },
    46033: {
        name: "Tortured Earth",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 88,
            Stam: 131,
            MAP: 204,
            RAP: 204,
            Crit: 73,
            Hit: 56,
        },
        Location: "Ulduar-10 Hard",
        Phase: 2,
        sockets: [
            "Yellow",
            "Yellow"
        ],
        socketBonus: {
            Hit: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_94"
    },
    46036: {
        name: "Void Sabre",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 51,
            MAP: 72,
            RAP: 72,
            Crit: 20,
            Hit: 36,
        },
        Location: "Ulduar-10 Hard",
        Phase: 2,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_133"
    },
    46958: {
        name: "Steel Bladebreaker",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 58,
            Stam: 58,
            MAP: 89,
            RAP: 89,
            Crit: 44,
            ArP: 30,
        },
        Location: "ToC-25",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_95"
    },
    46969: {
        name: "Steel Bladebreaker (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 66,
            MAP: 84,
            RAP: 84,
            Crit: 50,
            ArP: 33,
        },
        Location: "ToGC-25",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_95"
    },
    46996: {
        name: "Lionhead Slasher",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 58,
            Stam: 58,
            MAP: 78,
            RAP: 78,
            Crit: 39,
            ArP: 39,
        },
        Location: "ToC-25",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_105"
    },
    47001: {
        name: "Lionhead Slasher (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 66,
            Stam: 66,
            MAP: 72,
            RAP: 72,
            Crit: 36,
            ArP: 44,
        },
        Location: "ToGC-25",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_105"
    },
    47104: {
        name: "Twin Spike",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 58,
            Stam: 58,
            MAP: 89,
            RAP: 89,
            Hit: 39,
            Haste: 39
        },
        Location: "ToC-25",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_95"
    },
    47113: {
        name: "Twin Spike (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 66,
            MAP: 84,
            RAP: 84,
            Hit: 44,
            Haste: 44
        },
        Location: "ToGC-25",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_95"
    },
    47114: {
        name: "Lupine Longstaff",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 128,
            Stam: 136,
            MAP: 181,
            RAP: 181,
            ArP: 82,
            Haste: 90
        },
        Location: "ToC-25",
        Phase: 3,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_100"
    },
    47130: {
        name: "Lupine Longstaff (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 137,
            Stam: 141,
            MAP: 204,
            RAP: 204,
            ArP: 94,
            Haste: 102
        },
        Location: "ToGC-25",
        Phase: 3,
        sockets: [
            "Blue",
            "Red"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_100"
    },
    47148: {
        name: "Stormpike Cleaver",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 58,
            Stam: 58,
            MAP: 78,
            RAP: 78,
            Hit: 39,
            Haste: 39
        },
        Location: "ToC-25",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_105"
    },
    47156: {
        name: "Stormpike Cleaver (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 66,
            MAP: 72,
            RAP: 72,
            Hit: 44,
            Haste: 44
        },
        Location: "ToGC-25",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_105"
    },
    47233: {
        name: "Archon Glaive",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 128,
            Stam: 136,
            MAP: 165,
            RAP: 165,
            Crit: 90,
            ArP: 90,
        },
        Location: "ToC-25",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            MAP: 8,
            RAP: 8
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_101"
    },
    47239: {
        name: "Archon Glaive (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 137,
            Stam: 153,
            MAP: 188,
            RAP: 188,
            Crit: 102,
            ArP: 94,
        },
        Location: "ToGC-25",
        Phase: 3,
        sockets: [
            "Yellow",
            "Red"
        ],
        socketBonus: {
            MAP: 12,
            RAP: 12
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_101"
    },
    47255: {
        name: "Stygian Bladebreaker",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 58,
            Stam: 58,
            MAP: 89,
            RAP: 89,
            Crit: 44,
            ArP: 30,
        },
        Location: "ToC-25 (Icehowl)",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_94"
    },
    47266: {
        name: "Blood Fury",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 58,
            Stam: 58,
            MAP: 78,
            RAP: 78,
            Crit: 39,
            ArP: 39,
        },
        Location: "ToC-25 (Jaraxxus)",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_104"
    },
    47300: {
        name: "Gouge of the Frigid Heart",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 58,
            Stam: 58,
            MAP: 89,
            RAP: 89,
            Hit: 39,
            Haste: 39
        },
        Location: "ToC-25",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_94"
    },
    47302: {
        name: "Twin's Pact",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 128,
            Stam: 136,
            MAP: 181,
            RAP: 181,
            ArP: 82,
            Haste: 90
        },
        Location: "ToC-25",
        Phase: 3,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_97"
    },
    47314: {
        name: "Hellscream Slicer",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 58,
            Stam: 58,
            MAP: 78,
            RAP: 78,
            Hit: 39,
            Haste: 39
        },
        Location: "ToC-25",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_104"
    },
    47329: {
        name: "Hellion Glaive",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 128,
            Stam: 136,
            MAP: 165,
            RAP: 165,
            Crit: 90,
            ArP: 90,
        },
        Location: "ToC-25 (Anub'arak)",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            MAP: 8,
            RAP: 8
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_31"
    },
    47416: {
        name: "Stygian Bladebreaker (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 66,
            MAP: 84,
            RAP: 84,
            Crit: 50,
            ArP: 33,
        },
        Location: "ToGC-25 (Icehowl)",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_94"
    },
    47427: {
        name: "Blood Fury (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 66,
            Stam: 66,
            MAP: 72,
            RAP: 72,
            Crit: 36,
            ArP: 44,
        },
        Location: "ToGC-25 (Jaraxxus)",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_104"
    },
    47461: {
        name: "Gouge of the Frigid Heart (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 66,
            MAP: 84,
            RAP: 84,
            Hit: 44,
            Haste: 44
        },
        Location: "ToGC-25",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_94"
    },
    47463: {
        name: "Twin's Pact (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 137,
            Stam: 141,
            MAP: 204,
            RAP: 204,
            ArP: 94,
            Haste: 102
        },
        Location: "ToGC-25",
        Phase: 3,
        sockets: [
            "Blue",
            "Red"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_97"
    },
    47475: {
        name: "Hellscream Slicer (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 66,
            MAP: 72,
            RAP: 72,
            Hit: 44,
            Haste: 44
        },
        Location: "ToGC-25",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_104"
    },
    47491: {
        name: "Hellion Glaive (H)",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 137,
            Stam: 153,
            MAP: 188,
            RAP: 188,
            Crit: 102,
            ArP: 94,
        },
        Location: "ToGC-25 (Anub'arak)",
        Phase: 3,
        sockets: [
            "Yellow",
            "Red"
        ],
        socketBonus: {
            MAP: 12,
            RAP: 12
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_31"
    },
    47515: {
        name: "Decimation",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 137,
            Stam: 170,
            MAP: 188,
            RAP: 188,
            Crit: 102,
            Hit: 94,
        },
        Location: "ToGC-25",
        Phase: 3,
        sockets: [
            "Red",
            "Blue"
        ],
        socketBonus: {
            MAP: 12,
            RAP: 12
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_sword_141"
    },
    47516: {
        name: "Fleshrender",
        iLevel: 258,
        Version: "Heroic",
        stats: {
            Agi: 137,
            Stam: 170,
            MAP: 188,
            RAP: 188,
            Crit: 102,
            Hit: 94,
        },
        Location: "ToGC-25",
        Phase: 3,
        sockets: [
            "Red",
            "Blue"
        ],
        socketBonus: {
            MAP: 12,
            RAP: 12
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_sword_140"
    },
    47522: {
        name: "Marrowstrike",
        iLevel: 213,
        Version: "Normal",
        stats: {
            Agi: 106,
            Stam: 101,
            MAP: 154,
            RAP: 154,
            Crit: 57,
            ArP: 60,
        },
        Location: "Colliseum-5",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd16"
    },
    47676: {
        name: "Dirk of the Night Watch",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 52,
            MAP: 62,
            RAP: 62,
            Hit: 37,
            Haste: 22
        },
        Location: "ToC-10",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            MAP: 8,
            RAP: 8
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_95"
    },
    47736: {
        name: "Icefall Blade",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 33,
            MAP: 83,
            RAP: 83,
            Crit: 36,
            ArP: 32,
        },
        Location: "ToC-10",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_95"
    },
    47737: {
        name: "Reckoning",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 112,
            Stam: 92,
            MAP: 183,
            RAP: 183,
            ArP: 86,
            Haste: 62
        },
        Location: "ToC-10",
        Phase: 3,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            ArP: 4
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_sword_141"
    },
    47808: {
        name: "The Lion's Maw",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 39,
            MAP: 78,
            RAP: 78,
            Crit: 38,
            Haste: 29
        },
        Location: "ToC-10",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_105"
    },
    47814: {
        name: "Westfall Saber",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 45,
            MAP: 74,
            RAP: 74,
            Crit: 29,
            ArP: 38,
        },
        Location: "ToC-10",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_145"
    },
    47834: {
        name: "Fordragon Blades",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 104,
            Stam: 137,
            MAP: 123,
            RAP: 123,
            ArP: 86,
            Haste: 62
        },
        Location: "ToC-10",
        Phase: 3,
        sockets: [
            "Red"
        ],
        socketBonus: {
            ArP: 4
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_101"
    },
    47871: {
        name: "Orcish Deathblade",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 52,
            MAP: 62,
            RAP: 62,
            Hit: 37,
            Haste: 22
        },
        Location: "ToC-10",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            MAP: 8,
            RAP: 8
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_93"
    },
    47884: {
        name: "Edge of Agony",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 112,
            Stam: 92,
            MAP: 183,
            RAP: 183,
            ArP: 86,
            Haste: 62
        },
        Location: "ToC-10",
        Phase: 3,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            ArP: 4
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_sword_140"
    },
    47886: {
        name: "Nemesis Blade",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 33,
            MAP: 83,
            RAP: 83,
            Crit: 36,
            ArP: 32,
        },
        Location: "ToC-10",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_94"
    },
    47898: {
        name: "Frostblade Hatchet",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 39,
            MAP: 78,
            RAP: 78,
            Crit: 38,
            Haste: 29
        },
        Location: "ToC-10",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_104"
    },
    47903: {
        name: "Forsaken Bonecarver",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 45,
            MAP: 74,
            RAP: 74,
            Crit: 29,
            ArP: 38,
        },
        Location: "ToC-10",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_138"
    },
    47911: {
        name: "Anguish",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 104,
            Stam: 137,
            MAP: 123,
            RAP: 123,
            ArP: 86,
            Haste: 62
        },
        Location: "ToC-10",
        Phase: 3,
        sockets: [
            "Red"
        ],
        socketBonus: {
            ArP: 4
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_31"
    },
    47938: {
        name: "Dirk of the Night Watch (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 58,
            MAP: 73,
            RAP: 73,
            Hit: 42,
            Haste: 26
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            MAP: 8,
            RAP: 8
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_95"
    },
    47951: {
        name: "Reckoning (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 120,
            Stam: 103,
            MAP: 206,
            RAP: 206,
            ArP: 97,
            Haste: 63
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Blue",
            "Blue"
        ],
        socketBonus: {
            ArP: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_sword_141"
    },
    47953: {
        name: "Icefall Blade (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 52,
            Stam: 38,
            MAP: 74,
            RAP: 74,
            Crit: 41,
            ArP: 36,
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_95"
    },
    47966: {
        name: "The Lion's Maw (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 50,
            Stam: 44,
            MAP: 89,
            RAP: 89,
            Crit: 43,
            Haste: 24
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_105"
    },
    47971: {
        name: "Westfall Saber (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 51,
            MAP: 67,
            RAP: 67,
            Crit: 24,
            ArP: 43,
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Red"
        ],
        socketBonus: {
            MAP: 8,
            RAP: 8
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_145"
    },
    47979: {
        name: "Fordragon Blades (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 118,
            Stam: 155,
            MAP: 125,
            RAP: 125,
            ArP: 97,
            Haste: 63
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Red",
            "Red"
        ],
        socketBonus: {
            ArP: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_101"
    },
    48010: {
        name: "Orcish Deathblade (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 58,
            MAP: 73,
            RAP: 73,
            Hit: 42,
            Haste: 26
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            MAP: 8,
            RAP: 8
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_93"
    },
    48023: {
        name: "Edge of Agony (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 120,
            Stam: 103,
            MAP: 206,
            RAP: 206,
            ArP: 97,
            Haste: 63
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Blue",
            "Blue"
        ],
        socketBonus: {
            ArP: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_sword_140"
    },
    48025: {
        name: "Nemesis Blade (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 52,
            Stam: 38,
            MAP: 74,
            RAP: 74,
            Crit: 41,
            ArP: 36,
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_94"
    },
    48043: {
        name: "Frostblade Hatchet (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 50,
            Stam: 44,
            MAP: 89,
            RAP: 89,
            Crit: 43,
            Haste: 24
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_104"
    },
    48048: {
        name: "Forsaken Bonecarver (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 51,
            MAP: 67,
            RAP: 67,
            Crit: 24,
            ArP: 43,
        },
        Location: "ToC-10",
        Phase: 3,
        sockets: [
            "Red"
        ],
        socketBonus: {
            MAP: 8,
            RAP: 8
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_138"
    },
    48056: {
        name: "Anguish (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 118,
            Stam: 155,
            MAP: 125,
            RAP: 125,
            ArP: 97,
            Haste: 63
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Red",
            "Red"
        ],
        socketBonus: {
            ArP: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_31"
    },
    48084: {
        name: "Forsaken Bonecarver (H)",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 51,
            MAP: 67,
            RAP: 67,
            Crit: 24,
            ArP: 43,
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Red"
        ],
        socketBonus: {
            MAP: 8,
            RAP: 8
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_pants_cloth_33"
    },
    48703: {
        name: "The Facebreaker",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 44,
            MAP: 73,
            RAP: 73,
            Crit: 39,
            ArP: 31,
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_30"
    },
    48705: {
        name: "Attrition",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 128,
            Stam: 118,
            MAP: 142,
            RAP: 142,
            ArP: 63,
            Haste: 97
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Yellow",
            "Blue"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_97"
    },
    48710: {
        name: "Paragon's Breadth",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 128,
            Stam: 118,
            MAP: 142,
            RAP: 142,
            ArP: 63,
            Haste: 97
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Yellow",
            "Blue"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_100"
    },
    48712: {
        name: "The Spinebreaker",
        iLevel: 245,
        Version: "Heroic",
        stats: {
            Agi: 58,
            Stam: 44,
            MAP: 73,
            RAP: 73,
            Crit: 39,
            ArP: 31,
        },
        Location: "ToGC-10",
        Phase: 3,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_29"
    },
    49301: {
        name: "Reclaimed Thunderstrike",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 78,
            Stam: 157,
            MAP: 167,
            RAP: 167,
            Haste: 55
        },
        Location: "Onyxia-10",
        Phase: 3,
        hand: "Two",
        quality: "Epic",
        icon: "inv_spear_08"
    },
    49302: {
        name: "Reclaimed Shadowstrike",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 104,
            Stam: 112,
            MAP: 136,
            RAP: 136,
            Crit: 64,
            ArP: 78,
        },
        Location: "Onyxia-10",
        Phase: 3,
        hand: "Two",
        quality: "Epic",
        icon: "inv_spear_08"
    },
    49496: {
        name: "Reinforced Shadowstrike",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 120,
            Stam: 126,
            MAP: 157,
            RAP: 157,
            Crit: 73,
            ArP: 89,
        },
        Location: "Onyxia-25",
        Phase: 3,
        hand: "Two",
        quality: "Epic",
        icon: "inv_spear_08"
    },
    49497: {
        name: "Reinforced Thunderstrike",
        iLevel: 245,
        Version: "Normal",
        stats: {
            Agi: 89,
            Stam: 180,
            MAP: 190,
            RAP: 190,
            Haste: 63
        },
        Location: "Onyxia-25",
        Phase: 3,
        hand: "Two",
        quality: "Epic",
        icon: "inv_spear_08"
    },
    49789: {
        name: "Heartshiver",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 46,
            Stam: 51,
            MAP: 65,
            RAP: 65,
            Crit: 25,
            Haste: 28
        },
        Location: "ICC-5",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_80"
    },
    49793: {
        name: "Tower of the Mouldering Corpse",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 106,
            Stam: 83,
            MAP: 160,
            RAP: 160,
            Crit: 62,
            Hit: 76,
        },
        Location: "ICC-5",
        Phase: 4,
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_85"
    },
    49807: {
        name: "Krick's Beetle Stabber",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 46,
            Stam: 37,
            MAP: 68,
            RAP: 68,
            ArP: 28,
            Haste: 32
        },
        Location: "ICC-5",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_80"
    },
    49827: {
        name: "Ghoulslicer",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 46,
            Stam: 35,
            MAP: 70,
            RAP: 70,
            ArP: 33,
        },
        Location: "ICC-5",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_119"
    },
    49840: {
        name: "Hate-Forged Cleaver",
        iLevel: 219,
        Version: "Normal",
        stats: {
            Agi: 46,
            Stam: 39,
            MAP: 66,
            RAP: 66,
            ArP: 32,
            Haste: 28
        },
        Location: "ICC-5",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_94"
    },
    50012: {
        name: "Havoc's Call, Blade of Lordaeron Kings",
        iLevel: 271,
        Version: "Normal",
        stats: {
            Agi: 74,
            Stam: 74,
            MAP: 99,
            RAP: 99,
            Crit: 49,
            Haste: 49
        },
        Location: "ICC-25 (Lich King)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_113"
    },
    50016: {
        name: "Rib Spreader",
        iLevel: 264,
        Version: "Normal",
        stats: {
            Agi: 69,
            Stam: 69,
            MAP: 93,
            RAP: 93,
            Crit: 46,
            Haste: 46
        },
        Location: "ICC-25 (Rotface)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_105"
    },
    50040: {
        name: "Distant Land",
        iLevel: 264,
        Version: "Normal",
        stats: {
            Agi: 146,
            Stam: 138,
            MAP: 216,
            RAP: 216,
            Crit: 108,
            Haste: 108
        },
        Location: "ICC-25 (Festergut)",
        Phase: 4,
        sockets: [
            "Red",
            "Blue"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_107"
    },
    50046: {
        name: "Quel'Delar, Cunning of the Shadows",
        iLevel: 251,
        Version: "Normal",
        stats: {
            Agi: 62,
            Stam: 54,
            MAP: 88,
            RAP: 88,
            Crit: 42,
            ArP: 39,
        },
        Location: "Quest",
        Phase: 3,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_155"
    },
    50049: {
        name: "Quel'Delar, Ferocity of the Scorned",
        iLevel: 251,
        Version: "Normal",
        stats: {
            Agi: 144,
            Stam: 136,
            MAP: 197,
            RAP: 197,
            Crit: 99,
            ArP: 91,
        },
        Location: "Quest",
        Phase: 3,
        hand: "Two",
        quality: "Epic",
        icon: "inv_sword_155"
    },
    50178: {
        name: "Bloodfall",
        iLevel: 264,
        Version: "Normal",
        stats: {
            Agi: 162,
            Stam: 162,
            MAP: 184,
            RAP: 184,
            Crit: 108,
            Haste: 92
        },
        Location: "ICC-25 (Lana'thel)",
        Phase: 4,
        sockets: [
            "Red",
            "Blue"
        ],
        socketBonus: {},
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_staff_109"
    },
    50183: {
        name: "Lungbreaker",
        iLevel: 264,
        Version: "Normal",
        stats: {
            Agi: 69,
            Stam: 69,
            MAP: 93,
            RAP: 93,
            Crit: 46,
            ArP: 46,
        },
        Location: "ICC-25 (Dreamwalker)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_105"
    },
    50184: {
        name: "Keleseth's Seducer",
        iLevel: 264,
        Version: "Normal",
        stats: {
            Agi: 69,
            Stam: 69,
            MAP: 93,
            RAP: 93,
            Hit: 46,
            Haste: 46
        },
        Location: "ICC-25 (Princes)",
        Phase: 4,
        hand: "Off",
        quality: "Epic",
        icon: "inv_weapon_hand_33"
    },
    50191: {
        name: "Nighttime",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 39,
            MAP: 78,
            RAP: 78,
            ArP: 34,
            Haste: 34
        },
        Location: "ICC-5hc",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_91"
    },
    50203: {
        name: "Blood Weeper",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 39,
            MAP: 78,
            RAP: 78,
            Crit: 30,
            Haste: 37
        },
        Location: "ICC-5hc",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_77"
    },
    50296: {
        name: "Orca-Hunter's Harpoon",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 112,
            Stam: 92,
            MAP: 183,
            RAP: 183,
            Crit: 66,
            Hit: 84,
        },
        Location: "ICC-5hc",
        Phase: 4,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_halberd_26"
    },
    50302: {
        name: "Liar's Tongue",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 42,
            MAP: 77,
            RAP: 77,
            Crit: 34,
        },
        Location: "ICC-5hc",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_118"
    },
    50315: {
        name: "Seven-Fingered Claws",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 51,
            MAP: 80,
            RAP: 80,
            Crit: 25,
            Hit: 34,
        },
        Location: "ICC-5hc",
        Phase: 4,
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_04"
    },
    50319: {
        name: "Unsharpened Ice Razor",
        iLevel: 232,
        Version: "Normal",
        stats: {
            Agi: 52,
            Stam: 45,
            MAP: 74,
            RAP: 74,
            ArP: 37,
        },
        Location: "ICC-5hc",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_61"
    },
    50411: {
        name: "Scourgeborne Waraxe",
        iLevel: 264,
        Version: "Normal",
        stats: {
            Agi: 69,
            Stam: 69,
            MAP: 93,
            RAP: 93,
            Crit: 46,
            ArP: 46,
        },
        Location: "ICC-25 (Gunship)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_113"
    },
    50412: {
        name: "Bloodvenom Blade",
        iLevel: 264,
        Version: "Normal",
        stats: {
            Agi: 69,
            Stam: 69,
            MAP: 93,
            RAP: 93,
            Hit: 46,
            ArP: 46,
        },
        Location: "ICC-25 (Saurfang)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_154"
    },
    50425: {
        name: "Oathbinder, Charge of the Ranger-General",
        iLevel: 271,
        Version: "Normal",
        stats: {
            Agi: 157,
            Stam: 173,
            MAP: 231,
            RAP: 231,
            Crit: 99,
            ArP: 115,
        },
        Location: "ICC-25 (Lich King)",
        Phase: 4,
        sockets: [
            "Red",
            "Red"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_staff_109"
    },
    50426: {
        name: "Heaven's Fall, Kryss of a Thousand Lies",
        iLevel: 271,
        Version: "Normal",
        stats: {
            Agi: 74,
            Stam: 74,
            MAP: 99,
            RAP: 99,
            Crit: 49,
            Haste: 49
        },
        Location: "ICC-25 (Lich King)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_104"
    },
    50621: {
        name: "Lungbreaker (H)",
        iLevel: 277,
        Version: "Heroic",
        stats: {
            Agi: 78,
            Stam: 78,
            MAP: 88,
            RAP: 88,
            Crit: 52,
            ArP: 44,
        },
        Location: "ICC-25hc (Dreamwalker)",
        Phase: 4,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_105"
    },
    50654: {
        name: "Scourgeborne Waraxe (H)",
        iLevel: 277,
        Version: "Heroic",
        stats: {
            Agi: 78,
            Stam: 78,
            MAP: 88,
            RAP: 88,
            Crit: 52,
            ArP: 44,
        },
        Location: "ICC-25hc (Gunship)",
        Phase: 4,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_113"
    },
    50672: {
        name: "Bloodvenom Blade (H)",
        iLevel: 277,
        Version: "Heroic",
        stats: {
            Agi: 70,
            Stam: 78,
            MAP: 104,
            RAP: 104,
            Hit: 52,
            ArP: 44,
        },
        Location: "ICC-25hc (Saurfang)",
        Phase: 4,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_154"
    },
    50676: {
        name: "Rib Spreader (H)",
        iLevel: 277,
        Version: "Heroic",
        stats: {
            Agi: 78,
            Stam: 78,
            MAP: 88,
            RAP: 88,
            Crit: 52,
            Haste: 44
        },
        Location: "ICC-25hc (Rotface)",
        Phase: 4,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_105"
    },
    50695: {
        name: "Distant Land (H)",
        iLevel: 277,
        Version: "Heroic",
        stats: {
            Agi: 159,
            Stam: 147,
            MAP: 244,
            RAP: 244,
            Crit: 122,
            Haste: 122
        },
        Location: "ICC-25hc (Festergut)",
        Phase: 4,
        sockets: [
            "Red",
            "Blue",
            "Yellow"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_107"
    },
    50710: {
        name: "Keleseth's Seducer (H)",
        iLevel: 277,
        Version: "Heroic",
        stats: {
            Agi: 78,
            Stam: 78,
            MAP: 88,
            RAP: 88,
            Hit: 44,
            Haste: 52
        },
        Location: "ICC-25hc (Princes)",
        Phase: 4,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "Off",
        quality: "Epic",
        icon: "inv_weapon_hand_33"
    },
    50727: {
        name: "Bloodfall (H)",
        iLevel: 277,
        Version: "Heroic",
        stats: {
            Agi: 175,
            Stam: 183,
            MAP: 212,
            RAP: 212,
            Crit: 122,
            Haste: 98
        },
        Location: "ICC-25hc (Lana'thel)",
        Phase: 4,
        sockets: [
            "Red",
            "Blue",
            "Yellow"
        ],
        socketBonus: {},
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_staff_109"
    },
    50735: {
        name: "Oathbinder, Charge of the Ranger-General (H)",
        iLevel: 284,
        Version: "Heroic",
        stats: {
            Agi: 179,
            Stam: 195,
            MAP: 228,
            RAP: 228,
            Crit: 114,
            ArP: 122,
        },
        Location: "ICC-25hc (Lich King)",
        Phase: 4,
        sockets: [
            "Red",
            "Blue",
            "Yellow"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_staff_109"
    },
    50736: {
        name: "Heaven's Fall, Kryss of a Thousand Lies (H)",
        iLevel: 284,
        Version: "Heroic",
        stats: {
            Agi: 76,
            Stam: 84,
            MAP: 111,
            RAP: 111,
            Crit: 48,
            ArP: 56,
        },
        Location: "ICC-25hc (Lich King)",
        Phase: 4,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_104"
    },
    50737: {
        name: "Havoc's Call, Blade of Lordaeron Kings (H)",
        iLevel: 284,
        Version: "Heroic",
        stats: {
            Agi: 84,
            Stam: 84,
            MAP: 95,
            RAP: 95,
            Crit: 56,
            Haste: 48
        },
        Location: "ICC-25hc (Lich King)",
        Phase: 4,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_113"
    },
    50759: {
        name: "Bone Warden's Splitter",
        iLevel: 251,
        Version: "Normal",
        stats: {
            Agi: 62,
            Stam: 62,
            MAP: 82,
            RAP: 82,
            ArP: 41,
            Haste: 41
        },
        Location: "ICC-10 (Marrowgar)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_113"
    },
    50787: {
        name: "Frost Giant's Cleaver",
        iLevel: 251,
        Version: "Normal",
        stats: {
            Agi: 62,
            Stam: 47,
            MAP: 94,
            RAP: 94,
            Crit: 45,
            ArP: 35,
        },
        Location: "ICC-10 (Gunship)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_113"
    },
    50998: {
        name: "Shaft of Glacial Ice",
        iLevel: 251,
        Version: "Normal",
        stats: {
            Agi: 136,
            Stam: 129,
            MAP: 203,
            RAP: 203,
            Crit: 96,
            Hit: 88,
        },
        Location: "ICC-10 (Rotface)",
        Phase: 4,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_106"
    },
    51003: {
        name: "Abomination Knuckles",
        iLevel: 251,
        Version: "Normal",
        stats: {
            Agi: 62,
            Stam: 47,
            MAP: 94,
            RAP: 94,
            ArP: 36,
            Haste: 44
        },
        Location: "ICC-10 (Rotface)",
        Phase: 4,
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_34"
    },
    51011: {
        name: "Flesh-Carving Scalpel",
        iLevel: 251,
        Version: "Normal",
        stats: {
            Agi: 44,
            Stam: 54,
            MAP: 123,
            RAP: 123,
            ArP: 44,
            Haste: 36
        },
        Location: "ICC-10 (Putricide)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_102"
    },
    51021: {
        name: "Soulbreaker",
        iLevel: 251,
        Version: "Normal",
        stats: {
            Agi: 62,
            Stam: 47,
            MAP: 94,
            RAP: 94,
            Crit: 43,
            Haste: 38
        },
        Location: "ICC-10 (Princes)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_151"
    },
    51022: {
        name: "Hersir's Greatspear",
        iLevel: 251,
        Version: "Normal",
        stats: {
            Agi: 97,
            Stam: 109,
            MAP: 287,
            RAP: 287,
            Hit: 53,
            ArP: 109,
        },
        Location: "ICC-10 (Princes)",
        Phase: 4,
        sockets: [
            "Red",
            "Yellow"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_staff_109"
    },
    51384: {
        name: "Bloodsipper",
        iLevel: 251,
        Version: "Normal",
        stats: {
            Agi: 62,
            Stam: 47,
            MAP: 94,
            RAP: 94,
            Crit: 42,
            Haste: 39
        },
        Location: "ICC-10 (Lana'thel)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_102"
    },
    51784: {
        name: "Splintershard",
        iLevel: 251,
        Version: "Normal",
        stats: {
            Agi: 62,
            Stam: 62,
            MAP: 82,
            RAP: 82,
            ArP: 41,
            Haste: 41
        },
        Location: "ICC-10 (Sindragosa)",
        Phase: 4,
        hand: "Off",
        quality: "Epic",
        icon: "inv_weapon_hand_34"
    },
    51797: {
        name: "Tainted Twig of Nordrassil",
        iLevel: 258,
        Version: "Normal",
        stats: {
            Agi: 137,
            Stam: 138,
            MAP: 216,
            RAP: 216,
            Crit: 98,
            ArP: 90,
        },
        Location: "ICC-10 (Lich King)",
        Phase: 4,
        sockets: [
            "Yellow",
            "Red"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_108"
    },
    51800: {
        name: "Stormfury, Black Blade of the Betrayer",
        iLevel: 258,
        Version: "Normal",
        stats: {
            Agi: 66,
            Stam: 50,
            MAP: 100,
            RAP: 100,
            Crit: 44,
        },
        Location: "ICC-10 (Lich King)",
        Phase: 4,
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_105"
    },
    51801: {
        name: "Pugius, Fist of Defiance",
        iLevel: 258,
        Version: "Normal",
        stats: {
            Agi: 66,
            Stam: 50,
            MAP: 100,
            RAP: 100,
            Crit: 45,
            Haste: 42
        },
        Location: "ICC-10 (Lich King)",
        Phase: 4,
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_34"
    },
    51819: {
        name: "Splintershard (H)",
        iLevel: 264,
        Version: "Heroic",
        stats: {
            Agi: 61,
            Stam: 69,
            MAP: 93,
            RAP: 93,
            ArP: 46,
            Haste: 38
        },
        Location: "ICC-10hc (Sindragosa)",
        Phase: 4,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "Off",
        quality: "Epic",
        icon: "inv_weapon_hand_34"
    },
    51846: {
        name: "Bloodsipper (H)",
        iLevel: 264,
        Version: "Heroic",
        stats: {
            Agi: 69,
            Stam: 53,
            MAP: 90,
            RAP: 90,
            Crit: 40,
            Haste: 44
        },
        Location: "ICC-10hc (Lana'thel)",
        Phase: 4,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_102"
    },
    51857: {
        name: "Hersir's Greatspear (H)",
        iLevel: 264,
        Version: "Heroic",
        stats: {
            Agi: 105,
            Stam: 123,
            MAP: 324,
            RAP: 324,
            Hit: 52,
            ArP: 123,
        },
        Location: "ICC-10hc (Princes)",
        Phase: 4,
        sockets: [
            "Red",
            "Yellow",
            "Yellow"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_weapon_staff_109"
    },
    51858: {
        name: "Soulbreaker (H)",
        iLevel: 264,
        Version: "Heroic",
        stats: {
            Agi: 61,
            Stam: 53,
            MAP: 106,
            RAP: 106,
            Crit: 40,
            Haste: 43
        },
        Location: "ICC-10hc (Prices)",
        Phase: 4,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_sword_151"
    },
    51868: {
        name: "Flesh-Carving Scalpel (H)",
        iLevel: 264,
        Version: "Heroic",
        stats: {
            Agi: 42,
            Stam: 61,
            MAP: 139,
            RAP: 139,
            ArP: 50,
            Haste: 33
        },
        Location: "ICC-10hc (Putricide)",
        Phase: 4,
        sockets: [
            "Yellow"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_102"
    },
    51876: {
        name: "Abomination Knuckles (H)",
        iLevel: 264,
        Version: "Heroic",
        stats: {
            Agi: 61,
            Stam: 53,
            MAP: 106,
            RAP: 106,
            ArP: 33,
            Haste: 50
        },
        Location: "ICC-10hc (Rotface)",
        Phase: 4,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_34"
    },
    51881: {
        name: "Shaft of Glacial Ice (H)",
        iLevel: 264,
        Version: "Heroic",
        stats: {
            Agi: 146,
            Stam: 146,
            MAP: 229,
            RAP: 229,
            Crit: 108,
            Hit: 92,
        },
        Location: "ICC-10hc (Rotface)",
        Phase: 4,
        sockets: [
            "Yellow",
            "Red"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_106"
    },
    51916: {
        name: "Frost Giant's Cleaver (H)",
        iLevel: 264,
        Version: "Heroic",
        stats: {
            Agi: 61,
            Stam: 53,
            MAP: 106,
            RAP: 106,
            Crit: 50,
            ArP: 31,
        },
        Location: "ICC-10hc (Gunship)",
        Phase: 4,
        sockets: [
            "Red"
        ],
        socketBonus: {
            MAP: 8,
            RAP: 8
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_113"
    },
    51938: {
        name: "Bone Warden's Splitter (H)",
        iLevel: 264,
        Version: "Heroic",
        stats: {
            Agi: 61,
            Stam: 69,
            MAP: 93,
            RAP: 93,
            ArP: 38,
            Haste: 46
        },
        Location: "ICC-10hc (Marrowgar)",
        Phase: 4,
        sockets: [
            "Blue"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "One",
        quality: "Epic",
        icon: "inv_axe_113"
    },
    51941: {
        name: "Pugius, Fist of Defiance (H)",
        iLevel: 271,
        Version: "Heroic",
        stats: {
            Agi: 66,
            Stam: 56,
            MAP: 113,
            RAP: 113,
            Crit: 51,
            Haste: 39
        },
        Location: "ICC-10hc (Lich King)",
        Phase: 4,
        sockets: [
            "Red"
        ],
        socketBonus: {
            Agi: 4
        },
        hand: "Main",
        quality: "Epic",
        icon: "inv_weapon_hand_34"
    },
    51942: {
        name: "Stormfury, Black Blade of the Betrayer (H)",
        iLevel: 271,
        Version: "Heroic",
        stats: {
            Agi: 74,
            Stam: 44,
            MAP: 97,
            RAP: 97,
            Crit: 49,
        },
        Location: "ICC-10hc (Lich King)",
        Phase: 4,
        sockets: [
            "Red"
        ],
        socketBonus: {},
        hand: "One",
        quality: "Epic",
        icon: "inv_weapon_shortblade_105"
    },
    51945: {
        name: "Tainted Twig of Nordrassil (H)",
        iLevel: 271,
        Version: "Heroic",
        stats: {
            Agi: 149,
            Stam: 156,
            MAP: 244,
            RAP: 244,
            Crit: 109,
            ArP: 97,
        },
        Location: "ICC-10hc (Lich King)",
        Phase: 4,
        sockets: [
            "Red",
            "Red",
            "Red"
        ],
        socketBonus: {
            Agi: 6
        },
        hand: "Two",
        quality: "Epic",
        icon: "inv_staff_108"
    },
}
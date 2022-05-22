const FOODS = {
  27664: {
    name: 'Grilled Mudfish',
    icon: 'inv_misc_food_78',
    stats: {
      Spi: 20,
      Agi: 20
    }
  },
  27655: {
    name: 'Ravager Dog',
    icon: 'inv_misc_food_53',
    stats: {
      Spi: 20,
      MAP: 40,
      RAP: 40
    }
  },
  27667: {
    name: 'Spicy Crawdad',
    icon: 'inv_misc_fish_16',
    stats: {
      Sta: 30,
      Spi: 20
    }
  },
  33872: {
    name: 'Spicy Hot Talbuk',
    icon: 'inv_misc_food_84_roastclefthoof',
    stats: {
      Spi: 20,
      Hit: 20
    }
  },
  27659: {
    name: 'Warp Burger',
    icon: 'inv_misc_food_65',
    stats: {
      Spi: 20,
      Agi: 20
    }
  },
  42999: {
    name: 'Blackened Dragonfin',
    icon: '',
    stats: {
      Agi: 40,
      Stam: 20
    }
  },
  43015: {
    name: 'Fish Feast',
    icon: '',
    stats: {
      RAP: 80,
      MAP: 80,
      Stam: 40
    }
  },
  34753: {
    name: 'Great Feast',
    icon: '',
    stats: {
      RAP: 60,
      MAP: 60,
      Stam: 30
    }
  },
  42995: {
    name: 'Hearty Rhino',
    icon: '',
    stats: {
      ArP: 40,
      Stam: 40
    }
  },
  34769: {
    name: 'Imperial Manta Steak',
    icon: '',
    stats: {
      Haste: 40,
      Stam: 40
    }
  },
  34748: {
    name: 'Mammoth Meal',
    icon: '',
    stats: {
      RAP: 60,
      MAP: 60,
      Stam: 30
    }
  },
  34754: {
    name: 'Mega Mammoth Meal',
    icon: '',
    stats: {
      RAP: 80,
      MAP: 80,
      Stam: 40
    }
  },
  34766: {
    name: 'Poached Northern Sculpin',
    icon: '',
    stats: {
      RAP: 80,
      MAP: 80,
      Stam: 40
    }
  },
  42996: {
    name: 'Snapper Extreme',
    icon: '',
    stats: {
      Hit: 40,
      Stam: 40
    }
  },
  34768: {
    name: 'Spicy Blue Nettlefish',
    icon: '',
    stats: {
      Crit: 40,
      Stam: 40
    }
  },
  42993: {
    name: 'Spicy Fried Herring',
    icon: '',
    stats: {
      MP5: 16,
      Stam: 40
    }
  },
  34756: {
    name: 'Spiced Worm Burger',
    icon: '',
    stats: {
      Crit: 40,
      Stam: 40
    }
  },
  44953: {
    name: 'Worg Tartare',
    icon: '',
    stats: {
      Hit: 40
    }
  },
  34750: {
    name: 'Worm Delight',
    icon: '',
    stats: {
      Crit: 30,
      Stam: 30
    }
  },
}

const BATTLE_ELIXIRS = {
  9224: {
    name: 'Elixir of Demonslaying',
    icon: 'inv_potion_27',
    stats: {
      MAP: 0, // change to target AP data only - returns 0 AP, but will check if selected in AP update data based on target
      RAP: 0
    }
  },
  22831: {
    name: 'Elixir of Major Agility',
    icon: 'inv_potion_127',
    stats: {
      Agi: 35,
      Crit: 20
    }
  },
  44325: {
    name: 'Elixir of Accuracy',
    icon: '',
    stats: {
      Hit: 45
    }
  },
  44330: {
    name: 'Elixir of Armor Piercing',
    icon: '',
    stats: {
      ArP: 45
    }
  },
  44327: {
    name: 'Elixir of Deadly Strikes',
    icon: '',
    stats: {
      Crit: 45
    }
  },
  44331: {
    name: 'Elixir of Lightning Speed',
    icon: '',
    stats: {
      Haste: 45
    }
  },
  39666: {
    name: 'Elixir of Mighty Agility',
    icon: '',
    stats: {
      Agi: 45
    }
  },
  40068: {
    name: 'Wrath Elixir',
    icon: '',
    stats: {
      RAP: 90,
      MAP: 90
    }
  },
  40076: {
    name: 'Guru\'s Elixir',
    icon: '',
    stats: {
      Str: 20,
      Agi: 20,
      Stam: 20,
      Int: 20,
      Spi: 20
    }
  }
}

const GUARDIAN_ELIXIRS = {
  40109: {
    name: 'Elixir of Mighty Mageblood',
    icon: '',
    stats: {
      MP5: 30
    }
  },
  9179: {
    name: 'Elixir of Mighty Thoughts',
    icon: '',
    stats: {
      Int: 45
    }
  }
}

const FLASKS = {
  13511: {
    name: 'Flask of Distilled Wisdom',
    icon: 'inv_potion_97',
    stats: {
      Int: 65
    }
  },
  22853: {
    name: 'Flask of Mighty Restoration',
    icon: 'inv_potion_118',
    stats: {
      MP5: 25
    }
  },
  22854: {
    name: 'Flask of Relentless Assault',
    icon: 'inv_potion_117',
    stats: {
      MAP: 120,
      RAP: 120
    }
  },
  47499: {
    name: 'Flask of the North',
    icon: '',
    stats: {
      MAP: 80,
      RAP: 80
    }
  },
  46377: {
    name: 'Flask of Endless Rage',
    icon: '',
    stats: {
      MAP: 180,
      RAP: 180
    }
  }
}

const SCROLLS_OF_AGILITY = {
  10309: {
    name: 'Scroll of Agility IV',
    icon: 'inv_scroll_02',
    stats: {
      Agi: 10
    }
  },
  27498: {
    name: 'Scroll of Agility V',
    icon: 'inv_scroll_02',
    stats: {
      Agi: 15
    }
  },
  33457: {
    name: 'Scroll of Agility VI',
    icon: 'inv_scroll_02',
    stats: {
      Agi: 20
    }
  },
  43463: {
    name: 'Scroll of Agility VII',
    icon: 'inv_scroll_02',
    stats: {
      Agi: 25
    }
  },
  43464: {
    name: 'Scroll of Agility VIII',
    icon: 'inv_scroll_02',
    stats: {
      Agi: 30
    }
  },
}

const SCROLLS_OF_STRENGTH = {
  10310: {
    name: 'Scroll of Strength IV',
    icon: 'inv_scroll_02',
    stats: {
      Str: 10
    }
  },
  27503: {
    name: 'Scroll of Strength V',
    icon: 'inv_scroll_02',
    stats: {
      Str: 15
    }
  },
  33462: {
    name: 'Scroll of Strength VI',
    icon: 'inv_scroll_02',
    stats: {
      Str: 20
    }
  },
  43465: {
    name: 'Scroll of Strength VII',
    icon: 'inv_scroll_02',
    stats: {
      Str: 25
    }
  },
  43466: {
    name: 'Scroll of Strength VIII',
    icon: 'inv_scroll_02',
    stats: {
      Str: 30
    }
  },
}

const PET_FOODS = {
  33874: {
    name: "Kibler's Bits",
    icon: 'inv_misc_food_49',
    stats: {
      Str: 20,
      Spi: 20
    }
  },
  43005: {
    name: "Spiced Mammoth Treats",
    icon: 'inv_misc_food_123_roast',
    stats: {
      Str: 30,
      Spi: 30
    }
  },
  27656: {
    name: 'Sporeling Snack',
    icon: 'inv_misc_food_87_sporelingsnack',
    stats: {
      Stam: 20,
      Spi: 20
    }
  }
}

const PLAYER_CONSUMABLES = {
  food: FOODS,
  battle_elixir: BATTLE_ELIXIRS,
  guardian_elixir: GUARDIAN_ELIXIRS,
  flask: FLASKS,
  agi_scroll: SCROLLS_OF_AGILITY,
  str_scroll: SCROLLS_OF_STRENGTH
}

const PET_CONSUMABLES = {
  pet_food: PET_FOODS,
  agi_scroll: SCROLLS_OF_AGILITY,
  str_scroll: SCROLLS_OF_STRENGTH
};

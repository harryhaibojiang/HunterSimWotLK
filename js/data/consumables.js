const FOODS = {
  27664: {
    name: 'Grilled Mudfish (+20 Agi)',
    icon: 'inv_misc_food_78',
    stats: {
      Spi: 20,
      Agi: 20
    }
  },
  27655: {
    name: 'Ravager Dog (+40 AP)',
    icon: 'inv_misc_food_53',
    stats: {
      Spi: 20,
      MAP: 40,
      RAP: 40
    }
  },
  27667: {
    name: 'Spicy Crawdad (+30 Stam)',
    icon: 'inv_misc_fish_16',
    stats: {
      Sta: 30,
      Spi: 20
    }
  },
  33872: {
    name: 'Spicy Hot Talbuk (+20 Hit)',
    icon: 'inv_misc_food_84_roastclefthoof',
    stats: {
      Spi: 20,
      Hit: 20
    }
  },
  27659: {
    name: 'Warp Burger (+20 Agi)',
    icon: 'inv_misc_food_65',
    stats: {
      Spi: 20,
      Agi: 20
    }
  },
  42999: {
    name: 'Blackened Dragonfin (+40 Agi)',
    icon: '',
    stats: {
      Agi: 40,
      Stam: 20
    }
  },
  43015: {
    name: 'Fish Feast (+80 AP)',
    icon: '',
    stats: {
      RAP: 80,
      MAP: 80,
      Stam: 40
    }
  },
  34753: {
    name: 'Great Feast (+60 AP)',
    icon: '',
    stats: {
      RAP: 60,
      MAP: 60,
      Stam: 30
    }
  },
  42995: {
    name: 'Hearty Rhino (+40 ArP)',
    icon: '',
    stats: {
      ArP: 40,
      Stam: 40
    }
  },
  34769: {
    name: 'Imperial Manta Steak (+40 Haste)',
    icon: '',
    stats: {
      Haste: 40,
      Stam: 40
    }
  },
  34748: {
    name: 'Mammoth Meal (+60 AP)',
    icon: '',
    stats: {
      RAP: 60,
      MAP: 60,
      Stam: 30
    }
  },
  34754: {
    name: 'Mega Mammoth Meal (+80 AP)',
    icon: '',
    stats: {
      RAP: 80,
      MAP: 80,
      Stam: 40
    }
  },
  34766: {
    name: 'Poached Northern Sculpin (+80 AP)',
    icon: '',
    stats: {
      RAP: 80,
      MAP: 80,
      Stam: 40
    }
  },
  42996: {
    name: 'Snapper Extreme (+40 Hit)',
    icon: '',
    stats: {
      Hit: 40,
      Stam: 40
    }
  },
  34768: {
    name: 'Spicy Blue Nettlefish (+40 Crit)',
    icon: '',
    stats: {
      Crit: 40,
      Stam: 40
    }
  },
  42993: {
    name: 'Spicy Fried Herring (+16 Mp5)',
    icon: '',
    stats: {
      MP5: 16,
      Stam: 40
    }
  },
  34756: {
    name: 'Spiced Worm Burger (+40 Crit)',
    icon: '',
    stats: {
      Crit: 40,
      Stam: 40
    }
  },
  34750: {
    name: 'Worm Delight (+30 Crit)',
    icon: '',
    stats: {
      Crit: 30,
      Stam: 30
    }
  },
  0: {
    name: 'None'
  }
}

const BATTLE_ELIXIRS = {
  9224: {
    name: 'Demonslaying (+105 AP)',
    icon: 'inv_potion_27',
    stats: {
      MAP: 0, // change to target AP data only - returns 0 AP, but will check if selected in AP update data based on target
      RAP: 0
    }
  },
  22831: {
    name: 'Major Agility (+30 Agi, +12 Crit)',
    icon: 'inv_potion_127',
    stats: {
      Agi: 30,
      Crit: 12
    }
  },
  44325: {
    name: 'Accuracy (+45 Hit)',
    icon: '',
    stats: {
      Hit: 45
    }
  },
  44330: {
    name: 'Armor Piercing (+45 ArP)',
    icon: '',
    stats: {
      ArP: 45
    }
  },
  44327: {
    name: 'Deadly Strikes (+45 Crit)',
    icon: '',
    stats: {
      Crit: 45
    }
  },
  44331: {
    name: 'Lightning Speed (+45 Haste)',
    icon: '',
    stats: {
      Haste: 45
    }
  },
  39666: {
    name: 'Mighty Agility (+45 Agi)',
    icon: '',
    stats: {
      Agi: 45
    }
  },
  40068: {
    name: 'Wrath Elixir (+90 AP)',
    icon: '',
    stats: {
      RAP: 90,
      MAP: 90
    }
  },
  40076: {
    name: 'Guru\'s Elixir (+20 Stats)',
    icon: '',
    stats: {
      Str: 20,
      Agi: 20,
      Stam: 20,
      Int: 20,
      Spi: 20
    }
  },
  0: {
    name: 'None'
  }
}

const GUARDIAN_ELIXIRS = {
  40109: {
    name: 'Mighty Mageblood (+30 Mp5)',
    icon: '',
    stats: {
      MP5: 30
    }
  },
  9179: {
    name: 'Mighty Thoughts (+45 Int)',
    icon: '',
    stats: {
      Int: 45
    }
  },
  22840: {
    name: 'Major Mageblood (+20 Mp5)',
    icon: '',
    stats: {
      Mp5: 20
    }
  },
  0: {
    name: 'None'
  }
}

const FLASKS = {
  13511: {
    name: 'Distilled Wisdom (+65 Int)',
    icon: 'inv_potion_97',
    stats: {
      Int: 65
    }
  },
  22853: {
    name: 'Mighty Restoration (+25 Mp5)',
    icon: 'inv_potion_118',
    stats: {
      MP5: 25
    }
  },
  22854: {
    name: 'Relentless Assault (+120 AP)',
    icon: 'inv_potion_117',
    stats: {
      MAP: 120,
      RAP: 120
    }
  },
  47499: {
    name: 'the North (+80 AP)',
    icon: '',
    stats: {
      MAP: 80,
      RAP: 80
    }
  },
  46377: {
    name: 'Flask of Endless Rage (+180 AP)',
    icon: '',
    stats: {
      MAP: 180,
      RAP: 180
    }
  },
  0: {
    name: 'None'
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
    name: "Kibler's Bits (+20 Str)",
    icon: 'inv_misc_food_49',
    stats: {
      Str: 20,
      Spi: 20
    }
  },
  43005: {
    name: "Spiced Mammoth Treats (+30 Str)",
    icon: 'inv_misc_food_123_roast',
    stats: {
      Str: 30,
      Spi: 30
    }
  },
  27656: {
    name: 'Sporeling Snack (+20 Stam)',
    icon: 'inv_misc_food_87_sporelingsnack',
    stats: {
      Stam: 20,
      Spi: 20
    }
  },
  0: {
    name: 'None'
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

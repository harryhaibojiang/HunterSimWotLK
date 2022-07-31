const BUFFS = {
  2048: {
    name: 'Battle Shout',
    icon: 'ability_warrior_battleshout',
    t2_3p_bonus: 30,
    talented_ratio: 1.25,
    stats: {
      70: {
        MAP: 306,
        RAP: 306,
      },
      80: {
        MAP: 550,
        RAP: 550,
      }
    }
  },
  6562: {
    name: 'Heroic Presence',
    icon: 'inv_helmet_21',
    stats: {
      70: {
        HitChance: 1
      },
      80: {
        HitChance: 1
      }
    }
  },
  17007: {
    name: 'Leader of the Pack',
    icon: 'spell_nature_unyeildingstamina',
    stats: {
      70: {
        CritChance: 5
      },
      80: {
        CritChance: 5
      }
    }
  },
  25528: {
    name: 'Strength of Earth Totem',
    icon: 'spell_nature_earthbindtotem',
    talented_ratio: 1.15,
    stats: {
      70: {
        Str: 86,
        Agi: 86
      },
      80: {
        Str: 155,
        Agi: 155
      }
    }
  },
  27066: {
    name: 'Trueshot Aura',
    icon: 'ability_trueshot',
    special: { percentAPMod: 1.1 }
  },
  53648: {
    name: 'Switf Retribution',
    icon: 'ability_paladin_swiftretribution',
    special: { swiftRetAura: 1.03 }
  },
  75447: {
    name: 'Ferocious Inspiration',
    icon: 'ability_hunter_ferociousinspiration',
    special: { FerociousInsp: 1.03 }
  },
  25587: {
    name: 'Windfury Totem',
    icon: 'spell_nature_windfury',
    special: { melee_haste: 1.2 }
  },
  26991: {
    name: 'Gift of the Wild',
    icon: 'spell_nature_giftofthewild',
    talented_ratio: 1.4,
    stats: {
      70: {
        Str: 14,
        Agi: 14,
        Stam: 14,
        Int: 14,
        Spi: 14
      },
      80: {
        Str: 37,
        Agi: 37,
        Stam: 37,
        Int: 37,
        Spi: 37
      }
    }
  },
  25898: {
    name: 'Greater Blessing of Kings',
    icon: 'spell_magic_greaterblessingofkings',
    special: { kingsMod: 1.1 }
  },
  27143: {
    name: 'Greater Blessing of Wisdom',
    icon: 'spell_holy_greaterblessingofwisdom',
    talented_ratio: 1.2,
    stats: {
      70: {
        MP5: 41
      },
      80: {
        MP5: 91
      }
    }
  },
  27127: {
    name: 'Arcane Brilliance',
    icon: 'spell_holy_arcaneintellect',
    stats: {
      70: {
        Int: 40
      },
      80: {
        Int: 60
      }
    }
  },
  57567: {
    name: 'Fel Intelligence',
    icon: 'spell_shadow_brainwash',
    stats: {
      70: {
        Int: 32,
        Spi: 40
      },
      80: {
        Int: 48,
        Spi: 64
      }
    }
  },
  25392: {
    name: 'Prayer of Fortitude',
    icon: 'spell_holy_prayeroffortitude',
    talented_ratio: 1.3,
    stats: {
      70: {
        Stam: 79
      },
      80: {
        Stam: 165
      }
    }
  }
};

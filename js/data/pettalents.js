var MAX_PET_POINTS = 16
var pet_tree_type = 'ferocity';

const CUNNING_TREE = [
    [
        {
            name: 'Cobra Reflexes',
            abrv: 'cobra_reflex',
            max: 2,
            is_modifier: true,
            per_point: 15 / 100
        },
        {
            name: 'Dive',
            abrv: 'dive',
            max: 1
        },
        {
            name: 'Great Stamina',
            abrv: 'great_stam',
            max: 3
        },
        {
            name: 'Natural Armor',
            abrv: 'nat_armor',
            max: 2
        }
    ],
    [
        {
            name: 'Boar\'s Speed',
            abrv: 'boar_speed',
            max: 1
        },
        {
            name: 'Mobility',
            abrv: 'mobility',
            max: 2
        },
        {
            name: 'Owl\'s Focus',
            abrv: 'owl_focus',
            max: 2,
            per_point: 15 / 100
        },
        {
            name: 'Spiked Collar',
            abrv: 'spike_collar',
            max: 3,
            is_modifier: true,
            per_point: 3 / 100
        }
        
    ],
    [
        {
            name: 'Culling the Herd',
            abrv: 'cull_herd',
            max: 3,
            is_modifier: true,
            per_point: 1 / 100
        },
        {
            name: 'Lionhearted',
            abrv: 'lionheart',
            max: 2
        },
        {
            name: 'Carrion Feeder',
            abrv: 'carrion_feeder',
            max: 1
        }
    ],
    [
        {
            name: 'Great Resistance',
            abrv: 'great_resist',
            max: 3
        },
        {
            name: 'Cornered',
            abrv: 'cornered',
            max: 2,
            per_point: 25 / 100
        },
        {
            name: 'Feeding Frenzy',
            abrv: 'feed_frenzy',
            max: 2,
            is_modifier: true,
            per_point: 8 / 100
        },
    ],
    [
        {
            name: 'Wolverine Bite',
            abrv: 'wolverine_bite',
            max: 1
        },
        {
            name: 'Roar of Recovery',
            abrv: 'roar_recovery',
            max: 1
        },
        {
            name: 'Bullheaded',
            abrv: 'bullheaded',
            max: 1
        },
        {
            name: 'Grace of the Mantis',
            abrv: 'grace_mantis',
            max: 2
        }
    ],
    [
        {
            name: 'Wild Hunt',
            abrv: 'wild_hunt',
            max: 2,
            is_modifier: true,
            per_point: 15 / 100
        },
        {
            name: 'Roar of Sacrifice',
            abrv: 'roar_sacrifice',
            max: 1
        }
    ]
]

const TENACITY_TREE = [
    [
        {
            name: 'Cobra Reflexes',
            abrv: 'cobra_reflex',
            max: 2,
            is_modifier: true,
            per_point: 15 / 100
        },
        {
            name: 'Charge',
            abrv: 'charge',
            max: 1
        },
        {
            name: 'Great Stamina',
            abrv: 'great_stam',
            max: 3
        },
        {
            name: 'Natural Armor',
            abrv: 'nat_armor',
            max: 2
        }
    ],
    [
        {
            name: 'Spiked Collar',
            abrv: 'spike_collar',
            max: 3,
            is_modifier: true,
            per_point: 3 / 100
        },
        {
            name: 'Boar\'s Speed',
            abrv: 'boar_speed',
            max: 1
        },
        {
            name: 'Blood of the Rhino',
            abrv: 'blood_of_rhino',
            max: 2
        },
        {
            name: 'Pet Barding',
            abrv: 'pet_barding',
            max: 2
        },
    ],
    [
        {
            name: 'Culling the Herd',
            abrv: 'cull_herd',
            max: 3,
            is_modifier: true,
            per_point: 1 / 100
        },
        {
            name: 'Guard Dog',
            abrv: 'guard_dog',
            max: 2
        },
        {
            name: 'Lionhearted',
            abrv: 'lionheart',
            max: 2
        },
        {
            name: 'Thunderstomp',
            abrv: 'thunderstomp',
            max: 1
        }
    ],
    [
        {
            name: 'Grace of the Mantis',
            abrv: 'grace_mantis',
            max: 2
        },
        {
            name: 'Great Resistance',
            abrv: 'great_resist',
            max: 3
        }
    ],
    [
        {
            name: 'Last Stand',
            abrv: 'last_stand',
            max: 1
        },
        {
            name: 'Taunt',
            abrv: 'taunt',
            max: 1
        },
        {
            name: 'Roar of Sacrifice',
            abrv: 'roar_sacrifice',
            max: 1
        },
        {
            name: 'Intervene',
            abrv: 'intervene',
            max: 1
        }
    ],
    [
        {
            name: 'Silverback',
            abrv: 'silverback',
            max: 2
        },
        {
            name: 'Wild Hunt',
            abrv: 'wild_hunt',
            max: 2,
            is_modifier: true,
            per_point: 15 / 100
        }
    ]
]

const FEROCITY_TREE = [
    [
        {
            name: 'Cobra Reflexes',
            abrv: 'cobra_reflex',
            max: 2,
            is_modifier: true,
            per_point: 15 / 100
        },
        {
            name: 'Dash',
            abrv: 'dash',
            max: 1
        },
        {
            name: 'Great Stamina',
            abrv: 'great_stam',
            max: 3
        },
        {
            name: 'Natural Armor',
            abrv: 'nat_armor',
            max: 2
        }
    ],
    [
        {
            name: 'Improved Cower',
            abrv: 'imp_cower',
            max: 2
        },
        {
            name: 'Bloodthirsty',
            abrv: 'bloodthirst',
            max: 2
        },
        {
            name: 'Spiked Collar',
            abrv: 'spike_collar',
            max: 3,
            is_modifier: true,
            per_point: 3 / 100
        },
        {
            name: 'Boar\'s Speed',
            abrv: 'boar_speed',
            max: 1
        }
    ],
    [
        {
            name: 'Culling the Herd',
            abrv: 'cull_herd',
            max: 3,
            is_modifier: true,
            per_point: 1 / 100
        },
        {
            name: 'Lionhearted',
            abrv: 'lionheart',
            max: 2
        },
        {
            name: 'Charge',
            abrv: 'charge',
            max: 1
        }
    ],
    [
        {
            name: 'Heart of the Pheonix',
            abrv: 'pheonix',
            max: 1
        },
        {
            name: 'Spider\'s Bite',
            abrv: 'spider_bite',
            max: 3,
            per_point: 3
        },
        {
            name: 'Great Resistance',
            abrv: 'great_resist',
            max: 3
        }
    ],
    [
        {
            name: 'Rabid',
            abrv: 'rabid',
            max: 1
        },
        {
            name: 'Lick Your Wounds',
            abrv: 'lick_wounds',
            max: 1
        },
        {
            name: 'Call of the Wild',
            abrv: 'call_of_wild',
            max: 1
        }
    ],
    [
        {
            name: 'Shark Attack',
            abrv: 'shark_attack',
            max: 2,
            is_modifier: true,
            per_point: 3 / 100
        },
        {
            name: 'Wild Hunt',
            abrv: 'wild_hunt',
            max: 2,
            is_modifier: true,
            per_point: 15 / 100
        }
    ]
]

const PET_TREES = [CUNNING_TREE.flat(),FEROCITY_TREE.flat(),TENACITY_TREE.flat()]

function loadPetTalent(obj, talent, points) {
  if (points < 0 || points > talent.max) throw Error(`Tried to put ${points} points in talent "${talent.name}". Must be between 0 and ${talent.max}.`)
  const val = talent.per_point ? points * talent.per_point : points
  obj[talent.abrv] = (talent.is_modifier ? 1 : 0) + val
}

function parsePetTalents(talentString, max_points) {
    const talents = {}
    let talentIdx = 0
    let total_points = 0
    let treeIdx = 0

    if (pet_tree_type === 'cunning') {
        treeIdx = 0
    } else if (pet_tree_type === 'ferocity') {
        treeIdx = 1
    } else if (pet_tree_type === 'tenacity') {
        treeIdx = 2
    }
  // Load all talents with 0 points

    PET_TREES.flat().forEach(talent => loadPetTalent(talents, talent, 0));

    [...talentString].forEach(char => {
         // Load single talent with specified points
        const points = Number(char)
        if (Number.isNaN(points))
            throw new TypeError(`Received invalid character ${char} in the talent string`)
            
        loadPetTalent(talents, PET_TREES[treeIdx][talentIdx++], points)
        total_points += points
        if (total_points > max_points) throw new Error(`Too many talent points used! Max is ${max_points}`)

    })

    return talents
}

const Ferocity70_NonBM1 = parsePetTalents('21000030300030001', 13) // 70 call of the wild
const Ferocity70_NonBM2 = parsePetTalents('210000303000301', 13) // 70 rabid
const Ferocity70_BM1 = parsePetTalents('210001303000301012', 17) // 70 bm shark attack
const Ferocity70_BM2 = parsePetTalents('2100013030003010102', 17) // 70 bm wild hunt
const Ferocity80_NonBM1 = parsePetTalents('210001303000301011', 16) // 80 1/2 shark attack
const Ferocity80_NonBM2 = parsePetTalents('2100013030003010101', 16) // 80 1/2 wild hunt
const Ferocity80_BM = parsePetTalents('2100023030003010122', 20) // 80 bm max
pet_tree_type = 'cunning'
const Cunning70_NonBM = parsePetTalents('210000133000021', 13)
const Cunning70_BM = parsePetTalents('2100002330000211002', 17)
const Cunning80_NonBM = parsePetTalents('2100002330000211001', 16)
const Cunning80_BM = parsePetTalents('2100002330030211002', 20)
pet_tree_type = 'tenacity'
const Tenacity70_NonBM = parsePetTalents('210030003001201', 13)
const Tenacity70_BM = parsePetTalents('21003000310120101002', 17)
const Tenacity80_NonBM = parsePetTalents('21003000310120101001', 16)
const Tenacity80_BM = parsePetTalents('21003000320121111002', 20)
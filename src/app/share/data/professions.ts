import { SKILL_NAME } from '../enums/skill-name-enum';
import { AttributeService } from '../services/attribute.service';
import { ATTRIBUTE_NAME } from '../enums/attribute-name.enum';
import { Profession } from 'src/app/share/classes/profession';



const attributeService = new AttributeService();

export const PROFESSION_LIST: Profession[] = [
    new Profession(
        'Antykwariusz',
        [
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.HISTORY,
            SKILL_NAME.PERCEPTIVENESS,
            SKILL_NAME.ART_CRAFTS,
            SKILL_NAME.VALUATION,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE
        ],
        [10, 70],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 4

            },
        ],
        attributeService
    ),
    new Profession(
        'Artysta',
        [
            [
                SKILL_NAME.HISTORY,
                SKILL_NAME.NATURE
            ],
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.PERCEPTIVENESS,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.ART_CRAFTS,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE,
            SKILL_NAME.FREE,
        ],
        [9, 50],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2

            },
            {
                attribute: ATTRIBUTE_NAME.MIGHT,
                multiplier: 2,
                orIndex: true,

            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true,

            },
        ],
        attributeService
    ),
    new Profession(
        'Artysta estradowy',
        [
            SKILL_NAME.CHARACTERISATION,
            SKILL_NAME.LISTENING,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.ART_CRAFTS,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE,
            SKILL_NAME.FREE
        ],
        [9, 70],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2

            },
            {
                attribute: ATTRIBUTE_NAME.APPEARANCE,
                multiplier: 2,

            }
        ],
        attributeService
    ),
    new Profession(
        'Atleta',
        [
            SKILL_NAME.RIDING,
            SKILL_NAME.SWIMMING,
            SKILL_NAME.THROWING,
            SKILL_NAME.JUMPING,
            SKILL_NAME.MELEE_BRAWL,
            SKILL_NAME.CLIMBING,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE
        ],
        [9, 70],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2
            },
            {
                attribute: ATTRIBUTE_NAME.STRENGTH,
                multiplier: 2,
                orIndex: true
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true

            }
        ],
        attributeService
    ),
    new Profession(
        'Bibliotekarz',
        [
            SKILL_NAME.LANGUAGE_NATIVE,
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.ACCOUNTING,
            SKILL_NAME.FREE,
            SKILL_NAME.FREE,
            SKILL_NAME.FREE,
            SKILL_NAME.FREE
        ],
        [9, 35],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 4

            }
        ],
        attributeService
    ),
    new Profession(
        'Bogaty hobbysta',
        [
            [
                SKILL_NAME.FIREARMS_LONG,
                SKILL_NAME.FIREARMS_SHORT
            ],
            SKILL_NAME.RIDING,
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.ART_CRAFTS,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE,
            SKILL_NAME.FREE,
            SKILL_NAME.FREE
        ],
        [50, 99],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2
            },
            {
                attribute: ATTRIBUTE_NAME.APPEARANCE,
                multiplier: 2
            }
        ],
        attributeService
    ),
    new Profession(
        'Człowiek plemienny',
        [
            SKILL_NAME.LISTENING,
            SKILL_NAME.OCCULTISM,
            SKILL_NAME.SWIMMING,
            [
                SKILL_NAME.THROWING,
                SKILL_NAME.MELEE_BRAWL
            ],
            SKILL_NAME.PERCEPTIVENESS,
            SKILL_NAME.SURVIVAL,
            SKILL_NAME.NATURE,
            SKILL_NAME.CLIMBING
        ],
        [0, 15],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2
            },
            {
                attribute: ATTRIBUTE_NAME.STRENGTH,
                multiplier: 2,
                orIndex: true
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true

            }
        ],
        attributeService
    ),
    new Profession(
        'Detektyw policji',
        [
            [
                SKILL_NAME.FIREARMS_SHORT,
                SKILL_NAME.FIREARMS_LONG
            ],
            [
                SKILL_NAME.CHARACTERISATION,
                SKILL_NAME.ART_CRAFTS
            ],
            SKILL_NAME.LISTENING,
            SKILL_NAME.LAW,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.PERCEPTIVENESS,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE
        ],
        [20, 50],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2
            },
            {
                attribute: ATTRIBUTE_NAME.STRENGTH,
                multiplier: 2,
                orIndex: true
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true

            }
        ],
        attributeService
    ),
    new Profession(
        'Duchowny',
        [
            SKILL_NAME.HISTORY,
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.ACCOUNTING,
            SKILL_NAME.LISTENING,
            SKILL_NAME.PSYCHOLOGY,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE
        ],
        [9, 60],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 4
            }
        ],
        attributeService
    ),
    new Profession(
        'Dziennikarz',
        [
            SKILL_NAME.LANGUAGE_NATIVE,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.HISTORY,
            SKILL_NAME.ART_CRAFTS, // photography
            SKILL_NAME.PSYCHOLOGY,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE,
            SKILL_NAME.FREE
        ],
        [9, 60],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 4
            }
        ],
        attributeService
    ),
    new Profession(
        'Fanatyk',
        [
            SKILL_NAME.HISTORY,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.HIDING,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE,
            SKILL_NAME.FREE,
            SKILL_NAME.FREE
        ],
        [0, 30],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2,
            },
            {
                attribute: ATTRIBUTE_NAME.APPEARANCE,
                multiplier: 2,
                orIndex: true
            },
            {
                attribute: ATTRIBUTE_NAME.MIGHT,
                multiplier: 2,
                orIndex: true
            }
        ],
        attributeService
    ),
    new Profession(
        'Farmer',
        [
            SKILL_NAME.MECHANICS,
            SKILL_NAME.HEAVY_EQUIPMENT,
            SKILL_NAME.DRIVING,
            SKILL_NAME.ART_CRAFTS, // farming
            SKILL_NAME.TRACKING,
            SKILL_NAME.NATURE,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE
        ],
        [9, 30],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2,
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true
            },
            {
                attribute: ATTRIBUTE_NAME.STRENGTH,
                multiplier: 2,
                orIndex: true
            }
        ],
        attributeService
    ),

    new Profession(
        'Inżynier',
        [
            SKILL_NAME.ELECTRICS,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.MECHANICS,
            SKILL_NAME.HEAVY_EQUIPMENT,
            SKILL_NAME.SCIENCE, // science
            SKILL_NAME.SCIENCE, // enginiering
            SKILL_NAME.ART_CRAFTS, // technical scetchtes
            SKILL_NAME.FREE
        ],
        [30, 60],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 4,
            },

        ],
        attributeService
    ),
    new Profession(
        'Lekarz',
        [
            SKILL_NAME.LANGUAGE_FOREIGN, // latin,
            SKILL_NAME.MEDICINE,
            SKILL_NAME.SCIENCE, // bilogy
            SKILL_NAME.SCIENCE, // pharmacy
            SKILL_NAME.FIRST_AID,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.FREE,
            SKILL_NAME.FREE,
        ],
        [30, 80],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 4,
            },

        ],
        attributeService
    ),
    new Profession(
        'Misjonarz',
        [
            SKILL_NAME.MECHANICS,
            SKILL_NAME.FIRST_AID,
            SKILL_NAME.ART_CRAFTS,
            SKILL_NAME.NATURE,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE,
            SKILL_NAME.FREE
        ],

        [0, 30],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 4,
            },

        ],
        attributeService
    ),
    new Profession(
        'Muzyk',
        [
            SKILL_NAME.LISTENING,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.ART_CRAFTS, // instrument,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE,
            SKILL_NAME.FREE,
            SKILL_NAME.FREE,
            SKILL_NAME.FREE
        ],

        [9, 30],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2,
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true
            },
            {
                attribute: ATTRIBUTE_NAME.MIGHT,
                multiplier: 2,
                orIndex: true
            },

        ],
        attributeService
    ),
    new Profession(
        'Oficer policji',
        [
            [
                SKILL_NAME.FIREARMS_LONG,
                SKILL_NAME.FIREARMS_SHORT
            ],
            SKILL_NAME.FIRST_AID,
            SKILL_NAME.LAW,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.PERCEPTIVENESS,
            SKILL_NAME.MELEE_BRAWL,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            [
                SKILL_NAME.DRIVING,
                SKILL_NAME.RIDING
            ]
        ],
        [9, 30],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2,
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true
            },
            {
                attribute: ATTRIBUTE_NAME.STRENGTH,
                multiplier: 2,
                orIndex: true
            },

        ],
        attributeService
    ),
    new Profession(
        'Oficer wojskowy',
        [
            [
                SKILL_NAME.FIREARMS_LONG,
                SKILL_NAME.FIREARMS_SHORT
            ],
            SKILL_NAME.ACCOUNTING,
            SKILL_NAME.NAVIGATION,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.SURVIVAL,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE
        ],
        [20, 70],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2,
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true
            },
            {
                attribute: ATTRIBUTE_NAME.STRENGTH,
                multiplier: 2,
                orIndex: true
            },

        ],
        attributeService
    ),
    new Profession(
        'Parapsycholog',
        [
            SKILL_NAME.ANTHROPOLOGY,
            SKILL_NAME.HISTORY,
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.OCCULTISM,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.ART_CRAFTS, // photography
            SKILL_NAME.FREE
        ],
        [9, 30],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 4,
            },
        ],
        attributeService
    ),
    new Profession(
        'Pilot',
        [
            SKILL_NAME.ELECTRICS,
            SKILL_NAME.MECHANICS,
            SKILL_NAME.SCIENCE, // astronomy
            SKILL_NAME.NAVIGATION,
            SKILL_NAME.HEAVY_EQUIPMENT,
            SKILL_NAME.DRIVING, // plane
            SKILL_NAME.FREE,
            SKILL_NAME.FREE
        ],
        [20, 70],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2,
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
            },
        ],
        attributeService
    ),
    new Profession(
        'Pisarz',
        [
            SKILL_NAME.HISTORY,
            SKILL_NAME.LANGUAGE_NATIVE,
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.ART_CRAFTS, // literature
            [
                SKILL_NAME.NATURE,
                SKILL_NAME.OCCULTISM
            ],
            SKILL_NAME.FREE
        ],
        [9, 30],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 4,
            },
        ],
        attributeService
    ),
    new Profession(
        'Prawnik',
        [
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.LAW,
            SKILL_NAME.ACCOUNTING,
            SKILL_NAME.PSYCHOLOGY,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE,
            SKILL_NAME.FREE
        ],
        [30, 80],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 4,
            },
        ],
        attributeService
    ),
    new Profession(
        'Profesor',
        [
            SKILL_NAME.LANGUAGE_NATIVE,
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.FREE,
            SKILL_NAME.FREE,
            SKILL_NAME.FREE,
            SKILL_NAME.FREE
        ],
        [30, 80],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 4,
            },
        ],
        attributeService
    ),
    new Profession(
        'Prywatny detektyw',
        [
            SKILL_NAME.CHARACTERISATION,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.LAW,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.PERCEPTIVENESS,
            SKILL_NAME.ART_CRAFTS, // photography,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE
        ],
        [9, 30],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2,
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true

            },
            {
                attribute: ATTRIBUTE_NAME.STRENGTH,
                multiplier: 2,
                orIndex: true

            },
        ],
        attributeService
    ),
    new Profession(
        'Przestępca',
        [
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.PERCEPTIVENESS,
            SKILL_NAME.HIDING,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            // pick 4 from :
            [
                SKILL_NAME.FIREARMS_LONG,
                SKILL_NAME.FIREARMS_SHORT,
                SKILL_NAME.CHARACTERISATION,
                SKILL_NAME.MECHANICS,
                SKILL_NAME.LOCKSMITH,
                SKILL_NAME.VALUATION,
                SKILL_NAME.MELEE_BRAWL,
                SKILL_NAME.SLEIGHT_OF_HAND
            ]
        ],
        [5, 65],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2,
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true

            },
            {
                attribute: ATTRIBUTE_NAME.STRENGTH,
                multiplier: 2,
                orIndex: true

            },
        ],
        attributeService
    ),
    new Profession(
        'Tramp',
        [
            SKILL_NAME.LISTENING,
            SKILL_NAME.NAVIGATION,
            SKILL_NAME.JUMPING,
            SKILL_NAME.HIDING,
            SKILL_NAME.CLIMBING,
            [
                SKILL_NAME.PERSUASION,
                SKILL_NAME.CHARM,
                SKILL_NAME.BULLYING,
                SKILL_NAME.TALK
            ],
            SKILL_NAME.FREE,
            SKILL_NAME.FREE
        ],
        [0, 5],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2,
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true

            },
            {
                attribute: ATTRIBUTE_NAME.STRENGTH,
                multiplier: 2,
                orIndex: true

            },
            {
                attribute: ATTRIBUTE_NAME.APPEARANCE,
                multiplier: 2,
                orIndex: true

            },
        ],
        attributeService
    ),
    new Profession(
        'Żołnierz',
        [
            [
                SKILL_NAME.FIREARMS_LONG,
                SKILL_NAME.FIREARMS_SHORT
            ],
            [
                SKILL_NAME.SWIMMING,
                SKILL_NAME.CLIMBING
            ],
            SKILL_NAME.SURVIVAL,
            SKILL_NAME.HIDING,
            SKILL_NAME.DODGE,
            SKILL_NAME.MELEE_BRAWL,
            // pick 2
            [
                SKILL_NAME.LANGUAGE_FOREIGN,
                SKILL_NAME.MECHANICS,
                SKILL_NAME.FIRST_AID
            ]
        ],
        [9, 30],
        [
            {
                attribute: ATTRIBUTE_NAME.EDUCATION,
                multiplier: 2,
            },
            {
                attribute: ATTRIBUTE_NAME.AGILITY,
                multiplier: 2,
                orIndex: true

            },
            {
                attribute: ATTRIBUTE_NAME.STRENGTH,
                multiplier: 2,
                orIndex: true

            },
        ],
        attributeService
    ),
];

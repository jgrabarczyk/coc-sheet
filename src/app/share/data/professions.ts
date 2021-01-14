import { SKILL_NAME } from '../enums/skill-name-enum';
import { AttributeService } from '../../sheet/services/attribute.service';
import { ATTRIBUTE_NAME } from '../enums/attribute-name.enum';
import { Skill } from '../../sheet/classes/skill';
import { Attribute } from '../../sheet/classes/attribute';

export interface ProffesionAttributes {
    attribute: ATTRIBUTE_NAME;
    multiplier: number;
    orIndex?: boolean;
}
export class Proffesion {
    public pointsProffesion!: number;
    public pointsHobby!: number;

    constructor(
        public name: string,
        public skills: SKILL_NAME[],
        public wealth: [number, number],
        public ProfessionAttributes: ProffesionAttributes[],
        private attributeService_: AttributeService
    ) {
        this.name = name;
        this.skills = skills;
        this.wealth = wealth;
        this.ProfessionAttributes = ProfessionAttributes;
        this.calcPoints();
    }

    public calcPoints(): void {
        this.calcProffesionPoints();
        this.calcHobbyPoints();
    }

    private calcProffesionPoints(): void {
        let val = 0;
        const stashed: Attribute[] = [];
        this.ProfessionAttributes.forEach(el => {
            if (el.orIndex) {
                stashed.push(this.attributeService_.get(el.attribute));
            } else {
                val += this.attributeService_.getVal(el.attribute) * el.multiplier;
            }

        });
        if (stashed.length) {
            const maxValFromStashed = Math.max.apply(Math, stashed.map((o) => o.value));
            val += (maxValFromStashed * 2);
        }

        this.pointsProffesion = val;
    }
    private calcHobbyPoints(): void {
        this.pointsHobby = this.attributeService_.getVal(ATTRIBUTE_NAME.INTELLIGENCE) * 2;
    }

}
const attributeService = new AttributeService();

export const PROFFESION_LIST: Proffesion[] = [
    new Proffesion(
        'Antykwariusz',
        [
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.HISTORY,
            SKILL_NAME.PERCEPTIVENESS,
            SKILL_NAME.ART_CRAFTS,
            SKILL_NAME.VALUATION,
            SKILL_NAME.INTERPESONAL, // zamienic na 4 "lub"
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
    new Proffesion(
        'Artysta',
        [
            SKILL_NAME.HISTORY, // or
            SKILL_NAME.NATURE,  // or end
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.PERCEPTIVENESS,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.ART_CRAFTS,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
        'Artysta estradowy',
        [
            SKILL_NAME.CHARACTERISATION,
            SKILL_NAME.LISTENING,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.ART_CRAFTS,
            SKILL_NAME.INTERPESONAL,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
        'Atleta',
        [
            SKILL_NAME.RIDING,
            SKILL_NAME.SWIMMING,
            SKILL_NAME.THROWING,
            SKILL_NAME.JUMPING,
            SKILL_NAME.MELEE_BRAWL,
            SKILL_NAME.CLIMBING,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
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
    new Proffesion(
        'Bogaty hobbysta',
        [
            SKILL_NAME.FIREARMS_LONG, // or
            SKILL_NAME.FIREARMS_SHORT,
            SKILL_NAME.RIDING,
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.ART_CRAFTS,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
        'Człowiek plemienny',
        [
            SKILL_NAME.LISTENING,
            SKILL_NAME.OCCULTISM,
            SKILL_NAME.SWIMMING,
            SKILL_NAME.THROWING, // or
            SKILL_NAME.MELEE_BRAWL, // or end
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
    new Proffesion(
        'Detektyw policji',
        [
            SKILL_NAME.FIREARMS_SHORT, // or
            SKILL_NAME.FIREARMS_LONG,  // or end
            SKILL_NAME.CHARACTERISATION, // or
            SKILL_NAME.ART_CRAFTS, // or end
            SKILL_NAME.LISTENING,
            SKILL_NAME.LAW,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
        'Duchowny',
        [
            SKILL_NAME.HISTORY,
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.ACCOUNTING,
            SKILL_NAME.LISTENING,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
        'Dziennikarz',
        [
            SKILL_NAME.LANGUAGE_NATIVE,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.HISTORY,
            SKILL_NAME.ART_CRAFTS, // photography
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
        'Fanatyk',
        [
            SKILL_NAME.HISTORY,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.HIDING,
            SKILL_NAME.INTERPESONAL,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
        'Farmer',
        [
            SKILL_NAME.MECHANICS,
            SKILL_NAME.HEAVY_EQUIPMENT,
            SKILL_NAME.DRIVING,
            SKILL_NAME.ART_CRAFTS, // farming
            SKILL_NAME.TRACKING,
            SKILL_NAME.NATURE,
            SKILL_NAME.INTERPESONAL,
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

    new Proffesion(
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
    new Proffesion(
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
    new Proffesion(
        'Misjonarz',
        [
            SKILL_NAME.MECHANICS,
            SKILL_NAME.FIRST_AID,
            SKILL_NAME.ART_CRAFTS,
            SKILL_NAME.NATURE,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
        'Muzyk',
        [
            SKILL_NAME.LISTENING,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.ART_CRAFTS, // instrument,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
        'Oficer policji',
        [
            SKILL_NAME.FIREARMS_LONG, // or
            SKILL_NAME.FIREARMS_SHORT, // or end
            SKILL_NAME.FIRST_AID,
            SKILL_NAME.LAW,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.PERCEPTIVENESS,
            SKILL_NAME.MELEE_BRAWL,
            SKILL_NAME.INTERPESONAL,
            SKILL_NAME.DRIVING, // or
            SKILL_NAME.RIDING // or end
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
    new Proffesion(
        'Oficer wojskowy',
        [
            SKILL_NAME.FIREARMS_LONG, // or
            SKILL_NAME.FIREARMS_SHORT, // or end
            SKILL_NAME.ACCOUNTING,
            SKILL_NAME.NAVIGATION,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.SURVIVAL,
            SKILL_NAME.INTERPESONAL,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
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
    new Proffesion(
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
    new Proffesion(
        'Pisarz',
        [
            SKILL_NAME.HISTORY,
            SKILL_NAME.LANGUAGE_NATIVE,
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.ART_CRAFTS, // literature
            SKILL_NAME.NATURE, // or
            SKILL_NAME.OCCULTISM, // or end
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
    new Proffesion(
        'Prawnik',
        [
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.LAW,
            SKILL_NAME.ACCOUNTING,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.INTERPESONAL,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
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
    new Proffesion(
        'Prywatny detektyw',
        [
            SKILL_NAME.CHARACTERISATION,
            SKILL_NAME.USING_LIBRARIES,
            SKILL_NAME.LAW,
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.PERCEPTIVENESS,
            SKILL_NAME.ART_CRAFTS, // photography,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
        'Przestępca',
        [
            SKILL_NAME.PSYCHOLOGY,
            SKILL_NAME.PERCEPTIVENESS,
            SKILL_NAME.HIDING,
            SKILL_NAME.INTERPESONAL,
            // pick 4 from :
            SKILL_NAME.FIREARMS_LONG, // or
            SKILL_NAME.FIREARMS_SHORT, // or
            SKILL_NAME.CHARACTERISATION, // or
            SKILL_NAME.MECHANICS, // or
            SKILL_NAME.LOCKSMITH, // or
            SKILL_NAME.VALUATION, // or
            SKILL_NAME.MELEE_BRAWL, // or
            SKILL_NAME.SLEIGHT_OF_HAND// or end
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
    new Proffesion(
        'Tramp',
        [
            SKILL_NAME.LISTENING,
            SKILL_NAME.NAVIGATION,
            SKILL_NAME.JUMPING,
            SKILL_NAME.HIDING,
            SKILL_NAME.CLIMBING,
            SKILL_NAME.INTERPESONAL,
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
    new Proffesion(
        'Żołnierz',
        [
            SKILL_NAME.FIREARMS_LONG, // or
            SKILL_NAME.FIREARMS_SHORT, // or end
            SKILL_NAME.SWIMMING, // or
            SKILL_NAME.CLIMBING, // or end
            SKILL_NAME.SURVIVAL,
            SKILL_NAME.HIDING,
            SKILL_NAME.DODGE,
            SKILL_NAME.MELEE_BRAWL,
            SKILL_NAME.LANGUAGE_FOREIGN,
            SKILL_NAME.MECHANICS,
            SKILL_NAME.FIRST_AID
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

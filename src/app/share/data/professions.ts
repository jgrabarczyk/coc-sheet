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
            SKILL_NAME.INTERPESONAL,
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

];

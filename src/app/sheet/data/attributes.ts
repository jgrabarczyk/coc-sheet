import { BasicAttribute } from '../interfaces/attribute';
import { ATTRIBUTE_NAME } from './attribute-name.enum';
import { DiceRoll } from '../classes/DiceRoll';

export class Attribute extends BasicAttribute {
    private diceRoll!: DiceRoll;

    constructor(name: ATTRIBUTE_NAME, value: number, diceRoll: DiceRoll) {
        super(name, value);
        this.diceRoll = diceRoll;
    }

    public roll(): void {
        this.value = 0;
        for (let i = 0; i < this.diceRoll.throwsNo; i++) {
            const roll = Math.floor(Math.random() * this.diceRoll.sides + 1);
            this.value = this.value + roll;
        }
        this.value += this.diceRoll.modifier;
        this.value *= 5;
    }
}

export const ATTRIBUTE_LIST: Attribute[] = [
    new Attribute(
        ATTRIBUTE_NAME.STRENGTH,
        50,
        new DiceRoll(3, 6, 0)
    ),
    new Attribute(
        ATTRIBUTE_NAME.CONDITION,
        50,
        new DiceRoll(3, 6, 0)
    ),
    new Attribute(
        ATTRIBUTE_NAME.BODY_STRUCTURE,
        50,
        new DiceRoll(2, 6, 6)
    ),
    new Attribute(
        ATTRIBUTE_NAME.AGILITY,
        50,
        new DiceRoll(3, 6, 0)
    ),
    new Attribute(
        ATTRIBUTE_NAME.APPEARANCE,
        50,
        new DiceRoll(3, 6, 0)
    )
    ,
    new Attribute(
        ATTRIBUTE_NAME.INTELLIGENCE,
        50,
        new DiceRoll(2, 6, 6)
    )
    ,
    new Attribute(
        ATTRIBUTE_NAME.MIGHT,
        50,
        new DiceRoll(3, 6, 0)
    ),
    new Attribute(
        ATTRIBUTE_NAME.EDUCATION,
        50,
        new DiceRoll(2, 6, 6)
    ),
    new Attribute(
        ATTRIBUTE_NAME.LUCK,
        50,
        new DiceRoll(3, 6, 0)
    )
];

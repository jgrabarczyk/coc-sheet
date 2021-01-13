import { BasicAttribute } from './basic-attribute';
import { DiceRoll } from './DiceRoll';
import { ATTRIBUTE_NAME } from '../../share/enums/attribute-name.enum';

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

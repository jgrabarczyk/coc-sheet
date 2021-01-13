import { BasicAttribute } from './basic-attribute';
import { DiceRoll } from './DiceRoll';
import { ATTRIBUTE_NAME } from '../../share/enums/attribute-name.enum';

export class Attribute extends BasicAttribute {

    constructor(
        public name: ATTRIBUTE_NAME,
        public value: number,
        public diceRoll: DiceRoll) {

        super(name, value);
        this.diceRoll = diceRoll;
    }
}

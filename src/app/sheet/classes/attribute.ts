import { BasicAttribute } from './basic-attribute';
import { DiceRoll } from './DiceRoll';
import { ATTRIBUTE_NAME } from '../../share/enums/attribute-name.enum';

export class Attribute extends BasicAttribute {

    constructor(name: ATTRIBUTE_NAME, value: number, public diceRoll: DiceRoll) {
        super(name, value);
        this.diceRoll = diceRoll;
    }

}

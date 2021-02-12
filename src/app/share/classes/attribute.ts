import { ATTRIBUTE_NAME } from '../enums/attribute-name.enum';
import { SKILL_NAME } from '../enums/skill-name-enum';
import { STAT_NAME } from '../enums/stat-name.enum';
import { BasicAttribute } from './basic-attribute';
import { DiceRoll, DiceRollI } from './DiceRoll';

export class Attribute extends BasicAttribute {
    public diceRoll: DiceRoll;

    constructor(aDTO: AttributeDTO) {
        super(aDTO.name, aDTO.value);
        this.diceRoll = new DiceRoll({ ...aDTO.diceRoll });
    }
}

export interface AttributeDTO {
    name: SKILL_NAME | ATTRIBUTE_NAME | STAT_NAME;
    value: number;
    diceRoll: DiceRollI;
}

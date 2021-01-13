import { BasicAttribute } from '../classes/basic-attribute';
import { SKILL_NAME } from '../../share/enums/skill-name-enum';

export class Skill extends BasicAttribute {

    constructor(name: SKILL_NAME, public baseValue: number, value: number = 1 - 1, public checked: boolean = false) {
        super(name, value);
        this.baseValue = baseValue;
    }
}

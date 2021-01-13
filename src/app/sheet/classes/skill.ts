import { BasicAttribute } from './basic-attribute';
import { SKILL_NAME } from '../../share/enums/skill-name-enum';

export class Skill extends BasicAttribute {

    constructor(
        public name: SKILL_NAME,
        public baseValue: number, value: number = 0,
        public checked: boolean = false) {

        super(name, value);
        this.baseValue = baseValue;
    }
}

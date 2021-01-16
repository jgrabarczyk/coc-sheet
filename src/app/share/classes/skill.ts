import { BasicAttribute } from './basic-attribute';
import { SKILL_NAME } from '../enums/skill-name-enum';

/**
 * @TODO
 * add possiblity to extend skill name i.e:
 * ART_CRAFT: Photography/Kaligraphy/Painting etc.
 */
export class Skill extends BasicAttribute {

    constructor(
        public name: SKILL_NAME,
        public baseValue: number,
        public value: number = 0,
        public checked: boolean = false,
        public disabled = true
    ) {
        super(name, value);
        this.baseValue = baseValue;
        this.checked = checked;
        this.disabled = disabled;
    }

    public reset(): void {
        this.value = this.baseValue;
    }

    public save(): void {
        this.baseValue = this.value;
    }
}

import { SKILL_NAME } from '../enums/skill-name-enum';
import { BasicAttribute } from './basic-attribute';

/**
 * @TODO
 * add possiblity to extend skill name i.e:
 * ART_CRAFT: Photography/Kaligraphy/Painting etc.
 */
export class Skill extends BasicAttribute {
    public baseValue: number;
    public disabled = true;
    public checked: boolean;
    constructor(
        sDTO: SkillDTO,
        checked?: boolean,
    ) {
        super(sDTO.name, sDTO.value || 0);
        this.baseValue = sDTO.baseValue;
        this.checked = checked || false;
    }

    public reset(): void {
        this.value = this.baseValue;
    }

    public save(): void {
        this.baseValue = this.value;
    }
}

export class SkillDTO {
    constructor(
        public name: SKILL_NAME,
        public baseValue: number,
        public value: number
    ) {

        this.name = name;
        this.value = value;
        this.baseValue = baseValue;
    }
}

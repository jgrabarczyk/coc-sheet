import { STAT_NAME } from 'src/app/share/enums/stat-name.enum';
import { ATTRIBUTE_NAME } from '../../share/enums/attribute-name.enum';
import { SKILL_NAME } from '../../share/enums/skill-name-enum';

export class BasicAttribute {
    public description?: string;

    constructor(
        public name: SKILL_NAME | ATTRIBUTE_NAME | STAT_NAME,
        public value: number) {

        this.name = name;
        this.value = value;
    }
}

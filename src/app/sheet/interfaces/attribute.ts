import { STAT_NAME } from 'src/app/share/enums/stat-name.enum';
import { ATTRIBUTE_NAME } from '../data/attribute-name.enum';
import { SKILL_NAME } from '../data/skill-name-enum';

export type Attribute = {
    name: SKILL_NAME | ATTRIBUTE_NAME | STAT_NAME;
    value: number;
    description?: string;
};

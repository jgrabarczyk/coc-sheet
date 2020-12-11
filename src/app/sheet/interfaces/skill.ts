import { Attribute } from './attribute';

export type Skill = Attribute & { checked: boolean, baseValue: number };

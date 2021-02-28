import { ATTRIBUTE_NAME } from 'src/app/share/enums/attribute-name.enum';
import { SKILL_NAME } from 'src/app/share/enums/skill-name-enum';

import { Attribute } from './attribute';

export interface ProfessionAttributes {
    attribute: ATTRIBUTE_NAME;
    multiplier: number;
    orIndex?: boolean;
}

export class Profession {
    public pointsProfession!: number;
    public pointsHobby!: number;
    public name: string;
    public skills: Array<SKILL_NAME | SKILL_NAME[]>;
    public wealth: [number, number];
    public professionAttributes: ProfessionAttributes[];

    constructor(
        pDTO: ProfessionDTO,
        // private attributeService_: AttributeService
    ) {
        this.name = pDTO.name;
        this.skills = pDTO.skills;
        this.wealth = pDTO.wealth;
        this.professionAttributes = pDTO.professionAttributes;
        // this.calcPoints();
    }

    // method to calc summed points to spent for progress
    public calcPoints(n: Attribute, m: Attribute[]): void {
        this.calcHobbyPoints(n);
        this.calcProfessionPoints(m);
    }

    /**
     * @TODO
     * change profession's points calculation due to multiple select possibility in profesion's skills
     */
    private calcProfessionPoints(m: Attribute[]): void {
        if (m === undefined || !m.length) { return; }

        let val = 0;
        const stashed: Attribute[] = [];


        // collect stash or set value
        this.professionAttributes.forEach(el => {
            const attribute: Attribute = m.filter(n => n.name === el.attribute)[0];
            // if has multiple choice stash attribute
            if (el.orIndex && attribute) {
                stashed.push(attribute);

            } else {
                // just gett modifier
                val += attribute.value * el.multiplier;
            }
        });

        // get higher value if we have choice
        if (stashed.length) {
            const maxValFromStashed = Math.max.apply(Math, stashed.map((o) => o.value));
            val += (maxValFromStashed * 2);
        }

        this.pointsProfession = val;
    }


    private calcHobbyPoints(int: Attribute): void {
        if (int === undefined) { return; }
        this.pointsHobby = int.value * 2;
    }

}

export interface ProfessionDTO {
    name: string;
    skills: Array<SKILL_NAME | SKILL_NAME[]>;
    wealth: [number, number];
    professionAttributes: ProfessionAttributes[];
}

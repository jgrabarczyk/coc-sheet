import { ATTRIBUTE_NAME } from 'src/app/share/enums/attribute-name.enum';
import { SKILL_NAME } from 'src/app/share/enums/skill-name-enum';

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
        pDTO: ProfessionDTO
    ) {

        this.name = pDTO.name;
        this.skills = pDTO.skills;
        this.wealth = pDTO.wealth;
        this.professionAttributes = pDTO.professionAttributes;
        this.calcPoints();
    }

    public calcPoints(): void {
        this.calcProfessionPoints();
        this.calcHobbyPoints();
    }

    /**
     * @TODO
     * change profession's points calculation due to multiple select possibility in profesion's skills
     */
    private calcProfessionPoints(): void {
        // let val = 0;
        // const stashed: Attribute[] = [];

        // this.ProfessionAttributes.forEach(el => {
        //     const attribute: Attribute = this.attributeService_.get(el.attribute);
        //     if (el.orIndex && attribute) {
        //         stashed.push(this.attributeService_.get(el.attribute));
        //     } else {
        //         val += this.attributeService_.getVal(el.attribute) * el.multiplier;
        //     }
        // });

        // if (stashed.length) {
        //     const maxValFromStashed = Math.max.apply(Math, stashed.map((o) => o.value));
        //     val += (maxValFromStashed * 2);
        // }

        // this.pointsProfession = val;
    }

    private calcHobbyPoints(): void {
        // this.pointsHobby = this.attributeService_.getVal(ATTRIBUTE_NAME.INTELLIGENCE) * 2;
    }

}

export interface ProfessionDTO {
    name: string;
    skills: Array<SKILL_NAME | SKILL_NAME[]>;
    wealth: [number, number];
    professionAttributes: ProfessionAttributes[];
}

import { ATTRIBUTE_NAME } from 'src/app/share/enums/attribute-name.enum';
import { SKILL_NAME } from 'src/app/share/enums/skill-name-enum';
import { AttributeService } from 'src/app/share/services/attribute.service';
import { Attribute } from './attribute';

export interface ProfessionAttributes {
    attribute: ATTRIBUTE_NAME;
    multiplier: number;
    orIndex?: boolean;
}

export class Profession {
    public pointsProfession!: number;
    public pointsHobby!: number;

    constructor(
        public name: string,
        public skills: Array<SKILL_NAME | SKILL_NAME[]>,
        public wealth: [number, number],
        public ProfessionAttributes: ProfessionAttributes[],
        private attributeService_: AttributeService
    ) {
        this.name = name;
        this.skills = skills;
        this.wealth = wealth;
        this.ProfessionAttributes = ProfessionAttributes;
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
        let val = 0;
        const stashed: Attribute[] = [];

        this.ProfessionAttributes.forEach(el => {
            if (el.orIndex) {
                stashed.push(this.attributeService_.get(el.attribute));
            } else {
                val += this.attributeService_.getVal(el.attribute) * el.multiplier;
            }
        });

        if (stashed.length) {
            const maxValFromStashed = Math.max.apply(Math, stashed.map((o) => o.value));
            val += (maxValFromStashed * 2);
        }

        this.pointsProfession = val;
    }

    private calcHobbyPoints(): void {
        this.pointsHobby = this.attributeService_.getVal(ATTRIBUTE_NAME.INTELLIGENCE) * 2;
    }

}

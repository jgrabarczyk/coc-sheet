import { ProffesionAttributes } from 'src/app/share/data/professions';
import { ATTRIBUTE_NAME } from 'src/app/share/enums/attribute-name.enum';
import { SKILL_NAME } from 'src/app/share/enums/skill-name-enum';
import { AttributeService } from 'src/app/share/services/attribute.service';
import { Attribute } from './attribute';

export class Proffesion {
    public pointsProffesion!: number;
    public pointsHobby!: number;

    constructor(
        public name: string,
        public skills: Array<SKILL_NAME | SKILL_NAME[]>,
        public wealth: [number, number],
        public ProfessionAttributes: ProffesionAttributes[],
        private attributeService_: AttributeService
    ) {
        this.name = name;
        this.skills = skills;
        this.wealth = wealth;
        this.ProfessionAttributes = ProfessionAttributes;
        this.calcPoints();
    }

    public calcPoints(): void {
        this.calcProffesionPoints();
        this.calcHobbyPoints();
    }

    /**
     * @TODO
     * change proffession's points calculation due to multiple select possibility in proffesion's skills
     */
    private calcProffesionPoints(): void {
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

        this.pointsProffesion = val;
    }

    private calcHobbyPoints(): void {
        this.pointsHobby = this.attributeService_.getVal(ATTRIBUTE_NAME.INTELLIGENCE) * 2;
    }

}

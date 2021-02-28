
export class DiceRoll {
    public throwsNo: number;
    public sides: number;
    public modifier: number;

    constructor(dr: DiceRollI) {
        this.throwsNo = dr.throwsNo;
        this.sides = dr.sides;
        this.modifier = dr.modifier;
    }

    public roll(): number {
        let value = 0;
        for (let i = 0; i < this.throwsNo; i++) {
            const roll = Math.floor(Math.random() * this.sides + 1);
            value = value + roll;
        }

        return (value + this.modifier);
    }
}

export interface DiceRollI {
    throwsNo: number;
    sides: number;
    modifier: number;
}

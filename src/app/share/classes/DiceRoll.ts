
export class DiceRoll {
    constructor(
        public throwsNo: number,
        public sides: number,
        public modifier: number,
    ) {
        this.throwsNo = throwsNo;
        this.sides = sides;
        this.modifier = modifier;
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

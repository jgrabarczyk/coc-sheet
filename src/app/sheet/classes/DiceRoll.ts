
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
}

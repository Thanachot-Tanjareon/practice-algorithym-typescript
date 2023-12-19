import ExponentNumber from "../Calculating/ExponentNumber/ExponentNumber";


class TwoDivide {
    public dividend!: number;
    public divisor!: number;
    public result: number | null = null;

    public constructor(dividend: number, divisor: number) {
        this.dividend = dividend;
        if (divisor !== 0) {
            this.divisor = divisor;

            const min = new ExponentNumber(-2, 31).result;
            const max = new ExponentNumber(2, 31, -1).result;

            if (min <= this.dividend && this.divisor <= max) {
                this.result = Math.floor(this.dividend / this.divisor);
            }
        }
    }
}


export default TwoDivide;
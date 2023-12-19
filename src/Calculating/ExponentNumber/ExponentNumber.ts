
type Limit = -1 | 0;

class ExponentNumber {
    public base!: number;
    public exponent!: number;
    public result!: number;

    public constructor(base: number, exponent: number, limit: Limit = 0) {
        this.base = base;
        this.exponent = exponent;

        if (limit === -1) {
            this.result = (this.base ** this.exponent) - 1;
        } else {
            this.result = this.base ** this.exponent;
        }

    }
}


export default ExponentNumber;
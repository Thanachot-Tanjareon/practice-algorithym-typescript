import TwoDivide from "./TwoDivide/TwoDivide";
import ExponentNumber from "./Calculating/ExponentNumber/ExponentNumber";
 


class Main {
    public constructor() {
        const a = new TwoDivide(10, -2);
        console.log(a.result);

        const b = new ExponentNumber(2, 10);
        console.log(b.result);
    }
}


new Main();
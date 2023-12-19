import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";


class CalcGrade {
    public score!: number;
    public grade: string = 'FFFFFDCBAAA';

    public constructor() {
        (async (): Promise<void> => {
            const prompt = readline.createInterface({ input, output });

            while(true) {
                const answer: string = await prompt.question('Input your score: ');
                this.score = Number(answer);
    
                if (this.score >= 0 && this.score <= 100) {
                    let i: number = Math.floor(this.score/10);
                    console.log(`Your score is ${this.score}, so will get a grade ${this.grade[i]}`);
                } else {
                    console.log(`'${this.score}' out of range (0 - 100)`);
                }
            }
        })();
    }
}


export default CalcGrade;
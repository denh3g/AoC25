// eslint-disable-next-line @typescript-eslint/no-unused-vars

import Answer from "../components/Answer";
import getInput from "../components/Input";
import DayLayout from "../components/DayLayout";

export default async function Day1() {
    let partA = 0;
    let partB = 0;
    const day=(__dirname.split(/[/ ]+/).pop());
    const input = await getInput({path: day+"/input.txt"});

    let start = 50;
    const nums: number[] = [];
    const instructions: any[] = [];

    input.split('\n').forEach(instruction => {
        let dir = instruction[0];
        const count = parseInt(instruction.slice(1));
        instructions.push({dir,count});
    })

    instructions.forEach(i => {
        for (let x = 0; x < i.count; x++){
            if (i.dir == 'L'){
                start--;
                if (start == -1){
                    start = 99;
                }
            } else {
                start++;
                if (start == 100){
                    start = 0;
                }
            }
            if (start === 0){
                partB++;
            }

        }

        nums.push(start);
    })

    nums.forEach(n => {
        if (n === 0){
            partA = partA + 1;
        }
    })

    return(
        <DayLayout day="Day 1 Page">
            Part1: <Answer a={partA}/>
            Part2: <Answer a={partB}/>
        </DayLayout>
    )
}
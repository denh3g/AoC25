module.exports = [
"[project]/app/[day]/solutions/day1/solver.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solveDay1",
    ()=>solveDay1
]);
async function solveDay1(input) {
    let partA = 0;
    let partB = 0;
    let start = 50;
    const nums = [];
    const instructions = [];
    input.split('\n').forEach((instruction)=>{
        let dir = instruction[0];
        const count = parseInt(instruction.slice(1));
        instructions.push({
            dir,
            count
        });
    });
    instructions.forEach((i)=>{
        for(let x = 0; x < i.count; x++){
            if (i.dir == 'L') {
                start--;
                if (start == -1) {
                    start = 99;
                }
            } else {
                start++;
                if (start == 100) {
                    start = 0;
                }
            }
            if (start === 0) {
                partB++;
            }
        }
        nums.push(start);
    });
    nums.forEach((n)=>{
        if (n === 0) {
            partA++;
        }
    });
    return {
        partA,
        partB
    };
}
}),
];

//# sourceMappingURL=app_%5Bday%5D_solutions_day1_solver_jsx_f6ac4a61._.js.map
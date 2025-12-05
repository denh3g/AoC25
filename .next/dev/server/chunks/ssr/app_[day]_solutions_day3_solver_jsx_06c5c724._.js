module.exports = [
"[project]/app/[day]/solutions/day3/solver.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solveDay3",
    ()=>solveDay3
]);
async function solveDay3(input) {
    let partA = 0;
    let partB = 0;
    const banks = input.split('\n');
    var totalJoltageA = [];
    var totalJoltageB = [];
    banks.forEach((b)=>{
        totalJoltageA.push(combinator(b, 2));
        totalJoltageB.push(combinator(b, 12));
    });
    console.log(totalJoltageA);
    totalJoltageA.forEach((j)=>{
        partA = partA + j;
    });
    console.log(totalJoltageB);
    totalJoltageB.forEach((j)=>{
        partB = partB + j;
    });
    return {
        partA,
        partB
    };
}
const combinator = (b, count)=>{
    const indexed = b.split('').map((num, idx)=>({
            num: parseInt(num),
            idx
        }));
    const combinations = [];
    for(let i = 0; i < b.length - 1; i++){
        const start = indexed[i].num;
        const remaining = b.slice(i + 1);
        const largest = Math.max(...remaining);
        combinations.push("" + start + largest);
    }
    b = Math.max(...combinations);
    return parseInt(b);
};
}),
];

//# sourceMappingURL=app_%5Bday%5D_solutions_day3_solver_jsx_06c5c724._.js.map
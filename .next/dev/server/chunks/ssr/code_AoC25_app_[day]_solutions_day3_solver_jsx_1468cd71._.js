module.exports = [
"[project]/code/AoC25/app/[day]/solutions/day3/solver.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solveDay3",
    ()=>solveDay3
]);
async function solveDay3(input) {
    let partA = 0;
    let partB = 0;
    const banks = input.split('\n');
    var totalJoltage = [];
    banks.forEach((b)=>{
        var combinations = [];
        for(let i = 0; i < b.length - 1; i++){
            var first = parseInt(b[i]);
            var remainder = b.slice(i + 1).split("");
            var second = Math.max(...remainder);
            combinations.push("" + first + second);
        }
        var largest = Math.max(...combinations);
        totalJoltage.push(largest);
    });
    totalJoltage.forEach((j)=>{
        partA = partA + j;
    });
    return {
        partA,
        partB
    };
} //find the 2 largest numbers and their positions, organise by position.
 // take first number pair with next biggest number, store
 // take next number, pair with biggest number etc...
}),
];

//# sourceMappingURL=code_AoC25_app_%5Bday%5D_solutions_day3_solver_jsx_1468cd71._.js.map
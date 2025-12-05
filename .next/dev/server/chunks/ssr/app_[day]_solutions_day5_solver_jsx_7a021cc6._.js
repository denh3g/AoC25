module.exports = [
"[project]/app/[day]/solutions/day5/solver.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solveDay5",
    ()=>solveDay5
]);
async function solveDay5(input) {
    let partA = 0;
    let partB = 0;
    var ranges = input.split("\n\n")[0].split("\n").map((line)=>line.trim());
    var avail = input.split("\n\n")[1].split("\n").map((line)=>line.trim());
    let fresh = [];
    let rangeString = "";
    ranges.forEach((range)=>{
        range = range.split("-");
        //part A
        avail.forEach((num)=>{
            num = parseInt(num);
            if (num >= range[0] && num <= range[1]) {
                fresh.push(num);
            }
        });
        //part B
        for(let n = parseInt(range[0]); n <= parseInt(range[1]); n++){
            if (!rangeString.includes(n.toString())) {
                rangeString += n.toString() + ",";
                partB++;
            }
        }
    });
    partA = [
        ...new Set(fresh)
    ].length;
    console.log('partA:', partA);
    console.log('partB:', partB);
    return {
        partA,
        partB
    };
}
}),
];

//# sourceMappingURL=app_%5Bday%5D_solutions_day5_solver_jsx_7a021cc6._.js.map
module.exports = [
"[project]/app/[day]/solutions/day5/solver.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    const parsedRanges = ranges.map((range)=>{
        const [start, end] = range.split("-").map(Number);
        return [
            start,
            end
        ];
    });
    //part A
    avail.forEach((num)=>{
        num = parseInt(num);
        for (const [start, end] of parsedRanges){
            if (num >= start && num <= end) {
                fresh.push(num);
                break;
            }
        }
    });
    partA = [
        ...new Set(fresh)
    ].length;
    //part B 
    const sortedRanges = parsedRanges.sort((a, b)=>a[0] - b[0]);
    const merged = [];
    for (const [start, end] of sortedRanges){
        if (merged.length === 0 || merged[merged.length - 1][1] < start - 1) {
            merged.push([
                start,
                end
            ]);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], end);
        }
    }
    partB = merged.reduce((sum, [start, end])=>sum + (end - start + 1), 0);
    return {
        partA,
        partB
    };
}
;
}),
];

//# sourceMappingURL=app_%5Bday%5D_solutions_day5_solver_8fc7e3cc.js.map
module.exports = [
"[project]/code/AoC25/app/[day]/solutions/day2/solver.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solveDay2",
    ()=>solveDay2
]);
async function solveDay2(input) {
    let partA = 0;
    let partB = 0;
    const ids = input.split(',');
    ids.forEach((id)=>{
        id = id.split('-');
        for(let i = 0; i < id.length; i++){
            const validID = validateIDs(id[i]);
            ("TURBOPACK compile-time truthy", 1) ? partA++ : "TURBOPACK unreachable";
        }
    });
    console.log('partA: ', partA);
    return {
        partA,
        partB
    };
}
const validateIDs = (id)=>{
    console.log(id);
    return true;
};
}),
];

//# sourceMappingURL=code_AoC25_app_%5Bday%5D_solutions_day2_solver_1f2aa821.js.map
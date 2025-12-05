module.exports = [
"[project]/app/[day]/solutions/day2/solver.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solveDay2",
    ()=>solveDay2
]);
async function solveDay2(input) {
    let partA = 0;
    let partB = 0;
    const ranges = input.split(',');
    ranges.forEach((range)=>{
        const ids = range.split('-');
        const upperRange = parseInt(ids[1]) + 1;
        for(let i = ids[0]; i < upperRange; i++){
            let id = parseInt(i);
            const pt1isValid = pt1Validator(id);
            pt1isValid ? "do nothing" : partA = partA + id;
            const pt2isValid = pt2Validator(id);
            pt2isValid ? "do nothing" : partB = partB + id;
        }
    });
    console.log('partA: ', partA);
    console.log('partB: ', partB);
    return {
        partA,
        partB
    };
}
const pt1Validator = (id)=>{
    id = id.toString();
    var length = id.length;
    var first = id[0];
    var halfLength = parseInt(length) / 2;
    if (first === '0') {
        return true;
    }
    ;
    if (length % 2 === 1) {
        return true;
    }
    var firstHalf = id.slice(0, halfLength);
    var lastHalf = id.slice(halfLength);
    if (firstHalf === lastHalf) {
        return false;
    }
    ;
    return true;
};
const pt2Validator = (id)=>{
    id = id.toString();
    var length = id.length;
    var first = id[0];
    if (first === '0') {
        return true;
    }
    ;
    var factors = findFactors(parseInt(length));
    var counter = 0;
    factors.forEach((factor)=>{
        const digits = groupNumberByFactor(id, factor);
        const allEqual = (digits)=>digits.every((v)=>v === digits[0]);
        if (allEqual(digits)) {
            counter++;
        }
    });
    if (counter > 0) {
        return false;
    }
    return true;
};
const findFactors = (id)=>{
    let factors = [];
    for(let i = 0; i <= id; i++){
        if (id % i === 0 && i != id) {
            factors.push(i);
        }
    }
    return factors;
};
const groupNumberByFactor = (num, factor)=>{
    const numString = String(num);
    const regex = new RegExp('.{' + factor + '}', 'g');
    const groupedArray = numString.match(regex).map(Number);
    return groupedArray;
};
}),
];

//# sourceMappingURL=app_%5Bday%5D_solutions_day2_solver_jsx_f94d86dc._.js.map
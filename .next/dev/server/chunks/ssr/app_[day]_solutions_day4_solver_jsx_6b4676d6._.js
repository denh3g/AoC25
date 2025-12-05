module.exports = [
"[project]/app/[day]/solutions/day4/solver.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "solveDay4",
    ()=>solveDay4
]);
async function solveDay4(input) {
    let partA = 0;
    let partB = 0;
    let solveA = solver(input);
    partA = solveA.total;
    partB += partA;
    let grid = solveA.grid;
    let solveB = {
        total: partB,
        grid
    };
    while(solveB.total > 0){
        solveB = solver(input, solveB.grid);
        partB += solveB.total;
    }
    console.log(partB);
    return {
        partA,
        partB
    };
}
const solver = (input, grid)=>{
    let total = 0;
    if (!grid) grid = input.split("\n").map((row)=>row.split(''));
    const dirs = [
        [
            0,
            -1
        ],
        [
            1,
            0
        ],
        [
            0,
            1
        ],
        [
            -1,
            0
        ],
        [
            -1,
            -1
        ],
        [
            -1,
            1
        ],
        [
            1,
            -1
        ],
        [
            1,
            1
        ]
    ];
    const validCells = [];
    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[y].length; x++){
            if (grid[y][x] !== '@') continue;
            let counter = 0;
            for (const [dx, dy] of dirs){
                let nx = x + dx;
                let ny = y + dy;
                while(ny >= 0 && ny < grid.length && nx >= 0 && nx < grid[0].length){
                    if (grid[ny][nx] === '@') {
                        counter++;
                        break;
                    }
                    // Stop at anything that isn’t an empty space
                    if (grid[ny][nx] !== '.' || grid[ny][nx] !== '@') break;
                    nx += dx;
                    ny += dy;
                }
            }
            if (counter < 4) {
                total++;
                validCells.push([
                    y,
                    x
                ]);
            }
        }
    }
    // Mark cells for removal
    validCells.forEach(([y, x])=>{
        grid[y][x] = 'x';
    });
    return {
        total,
        grid
    };
};
}),
];

//# sourceMappingURL=app_%5Bday%5D_solutions_day4_solver_jsx_6b4676d6._.js.map
export async function solveDay4(input) {
    let partA = 0;
    let partB = 0;

    let solveA = solver(input);

    partA = solveA.total;
    partB += partA;
    let grid = solveA.grid;
    let solveB = { total: partB, grid };

    while (solveB.total > 0) {
        solveB = solver(input, solveB.grid);
        partB += solveB.total;
    }

    return { partA, partB };
}


const solver = (input, grid) => {
    let total = 0;
    if (!grid) grid = input.split("\n").map(row => row.split(''));

    const dirs = [
        [0, -1],  // N
        [1, 0],   // E
        [0, 1],   // S
        [-1, 0],  // W
        [-1, -1], // NW
        [-1, 1],  // NE
        [1, -1],  // SW
        [1, 1],   // SE
    ];

    const validCells = [];

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] !== '@') continue;

            let counter = 0;

            for (const [dx, dy] of dirs) {
                let nx = x + dx;
                let ny = y + dy;

                while (
                    ny >= 0 && ny < grid.length &&
                    nx >= 0 && nx < grid[0].length
                ) {
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
                validCells.push([y, x]);
            }
        }
    }

    // Mark cells for removal
    validCells.forEach(([y, x]) => {
        grid[y][x] = 'x';
    });

    return { total, grid };
};
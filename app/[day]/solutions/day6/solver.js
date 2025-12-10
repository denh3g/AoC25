export async function solveDay6(input) {
    let partA = 0;
    let partB = 0;

    var grid = input.split("\n").map(row => row.split(' ').filter(c => c !== ''));
    var gridB = input.split("\n").map(row => row.split(''));
    partB = solvePartB(gridB);

    //get all columns
    for (let col = 0; col < grid[0].length; col++) {
        let values = [];
        for (let row = 0; row < grid.length - 1; row++) {
            values.push(grid[row][col]);
        }
        let symbol = grid[grid.length - 1][col];

        let equation = values.join(` ${symbol} `);
        let result = eval(equation);
        partA += result;
    }

    function solvePartB(grid) {
        let total = 0;
        let symbolArr = grid[grid.length - 1];

        let values = [];

        // Start from grid[0].length - 1, not grid[0].length (that's out of bounds)
        for (let col = grid[0].length - 1; col >= 0; col--) {
            var num = '';
            
            // Build number from top to bottom (not including symbol row)
            for (let row = 0; row < grid.length - 1; row++) {
                let val = grid[row][col];
                if (val && val !== ' ') {
                    num += val;
                }
            }
            
            if (num !== '') {
                values.push(num);
            }

            // Check if this column has a symbol (not space or undefined)
            if (symbolArr[col] && symbolArr[col] !== " ") {
                let equation = values.join(` ${symbolArr[col]} `);
                var result = eval(equation);
                total += parseInt(result);
                values = [];
            }
        }

        return total;
    }

    return ({ partA, partB });
}

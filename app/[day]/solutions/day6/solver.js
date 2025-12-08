async function solveDay6(input) {
    let partA = 0;
    let partB = 0;

    var grid = input.split("\n").map(row => row.split(' ').filter(c => c !== ''));

    partB = solvePartB(grid);

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

        for (let col = grid[0].length - 1; col >= 0; col--) {
            let valuesGrid = [];
            for (let row = 0; row < grid.length - 1; row++) {
                var num = grid[row][col];
                var splitNum = num.split('');
                valuesGrid.push(splitNum);
                
            }

            //console the numbers in reverse column order
            valuesGrid.reverse();
            console.table(valuesGrid);
            console.log('==========')
            let values = [];
            for (let col = valuesGrid[0].length -1; col >= 0; col--) {
                let num = '';
                for (let row = 0; row < valuesGrid.length; row++) {
                    let n = valuesGrid[row][col];
                    if (n) {
                        num += n;
                    }
                }

                values.push(num);
            }
            let symbol = grid[grid.length - 1][col];
            let equation = values.join(` ${symbol} `);
            console.log(equation);
            total += eval(equation);
        }


        return total;
    }

    return ({ partA, partB });
}

export { solveDay6 };

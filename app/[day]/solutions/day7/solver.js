async function solveDay7(input){
let partA = 0;
let partB = 0;

let grid = input.split("\n").map(row => row.split(""));

console.table(grid);

var sCoord = findS(grid);

function findS(grid){
    for (var row = 0; row < grid.length; row++){
        for (var col = 0; col < grid[row].length; col++){
            if (grid[row][col] === 'S'){
                return({row,col})
            }
        }
    }
}

console.log(sCoord);

grid[sCoord.row][sCoord.col] = 1;

// Track which ^ symbols have been hit
const hitCarets = new Set();

// Run multiple passes to let numbers cascade down
for (let pass = 0; pass < grid.length; pass++) {
    // Create a copy of the grid for this pass
    const nextGrid = grid.map(row => [...row]);
    
    for (let row = 0; row < grid.length - 1; row++){  
        for (let col = 0; col < grid[0].length; col++){  
            let num = grid[row][col];

            if (!isNaN(num) && num !== '' && num !== '.'){
                num = parseInt(num);
                
                // Check if we can go to the next row
                if (row + 1 < grid.length) {
                    let below = grid[row + 1][col];
                    
                    if (below === "^"){
                        // Track this ^ as hit
                        const caretKey = `${row + 1},${col}`;
                        if (!hitCarets.has(caretKey)) {
                            hitCarets.add(caretKey);
                            partA++;
                        }
                        
                        // Left diagonal - check bounds and parse existing value
                        if (col - 1 >= 0) {
                            let leftCell = nextGrid[row + 1][col - 1];
                            if (!isNaN(leftCell) && leftCell !== '' && leftCell !== '.' && leftCell !== '^'){
                                nextGrid[row + 1][col - 1] = parseInt(leftCell) + num;
                            } else if (leftCell === '.' || leftCell === '') {
                                nextGrid[row + 1][col - 1] = num;
                            }
                        }
                        
                        // Right diagonal - check bounds and parse existing value
                        if (col + 1 < grid[0].length) {
                            let rightCell = nextGrid[row + 1][col + 1];
                            if (!isNaN(rightCell) && rightCell !== '' && rightCell !== '.' && rightCell !== '^'){
                                nextGrid[row + 1][col + 1] = parseInt(rightCell) + num;
                            } else if (rightCell === '.' || rightCell === '') {
                                nextGrid[row + 1][col + 1] = num;
                            }
                        }
                        
                        // Clear the current cell in the next grid
                        nextGrid[row][col] = '.';
                    }
                    
                    if (below === "."){
                        let belowCell = nextGrid[row + 1][col];
                        if (!isNaN(belowCell) && belowCell !== '' && belowCell !== '.'){
                            nextGrid[row + 1][col] = parseInt(belowCell) + num;
                        } else {
                            nextGrid[row + 1][col] = num;
                        }
                        // Clear the current cell in the next grid
                        nextGrid[row][col] = '.';
                    }
                }
            }
        }
    }
    
    // Update grid with the next state
    grid = nextGrid;
}

console.table(grid);
var lastRow = grid[grid.length -1];

lastRow.forEach(c => {
    if (!isNaN(c)){
        partB = partB + c;
    }
})


return ({ partA, partB });
}

export { solveDay7 }
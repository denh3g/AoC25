export async function solveDay9(input){
    let partA = 0;
    let partB = 0;

    input = input.split("\n");
    let largestX = 0;
    let largestY = 0;

    for (let i = 0; i < input.length; i++){
        var x = parseInt(input[i].split(",")[0]);
        var y = parseInt(input[i].split(",")[1]);

        if (x > largestX){
            largestX = x;
        }

        if (y > largestY){
            largestY = y;
        }
    }
    
    //var grid = buildGrid(largestX,largestY, input);

   // console.table(grid);

    partA = doMath(input);

    return( { partA, partB } )
}

const buildGrid = (x,y, input) => {
    var grid = []
    
    for (let i=0; i <= y; i++){
        var row = [];
        for (let c=0; c <= x; c++){
            row.push('.');
        }
        grid.push(row);
    }

    input.forEach(coord => {
        coord = coord.split(",");
        var col = parseInt(coord[0]);
        var row = parseInt(coord[1]);
        
        grid[row][col] = "#"
    })

    return grid;
}

const doMath = (input) => {
    let biggestArea = 0;
    let coords = [];
    for (let x = 0; x < input.length; x++){
        var a = parseInt(input[x].split(',')[0]);
        var b = parseInt(input[x].split(',')[1]);

        for (let y = 1; y < input.length; y++){
           var c = parseInt(input[y].split(',')[0]);
           var d = parseInt(input[y].split(',')[1]); 

           let first = Math.abs(c - a)+1;
           let second = Math.abs(d - b)+1;

           var area = first * second;

           if (area > biggestArea){
            biggestArea = area;
            coords = [];
            coords.push([a,b],[c,d])
           }

        }
    }


    return biggestArea;
}
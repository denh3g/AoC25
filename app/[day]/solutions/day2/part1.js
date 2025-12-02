export async function solveDay2(input) {
    let partA = 0;
    let partB = 0;

    const ranges = input.split(',');
    
    ranges.forEach(range => {
        const ids = range.split('-');
        const upperRange = parseInt(ids[1]) + 1;
        
        for (let i = ids[0]; i < upperRange; i++){
            let id = parseInt(i);
            const isValid = validateIDs(id);

            isValid ? "do nothing" : partA = partA + id ;
        }
    });

    console.log('partA: ', partA);

    return { partA, partB };
}

const validateIDs = (id) => {
    id = id.toString();
    var length = id.length;
    var first = id[0];
    var halfLength = parseInt(length) / 2;

    if (first === '0'){  
        console.log(id, " starts with 0, skip");
        return true;
    };

    if (length % 2 === 1){ //if length is odd
        return true;
    }

    var firstHalf = id.slice(0, halfLength);
    var lastHalf = id.slice(halfLength);

    if (firstHalf === lastHalf){
        return false;
    };

    return true;
}

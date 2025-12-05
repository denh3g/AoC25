async function solveDay3(input) {
    let partA = 0;
    let partB = 0;

     const banks = input.split('\n');
     var totalJoltageA = [];
     var totalJoltageB = [];

     banks.forEach(b => {
        totalJoltageA.push(combinator(b, 2));
        totalJoltageB.push(combinator(b, 12));
     })

     totalJoltageA.forEach(j => {
        partA = partA+j;
     })

     totalJoltageB.forEach(j => {
        partB = partB+j;
     })

     partB = 'puzzle incomplete';

     return { partA, partB };
}


const combinator = (b, count) => {
   const indexed = b.split('').map((num, idx) => ({ num: parseInt(num), idx }));
   const combinations = [];
   for (let i = 0; i < b.length -1; i++) {
      const start = indexed[i].num;
      const remaining = b.slice(i + 1);
      const largest = Math.max(...remaining);
      combinations.push("" + start + largest);
   }
   b = Math.max(...combinations);
   return parseInt(b);
}

export { solveDay3 };


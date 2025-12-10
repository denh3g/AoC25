export async function solveDay8(input){
    let partA = 0;
    let partB = 0;

    var positions = input.split("\n").map(p => {
        const parts = p.split(',');
        return {
            X: parseInt(parts[0]),
            Y: parseInt(parts[1]),
            Z: parseInt(parts[2])
        };
    });

    console.log(positions);
    console.log(closestPair(positions));
    let pairs = [];

    for (let i = positions.length; i > 0; i--){
        var closest = closestPair(positions);
        pairs.push(closest.pair);
        closest.pair.forEach(line => {
            positions = positions.filter(el => el == line);
        })
    }

    return({partA, partB})

}

function closestPair(points) {
  let best = null;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].X - points[j].X;
      const dy = points[i].Y - points[j].Y;
      const dz = points[i].Z - points[j].Z;
      const d2 = dx * dx + dy * dy + dz * dz; // squared distance

      if (!best || d2 < best.d2) best = { i, j, d2 };
    }
  }

  return {
    pair: [points[best.i], points[best.j]]
  };
}
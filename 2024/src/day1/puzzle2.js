export function solve(input){
  const lines = input.trim().split('\n');


  const columnLeft = [];
  const columnRight = [];

  lines.forEach(line => {

    const parts = line.trim().split(/\s+/);

    parts.forEach((part, i) => {
      if(i%2 === 0){
        columnLeft.push(part);
      } else columnRight.push(part);

    })
  });


  let numberAppears = 0;
  let similarityArray = [];

  for (let i = 0; i<columnLeft.length; i++){

    const left = columnLeft[i];

    const count = columnRight.filter(r => r===left).length;
    const similarity = left*count;

    similarityArray.push({ left, count, similarity });

  }

  //console.table(similarityArray);
 
  const similarityScore = similarityArray.reduce((acc, obj) => acc+obj.similarity, 0);

  return similarityScore;
}

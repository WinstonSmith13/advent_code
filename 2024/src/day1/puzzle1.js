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
  
  columnLeft.sort((a,b) => a-b);
  columnRight.sort((a,b) => a-b);

  const diff = [];

  for (let i=0; i<columnLeft.length; i++){
    const left = columnLeft[i];
    const right = columnRight[i];
  
    diff.push(Math.abs(left-right));
  }


  const sommeDiff = diff.reduce((acc, val) => acc + val, 0);


  return sommeDiff;
}

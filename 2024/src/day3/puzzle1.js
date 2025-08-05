export function solve(input){

  const matches = input.matchAll(/mul\((\d+),(\d+)\)/g);

  
  for (const m of matches) {
  //console.log(m[0]);
  //console.log(m[1]);
  //console.log(m[2]);
  //console.log('m', m);
  console.log(JSON.stringify(m, null, 2));
}

 
  return 'result';
}

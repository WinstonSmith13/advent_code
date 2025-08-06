export function solve(input){

  const regex = /(?<type>do\(\)|don't\(\)|mul\((\d+),(\d+)\))/g;
  const matches = [...input.matchAll(regex)];

  console.log('matches', matches);
  
  for (const m of matches) {
    console.log('m[0]',m[0]);           // le texte trouvé
    console.log('m.groups.type', m.groups.type);  // "do()", "don't()" ou "mul(...)"
    console.log('m[2]', m[2], 'm[3]', m[3]);     // si c’est un mul : les deux nombres
  }



  return 'total';
}

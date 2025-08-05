export function solve(input){
  return Array.from(input.matchAll(/mul\((\d+),(\d+)\)/g))
  .map(m => Number(m[1]) * Number(m[2]))
  .reduce((acc, val) => acc + val, 0);
}


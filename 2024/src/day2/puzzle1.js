export function solve(input){
  const lines = input.trim().split('\n');
  const reports = lines.map(line=>line.trim().split(' ').map(Number));

  reports.forEach(e => {
    console.log(e[0]);
  });

  return reports[0];
}

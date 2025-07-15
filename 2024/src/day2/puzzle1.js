export function solve(input){
  const lines = input.trim().split('\n');
  const reports = lines.map(line => line.trim().split(' ').map(Number));

  
let safetyReports = [];

  reports.forEach((e, index) => {
  console.log("Ligne", index, ":", e);

  for (let j = 0; j < e.length - 1; j++) {
    let safetyScore = e[j + 1] - e[j];
    console.log("Diff entre", e[j + 1], "et", e[j], "=", safetyScore);
  }
});

console.table(safetyReports);
  return reports;
}

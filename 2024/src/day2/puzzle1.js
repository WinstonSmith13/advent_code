export function solve(input){
  const lines = input.trim().split('\n');
  const reports = lines.map(line => line.trim().split(' ').map(Number));

  let safetyReports = [];
  
  reports.forEach((e, index) => {

    let diffs = [];

    for (let j = 0; j < e.length - 1; j++) {
      let safetyScore = e[j + 1] - e[j];  
      diffs.push(safetyScore);
    }

    safetyReports.push({line: index, reports: e, differences:diffs});
  });

  safetyReports.forEach((report, index)=>{
 
    report.isSafe = true;
   
      if (report.differences.includes(0)) {
        report.isSafe = false;
        return;
      }
      if(!report.differences.every(d=> d<0) && !report.differences.every(d=> d>0) ){
        report.isSafe = false;
        return;
      }
      report.isSafe = report.differences.every(d=>Math.abs(d)>=1 && Math.abs(d)<=3);
  });
 
  const countSafe = safetyReports.filter(reportObject => reportObject.isSafe === true).length;
 
  return countSafe;
}

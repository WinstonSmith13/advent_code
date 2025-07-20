export function solve(input){
  const lines = input.trim().split('\n');
  const reports = lines.map(line => line.trim().split(' ').map(Number));

  function getDifferences(report){
    return report.slice(1).map((val, i) => val - report[i]);
  }

  function rules(differences){
    let passTest = true;
    let reason = null;

    if (differences.includes(0)) {
      passTest = false;
      reason = 'includes(0)';
    }
    if (!differences.every(d => d > 0) && !differences.every(d => d < 0)) {
      passTest = false;
      reason = 'Problem IncreaseDecrease';
    }
    if (!differences.every(d => Math.abs(d) >= 1 && Math.abs(d) <= 3)) {
      passTest = false;
      reason = 'includes Outside boundaries';
    }

    return { passTest, reason };
  }

  function isSafeTest(reportObject){
    const { differences } = reportObject;
    const { passTest: isSafe, reason } = rules(differences);
    return { ...reportObject, isSafe, reason };
  }

  function recoveryTest(array) {
    for (let i = 0; i < array.length; i++) {
      const reportObj = array[i];
      if (reportObj.isSafe) continue;

      const original = reportObj.report;

      for (let j = 0; j < original.length; j++) {
        const candidate = [
          ...original.slice(0, j),
          ...original.slice(j + 1)
        ];

        const differences = getDifferences(candidate);
        const { passTest } = rules(differences);

        if (passTest) {
          array[i] = {
            report: candidate,
            differences,
            isSafe: true,
            reason: 'recovered'
          };
          break;
        }
      }
    }

    return array;
  }


  const safetyReports = reports.map(report => ({
    report,
    differences: getDifferences(report)
  })).map(isSafeTest);

  const initiallySafe = safetyReports.filter(r => r.isSafe).length;
  //console.log('initiallySafe',initiallySafe);

  const recoveredReports = recoveryTest(safetyReports);
  //console.log('recoveredReports',recoveredReports);
  const recoveredCount = recoveredReports.filter(r => r.isSafe && r.reason === 'recovered').length;
  //console.log('recoveredCount',recoveredCount);
  const totalSafe = initiallySafe + recoveredCount;

  return totalSafe;
}

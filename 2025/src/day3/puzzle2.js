export function solve(input) {
    console.log('--- PART 2---');
    const banksList = input.trim().split('\n');

    let finalVoltages = [];
    
    function parseBatteries(lines) {
  
        return lines.map(line => [...line].map(d => parseInt(d, 10)));
    }

    function maxVoltageForBank(bankDigits, D) {
  
      let maxVoltageForBank = 0;

      function makeCombinations(startingIndex, currentVoltage) {
        if (currentVoltage.length === D) {
                const voltageString = currentVoltage.join('');
              
                const currentVoltage = parseInt(voltageString, 10);
                
                if (currentVoltage > maxVoltageForBank) {
                  console.log(`      - Max: ${maxVoltageForBank}`);
                    maxVoltageForBank = currentVoltage;
                }
                return;
        }
        for (let i = startingIndex; i < bankDigits.length; i++) {
          currentVoltage.push(bankDigits[i]);
          makeCombinations(i + 1, currentVoltage);
          currentVoltage.pop();
        }
      }
      makeCombinations(0, []);
      return maxVoltageForBank;


    }

    const digits = parseBatteries(banksList);

    return '# TODO: Implement puzzle 2 solution ';
}

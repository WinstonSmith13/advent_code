export function solve(input) {
    console.log('--- PART 1---');
    const banksList = input.trim().split('\n');

    let finalVoltages = [];
    
    function parseBatteries(lines) {
  
        return lines.map(line => [...line].map(d => parseInt(d, 10)));
    }

    const digits = parseBatteries(banksList);

    for (let i = 0; i < digits.length; i++) {
        console.log(`\nBank ${i + 1}:`);
        const bankDigits = digits[i]; 

        let maxVoltageForBank = 0;
        
        for (let j = 0; j < bankDigits.length - 1; j++) {
          console.log(`  - Choix de X à l'index ${j} : ${bankDigits[j]}`);
            const X = bankDigits[j]; 
            
            for (let k = j + 1; k < bankDigits.length; k++) {
              console.log(`    - Choix de Y à l'index ${k} : ${bankDigits[k]}`);
                const Y = bankDigits[k]; 
 
                const voltageString = `${X}${Y}`;
                const currentVoltage = parseInt(voltageString, 10);
                
                if (currentVoltage > maxVoltageForBank) {
                  console.log(`      - Max: ${maxVoltageForBank}`);
                  console.log(`      - Nouveau Voltage Max Trouvé: ${currentVoltage} (avec X=${X} et Y=${Y})`);

                    maxVoltageForBank = currentVoltage;
                }
            }
        }
        
        finalVoltages.push(maxVoltageForBank);

        console.log(`  Chiffres de la Banque: [${bankDigits.join(', ')}]`);
        console.log(`  Voltage Max Trouvé  : ${maxVoltageForBank}`);
    }

    const totalVoltage = finalVoltages.reduce((acc, curr) => acc + curr, 0);

    return totalVoltage;
}

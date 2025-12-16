export function solve(input) {
    console.log('--- PART 2---');
    const banksList = input.trim().split('\n');

    let finalVoltages = [];
    
    function parseBatteries(lines) {
      return lines.map(line => [...line].map(d => parseInt(d, 10)));
    } 

    function dynamicMaxVoltage(bankDigits, digitals) {
      console.log('bankDigits:', bankDigits);

      for (let i = 0; i < digits.length; i++) {
        //console.log(`\nBank ${i + 1}:`);
        const bankDigits = digits[i]; 
      
        console.log(`bankDigits: ${i + 1}, value: ${bankDigits}`);
      
        let maxVoltageForBank = 0;
        
        for (let j = 0; j < bankDigits.length - 1; j++) {
            console.log(`  - Choix de X à l'index ${j} : ${bankDigits[j]}`);
            
            const X = bankDigits[j]; 
            
            for (let k = j + 1; k < bankDigits.length; k++) {
              console.log(`    - Choix de Y à l'index ${k} : ${bankDigits[k]}`);
                const Y = bankDigits[k]; 
              
                for (let f = k + 1; f < bankDigits.length; f++) {
                  console.log(`    - Choix de A à l'index ${f} : ${bankDigits[f]}`);
                    const A = bankDigits[k]; 

                       const voltageString = `${X}${Y}${A}`;
                       console.log('voltageString:', voltageString);
                const currentVoltage = parseInt(voltageString, 10);
                
                if (currentVoltage > maxVoltageForBank) {
              //    console.log(`      - Max: ${maxVoltageForBank}`);
                //  console.log(`      - Nouveau Voltage Max Trouvé: ${currentVoltage} (avec X=${X} et Y=${Y})`);

                    maxVoltageForBank = currentVoltage;
                }
 
                
                }
                
        }
         
      }
    }


 
            }
    const digits = parseBatteries(banksList);
    dynamicMaxVoltage(digits);


    return 'totalVoltage';
}

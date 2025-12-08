export function solve(input) {
  console.log('--- PART 1---');
  const banksList = input.trim().split('\n');

  // Rule 1 - Parser tous les digits dans une baterie -
  // Essayer de trouver le plus grand nombre qu'on peut former avec deux digits.
  // ex : 81117 => on parcourt 8, 1, 1, 1, 7 => on trouve 8 et 7 => 87
  // trouver d'abord le plus grand digit, puis le deuxieme plus grand digit.
  // on parcourt une fois les tableau - le premier le grand on le met dans un tableau
  // on recommence on enlevant le premier trouvé.
  // on recommence pour trover le deuxieme plus grand.
  // on concatene les deux et on parseInt pour avoir le nombre final.
  // on le push dans un tableau final.

  let finalVoltages = [];

  
  function parseBatteries(lines) {
    return lines.map(line  => [...line].map(d => parseInt(d, 10)));
  }

 function getMaxDigits(arr, ignoreIndex = -1) { 
  return arr.reduce(
    (acc, curr, index) => {
      if (index === ignoreIndex) { 
        return acc; 
      }
      if (curr > acc.value) {
        return { value: curr, index };
      }
      return acc;
    },
    { value: -Infinity, index: -1 } 
  );
}

  const digits = parseBatteries(banksList);

  for (let i=0; i< digits.length; i++) {
    const tempArray = [];

    //console.log(`Bank ${i + 1}:`);
    const bankDigits = digits[i];

    //const voltage = parseInt(`${orderArray[0].value}${orderArray[1].value}`, 10);
    //finalVoltages.push(voltage);
    //console.log(`  Voltage formed:`, voltage);

   // for (let j=0; j< digits[i].length; j++) {
   //   console.log(`  Digit ${j + 1}:`, digits[i][j]);
   // }
  };

 // const totalVoltage = finalVoltages.reduce((acc, curr) => acc + curr, 0);


  return 'totalVoltage';
}

export function solve(input) {
  const [first, second] = input
    .trim()
    .split(/\r?\n\r?\n/)
    .map(part => part.split(/\r?\n/));

  class DependencyRules {
    constructor(from, to) {
      this.from = parseInt(from);
      this.to = parseInt(to);
    }
  }

  class Sequence {
    constructor(numbers) {
      this.numbers = numbers.map(n => parseInt(n));
      this.isValid = true;
      this.errors = []; 
    }
  }

  function parseDependencyRules(lines) {
    return lines
      .map(line => line.trim().split(/\|/))
      .filter(pair => pair.length === 2)
      .map(([from, to]) => new DependencyRules(from, to));
  }

  function parseSequences(lines) {
    return lines
      .map(line => line.trim().split(/,/))
      .map(numbers => new Sequence(numbers));
  }

  const dependencyRules = parseDependencyRules(first);
  const sequences = parseSequences(second);

  function validateOrder(sequences) {
    for (const seq of sequences) {
      for (const rule of dependencyRules) {
        const fromNum = rule.from;
        const toNum = rule.to;
        if (seq.numbers.includes(fromNum) && seq.numbers.includes(toNum)) {
          const fromIndex = seq.numbers.indexOf(fromNum);
          const toIndex = seq.numbers.indexOf(toNum);
          if (fromIndex > toIndex) {
            seq.isValid = false;
            seq.errors.push(`Invalid order:  should be   ${fromNum}, ${toNum}`);
            moveElement(seq.numbers, fromIndex, toIndex);
            validateOrder(sequences);
            
          }
        }
      }
    }
  }

  validateOrder(sequences);

 

  function moveElement(array, fromIndex, toIndex) {
    const element = array[fromIndex];
    array.splice(fromIndex, 1); 
    array.splice(toIndex +1, 0, element); 
    return array;
  }


   console.log("\n--- Résultats après validation ---");
  for (const seq of sequences) {
   
    if (!seq.isValid) {
      console.log(`Séquence ${seq.numbers}`);
      console.log("  Erreurs :", seq.errors);
      swapNumbers(seq.numbers, 0, seq.numbers.length - 1);
    }
  }
  return 'counter';
}

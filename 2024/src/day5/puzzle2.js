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
  const badOrderArray = [];
  const fixOrderArray = [];

  function validateOrder(sequences) {
    for (const seq of sequences) {
      seq.isValid = true; // Réinitialise la validité pour chaque séquence
      seq.errors = [];    // Vide les erreurs pour chaque séquence

      for (const rule of dependencyRules) {
        const fromNum = rule.from;
        const toNum = rule.to;

        if (seq.numbers.includes(fromNum) && seq.numbers.includes(toNum)) {
          const fromIndex = seq.numbers.indexOf(fromNum);
          const toIndex = seq.numbers.indexOf(toNum);

          if (fromIndex > toIndex) {
            seq.isValid = false;
            seq.errors.push(`Invalid order: ${fromNum} should come before ${toNum}`);
          }
        }
      }

      
      if (!seq.isValid) {
        badOrderArray.push(seq);
      }
    }
  }

   function moveElement(array, fromIndex, toIndex) {    
      const element = array[fromIndex];    
      array.splice(fromIndex, 1);    
      array.splice(toIndex, 0, element);   
      return array;  
  }

  validateOrder(sequences);

  function fixOrder(badOrderArrayTemplate) {    
    for (const seq of badOrderArrayTemplate) {      
      let hasInversion;     
      
      do {        
        hasInversion = false;        
        seq.isValid = true; // Réinitialise la validité        
        seq.errors = []; // Vide les erreurs        
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
              hasInversion = true;            
              // validateOrder(sequences);                      
              // 
              }        
            }      
          }      
        } while (hasInversion);         
         if(seq.isValid === true){          
          fixOrderArray.push(seq);
        }   
      }  
    }
  
  fixOrder(badOrderArray);
  
  const centerNumbers = [];

  function getCenterNumber(array) {
    const length = array.length;
    if (length === 0) return null;
    if (length % 2 === 1) {
      return parseInt(array[Math.floor(length / 2)]);
    } 
    if (length % 2 === 0) {
      const left = parseInt(array[length / 2 - 1]);
      const right = parseInt(array[length / 2]);
      return Math.floor((left + right) / 2);
    }
  }

  for (const seq of fixOrderArray) {
    const center = getCenterNumber(seq.numbers);
    if (!isNaN(center)) {
      centerNumbers.push(center);
    } else {
      console.warn("❌ Centre non numérique pour :", seq.numbers);
    }
  } 

  let counter = centerNumbers.reduce((acc, num) => acc + num, 0);

  return counter;
}

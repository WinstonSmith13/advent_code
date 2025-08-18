export function solve(input) {
  const [first, second] = input
    .trim()
    .split(/\r?\n\r?\n/)
    .map(part => part.split(/\r?\n/));

  console.log("--- Input brut ---");
  console.log("first (règles) :", first);
  console.log("second (séquences) :", second);

   const first_section = first.map(line => line.trim().split(/\|/)).filter(pair => pair.length === 2);  
   const second_section = second.map(line => line.trim().split(/,/));

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
  console.log("dependencyRules: ", dependencyRules);

  const sequences = parseSequences(second);
  console.log('sequences: ', sequences);

  function validateOrder (sequences){

  for (const seq of sequences){
    console.log("valeur :", seq);
  }



}


  validateOrder(sequences);

  return 'counter';
}

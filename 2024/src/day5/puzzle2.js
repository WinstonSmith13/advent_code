export function solve(input) {
  const [first, second] = input
    .trim()
    .split(/\r?\n\r?\n/)
    .map(part => part.split(/\r?\n/));

  console.log("--- Input brut ---");
  console.log("first (règles) :", first);
  console.log("second (séquences) :", second);

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
      this.errors = []; // Tableau pour stocker les erreurs
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

  console.log('dependencyRules : ', dependencyRules);
  console.log('Sequences: ', sequences);

  function validateOrder(sequences) {
    for (const seq of sequences) {
      console.log("Validation de la séquence :", seq.numbers);
      for (const rule of dependencyRules) {
        const fromNum = rule.from;
        const toNum = rule.to;
        if (seq.numbers.includes(fromNum) && seq.numbers.includes(toNum)) {
          const fromIndex = seq.numbers.indexOf(fromNum);
          const toIndex = seq.numbers.indexOf(toNum);
          if (fromIndex > toIndex) {
            seq.isValid = false;
            seq.errors.push(`Invalid order: ${fromNum} should come before ${toNum}`);
            console.log(`Inversion détectée : ${fromNum} est après ${toNum}`);
          }
        }
      }
    }
  }

  validateOrder(sequences);

  // Affichage des résultats après validation
  console.log("\n--- Résultats après validation ---");
  for (const seq of sequences) {
    console.log(`Séquence ${seq.numbers} : ${seq.isValid ? "✅ Valide" : "Invalide"}`);
    if (!seq.isValid) {
      console.log("  Erreurs :", seq.errors);
    }
  }

  return 'counter';
}

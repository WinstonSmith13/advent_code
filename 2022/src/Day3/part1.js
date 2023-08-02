import { promises as fs } from 'fs'

const RUCKSACK_SEPERATOR = '\n';

async function main(inputPath) {
  const fileContent = await fs.readFile(inputPath, 'utf8');
  const RucksackEntier = fileContent.split(RUCKSACK_SEPERATOR);

  const compartments = RucksackEntier.map((element) => {
    const lengthRucksack = element.length / 2;
    const part1 = [...element.slice(0, lengthRucksack)];
    const part2 = [...element.slice(lengthRucksack)];

    let part1set = new Set(part1);
    const intersection = part2.filter(x => part1set.has(x));
    const dedup = [... new Set(intersection)];

    return (letterToPriority(dedup[0]));
  });

  function letterToPriority(letter) {
    if (/[a-z]/.test(letter)) {
      return (letter.charCodeAt(0) - 96)
    }
    else {
      return (letter.charCodeAt(0) - 65 + 27)
    }
  }

  const sum = compartments.reduce((acc, cur) => acc + cur, 0);
  return sum;
}

// Nous exportons la fonction main pour pouvoir l'importer dans index.js
export default main;
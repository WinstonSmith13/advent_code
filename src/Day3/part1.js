import { promises as fs } from 'fs'

const RUCKSACK_SEPERATOR = '\n';

async function main() {
  const fileContent = await fs.readFile('puzzle_file', 'utf8');
  const RucksackEntier = fileContent.split(RUCKSACK_SEPERATOR);

  const compartments = RucksackEntier.map((element) => {
    const lengthRucksack = element.length / 2;
    const part1 = [...element.slice(0, lengthRucksack)];
    const part2 = [...element.slice(lengthRucksack)];
    /* console.log({part1, part2}); */
    
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
  console.log(compartments);
  const sum = compartments.reduce((acc, cur) => acc + cur, 0);
console.log(`La somme des priorités des lettres identiques est ${sum}.`)

  
}

main().catch(console.error);
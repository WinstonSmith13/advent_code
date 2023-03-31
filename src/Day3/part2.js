import { promises as fs } from 'fs'

const RUCKSACK_SEPERATOR = '\n';

async function main() {
  const fileContent = await fs.readFile('puzzle_file2', 'utf8');
  const RucksackEntier = fileContent.split(RUCKSACK_SEPERATOR);

  let sum = 0;

  for (let i = 0; i < RucksackEntier.length; i += 3) {

    const group = [[...RucksackEntier[i]], [...RucksackEntier[i + 1]], [...RucksackEntier[i + 2]]];
    // traitement du groupe ici
    let part1set = new Set(group[0]);
    let intersection = group[1].filter(x => part1set.has(x));
    part1set = new Set(intersection);
    intersection = group[2].filter(x => part1set.has(x));
    const dedup = [... new Set(intersection)];

    sum += letterToPriority(dedup[0])
  }

  console.log(sum)


  function letterToPriority(letter) {
    if (/[a-z]/.test(letter)) {
      return (letter.charCodeAt(0) - 96)
    }
    else {
      return (letter.charCodeAt(0) - 65 + 27)
    }
  }
}

main().catch(console.error);
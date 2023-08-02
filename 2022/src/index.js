// index.js
import part1 from './Day3/part1.js';
import part2 from './Day3/part2.js';

// fonction pour obtenir le chemin du fichier d'entrée
function getInputFilePath() {
  return './Day3/puzzle_file';
}

// fonction principale pour exécuter chaque partie du puzzle
async function main() {
  const puzzleInput = getInputFilePath();
  console.log('Résultat de la première partie du puzzle :', await part1(puzzleInput));
  console.log('Résultat de la deuxième partie du puzzle :', await part2(puzzleInput));


}

// Appeler la fonction principale pour commencer l'exécution du puzzle
main().catch(console.error);
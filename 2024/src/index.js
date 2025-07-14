import {readFileSync} from 'fs';
import {join, dirname} from 'path';
import { parse } from 'querystring';
import { fileURLToPath, pathToFileURL } from 'url';


const args = process.argv.slice(2);
const day = args[0];
const dayFolder = `day${parseInt(day, 10)}`;

if(!day){
  console.error('Please specify a day. Example: node index.js 3')
  process.exit(1);
}

const __filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filePath);

const filepath = join(__dirname, dayFolder, 'input.txt');

let input = '';

try {
  input = readFileSync(filepath, 'utf-8');
}catch(err) {
  console.log('Unable to read ${inputPath}')
  console.log(err.message);
  process.exit(1);
}

async function loadPuzzleSolver(day, puzzleNumber){
  console.log('[DEBUG]-LoadpuzzleSolver begin');

  const puzzlePath = join(__dirname, `day${day}`, `puzzle${puzzleNumber}.js`);
  //console.log(puzzlePath);
  try {
    const moduleUrl = pathToFileURL(puzzlePath).href;
    const module = await import(moduleUrl);
    return module.solve;
  } catch (err){
    console.error(`⚠️ puzzle${puzzleNumber}.js introuvable ou erreur à l'import`);
    return null;
  }
}

const run = async () => {
  console.log(`Day ${day}`);

  for (let i=1; i<=2; i++){
    const solve = await loadPuzzleSolver(day,i);
    if(typeof solve === 'function'){
      try{
        const result = solve(input);
        console.log(`Result Part ${i}: ${result}`);
      } catch(err){
        console.error(`error: ${err}`);
      }
    }
  }
}

run();



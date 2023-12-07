import puzzleParse from './puzzle-parse.js';
import part1 from './day4/part1.js';

const filePath = './day4/puzzle_file.txt';

const readFile = new puzzleParse(filePath);

async function run(){
    try{
        const data = await readFile.readFile();

        const resolver = new part1(data);

        await resolver.resolve();
    }
    catch{
        console.log(error)
    }
}

run ()





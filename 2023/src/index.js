import puzzleParse from './puzzle-parse.js';
import part2 from './day3/part2.js';

const filePath = './day3/puzzle_file.txt';

const readFile = new puzzleParse(filePath);

async function run(){
    try{
        const data = await readFile.readFile();

        const resolver = new part2(data);

        await resolver.resolve();
    }
    catch{
        console.log(error)
    }
}

run ()





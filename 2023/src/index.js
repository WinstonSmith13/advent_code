import puzzleParse from './puzzle-parse.js';
import part2 from './day4/part2.js';

const filePath = './day4/puzzle_file.txt';

const readFile = new puzzleParse(filePath);

async function run(){
        const data = await readFile.readFile();

        const resolver = new part2(data);

        await resolver.resolve();
}

run ()





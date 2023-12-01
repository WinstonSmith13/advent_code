import puzzleParse from './puzzle-parse.js';
import part1 from './day1/part1.js';

const filePath = './day1/puzzle_file.txt';

const readFile = new puzzleParse(filePath);


async function main() {
    try {
        const data = await readFile.readFile();
        return data;
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier', error);
        throw error;
    }
}

async function run(){
    try{
        const data = await main();
        const resolver = new part1(data);
        await resolver.resolve();
    }
    catch{
        console.log(error)
    }
}

run ()





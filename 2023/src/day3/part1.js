export default class Part1 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);
        const lines = ligns.map(line =>
            line.trim().replace(/\./g, '.'));
    
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            console.log(`Line ${i + 1}: ${line}`);
            console.log(`Length: ${line.length}`);
    
            // Obtenir les index de chaque élément dans la ligne
            for (let j = 0; j < line.length; j++) {
                console.log(`Element at index ${j}: ${line[j]}`);
            }
        }
    }
}

export default class Part1 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);
        
        const lines = ligns.map(line =>
            line.trim().replace(/\./g, '.'));

        console.log(ligns)
        console.log(lines)

        for(let i = 0; i < lines.length; i++){

            const line = lines[i]
            console.log(`Line ${i + 1}: ${line}`);
            for(let l = 0; l < line.length; l++){
                console.log(`index ${l}`,line[l])
            }
        }
     
    }
}

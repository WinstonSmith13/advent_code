export default class Part2 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);

        const values = ligns.map((line) => {
            let firstNumber = Number(line.split('').find((v) => !Number.isNaN(Number(v))));
            let lastNumber = Number(line.split('').findLast((v) => !Number.isNaN(Number(v))));
            return firstNumber + lastNumber;
        });

        console.log(values.reduce((s, v) => s + v));// Ajout d'un accumulateur initial (0) pour éviter une somme incorrecte avec un tableau vide
    }
}

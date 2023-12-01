export default class Part1 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);
    
        console.log('ligns', ligns);
        let totalSum = 0;
    
        for (const lign of ligns) {
            const digits = lign.split('').filter(char => !isNaN(Number(char))).join('');
            const digitsFilter = digits.length > 1 ? digits[0] + digits[digits.length - 1] : digits[0] + digits[0];
    
            totalSum += Number(digitsFilter)
        }
        console.log(totalSum)
    }
    
}

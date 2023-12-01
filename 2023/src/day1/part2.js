export default class Part2 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);
    
        console.log('ligns', ligns);
        let totalSum = 0;
        const conversion = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
            // "one": 1,
            // "two": 2,
            // "three": 3,
            // "four": 4,
            // "five": 5,
            // "six": 6,
            // "seven": 7,
            // "eight": 8,
            // "nine": 9
        
        
        for (const lign of ligns) {
            const words = lign.split(' '); 
            console.log('lign', words)
            
            words.forEach(word => {
                const includedWord = conversion.filter(mot => word.includes(mot));
                if (includedWord) {
                    console.log(`${word} contains the words "${includedWord}" from the conversion list.`);
                } else {
                    console.log(`${word} does not contain any word from the conversion list.`);
                }
            });
        }
    }
    
}
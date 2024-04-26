export default class Part1 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);

        const cardClean = ligns.map(lines => {
            const numbers = lines.split(':')
            return numbers[1].split(/\|/).map(part => 
            part.trim().split(/\s+/))
        });
        
        const winningNumbers = cardClean.map(element => {
            const set1 = new Set(element[0]);
            const set2 = new Set(element[1]);
            const difference = [...set1].filter(
                    (element) => set2.has(element));
         

            return difference;
        }        
        );

        let point = []; 
        winningNumbers.forEach(element => {

            let cardPoint = 0 
            if(element.length > 0 ){
                cardPoint = 1

                for (let i = 1; i < element.length; i++){
                    cardPoint *= 2
                }
            }
            point.push(cardPoint)
        });

        const total = point.reduce(
            (acc, currentValue) => acc + currentValue,
            0
        )
        console.log(total)

    }
}

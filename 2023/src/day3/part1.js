export default class Part1 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);
        
        // console.log(ligns)
        // const lines = ligns.map(line =>
        //     line.trim().replace(/\./g, '.'));
        
    function cartography(array){
        for(let y = 0; y < array.length; y++ ){
            const ligne = array[y];
            // console.log(`-Y ${y}-`)
            for(let x = 0; x < ligne.length; x++){
                const ligneX = ligne[x]
                // console.log(`X ${x}`, ligneX)
            }
        }
    }

    cartography(ligns)

    }
}

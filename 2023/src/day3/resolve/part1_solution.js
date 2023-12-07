export default class Part1 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);
        const map = []
        let indexY = 0
 
        while (ligns[indexY]) {
            let indexX = 0
            const chars = ligns[indexY].split('')
            while (chars[indexX]){
                if (chars[indexX] === '.') {
                    indexX++
                    continue
                  }
                if (isNaN(chars[indexX])) {
                    map.push({ pos_y: indexY, pos_x: indexX, symbol: chars[indexX] })
                    indexX++
                    continue
                }  
            let numberStr = ''
            let size = 0
            
            while(chars[indexX + size] && !isNaN(chars[indexX + size])){
                numberStr += chars[indexX + size]
                size++
            }
            map.push({pos_y: indexY, pos_x: indexX, size, number: parseInt(numberStr)})
            indexX += size
            }
            indexY++;
        }

        function adjacentNumbers(data){
            const result = [];

            const symbols = data.filter(({symbol}) => !!symbol)

            let index = 0

            while (symbols[index]){
                const { pos_x, pos_y } = symbols[index]
                result.push(
                    ...data.filter((point)=>{
                        if(point.number >= 0 && !point.part_number && [pos_y - 1, pos_y, pos_y + 1].includes(point.pos_y)){
                            const footprint = Array.from({ length: point.size }, (_, index) => point.pos_x + index)
                            if (footprint.includes(pos_x - 1) || footprint.includes(pos_x) || footprint.includes(pos_x + 1)) {
                                point.part_number = true
                                return true
                              }
                        }
                        return false
                    })
                )
                index += 1
            }
            return result
        }


        const adjacents = adjacentNumbers(map)
        console.log(adjacents)

        console.log(adjacents.reduce((sum, {number})=> sum += number, 0))












    //     function cartography(array) {
    //     const positions = [];

    //     for (let y = 0; y < array.length; y++) {
    //         const ligne = array[y];
    //         console.log(`-Y ${y}-`)
    //         for (let x = 0; x < ligne.length; x++) {
    //             const char = ligne[x];
    //             const result = position(char, x, y, ligne);
    //             positions.push(result);
    //         }
    //     }

    //     return positions;
    // }








// function position(char, x, y, ligne) {
//     const result = { x, y };

//     if (!isNaN(Number(char))) {
//         let numberStr = ''
//         let size = 0

        
//         while (currentIndex < ligne.length && !isNaN(Number(ligne[currentIndex]))) {
//             adjacentNumbers += ligne[currentIndex];
//             currentIndex++;
//         }

//         result.adjacentNumbers = adjacentNumbers;
//     }

    

//     return {result, char};
// }

// const positions = cartography(ligns);

// console.log(positions);
    }
}

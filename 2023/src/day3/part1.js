// export default class Part1 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);
        const map = []
        let indexY = 0

        const lines = ligns[indexY]

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
        console.log(map.map(m=> !!m.number))


        const arrayResolve = (array) => {
            const result = [];

            const symbols = array.filter(({symbol})=> !!symbol);
            
            let i = 0;

            while(symbols[i]){
             
                const {pos_y, pos_x} = symbols[i];
               
                result.push(
                    ...array.filter((point) =>{
                            if(point.number >=0 && !point.part_number && [pos_y - 1, pos_y, pos_y +1 ].includes(point.pos_y)){
                            const numberTotal = Array.from( { length: point.size }, (_, index) => point.pos_x + index)
    
                            if(numberTotal.includes(pos_x -1) || numberTotal.includes(pos_x) || numberTotal.includes(pos_x + 1)){
                                point.part_number = true
                                return true
                            }
                            }
                            return false
                    })
                )
                i++;
            }
return result
        }
        const r = arrayResolve(map);

      r.map(m => console.log(m.number))

        console.log(r.reduce((sum, {number} )=> sum += number, 0));
    }
}

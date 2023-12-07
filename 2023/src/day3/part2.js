export default class Part2 {
    constructor(puzzle) {
      this.puzzle = puzzle;
      this.line = '\n';
    }
  
    async resolve() {
      const ligns = this.puzzle.split(this.line);
      const map = [];
      let indexY = 0;
  
      while (ligns[indexY]) {
        let indexX = 0;
        const chars = ligns[indexY].split('');
        while (chars[indexX]) {
          if (chars[indexX] === '.') {
            indexX++;
            continue;
          }
          if (isNaN(chars[indexX])) {
            map.push({ pos_y: indexY, pos_x: indexX, symbol: chars[indexX] });
            indexX++;
            continue;
          }
          let numberStr = '';
          let size = 0;
  
          while (chars[indexX + size] && !isNaN(chars[indexX + size])) {
            numberStr += chars[indexX + size];
            size++;
          }
          map.push({ pos_y: indexY, pos_x: indexX, size, number: parseInt(numberStr) });
          indexX += size;
        }
        indexY++;
      }
  
      const arrayParse = (array) => {
        const result = [];
        const symbols = array.filter(({ symbol }) => !!symbol && symbol === '*');
  
        let i = 0;
  
        while (symbols[i]) {
          const { pos_y, pos_x } = symbols[i];
  
          result.push(
            ...array.filter((n) => {
              if (n.number >= 0 && [pos_y, pos_y + 1, pos_y - 1].includes(n.pos_y)) {
                const numberTotal = Array.from({ length: n.size }, (_, index) => n.pos_x + index);
  
                if (numberTotal.includes(pos_x - 1) || numberTotal.includes(pos_x + 1)) {
                  return true;
                }
              }
              return false;
            })
          );
  
          i++;
        }
  
        return { result, symbols };
      };
  
      const result = arrayParse(map);
  


const adjacentNumbers = (data) => {
//   console.log('Nombres adjacents :', data.result);
//   console.log('Liste des étoiles :', data.symbols);

  const starsWithTwoNumbers = data.symbols.map(star => {
    const numberAround = data.result.filter(number => {
      return (
        Math.abs(number.pos_y - star.pos_y) <= 1 &&
        Math.abs(number.pos_x - star.pos_x) <= (number.size + 1)
      );
    });
console.log(numberAround)

  
    return {
      ...star,
      numbersAround: numberAround.length === 2 ? numberAround : null
    };
  });

  const ratios = []; 
  starsWithTwoNumbers.forEach(star => {
    if (star.numbersAround) {
      const ratio = star.numbersAround.reduce((sum, {number}) =>  sum * number, 1);
      ratios.push(ratio)
    //   console.log(ratio)
    }
  });

  const sum = ratios.reduce((sum, currentNum) => sum + currentNum, 0)
  console.log(sum)

};

adjacentNumbers(result);

    }
  }
  
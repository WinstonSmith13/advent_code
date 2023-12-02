export default class Part2 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);
    

        const regex = /\d/g 

const dictionary = [/(one)/g, /(two)/g, /(three)/g, /(four)/g, /(five)/g, /(six)/g, /(seven)/g, /(eight)/g, /(nine)/g]
const lines =  ligns.map(l => {
    dictionary.map((r, i) => l = l.replace(r, `$1${(i + 1)}$1`)) 
    return l
  })

  console.log(lines)

  const resolve = lines.reduce((acc, curr) => {
    const matchs = (curr.match(regex) ?? ["0"])
    console.log('matchs', matchs)
   const number = (matchs[0] ?? "") + (matchs[matchs.length - 1] ?? "");

console.log('number', number)
    return acc + (+number)
  }, 0)
  
  console.log(resolve)


//   const lines = this.puzzle.split('\n');

//   const resolve = lines.reduce((acc, curr) => {
//       const numbers = curr.match(/\d/g) || ["0"];
//       const sum = numbers.reduce((numAcc, num) => numAcc + Number(num), 0);
  
//       return acc + sum;
//   }, 0);
  
//   console.log(resolve);


const conversionObject = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
};


// const values = ligns.map((line) => {

//     let firstNumber = line.split('').find((v) => !Number.isNaN(Number(v)));
//     let lastNumber = line.split('').findLast((v) => !Number.isNaN(Number(v)));

//     return Number(firstNumber + lastNumber);
// });

// console.log(values)

// const pairMat = [[Number.MAX_SAFE_INTEGER, 0], [-1, 0]];
// console.log('Pari', pairMat)
// const values = ligns.map((line) => {
//     const replacedLine = line.replace(
//         new RegExp(Object.keys(conversionObject).join('|'), 'g'),
//         (match) => conversionObject[match.toLowerCase()] || match
//     );
// console.log(replacedLine)
//     let firstNumber = replacedLine.split('').find((v) => !Number.isNaN(Number(v)));
//     let lastNumber = replacedLine.split('').findLast((v) => !Number.isNaN(Number(v)));

//     return Number(firstNumber + lastNumber);
// });

// console.log(values.reduce((s, v) => s + v));

        // for (const lign of ligns) {
            // const digits = lign.split('').filter(char => !isNaN(Number(char))).join('');
            // const digitsFilter = digits.length > 1 ? digits[0] + digits[digits.length - 1] : digits[0] + digits[0];
    
            // totalSum += Number(digitsFilter)
            // console.log(digits)
        // }
        

        
        // for (const lign of ligns) {
        //     const words = lign.split(' '); 
        //     console.log('lign', words)
            
        //     words.forEach(word => {
                
        //         const regex = new RegExp(Object.keys(conversionObject).join('/'), 'g');

        //         const result = word.replace(regex, w => conversionObject[w])


        //         const digits = result.split('').filter(char => !isNaN(Number(char))).join(' ');
        //         const digitsFilter = digits.length > 1 ? digits[0] + digits[digits.length - 1] : digits[0] + digits[0];
      
        //         totalSum += Number(digitsFilter)

        //     });
            
        // }

    }
    
}
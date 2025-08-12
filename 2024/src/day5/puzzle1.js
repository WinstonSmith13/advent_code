export function solve(input){
  const [first, second] = input
    .trim()
    .split(/\r?\n\r?\n/)
    .map(part => part.split(/\r?\n/));

  const first_section = first.map(line => line.trim().split(/\|/)).filter(pair => pair.length === 2);
  const second_section = second.map(line => line.trim().split(/,/));

  //console.log("first_section :", first_section);
  //console.log("second_section :", second_section);

  const goodOrderArray = [];
  
  function isValidOrder(arrayToTest) {
    for (const line of arrayToTest) {
      const lineNumbers = line.map(n => parseInt(n));
      
      let isValid = true;

      for (const [from, to] of first_section) {
        const fromNum = parseInt(from);
        const toNum = parseInt(to);

        if (lineNumbers.includes(fromNum) && lineNumbers.includes(toNum)) {
          const fromIndex = lineNumbers.indexOf(fromNum);
          const toIndex = lineNumbers.indexOf(toNum);

          if (fromIndex > toIndex) {
            isValid = false;
            break;
          }
        }
      }

      if (isValid) {
        goodOrderArray.push(lineNumbers); 
      }
    }
  }

  isValidOrder(second_section);

  // console.log("Ligne avec good order ", goodOrderArray);

  const centerNumbers = [];

  function getCenterNumber(array) {
    const length = array.length;
    if (length === 0) return null;
    if (length % 2 === 1) {
      return parseInt(array[Math.floor(length / 2)]);
    } 
    if (length % 2 === 0) {
      const left = parseInt(array[length / 2 - 1]);
      const right = parseInt(array[length / 2]);
      return Math.floor((left + right) / 2);
    }
  }

  for (let i = 0; i < goodOrderArray.length; i++) {
    const center = getCenterNumber(goodOrderArray[i]);
    if (!isNaN(center)) {
      centerNumbers.push(center);
    } else {
      console.warn("❌ Centre non numérique pour :", goodOrderArray[i]);
    }
  } 

  let counter = centerNumbers.reduce((acc, num) => acc + num, 0);

  return counter;
}

export function solve(input){
  const [first, second] = input
    .trim()
    .split(/\r?\n\r?\n/)
    .map(part => part.split(/\r?\n/));

  const first_section = first.map(line => line.trim().split(/\|/)).filter(pair => pair.length === 2);



  const second_section = second.map(line => line.trim().split(/,/));

  //console.log("first_section :", first_section);
  //console.log("second_section :", second_section);


  

  const positions = {};   
  const graph = {};
  const inDegree = {};
  const queue = [];

 
  for (let i = 0; i < first_section.length; i++) {
    const [from, to] = first_section[i];
    const fromNumber = parseInt(from.trim());
    const toNumber = parseInt(to.trim());
   
    if (!graph[fromNumber]) {
      graph[fromNumber] = [];
    }
    if (!graph[toNumber]) {
      graph[toNumber] = [];
    } 

    if (!graph[fromNumber].includes(toNumber)) {
      graph[fromNumber].push(toNumber);
    }

  }

  console.log("graph :", graph);

  for (const node in graph) {
    inDegree[node] = 0;
    console.log("node :", node);
  }

  console.log("inDegree :", inDegree);



  //  for (let i = 0; i < first_section.length; i++) {
  //   for (let j = 0; j < first_section[i].length; j++) {
      
  //     const number = first_section[i][j];
  //     if (!positions[number]) {
  //      positions[number] = { left: 0, right: 0 };
  //     }
  //     if (j === 0) positions[number].left++;
  //     if (j === 1) positions[number].right++;
  //   }
  
  // }


  const entries = Object.entries(positions);


  entries.sort((a, b) => {
  return a[1].right - b[1].right;
  });
  //console.log("entries :", entries);
  const orderedNumbers = entries.map(entry => entry[0]);
  //console.log("orderedNumbers :", orderedNumbers);


  const lastIndex = -1;
  const goodOrderArray = [];
  

  //console.log('second_section:', second_section);

  function isValidOrder(arrayToTest, referenceOrder) {

  for (let i = 0; i < arrayToTest.length; i++) {
    const line = arrayToTest[i];
    const indexArray = [];

    for (let j = 0; j < line.length; j++) {
      const num = line[j];
      const indexReference = referenceOrder.indexOf(num);
      const indexInLine = j;

      //console.log(`Numéro: "${num}"`);
      //console.log(`Position dans arrayToTest: ${indexInLine}`);
      //console.log(`Position dans referenceOrder: ${indexReference}`);

      indexArray.push({
        num: num,
        indexReference: indexReference,
      })

      //console.log('indexArray:', indexArray);
    }

    if (indexArray.every((val, i, arr) => i === 0 || arr[i - 1].indexReference <= val.indexReference)){
        goodOrderArray.push(line);
      }

  }

}

  isValidOrder(second_section, orderedNumbers);

  //console.log("Ligne avec good order ", goodOrderArray);

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
    centerNumbers.push(getCenterNumber(goodOrderArray[i]));
    
  }

  //console.log("centerNumbers :", centerNumbers);
  let counter = centerNumbers.reduce((acc, num) => acc + num, 0);

  
  return counter;
}

export function solve(input){
  const lines = input.trim().split('\n');
  const letters = lines.map(line => line.trim().split(''));
  //console.log(lines);
  //console.log(letters);


  
  const directionPairs = {
  'M_haut-gauche_S_bas-gauche': {
    M: [-1, -1],
    S: [1, -1]
  },
  'M_haut-droite_S_bas-droite': {
    M: [-1, 1],
    S: [1, 1]
  },
  'M_haut-gauche_S_haut-gauche': {
    M: [-1, -1],
    S: [-2, -2] 
  },
  'M_bas-droite_S_haut-droite': {
    M: [1, 1],
    S: [-1, 1]
  }
};
  

  const LettersX = ['M', 'S'];

  let counter = 0;
  const entries = Object.entries(directionPairs);



  function checkDirection(letters, row, col, targetRowM, targetColM, targetRowS, targetColS, LettersX) {
    for (let i = 0; i < LettersX.length; i++) {
      const newRowM = row + i * targetRowM;
      const newColM = col + i * targetColM;
      const newRowS = row + i * targetRowS;
      const newColS = col + i * targetColS;


      if (        newRowM < 0 || newRowM >= letters.length ||
        newColM < 0 || newColM >= letters[0].length ||
        newRowS < 0 || newRowS >= letters.length ||
        newColS < 0 || newColS >= letters[0].length
      ) {
        return false;
      }

      const currentLetterM = letters[newRowM][newColM];
      const currentLetterS = letters[newRowS][newColS];
      if (currentLetterM !== LettersX[0] || currentLetterS !== LettersX[1]) {
        return false;
      }
    }

    return true;
  }

  // Check A after check directions 
  // 
  // 'haut-gauche': [-1, -1], 
  // 'haut-droite': [-1, 1], 
  // 'bas-gauche': [1, -1],
  // 'bas-droite': [1, 1]


  // A puis after M ou S en haut-gauche, haut-droite, bas-gauche, bas-droite
  // si En haut gauche M alors en bas gauche il faut chercher S 
  // si en haut droite M alors en bas droite il faut chercher S
  // si en haut gauche M alors en haut gauche il faut chercher S
  // si en bas droite M alors en haut droite il faut chercher S

  

  for (let row = 0; row < letters.length; row++) {
    for (let col = 0; col < letters[row].length; col++){
      const letter = letters[row][col];
      if (letter === 'A') {
        for (const [name, dirs] of entries) {
          const [dxM, dyM] = dirs.M;
          const [dxS, dyS] = dirs.S;
          console.log(name, dxM, dyM, dxS, dyS);
       
        }
      }
      
  }
}



  return counter;
}

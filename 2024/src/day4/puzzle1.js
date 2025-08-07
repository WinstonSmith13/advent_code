export function solve(input){
  const lines = input.trim().split('\n');
  const letters = lines.map(line => line.trim().split(''));
  //console.log(lines);
  //console.log(letters);
  const directions = {
    'bas': [1, 0],
    'haut': [-1, 0],
    'gauche': [0, -1],
    'droite': [0, 1],
    'haut-gauche': [-1, -1],
    'haut-droite': [-1, 1],
    'bas-gauche': [1, -1],
    'bas-droite': [1, 1]
  }

  const LettersToFind = ['X', 'M', 'A', 'S'];
  let counter = 0;
  const entries = Object.entries(directions);


  function checkDirection(letters, row, col, dx, dy, lettersToFind) {
    for (let i = 0; i < lettersToFind.length; i++) {
      const newRow = row + i * dx;
      const newCol = col + i * dy;

      if (
        newRow < 0 || newRow >= letters.length ||
        newCol < 0 || newCol >= letters[0].length
      ) {
        return false;
      }

      const currentLetter = letters[newRow][newCol];
      if (currentLetter !== lettersToFind[i]) {
        return false;
      }
    }

    return true;
  }

  

  for (let row = 0; row < letters.length; row++) {
    for (let col = 0; col < letters[row].length; col++){
      const letter = letters[row][col];
      if (letter === LettersToFind[0]) {
        for (const entry of entries) {
          const name = entry[0];
          const dx = entry[1][0];
          const dy = entry[1][1];

          if (checkDirection(letters, row, col, dx, dy, LettersToFind)) {
            counter++;;
          }
          
        }
      }
      
  }
}



  return counter;
}

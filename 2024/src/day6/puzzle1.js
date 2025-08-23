export function solve(input){
  const lines = input.trim().split('\n');
  const mapping = lines.map(line => line.trim().split(''));

  // console.log(lines);
  // console.log(mapping);

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

  const robot = ['^', 'v', '<', '>'];
  const entries = Object.entries(directions);

  for (let row = 0; row < mapping.length; row++) {
    for (let col = 0; col < mapping[row].length; col++) {
      
        const position = mapping[row][col];

        if ( robot[0] === position ){
          console.log('robot found at', 'row', row, 'col', col);
          // une fois trouver il faut verifier ce qu'il ya autour 
          for (let [direction, [dRow, dCol]] of entries){
            const newRow = row + dRow;
            const newCol = col + dCol;
            if (newRow >= 0 && newRow < mapping.length && newCol >= 0 && newCol < mapping[newRow].length){
              const adjacentCell = mapping[newRow][newCol];
              
              console.log(`Adjacent cell to the ${direction}:`, adjacentCell);
              console.log(typeof adjacentCell);
              if(adjacentCell === '#'){
                console.log('block found at', 'row', newRow, 'col', newCol);
              } else {
                // cell actuelle devient X et la cellule en haut devient ^
                //mapping[row][col] = 'X';
                //mapping[newRow][newCol] = '^';
                console.log('no block found at', 'row', newRow, 'col', newCol);
              }
              // si pas de # alors on comme
            }
          }
        } else if ( robot[1] === position ){ 
          console.log('robot found at', 'row', row, 'col', col);
        }
     
    }          
  }

  console.log(mapping);

  // # block 
  // il passe sur un symbole qui se transforme en x 
  // on compte les x a la fin 
  // Trouver pour commencer '^'
  // ensuite on transforme sa position actuelle en X et on transforme a la coordonnée 0, -1 en '^'
  // jusqu'a rencontrer un "#"
  // si on rencontre un "#" on tourne de 90 degré a droite
  // et on continue jusqua arrive a la derniere ligne de 'lines'

  return 'counter';
}

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

  const robot = '^';
  const entries = Object.entries(directions);

  for (let row = 0; row < mapping.length; row++) {
    for (let col = 0; col < mapping[row].length; col++) {
      
        const position = mapping[row][col];

        if ( robot === position ){
          console.log('robot found at', 'row', row, 'col', col);
        }
     
    }          
  }

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

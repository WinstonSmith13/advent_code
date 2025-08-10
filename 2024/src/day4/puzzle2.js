export function solve(input) {
  const lines = input.trim().split('\n');
  const letters = lines.map(line => line.trim().split(''));

  let counter = 0;

  function getLetter(r, c) {
    if (
      r >= 0 && r < letters.length &&
      c >= 0 && c < letters[0].length
    ) {
      return letters[r][c];
    }
    return null;
  }

  for (let row = 0; row < letters.length; row++) {
    for (let col = 0; col < letters[row].length; col++) {
      const center = letters[row][col];
      if (center !== 'A') continue;

      // Diagonale ↘ : haut-gauche + bas-droite
      const tl = getLetter(row - 1, col - 1); // top-left
      const br = getLetter(row + 1, col + 1); // bottom-right
      const hasDiagonal1 = (
        (tl === 'M' && br === 'S') ||
        (tl === 'S' && br === 'M')
      );

      // Diagonale ↙ : haut-droite + bas-gauche
      const tr = getLetter(row - 1, col + 1); // top-right
      const bl = getLetter(row + 1, col - 1); // bottom-left
      const hasDiagonal2 = (
        (tr === 'M' && bl === 'S') ||
        (tr === 'S' && bl === 'M')
      );

      if (hasDiagonal1 && hasDiagonal2) {
        counter++;
      }
    }
  }

  return counter;
}

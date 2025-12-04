export function solve(input) {
  console.log('--- MODULO PART 1---');
  const lines = input.trim().split('\n');

  let dial = 50;
  let dialpoint = 0;

  function splitter(line) {
    if (typeof line !== 'string') {
      return { letters: '', numbers: '' };
    }
    const letters = line.match(/[a-zA-Z]/g)?.join('') || '';
    const numbers = line.match(/[0-9]/g)?.join('') || '';
    return { letters, numbers };
  }

  const directions = lines.map(splitter);
  // ----------------------------------------

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    const letter = direction.letters;
    const distance = Number(direction.numbers);
    let dialresult;

    if (letter === 'L') {
      dialresult = dial - distance;

      const moduloStep1 = dialresult % 100;
      const moduloStep2 = moduloStep1 + 100;
      const finalModuloResult = moduloStep2 % 100;


      dial = finalModuloResult;

    } else if (letter === 'R') {
      dialresult = dial + distance;

      const finalModuloResult = dialresult % 100;

      dial = finalModuloResult;

    }
    if (dial === 0) {
      dialpoint += 1;
    }
  }

  return dialpoint;
}

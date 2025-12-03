export function solve(input) {
  console.log('--- MODULO EXERCICE ---');
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

    console.log(`\n--- Tour ${i + 1} / ${directions.length} ---`);
    console.log({ dialBefore: dial, instruction: direction });
    // ------------------------------------------

    if (letter === 'L') {
      dialresult = dial - distance;
      dial = (dialresult % 100 + 100) % 100;
      console.log({ action: 'Left', distance: distance, newDial: dial });

    } else if (letter === 'R') {
      dialresult = dial + distance;

      dial = dialresult % 100;
      console.log({ action: 'Right', distance: distance, newDial: dial });

    } else {
      console.log({ status: 'Instruction ignorée', letter: letter });
    }

    if (dial === 0) {
      dialpoint += 1;
      console.log({ pointIncremented: true, totalPoints: dialpoint });
    }
  }

  return dialpoint;
}

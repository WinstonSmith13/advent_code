export function solve(input) {
  console.log('=== PART 2 : Comptage des PASSAGES par 0 ===\n');

  let position = 50;
  let totalPassages = 0;

  const lignes = input.trim().split('\n');

  // - Pour atteindre 0 la première fois : 100 - 50 = 50 clicks
  // - Distance restante : 1000 - 50 = 950 clicks
  // - Combien de tours complets ? 950 ÷ 100 = 9 tours
  // - Total : 1 (premier passage) + 9 (tours) = 10 passages

  function compterPassagesPar0(posActuelle, direction, distance) {
    let passages = 0;

    if (direction === 'L') {
      // Si on est déjà à 0, on ne compte pas le départ

      if (posActuelle === 0) {
        // On part de 0, on compte seulement si on y REVIENT
        if (distance >= 100) {
          const toursComplets = Math.floor(distance / 100);
          passages = toursComplets;
        }
      } else {
        // On part d'une autre position
        // On passe sur 0 si la distance >= position actuelle
        if (distance >= posActuelle) {
          const resteApres0 = distance - posActuelle;
          const toursComplets = Math.floor(resteApres0 / 100);
          passages = 1 + toursComplets;
        }
      }

    } else if (direction === 'R') {
      // Si on est déjà à 0, on ne compte pas le départ
      if (posActuelle === 0) {
        if (distance >= 100) {
          const toursComplets = Math.floor(distance / 100);
          passages = toursComplets;
        }
      } else {
        const distanceJusquaZero = 100 - posActuelle;
        if (distance >= distanceJusquaZero) {
          const resteApres0 = distance - distanceJusquaZero;
          const toursComplets = Math.floor(resteApres0 / 100);
          passages = 1 + toursComplets;
        }
      }
    }

    return passages;
  }

  function parseInstruction(ligne) {
    const match = ligne.match(/([LR])(\d+)/);
    if (!match) return null;

    return {
      direction: match[1],
      distance: parseInt(match[2])
    };
  }

  // Calcul de la nouvelle position avec modulo
  function calculerPosition(pos, dir, dist) {
    if (dir === 'L') {
      return ((pos - dist) % 100 + 100) % 100;
    } else {
      return (pos + dist) % 100;
    }
  }

  // 1. Compter les passages (pendant le mouvement)
  // 2. Calculer la nouvelle position
  // 3. Afficher les résultats

  lignes.forEach((ligne, index) => {
    const instruction = parseInstruction(ligne);

    if (!instruction) return;

    const { direction, distance } = instruction;

    console.log(`\n--- Rotation ${index + 1} ---`);
    console.log(`Position avant: ${position}`);
    console.log(`Instruction: ${direction}${distance}`);

    // STEP 1 : Compter combien de fois on passe sur 0
    const passagesCeTour = compterPassagesPar0(position, direction, distance);
    totalPassages += passagesCeTour;

    if (passagesCeTour > 0) {
      console.log(`🔄 ${passagesCeTour} passage(s) sur 0`);
    }

    // ÉTAPE 2 : Calculer la nouvelle position
    position = calculerPosition(position, direction, distance);

    console.log(`→ Position après: ${position}`);
    console.log(`→ Total passages: ${totalPassages}`);
  });


  console.log('\n=== RÉSULTAT FINAL ===');
  console.log(`Passages totaux sur 0: ${totalPassages}`);
  console.log(`Position finale: ${position}`);

  return totalPassages;
}

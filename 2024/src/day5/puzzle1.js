export function solve(input){
  const [first, second] = input
    .trim()
    .split(/\r?\n\r?\n/)
    .map(part => part.split(/\r?\n/));

  const first_section = first.map(line => line.trim().split(/\|/));


  const second_section = second.map(line => line.trim().split(/,/));


  // Faire une fonction pour tester 
  // Verifier l'ordre des numeros ligne par ligne
  // Faire un tableau d'ordrer des numeros
  // Comparer les tableaux 


  const positions = {};   
 

  for (const [num1, num2] of first_section) {
  console.log(`Relation : ${num1}  -> ${num2}`);
 

}


  for (let i = 0; i < first_section.length; i++) {
    for (let j = 0; j < first_section[i].length; j++) {
      console.log("first_section[i] :", first_section[i][j], j );
      const number = first_section[i][j];
      if (!positions[number]) {
       positions[number] = { left: 0, right: 0 };
      }
      if (j === 0) positions[number].left++;
      if (j === 1) positions[number].right++;


    }
  
    console.log("positions :", positions);
    
    // il faut comparer les numeros sur chaque ligne pour voir l'ordre. 
    // Regles:
    // si un numero est toujours en first position, et jamais en second position il doit etre en premier dans le tableau
    // si un numero est toujours en second position et jamais en first position, il doit etre en dernier dans le tableau 

    

  }

  const entries = Object.entries(positions);

  entries.sort((a, b) => {
  return a[1].right - b[1].right;
  });
  console.log("entries :", entries);
  const orderedNumbers = entries.map(entry => entry[0]);
  console.log("orderedNumbers :", orderedNumbers);

  isValidOrder(second_section, orderedNumbers);

  const counter = 0;

  console.log('second_section:', second_section);

  function isValidOrder(compare, order) {
  for (let i=0; i < compare.length; i++) {
    console.log(` Nouvelle ligne ${i}:` , compare[i]);

    for (const num of compare[i]) {
      const index = order.indexOf(num);
      console.log(`  ${num} -> index dans orderedNumbers : ${index}`);
    }
  }
}

  return counter;
}

export function solve(input){
  const [first, second] = input
    .trim()
    .split(/\r?\n\r?\n/)
    .map(part => part.split(/\r?\n/));

  const first_section = first.map(line => line.trim().split(/\|/));
  console.log("first_section_clean :", first_section);

  const second_section = second.map(line => line.trim().split(/,/));
  console.log("second_section_clean :", second_section);

  // Faire une fonction pour tester 
  // Verifier l'ordre des numeros ligne par ligne
  // Faire un tableau d'ordrer des numeros
  // Comparer les tableaux 

  for (let i = 0; i < first_section.length; i++) {
    console.log("first_section[i] :", first_section[i]);

  }



  const counter = 0;



  return counter;
}

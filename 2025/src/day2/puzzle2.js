export function solve(input) {
  console.log('--- XYXY Patern check - for loop  PART 2---');
  // 1 - reflexion 
  // 2 - decouper en etape. 

  const lines = input.trim();

  let invalidListId = [];




  // separer par virgule 
  // trié par (-)
  // function pour bien avoir les bonnes datas. 
  function parseIdgroups(line){
    return line.split(',').map(id => {
      const parts = id.trim().split('-');

      return {
        start: parseInt(parts[0], 10), 
        end: parseInt(parts[1], 10),
      };
    })
  }

  // function invalid rules
  // Mauvaise id rules :
  // 1 - None of the numbers have leading zeroes; 0101 isn't an ID at all.
  // 2 - invalid IDs by looking for any ID which is made only of some sequence of digits repeated twice.

  function isValidId(id) {
    // rule 1 - leading zeroes
    if (/^0\d+/.test(id)) return false;

    // rule 2 - repeated sequence
    // checker les pattern - ex 55 => 5 5 donc cest pas bon mais aussi 1212 => 12 12,
    //const len = id.length;
    const idLength = id.length;

    // l'idée cest de checker dabord length/2 et voir si pattern
    // ensuite length/3 et voir si pattern
    // jusque que length/n === 1
    for (let n=2 ; idLength/n >=1 ; n++) {
      const patternSize = idLength / n;
       //console.log("------------------------------------------------");
       //console.log('id:', id);
       //console.log(`n = ${n}`);
       //console.log(`idLength / n = ${idLength} / ${n} = ${patternSize}`);

      if (!Number.isInteger(patternSize)) continue; // passe à n suivant
      
      const motif  = id.slice(0, patternSize);
      const rebuiltId = motif.repeat(n);
      
      if (rebuiltId === id) return false;
    }
    
    // rule 3 - Now, an ID is invalid if it is made only of some sequence of digits repeated at least twice. 
    // So, 12341234 (1234 two times), 123123123 (123 three times), 1212121212 (12 five times), and 1111111 (1 seven times) are all invalid IDs.



  return { status: true, id };
  
}


  const idGroups = parseIdgroups(lines);
  // console.log('idGroups', idGroups);

  // on doit parcourir chaque idGroup pour checker id a lintérieur.
  // le foreach permet de parcourir chaque element du tableau. et d'acceder a l'objet group.
  // la deconstruction const { id1, id2 } = group; permet de recuperer les valeurs des proprietes id1 et id2 de l'objet group.
 
  idGroups.forEach((group, index) =>  {
    const { start, end } = group;
    //console.log(`--- IdGroup ${index + 1} ---`);
    //console.log('start:', start);
    //console.log('end:', end);

    for (let currentId = start; currentId <= end; currentId++) {
      //console.log('currentId:', currentId);
      const id2Check = currentId.toString();
      //console.log('checking id:', isValidId(id2Check) );
      if (!isValidId(id2Check).status) {
        invalidListId.push(parseInt(id2Check));
      }
    }
    
    
  });
  
  //console.log(`Invalid IDs in Group`, invalidListId);
  const finalCount = invalidListId.reduce((a, b) => a + b, 0);

  return finalCount;
}

export function solve(input) {
  console.log('--- XYXY PART 1---');
  const lines = input.trim();

  let invalidListId = [];
  // separer par virgule 
  // trié par (-)

  // 1 - reflexion 
  // 2 - decouper en etape. 

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
    const len = id.length;
    if (len % 2 === 0) {
      if(id.slice(0, len / 2) === id.slice(len / 2))
      return false;
    } 

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

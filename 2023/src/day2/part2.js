export default class Part2 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);
       

        const lines = ligns.map(line => {
            const match = line.match(/^Game (\d+): (.+)$/);

          
                const gameNumber = match[1];
                const setString = match[2];

                // 
                const sets = setString.split(';').map(set => set.trim());

                // 
                const gameSets = {};
                sets.forEach((set, index) => {
                    const setItems = set.split(',').map(item => item.trim());
                    const setDetails = setItems.map(item => {
                        const [number, color] = item.includes(' ') ? item.split(' ') : [item, ''];
                        return { number: parseInt(number), color };
                    });

                    gameSets[`set${index + 1}`] = setDetails;
                });

                return { gameNumber, ...gameSets };
           
        });
        // console.log(lines)

        //  lines.forEach(line => {
        //     console.log(`Game ${line.gameNumber}:`);
        //     for (const key in line) {
        //         if (key.startsWith('set')) {
        //             console.log(`  ${key}:`);
        //             line[key].forEach(item => {
        //                 console.log(`    Number: ${item.number}, Color: ${item.color}`);
        //             });
        //         }
        //     }
        // });

        function feverCubes(game) {
            const objetMax = {};
    
            for (const key in game) {
                if (key.startsWith('set')) {
                    for (const item of game[key]) {
                        if (!objetMax[item.color] || objetMax[item.color] < item.number) {
                            objetMax[item.color] = item.number;
                        }
                    }
                }
            }
    
            return objetMax;
        }

        function puissance(value) {
            return value.reduce((total, obj) => {
                let product = 1;
        
                for (const key in obj) {
                    product *= obj[key];
                }
        
                return [...total, product];
            }, []);
        }
        
        const result = lines.map(game => feverCubes(game));
        const maxSets = puissance(result);
        console.log(maxSets);

        const total = maxSets.reduce((acc, current)=>{
            return acc + current
        }, 0)
        
        console.log(total)
        }

}
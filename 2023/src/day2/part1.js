export default class Part1 {
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

        // lines.forEach(line => {
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

        function isGamePossible(game, redCubes, greenCubes, blueCubes) {
            for (const key in game) {
                if (key.startsWith('set')) {
                    for (const item of game[key]) {
                        if (
                            (item.color === 'red' && item.number > redCubes) ||
                            (item.color === 'green' && item.number > greenCubes) ||
                            (item.color === 'blue' && item.number > blueCubes)
                        ) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        const possibleGames = lines.filter(game =>
           console.log(isGamePossible(game, 12, 13, 14)) 
        );
        

        const totalId = possibleGames.reduce((sum, game) => sum + parseInt(game.gameNumber), 0);

        // console.log("Possible games:");

        // console.log("Total ID of possible games:", totalId);
    }
}

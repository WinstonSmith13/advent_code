export default class Part1 {
    constructor(puzzle) {
        this.puzzle = puzzle;
        this.line = '\n';
    }

    async resolve() {
        const ligns = this.puzzle.split(this.line);
        const gamesObject = {};


        const games = ligns.map(game =>{
            return game.split(/[,:;]/)
        })

        games.forEach(([gameName, ...gameData]) => {
            const colorsObject = {};

            gameData.forEach(colors =>{
                const [number, color] = colors.trim().split(' ')
                
                colorsObject[color] = Number(number)
            })

            
            gamesObject[gameName] = colorsObject

            // console.log(colorsObject)
        });

        
        console.log('games', gamesObject);
    }
    
}

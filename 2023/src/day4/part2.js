export default class Part2 {
    constructor(puzzle) {
      this.puzzle = puzzle;
      this.line = '\n';
    }
  
    async resolve() {
      const ligns = this.puzzle.split(this.line);
      console.log(ligns)

    }
  }
  
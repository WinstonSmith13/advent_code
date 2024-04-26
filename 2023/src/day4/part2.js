export default class Part2 {
    constructor(puzzle) {
      this.puzzle = puzzle;
      this.line = '\n';
    }
  
    async resolve() {
      const ligns = this.puzzle.split(this.line);

      const cardClean = ligns.map(lines => {
          const numbers = lines.split(':')
          return numbers[1].split(/\|/).map(part => 
          part.trim().split(/\s+/))
      });
      
      function countMatches(card) {
        const set1 = new Set(card[0]);
        const set2 = new Set(card[1]);
        return [...set1].filter(element => set2.has(element)).length;
      }

      function generateCopies(cardIndex, cardMatches, cards, accumulator){
        if (cardIndex >= cards.length) {
          return;
      }

      const matches = countMatches(cards[cardIndex]);
    accumulator[cardIndex] = (accumulator[cardIndex] || 0) + 1;
    for (let i = 1; i <= matches; i++) {
      const nextIndex = cardIndex + i;
      if (nextIndex < cards.length) {
          generateCopies(nextIndex, matches, cards, accumulator);
      }
  }
      }

      const accumulator = [];
for (let i = 0; i < cardClean.length; i++) {
    generateCopies(i, countMatches(cardClean[i]), cardClean, accumulator);
}


const totalCards = accumulator.reduce((sum, count) => sum + (count || 0), 0);

console.log('Total number of scratchcards:', totalCards);
    }
  }
  
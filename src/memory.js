class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  // Card(suit, rank) {
  //   this.suit = suit;
  //   this.rank = rank;
  // }
  
  // Deck() {
  //   this.cards = [];
  //   for (suit = 4; suit > 0; suit--) {
  //     for (rank = 13; rank > 0; rank--) {
  //       this.cards.push(new Card(suit, rank));
  //     }
  //   }
  // }
  // let deck = new Deck();

  shuffleCards() {
    let j, x, i;
    if (!this.cards){
      return undefined
    }
    for (i = this.cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    
  }
    // -- To shuffle an array a of n elements (indices 0..n-1):
    // for i from n−1 down to 1 do
    //      j ← random integer such that 0 ≤ j ≤ i
    //      exchange a[j] and a[i]
    // should return the shuffled (mixed) array of cards
  

  checkIfPair(card1, card2) {
   // ex card1="ironman"
   // ex card2="batman"
   
   this.pairsClicked += 1;
   if (card1 === card2){
    this.pairsGuessed += 1;

    return true
   } else {
    return false
   }
   
  }

  checkIfFinished() {
    // Here we need to check if our property 
    //pairsGuessed has reached the numbers of pairs the game has.
    if(this.pairsGuessed === this.cards.length/2){
      return true
    } else {
      return false
    }

  }
}

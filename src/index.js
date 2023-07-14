const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load',(event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      // option 1 :
      html -= `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
      html += `
      <div class="card turned" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;

    //OPTION 2:
    // card.classList.toggle("turned")
    //DOM.button.addEventListener( 'click', toggleUl, DOM.button.addEventListener( 'click', toggleUl, fafalse );
    //DOM.ul.addEventListener( 'click', selectLi, false );
  //}
    console.log(`Card clicked: ${card}`);
   
  });

  
  
//let cards = 
});
// document.querySelectorAll('.memory-board').forEach((card) => {
//   card.addEventListener('click', () => {;
// memoryGame.cards.forEach((card) => {
  let firstCard;
  let secondCard;
  let matchCards = 0;  
memoryGame.cards.forEach((card) => {
  card.addEventListener('click', () => {
      if (!firstCard && !secondCard) {
        firstCard = card;
        card.classList.add('tuned');
      } else if (firstCard && !secondCard) {
        secondCard = card;
        card.classList.add('turned');

        if (firstCard.innerHTML === secondCard.innerHTML) {
          firstCard = null;
          secondCard = null;
          document.querySelector('.player-message').innerHTML = 'Match';
          document.querySelector('.player-message').style.color = '#55aa00';
          matchCounter++;
          if (matchCounter >= 12) {
            document.querySelector('.player-message').innerHTML = 'All cards matched';
            document.querySelector('.player-message').style.color = '#55aa00';
          } else {
            first.classList.remove('tuned');
            second.classList.remove('tuned');
            document.querySelector('.player-message').innerHTML = 'No Match';
            document.querySelector('.player-message').style.color = '#e4000f';
            setTimeout(() => {
              firstCard.classList.remove('tuned');
              secondCard.classList.remove('tuned');
              firstCard = null;
              secondCard = null
            }, 2000);
          }
        }
      }
    })
  });
  matchCards();
})


      
  //   });

  // });

  // const checkPairs = document.querySelector("score")
// card.checkIfPair(card1, card2);
//call .checkIfPair(card1, card2) method. 
//If the two cards are the same, 
//they should get class blocked, 
//which is going to keep them flipped so we can see images.
//});

// memoryGame.addEventListener("click", () =>{
  
  // gameScreen.classList.block("true");
  
// });


// let cardTurned = 0;
// mouseClicked = function() {
//     for (let i = 0; i < cards.length; i++) {
//         let card = cards[i];



memoryGame.cards.checkIfFinished((cards) =>{
  return `You won!!`
} 
)

// Hint 1: The array of picked cards can't ever hold more than two cards. 
//Hint 2: Make sure you call checkIfFinished method 
//to check if the condition for the end of the game is true, 
//and if so, you can just alert the end, 
//or be more creative and add some text on the canvas - displaying You won!!!


// const startGame = () => {
//   state.gameStarted = true
//   selectors.start.classList.add('disabled')

//   state.loop = setInterval(() => {
//       state.totalTime++

//       selectors.moves.innerText = `${state.totalFlips} moves`
//       selectors.timer.innerText = `time: ${state.totalTime} sec`
//   }, 1000)
// }
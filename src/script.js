import Ghibli from "./data/ghibli/ghibli.js";

const cardsArray = Ghibli.items; // Create an array to show the ghibli items in console
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random()); // Randomize game grid on each load

// Declare all the variables
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let score = 0;
//let resetButton = document.querySelector('.reset-button');
//let startButton = document.querySelector('.start-button');

const game = document.getElementById('game'); // Grab the div with an id of root
const grid = document.createElement('section'); // Create a section with a class of grid
grid.setAttribute('class', 'grid');
game.appendChild(grid); // Append the grid section to the game div

// For each item in the gameGrid (my array with concat)
gameGrid.forEach(item => {

  const card = document.createElement('div'); // Create a div
  card.classList.add('card'); // Apply a card class to that div
  card.dataset.name = item.id;  // Set the data-name attribute with the card's id information

  const front = document.createElement('div'); // Create front of card
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.image})`;  // Apply the background image of the div to the cardsArray image

  // Append the div to the grid section, and front and back to each card.
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});
// Add match CSS
const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};
// Add event listener to grid to can play the game

grid.addEventListener('click', event => {
  let clicked = event.target;


    if (clicked.noneName === 'SECTION' || clicked === previousTarget) {
      return;
  }

  if (count < 2) {  //Only two card can be selected
    count++;
    if (count === 1) {
      // Assign first guess
      firstGuess = clicked.parentNode.dataset.name;
      //console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      // Assign second guess
      secondGuess = clicked.parentNode.dataset.name;
      //console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }
    // If both guesses are not empty...
    if (firstGuess && secondGuess) {
      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        // run the match function
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
        score++
      } 
        setTimeout(resetGuesses, delay);
      };

      if (score === 8) {
        console.log("You WIN!");
       
        
        //acá debería ver algo que me muestre el cuadro de "victory-text"
        
      }
    //Set previous target to clicked
    previousTarget = clicked;
  }
 
  });

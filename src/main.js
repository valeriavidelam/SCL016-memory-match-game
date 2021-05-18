import { picture } from './components/Cards.js';

import ghibli from './data/ghibli.js';

picture();
console.log(ghibli);

const App = () => {
    const initContent = document.createElement('div');
    initContent.className = 'App';
  
      
    return App;
  }
//I create the array with the 8 cards
let dataGhibli = ghibli.items;

// then, I duplicate the cards to create the partner
const gameGrid = dataGhibli.concat(dataGhibli);
console.log(dataGhibli);

// Declare the variable to randomize the cards
//Declare the random position to appear the card
let j = 0
let temp = null

// With fisher-Yates algorithm I'm trying to randomize
function shuffle(gameGrid) {
    for (let i = gameGrid.length -1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = gameGrid[i]
        gameGrid[i] = gameGrid[j]
        gameGrid[j] = temp
    }
    return gameGrid;
}

let newGrid = shuffle(gameGrid)

const ghibliContainer = document.getElementById('gameCards');
export let showGhibli = (newGrid) => {
  let dataGhibli = '';
  newGrid.map((obj) => {
    dataGhibli += `<div class="ghibliCards">
    <div class ="internalCard">
    
    <div class="card-front">
    <img src='${obj.image}' alt = "Image" class="imageGhibli"/>
    </div>
    </div>
    </div>
    </div>
    </div>
    `
  });
// return the new array with the data
 return dataGhibli; 
}
// show the data in the Html with the Div that I create before.
  ghibliContainer.innerHTML = showGhibli(newGrid); 

export default App
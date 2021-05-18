//Import data from .js file
import pokemon from '../data/pokemon/pokemon.js'; 

const App = () => {
  const initContent = document.createElement('div');
  initContent.className = 'App';

    
  return App;
}

// I create an array to show the pokemon in items 
const items = pokemon.items;  
//console.log(items);
//expected output: 9

// new array to show pokemon's items again
const items2 = pokemon.items; 
//console.log(items2);
//expected output: 9

//concat both array to multiplicate the pokemon data
const allItems = items.concat (items2); 
console.log(allItems);
//expected output: 18

//call the function 
shuffle(allItems);
//console.log(shuffle);


//Trying to randomize the order of the game
function shuffle(allItems) {
  let m = allItems.length, t, i;

// While there remain elements to shuffle
  while (m) {

  // Pick a remaining element
  i = Math.floor(Math.random() * m--);

  // And swap it with the current element.
  t = allItems[m];
  allItems[m] = allItems[i];
  allItems[i] = t;
}

return allItems;
}


//save shuffle function in a new grid
let newGrid = shuffle (allItems)

//En el 63 va <div class="flip-card-inner">
const pokemonContainer = document.getElementById('gameCards');
export let showPokemon = (newGrid) => {
  let dataPokemon = '';
  newGrid.map((obj) => {
    dataPokemon += `<div class="pokemonCard">
    <div class ="internalCard">
    <div class="flip-card">
    
    <div class="flip-card-front">
    </div>
    <div class="flip-card-back">
    <img src='${obj.image}' alt = "Image" class="imagePokemon"/>
    </div>
    </div>
    </div>
    </div>
    </div>
    `
  });
// return the new array with the data
 return dataPokemon; 
}
// show the data in the Html with the Div that I create before.
  pokemonContainer.innerHTML = showPokemon(newGrid); 

export default App
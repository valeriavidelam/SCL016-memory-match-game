//Import data from .js file
import pokemon from '../data/pokemon/pokemon.js'; 
//console.log(pokemon);

// array to show the pokemon in items 
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

const pokemonContainer = document.getElementById('cardContainer');
export let showPokemon = (allItems) => {
  let dataPokemon = '';
  allItems.map((obj) => {
    dataPokemon += `   <div class = "pokemonCard">
    <div class = "internalCard">
    <img src='${obj.image}' alt = "Image" class="imagePokemon"/>
    </div>
    </div>
    `
  });
// return the new array with the data
 return dataPokemon; 
}
// show the data in the Html with the Div that I create before.
  pokemonContainer.innerHTML = showPokemon(allItems); 

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

const App = () => {
  const el = document.createElement('div');
  el.className = 'App';



    
  return el;
};

export default App;
let pokemonRepository = (function() {
let pokemonList = [
  {name: "Mewtwo", height: 7, type: "psychic", ability: "Pressure"},
  {name: "Zapdos", height: 1.6, type: ["psychic", "flying"], ability: "Lightningrod"},
  {name: "Palkia", height: 4.2, type: ["dragon", "water"], ability: "Telepathy"},
  {name: "Gengar", height: 1.5, type: ["ghost", "poison"], ability: "Levitate"}
];
//Return every item from the list
function getAll() {
  return pokemonList;
}

function add(pokemon){
  pokemonList.push(pokemon);
}
// FUNCTION TO CREATE ELEMENT LIST INTO THE WEBPAGE
function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener("click", function(){
    showDetails(pokemon);
  })
}

function showDetails(pokemon){
  console.log(pokemon);
}
//Return values outside
return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails
};
})();

//DISPLAY POKEMON LIST BY CALLING FUNCTION ADDLISTITEM FROM THE REPOSITORY
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});

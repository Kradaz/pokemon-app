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
//Return values outside
return {
  getAll: getAll,
  add: add
};
})();

// LOOP OVER ARRAY DISPLAYING ALL POKEMON AND THEIR DETAILS
function myLoopFunction(pokemon) {
  document.write(' Name: '+ pokemon.name + ' - Height: ' + pokemon.height + ' - Type: ' + pokemon.type + ' - Ability: ' + pokemon.ability + '<br>');
}
pokemonRepository.getAll().forEach(myLoopFunction); // CONNECT POKEMONLIST TO OUTSIDE OF THE REPOSITORY THROUGH getAll AND forEach
// END OF LOOP

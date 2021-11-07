let pokemonList = [
  {name: "Mewtwo", height: 7, type: "psychic", ability: "Pressure"},
  {name: "Zapdos", height: 1.6, type: ["psychic", "flying"], ability: "Lightningrod"},
  {name: "Palkia", height: 4.2, type: ["dragon", "water"], ability: "Telepathy"},
  {name: "Gengar", height: 1.5, type: ["ghost", "poison"], ability: "Levitate"}
]

// LOOP OVER ARRAY DISPLAYING ALL POKEMON AND THEIR DETAILS
function myLoopFunction(pokemon) {
  document.write(' Name: '+ pokemon.name + ' - Height: ' + pokemon.height + ' - Type: ' + pokemon.type + ' - Ability: ' + pokemon.ability + '<br>');
}
pokemonList.forEach(myLoopFunction);
// END OF LOOP

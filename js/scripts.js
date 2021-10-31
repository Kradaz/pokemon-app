let pokemonList = [
  {name: "Mewtwo", height: 7, type: "psychic", ability: "Pressure"},
  {name: "Zapdos", height: 1.6, type: ["psychic", "flying"], ability: "Lightningrod"},
  {name: "Palkia", height: 4.2, type: ["dragon", "water"], ability: "Telepathy"},
  {name: "Gengar", height: 1.5, type: ["ghost", "poison"], ability: "Levitate"}
]

// FOR LOOP TO DISPLAY POKEMONLIST
let text = " ";
for (let i = 0; i < pokemonList.length; i++){
  text = pokemonList[i];
  document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")" + "<br>");
}

// END OF FOR LOOP

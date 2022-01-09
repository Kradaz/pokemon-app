let pokemonRepository = (function() {
//let modalContainer = document.querySelector('#exampleModal');
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
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
  let pokemonImg = document.createElement("img");


  button.innerText = pokemon.name;
  button.classList.add("button-class");
  button.classList.add("btn");
  pokemonImg.classList.add("btn-img");


  button.appendChild(pokemonImg);
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  addEventItem(button, pokemon);

// displaying picture of pokemon into the webpage
  let url = pokemon.detailsUrl;
return fetch(url).then(function(response){
  return response.json();
}).then(function(details){
  pokemon.image = details.sprites.front_default;
  pokemonImg.setAttribute ('src', pokemon.image);
}).catch(function(e){
  console.error(e);
});
}


function addEventItem(button, pokemon){
  button.addEventListener("click", function(){
  showDetails(pokemon);
})
}

function showDetails(pokemon){
  loadDetails(pokemon).then(function(){
  showModal(pokemon);
});



let modalContainer = document.querySelector('#exampleModal');
function showModal(pokemon){
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  let modalHeader = $('.modal-header');

  modalBody.empty();
  modalTitle.empty();

  let nameElement = $('<h1 class="text-capitalize">' + pokemon.name + '</h1>');
  let imageElement = $('<img class="modal-img" style="width:30%">');
  imageElement.attr("src", pokemon.imageUrl);

  let heightElement = $('<p>' + 'Height : ' + pokemon.height + '</p>');
  let weightElement = $('<p>' + 'Weight : ' + pokemon.weight + '</p>');

  modalBody.append(imageElement);
  modalTitle.append(nameElement);
  modalBody.append(heightElement);
  modalBody.append(weightElement);

  $('#exampleModal').modal();

}
}
// Promise added to fetch the data from the API using json
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url,
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}
// FUNCTION TO LOAD POKEMON'S DETAILS
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    // Now we add the details to the item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
    item.weight = details.weight;
  }).catch(function (e) {
    console.error(e);
  });
}

//Return values outside
return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails,
  addEventItem: addEventItem,
  loadList: loadList,
  loadDetails: loadDetails
};
})();

//DISPLAY POKEMON LIST BY CALLING FUNCTION ADDLISTITEM FROM THE REPOSITORY
pokemonRepository.loadList().then(function(){
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
});

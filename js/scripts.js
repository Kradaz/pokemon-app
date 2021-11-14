let pokemonRepository = (function() {
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
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  addEventItem(button, pokemon);
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

// MODAL CODE PIECE
let modalContainer = document.querySelector('#modal-container');
function showModal(pokemon) {
  modalContainer.innerHTML = '';
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  let titleElement = document.createElement('h1');
  titleElement.innerText = pokemon.name;

  let contentElement = document.createElement('p');
  contentElement.innerText = "Height: " + pokemon.height;

  let pokemonImage = document.createElement('img');
  pokemonImage.src = pokemon.imageUrl;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(pokemonImage);
  modalContainer.appendChild(modal);


  modalContainer.classList.add('is-visible');
}

function hideModal() {
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});
modalContainer.addEventListener('click', (e) => {

  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

}
// Promise added to fetch the data from the API using json
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
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

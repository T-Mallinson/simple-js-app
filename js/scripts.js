let pokemonRepository = (function () {

    let pokemonList=[];

    let apiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    let pokemonListElement = $('.pokemon-list');


    function getAll () {
        return pokemonList;
    }
    function add (pokemon) {
        if (
            typeof pokemon === "object" && "name" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log('pokemon is not correct');
        }
    }

    function addListItem(pokemon) {
        let listItem = $('<li class="list-group-item"></li>');
        let button = $('<button class="pokemon-button btn btn-warning" data-target="pokemon-modal" data-toggle="modal">' + pokemon.name + '</button>');
        listItem.append(button);
        pokemonListElement.append(listItem);
        button.on('click', function(){
            showDetails(pokemon);
        });
    }


    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function(json){
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        }) 
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types.map((type) => type.type.name);
          item.abilities = details.abilities.map((abilities) => abilities.abilities.name);
        }).catch(function (e) {
          console.error(e);
        });
      }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showDetailsModal(pokemon);
        });
    }

    function showDetailsModal(pokemon) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
        modalBody.empty();
        modalTitle.text(pokemon.name);

        let height = $('<p>' + 'Height: ' + pokemon.height + '</p>');
        let image = $('<img class="pokemon-img" src="' + pokemon.imageUrl + '" />');
        let types = $('<p>' + 'Types: ' + pokemon.types + '</p>');
        let abilities = $('<p>' + 'Abilities: ' + pokemon.abilities + '</p>');
        
        modalBody.append(image);
        modalBody.append(height);
        modalBody.append(types);
        modalBody.append(abilities);
    }

    return {
        add: add,
        getAll: getAll,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem,
        showDetails: showDetails,
    };

})()

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});


//     function showDetails(item){
//     pokemonRepository.loadDetails(item).then(function() {
//         // console.log(pokemon);
//         showModal(item)
//     });
// }


// function showModal(pokemon) {
//     let modalContainer = document.querySelector('.modal-container');
//     modalContainer.innerText = '';

//     let modal = document.createElement('div');
//     modal.classList.add('modal');

//     let title = document.createElement('h1');
//     title.innerText = pokemon.name;

//     let pokemonImage = document.createElement('img');
//     pokemonImage.src = pokemon.imageUrl;

//     let pokemonHeight = document.createElement('p');
//     pokemonHeight.innerText = "Height: " + pokemon.height;

//     let types = pokemon.types.reduce((accum, current) => accum + ' ' + current.type.name, '');

//     let pokemonTypes = document.createElement('p');
    
//     pokemonTypes.innerText = "Types: " + types;



//     let closeButtonElement = document.createElement('button');
//     closeButtonElement.classList.add('modal-close');
//     closeButtonElement.addEventListener('click', hideModal);

//     modal.appendChild(title);
//     modal.appendChild(pokemonImage);
//     modal.appendChild(pokemonHeight);
//     modal.appendChild(pokemonTypes);
//     modal.appendChild(closeButtonElement);
//     modalContainer.appendChild(modal);

//     modalContainer.classList.add('is-visible');

// }

// function hideModal() {
//     let modalContainer = document.querySelector('.modal-container');
//     modalContainer.classList.remove('is-visible');
// }



// window.addEventListener('keydown', (e) => {
//     let modalContainer = document.querySelector('.modal-container');
//     if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
//         hideModal();
//     }
// })






// pokemonRepository.add({
//     name: 'Bulbasaur', 
//         types: ['grass', 'poison'], 
//         height: 70});

// pokemonRepository.add (
//         {name: 'Squirtle',
//          types: ['water'],
//          height: 50
//         });

// pokemonRepository.add (
//         {name: 'Charmander', 
//         types: ['fire'], 
//         height: 60
//         });

// pokemonRepository.add (
//         {name: 'Pidgey', 
//         types: ['flying', 'normal'], 
//         height: 30
//         });

// pokemonRepository.add (
//         {name: 'Pikachu', 
//         types: ['electric'], 
//         height: 40
//         });

// pokemonRepository.add (
//         {name: 'Weedle', 
//         types: ['bug', 'poison'], 
//         height: 30
//         });

// pokemonRepository.getAll().forEach(function (pokemon) {
//     pokemonRepository.addListItem(pokemon)
// });



// function printDetails (pokemon) {

// // let pokemonList = pokemonRepository.getAll();

// // pokemonList.forEach(printDetails);
// }

// function printDetails (pokemon) {
//     if (pokemonList.height < 40) {
//         document.write("<p>" + pokemon.name + " (height:  ", + pokemon.height + ") " + " - ...pretty small ;" + "</p>")
//     }
//     else if (pokemon.height > 50) {
//         document.write("<p>" + pokemon.name + " (height:  ", + pokemon.height + ") " + " - wow... ;" + "</p>")
//     }
//     else {
//         document.write("<p>" + pokemon.name + " (height:  ", + pokemon.height + ") " + " - meh average ;" + "</p>")
//     }};


/* for (let i=0; i< pokemonList.length; i++) {
    if (pokemonList[i].height < 40) {
        document.write("<p>" + pokemonList[i].name + " (height:  ", + pokemonList[i].height + ") " + " - ...pretty small ;" + "</p>")
    }
    else if (pokemonList[i].height > 50) {
        document.write("<p>" + pokemonList[i].name + " (height:  ", + pokemonList[i].height + ") " + " - wow... ;" + "</p>")
    }
    else {
        document.write("<p>" + pokemonList[i].name + " (height:  ", + pokemonList[i].height + ") " + " - meh average ;" + "</p>")
    }
}

function printArrayDetails(list){
    for (let i=0; i < list.length; i++){
        document.write("<p>" + list[i].name + "</p>");
    };
}; 

printArrayDetails(pokemonList); */
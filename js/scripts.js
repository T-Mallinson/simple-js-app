let pokemonRepository = (function () {

    let pokemonList=[];

    function getAll () {
        return pokemonList;
    }
    function add (pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        add: add,
        getAll: getAll
    };

})()

pokemonRepository.add({
    name: 'Bulbasaur', 
        types: ['grass', 'poison'], 
        height: 70});

pokemonRepository.add (
        {name: 'Squirtle',
         types: ['water'],
         height: 50
        });

pokemonRepository.add (
        {name: 'Charmander', 
        types: ['fire'], 
        height: 60
        });

pokemonRepository.add (
        {name: 'Pidgey', 
        types: ['flying', 'normal'], 
        height: 30
        });

pokemonRepository.add (
        {name: 'Pikachu', 
        types: ['electric'], 
        height: 40
        });

pokemonRepository.add (
        {name: 'Weedle', 
        types: ['bug', 'poison'], 
        height: 30
        });

let pokemonList = pokemonRepository.getAll();

pokemonList.forEach(printDetails);

function printDetails (pokemon) {
    if (pokemon.height < 40) {
        document.write("<p>" + pokemon.name + " (height:  ", + pokemon.height + ") " + " - ...pretty small ;" + "</p>")
    }
    else if (pokemon.height > 50) {
        document.write("<p>" + pokemon.name + " (height:  ", + pokemon.height + ") " + " - wow... ;" + "</p>")
    }
    else {
        document.write("<p>" + pokemon.name + " (height:  ", + pokemon.height + ") " + " - meh average ;" + "</p>")
    }};


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
let pokemonRepository = (function () {
    let pokemonList=[
        {name: 'Bulbasaur', 
        types: ['grass', 'poison'], 
        height: 70
        },
        {name: 'Squirtle',
         types: ['water'],
         height: 50
        },
        {name: 'Charmander', 
        types: ['fire'], 
        height: 60
        },
        {name: 'Pidgey', 
        types: ['flying', 'normal'], 
        height: 30
        },
        {name: 'Pikachu', 
        types: ['electric'], 
        height: 40
        },
        {name: 'Weedle', 
        types: ['bug', 'poison'], 
        height: 30
        },
    ]

    function getAll () {
        return pokemonList;
    }
    function add (pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add
    }
})()



for (let i=0; i< pokemonList.length; i++) {
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

printArrayDetails(pokemonList);
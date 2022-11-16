let pokemonList=[
    {name: 'Bulbasaur', types: ['grass', 'poison'], height: 70},
    {name: 'Squirtle', types: ['water'], height: 50},
    {name: 'Charmander', types: ['fire'], height: 60},
    {name: 'Pidgey', types: ['flying', 'normal'], height: 30},
    {name: 'Pikachu', types: ['electric'], height: 40},
    {name: 'Weedle', types: ['bug', 'poison'], height: 30},
]

for (let i=0; i< pokemonList.length; i++) {
    if (pokemonList[i].height < 40) {
        document.write(pokemonList[i].name + " (height:  ", + pokemonList[i].height + ") " + " - ...pretty small ;  ")
    }
    else if (pokemonList[i].height > 50) {
        document.write(pokemonList[i].name + " (height:  ", + pokemonList[i].height + ") " + " - wow... ;      " )
    }
    else {
        document.write(pokemonList[i].name + " (height:  ", + pokemonList[i].height + ") " + " - meh average ;     ")
    }
}
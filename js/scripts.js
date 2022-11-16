let pokemonList=[
    {name: 'bulbasaur', types: ['grass', 'poison'], height: 70},
    {name: 'squirtle', types: ['water'], height: 50},
    {name: 'charmander', types: ['fire'], height: 60},
    {name: 'pidgey', types: ['flying', 'normal'], height: 30},
    {name: 'pikachu', types: ['electric'], height: 40},
    {name: 'weedle', types: ['bug', 'poison'], height: 30},
]

for (let i=0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + "" + pokemonList[i].height)
}
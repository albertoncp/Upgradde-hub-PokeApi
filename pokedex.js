
const pokedex$$ = document.querySelector("#pokedex")
const ALLPOKEMONS = []

/* Creo una función para hacer una petición y recibir un array con un url de cada pokemon */
const getAllPokemons = () =>{
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((response) => response.json())
    .then((response) =>  response.results)
    .catch((error) => console.log("Error obteniendo todos los pokemons"))

}
/* En esta función obtengo 151 objetos de cada pokemon */
const getIndividualPokemon =  (url) =>{
    return fetch(url)
    .then((response) => response.json())
    .then((response) => response)
}


/* Esta función inicia todas la funciones del archivo */
const init = async () => {

    const allPokemons = await getAllPokemons()
    
    /* Hago un for para recibir todos los objetos de cada pokemon en el array ALLPOKEMONS */
    for (const pokemon of allPokemons) {
        const pokemoninfo =  await getIndividualPokemon(pokemon.url)
        ALLPOKEMONS.push(pokemoninfo)
    }
    
    console.log(ALLPOKEMONS);
   
}

init()
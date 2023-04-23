document.querySelector("#search").addEventListener("click", getPokemon)

function getPokemon() {
    const pokemonName = document.querySelector("#pokemonName").value
    const name = pokemonName.toLowerCase()

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector(".pokemonInfo").innerHTML = `
        <div>
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">

        </div>    
        <div class="pokemonSpec">
             <h1>${data.name}</h1>
            <p>Type : ${data.types["0"].type.name}</p>
            <p>Weight : ${data.weight} </p>

        </div>
        
        `
    })

    .catch((err) => {
        console.log("Pokemon not found", err)
        document.querySelector(".pokemonInfo").innerHTML = "<p>Pokemon not found</p>"
    })
}
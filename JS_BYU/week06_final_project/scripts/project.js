const pokemon = `https://pokeapi.co/api/v2/pokemon/?limit=500`;
let listOfPokemons = [];
async function pokeURL(pokeURL) {
    pokeURL.map(url => (url.url));
    for (let i = 0; i <pokeURL.length; i++) {
        const pokemon = pokeURL[i].url;
        const banner = document.querySelector(".pokeBanner");
        const bannerInfo = document.querySelector("#pokeBanner")
        console.log(pokemon);
        const response = await fetch(pokemon);
        if(response.ok) {
            const pokemonList = await response.json();
            console.log(pokemonList)
            const article = document.createElement("article");
            const weight = document.createElement("h1");
            const height = document.createElement("h1");
            const name = document.createElement("h1");
            const imgPoke = document.createElement("img");
            const types = document.createElement("h1");
            imgPoke.setAttribute("src", pokemonList.sprites.other.dream_world.front_default)
            imgPoke.setAttribute("alt", name);
            //sett atributes
            name.innerHTML = pokemonList.name;
            weight.innerHTML = pokemonList.weight;
            height.innerHTML = pokemonList.height;
            types.innerHTML = pokemonList.types.map(item => item.type.name);
            //append to the DOM
            article.append("Name", name, "Weight", weight, "Height", height, "Type", types, imgPoke);
            bannerInfo.append(article);
            banner.append(bannerInfo);
            }
    }
    // const bulbasaur = pokeURL[0].url;
    // const charmander = pokeURL[3].url;
    // const squirtle = pokeURL[6].url;
    // const pidgey = pokeURL[15].url
    // // 1 pokemon
    // const response1 = await fetch(bulbasaur);
    // if(response1.ok) {
    //     const bulbasaurData = await response1.json();
    //     console.log(bulbasaurData);
    //     //define variables
    //     const article = document.createElement("article");
    //     const weight = document.createElement("h1");
    //     const height = document.createElement("h1");
    //     const name = document.createElement("h1");
    //     const imgPoke = document.createElement("img");
    //     const types = document.createElement("h1");
    //     //set img atributes
    //     imgPoke.setAttribute("src", bulbasaurData.sprites.other.dream_world.front_default)
    //     imgPoke.setAttribute("alt", name);
    //     //sett atributes
    //     name.innerHTML = bulbasaurData.name;
    //     weight.innerHTML = bulbasaurData.weight;
    //     height.innerHTML = bulbasaurData.height;
    //     types.innerHTML = bulbasaurData.types.map(item => item.type.name);
    //     //append to the DOM
    //     article.append("Name", name, "Weight", weight, "Height", height, "Type", types, imgPoke);
    //     bannerInfo.append(article);
    //     banner.append(bannerInfo);
    // }
    // // 2 pokemon
    // const response2 = await fetch(charmander);
    // if(response2.ok) {
    //     const charmanderData = await response2.json();
    //     //define variables
    //     const article = document.createElement("article");
    //     const weight = document.createElement("h1");
    //     const height = document.createElement("h1");
    //     const name = document.createElement("h1");
    //     const imgPoke = document.createElement("img");
    //     const types = document.createElement("h1");

    //     //set img atributes
    //     imgPoke.setAttribute("src", charmanderData.sprites.other.dream_world.front_default)
    //     imgPoke.setAttribute("alt", name);
    //     //sett atributes
    //     name.innerHTML = charmanderData.name;
    //     weight.innerHTML = charmanderData.weight;
    //     height.innerHTML = charmanderData.height;
    //     types.innerHTML = charmanderData.types.map(item => item.type.name);
    //     //append to the DOM
    //     article.append("Name", name, "Weight", weight, "Height", height, "Type", types, imgPoke);
    //     bannerInfo.append(article);
    //     banner.append(bannerInfo);
    // }
    // // 3 pokemon
    // const response3 = await fetch(squirtle);
    // if(response3.ok) {
    //     const squirtleData = await response3.json();
    //     //define variables
    //     const article = document.createElement("article");
    //     const weight = document.createElement("h1");
    //     const height = document.createElement("h1");
    //     const name = document.createElement("h1");
    //     const imgPoke = document.createElement("img");
    //     const types = document.createElement("h1");

    //     //set img atributes
    //     imgPoke.setAttribute("src", squirtleData.sprites.other.dream_world.front_default)
    //     imgPoke.setAttribute("alt", name);
    //     //sett atributes
    //     name.innerHTML = squirtleData.name;
    //     weight.innerHTML = squirtleData.weight;
    //     height.innerHTML = squirtleData.height;
    //     types.innerHTML = squirtleData.types.map(item => item.type.name);
    //     //append to the DOM
    //     article.append("Name", name, "Weight", weight, "Height", height, "Type", types, imgPoke);
    //     bannerInfo.append(article);
    //     banner.append(bannerInfo);
    // }
    // // 4 pokemon
    // const response4 = await fetch(pidgey);
    // if(response4.ok) {
    //     const pidgeyData = await response4.json();
    //     //define variables
    //     const article = document.createElement("article");
    //     const weight = document.createElement("h1");
    //     const height = document.createElement("h1");
    //     const name = document.createElement("h1");
    //     const imgPoke = document.createElement("img");
    //     const types = document.createElement("h1");

    //     //set img atributes
    //     imgPoke.setAttribute("src", pidgeyData.sprites.other.dream_world.front_default)
    //     imgPoke.setAttribute("alt", name);
    //     types.innerHTML = pidgeyData.types.map(item => item.type.name);
    //     //sett atributes
    //     name.innerHTML = pidgeyData.name;
    //     weight.innerHTML = pidgeyData.weight;
    //     height.innerHTML = pidgeyData.height;
    //     //append to the DOM
    //     article.append("Name", name, "Weight", weight, "Height", height, "Type", types, imgPoke);
    //     bannerInfo.append(article);
    //     banner.append(bannerInfo);
    // }

}
async function getPokemon(pokemon) {
    const response = await fetch(pokemon);
    if (response.ok) {
        listOfPokemons = await response.json();
        //console.log(listOfPokemons);
        pokeURL(listOfPokemons.results);
    }
}
console.log(listOfPokemons)
getPokemon(pokemon);
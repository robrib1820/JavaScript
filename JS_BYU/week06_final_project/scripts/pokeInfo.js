const bulbasaurURL = "https://pokeapi.co/api/v2/pokemon/1/";
const charmanderURL = "https://pokeapi.co/api/v2/pokemon/4/";
const squirtleURL = "https://pokeapi.co/api/v2/pokemon/7/";
const pidgeyURL = "https://pokeapi.co/api/v2/pokemon/16/";

//DOM elements
const bulbasaurDOM = document.querySelector("#container");

async function bulbasaur(url) {
    const response = await fetch(url);
    if(response.ok) {
        const data = await response.json()
        console.log(data)
        const article = document.createElement("article");

        const type = document.createElement("h3");
        type.innerHTML = data.types.map(item => item.type.name);

        const abilities = document.createElement("h3");
        abilities.innerHTML = data.abilities.map(item => item.ability.name);

        const special_img = document.createElement("img");
        special_img.setAttribute("src",data.sprites.other.dream_world.front_default);
        special_img.setAttribute("alt", "Special Photo");
        article.append(type, abilities, special_img);
        bulbasaurDOM.append(article);
    }
    

}

bulbasaur(bulbasaurURL);



async function fetchCache(pokemonName) {
    const name = pokemonName.toLowerCase();
    const key = `poke_${name}`;

const cached = sessionStorage.getItem(key);

if (cached) {
    return JSON.parse(cached);
}

const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
const data = await response.json();

const pokeData = {

    name: data.name,
    sprite: data.sprites.front_default,
    cry: data.cries?.latest || null,
    moves: data.moves.map(item => item.move.name) //returns just the move name
};

sessionStorage.setItem(key, JSON.stringify(pokeData));
return pokeData;
}



 async function find() {

    const nameID = document.getElementById("nID");
    const name = nameID.value.trim().toLowerCase();
    const image = document.getElementById("image");

        if (!name) {
            console.log("textbox is empty");
            return;
        }

    const pokemon = await fetchCache(name);
        image.src = pokemon.sprite;
      


    insertMoves(pokemon.moves);
 
}

async function playSound() {

const nameID = document.getElementById("nID");
const name = nameID.value.trim().toLowerCase();


if (!name) {
    console.log("textbox is empty");
    return;
}

try {
    const pokemon = await fetchCache(name);

    if (!pokemon.cry) {
    console.log("no cry available");
    return;
    }
    const audio = new Audio(pokemon.cry);
    audio.play();
} catch (err) {
    console.log("No Pokemon found");
}
}

 async function insertMoves(moveArray) {

    const moveID = document.querySelectorAll(".moveList");
    
    //Traverse array, creating a new option each time
    moveID.forEach(select =>  {

        select.innerHTML = "";

        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select Move";
        select.appendChild(defaultOption);

        moveArray.forEach(moveName => {
            const create = document.createElement("option");
            create.value = moveName;
            create.textContent = moveName;
            select.appendChild(create);
        });


    });

}

async function addToTeam() {
    const nameInput = document.getElementById("nID");
    const name = nameInput.value.trim().toLowerCase();

    if (!name) {
        console.log("No Pokemon selected");
        return;
    }

    const teamContainer = document.getElementById("teamContainer");

    //Only 6 pokemon per team
    if (teamContainer.children.length >= 6) {
        alert("Your team is full! (Max 6 Pokémon)");
        return;
    }

    const pokemon = await fetchCache(name);

    //Get selected moves
    const moveSelects = document.querySelectorAll(".moveList");
    const selectedMoves = [];

    moveSelects.forEach(select => {
        if (select.value) {
            selectedMoves.push(select.value);
        }
    });

    //Create team box
    const card = document.createElement("div");
    card.classList.add("team-card");

    //Add image
    const img = document.createElement("img");
    img.src = pokemon.sprite;

    //Create move list
    const ul = document.createElement("ul");

    selectedMoves.forEach(move => {
        const li = document.createElement("li");
        li.textContent = move;
        ul.appendChild(li);
    });

    // Append everything
    card.appendChild(img);
    card.appendChild(ul);

    teamContainer.appendChild(card);


}
export default function fetchPokemon() {
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/`, $pokeBox = document.getElementById('pokeBox'), fragment = document.createDocumentFragment();
    fetch(urlPokemon)
        .then(res => res.json())
        .then((res) => {
        res.results.forEach((pokemon) => {
            const $figure = document.createElement("figure"), $image = document.createElement("img"), $figcaption = document.createElement("figcaption"), $namePokemon = document.createTextNode(pokemon.name);
            $figcaption.appendChild($namePokemon);
            $image.setAttribute("alt", pokemon.name);
            $image.setAttribute("title", pokemon.name);
            fetch(pokemon.url)
                .then(res => res.json())
                .then((res) => {
                $image.setAttribute("src", res.sprites.other.dream_world.front_default);
            });
            $figure.appendChild($image);
            $figure.appendChild($figcaption);
            fragment.appendChild($figure);
        });
        $pokeBox.appendChild(fragment);
    });
}

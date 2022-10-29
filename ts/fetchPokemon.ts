import {listPokemon , pokemon} from './interface/interface';
export default function fetchPokemon():void {
    const urlPokemon: string = `https://pokeapi.co/api/v2/pokemon/`,
    $pokeBox: HTMLElement = <HTMLElement> document.getElementById('pokeBox'),
    fragment: Node = document.createDocumentFragment();
    fetch(urlPokemon)
        .then(res=> res.json())
        .then((res:listPokemon)=>{
           res.results.forEach((pokemon)=>{
            const $figure: HTMLElement = document.createElement("figure"),
            $image:HTMLElement = document.createElement("img"),
            $figcaption: HTMLElement = document.createElement("figcaption"),
            $namePokemon: Node = document.createTextNode(pokemon.name)
           
            $figcaption.appendChild($namePokemon)
            $image.setAttribute("alt",pokemon.name)
            $image.setAttribute("title",pokemon.name)
         

            fetch(pokemon.url)
                .then(res=>res.json())
                .then((res:pokemon)=>{
                    $image.setAttribute("src",res.sprites.other.dream_world.front_default)
                })

            $figure.appendChild($image)
            $figure.appendChild($figcaption)
            fragment.appendChild($figure)

           })
            $pokeBox.appendChild(fragment)
        })
}
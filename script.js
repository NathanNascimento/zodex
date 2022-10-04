const pokemonName = document.querySelector('.saint_name');
const pokemonNumber = document.querySelector('.saint_number');
const pokemonImage = document.querySelector('.saint_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        return data;
    }



    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Não existe!';
    pokemonNumber.innerHTML = '';



    const data = await fetchPokemon(pokemon);

    if (data) {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
        // essa parte serve para marcar na hora de voltar o pokemon e voltar certo
        searchPokemon = data.id;
    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Não existe jjj'
        pokemonNumber.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

// Essas funções serve para fazer a ação do clicar no botão
buttonPrev.addEventListener('click', () => {

    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
});

buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);

});

renderPokemon(searchPokemon);
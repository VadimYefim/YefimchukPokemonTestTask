export const pokemonActions = {
    GET_POKEMONS: 'GET_POKEMONS',
};

export const getPokemons = (payload) => ({
    type: pokemonActions.GET_POKEMONS,
    payload,
});

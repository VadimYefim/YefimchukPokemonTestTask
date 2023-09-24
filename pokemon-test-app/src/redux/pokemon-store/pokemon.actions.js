export const pokemonActions = {
    SET_POKEMONS: 'SET_POKEMONS',
    ADD_POKEMONS: 'ADD_POKEMONS',
    CLEAR_POKEMONS: 'CLEAR_POKEMONS',

    SET_NEXT_PREVIOUS_DATA: 'SET_NEXT_PREVIOUS_DATA',

    SET_FILTERED_POKEMONS: 'SET_FILTERED_POKEMONS',
};

export const setFilteredPokemons = (payload) => ({
    type: pokemonActions.SET_FILTERED_POKEMONS,
    payload,
});

export const setNextPreviousData = (payload) => ({
    type: pokemonActions.SET_NEXT_PREVIOUS_DATA,
    payload,
});

export const addPokemons = (payload) => ({
    type: pokemonActions.ADD_POKEMONS,
    payload,
});

export const setPokemons = (payload) => ({
    type: pokemonActions.SET_POKEMONS,
    payload,
});

export const clearPokemons = () => ({
    type: pokemonActions.CLEAR_POKEMONS,
});

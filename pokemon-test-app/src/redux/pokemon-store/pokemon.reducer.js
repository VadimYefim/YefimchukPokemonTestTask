import { pokemonActions } from './pokemon.actions';

const pokemonInitialState = {
    pokemons: null,
};

export const pokemonReducer = (
    state = pokemonInitialState,
    { type, payload }
) => {
    switch (type) {
        case pokemonActions.GET_POKEMONS: {
            return {
                ...state,
                pokemons: payload,
            };
        }

        default: {
            return state;
        }
    }
};

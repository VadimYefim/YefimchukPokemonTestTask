import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { pokemonReducer } from './pokemon-store/pokemon.reducer';

export const rootReducer = combineReducers({
    pokemon: pokemonReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

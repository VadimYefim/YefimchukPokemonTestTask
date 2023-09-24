import axios, { AxiosResponse } from 'axios';

import { PokemonItem } from '../../constants/pokemonTypes';

import { getMapedPokemonList } from '../../helpers/requestMapping';

import { setFilteredPokemons } from '../../redux/pokemon-store/pokemon.actions';

const useFilteredPokemons = () => {
    const getPokemonByName = (pokemonName: string = ''): any => {
        if (pokemonName) {
            return async (dispatch: any) => {
                await axios
                    .get<any>(
                        `https://pokeapi.co/api/v2/pokemon/${pokemonName?.toLowerCase()}`
                    )
                    .then((response: AxiosResponse<any>) => {
                        const mappedPokemonList: PokemonItem[] =
                            getMapedPokemonList([response?.data?.forms[0]]);

                        return dispatch(setFilteredPokemons(mappedPokemonList));
                    });
            };
        }
    };

    return [getPokemonByName];
};

export default useFilteredPokemons;

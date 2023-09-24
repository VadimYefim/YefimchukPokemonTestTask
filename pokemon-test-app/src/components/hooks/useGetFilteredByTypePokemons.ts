import axios, { AxiosResponse } from 'axios';

import { PokemonItem } from '../../constants/pokemonTypes';

import { getMapedPokemonList } from '../../helpers/requestMapping';

import { setFilteredPokemons } from '../../redux/pokemon-store/pokemon.actions';

const useGetFilteredByTypePokemons = () => {
    const getPokemonsByType = (pokemonType: number): any => {
        return async (dispatch: any) => {
            await axios
                .get<any>(`https://pokeapi.co/api/v2/type/${pokemonType}`)
                .then((response: AxiosResponse<any>) => {
                    const getPokemonList: any[] = response?.data?.pokemon?.map(
                        (pokemon: any) => {
                            return {
                                ...pokemon?.pokemon,
                            };
                        }
                    );

                    const mappedPokemonList: PokemonItem[] =
                        getMapedPokemonList(getPokemonList);

                    return dispatch(setFilteredPokemons(mappedPokemonList));
                });
        };
    };

    return [getPokemonsByType];
};

export default useGetFilteredByTypePokemons;

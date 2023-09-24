import axios, { AxiosResponse } from 'axios';

import { CurrentPokemon } from '../../constants/pokemonTypes';

import { setCurrentPokemonData } from '../../redux/pokemon-store/pokemon.actions';

const useGetCurrentPokemonData = () => {
    const getCurrentPokemonData = (pokemonId: string): any => {
        return async (dispatch: any) => {
            await axios
                .get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                .then((response: AxiosResponse<any>) => {
                    const currentPokemon: CurrentPokemon = {
                        id: response?.data?.id,
                        name: response?.data?.name,
                        moves: response?.data?.moves?.map((move: any) => {
                            return move?.move?.name;
                        }),
                        stats: response?.data?.stats?.map((stat: any) => {
                            return {
                                baseStat: stat?.base_stat,
                                name: stat?.stat?.name,
                            };
                        }),
                    };

                    return dispatch(setCurrentPokemonData(currentPokemon));
                });
        };
    };

    return [getCurrentPokemonData];
};

export default useGetCurrentPokemonData;

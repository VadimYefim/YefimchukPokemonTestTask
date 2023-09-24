import { useEffect, useState } from 'react';

import axios, { AxiosResponse } from 'axios';

const useGetPokemonTypes = () => {
    const [pokemonTypes, setPokemonTypes] = useState([]);

    useEffect(() => {
        getPokemonsTypes();
    }, []);

    const getPokemonsTypes = (): any => {
        axios
            .get<any>(`https://pokeapi.co/api/v2/type/`)
            .then((response: AxiosResponse<any>) => {
                const mapedPokemonTypes = response?.data?.results?.map(
                    (type: any) => {
                        const parts = type?.url?.split('/');
                        const value = parts[parts.length - 2];

                        return {
                            label:
                                type?.name?.charAt(0).toUpperCase() +
                                type?.name?.slice(1),
                            value: value,
                            key: value,
                        };
                    }
                );

                setPokemonTypes(mapedPokemonTypes);
            });
    };

    return [pokemonTypes];
};

export default useGetPokemonTypes;

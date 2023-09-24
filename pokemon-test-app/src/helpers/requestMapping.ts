import { PokemonItem, RequestData } from '../constants/pokemonTypes';

export const getMapedPokemonList = (pokemonList: any[]): PokemonItem[] => {
    const mappedPokemonList: PokemonItem[] = pokemonList?.map(
        (pokemon: PokemonItem, index: number) => {
            const parts = pokemon?.url?.split('/');
            const id = parts[parts.length - 2];

            return {
                id: parseInt(id),
                name: pokemon.name,
                url: pokemon.url,
            };
        }
    );

    return mappedPokemonList;
};

export const getMapedRequestData = (data: any): RequestData => {
    const mapedRequestData: RequestData = {
        count: data?.count,
        next: data?.next,
        previous: data?.previous,
    };

    return mapedRequestData;
};

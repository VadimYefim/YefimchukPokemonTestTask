import { useEffect } from 'react';

import { useAppDispatch } from '../../../redux/store';

import useGetPokemonListData from '../../hooks/useGetPokemonListData';

import './PokemonListPage.scss';

import PokemonToolbarSection from './PokemonToolbarSection';
import PokemonViewSection from './PokemonViewSection';

const PokemonListPage = () => {
    const dispatch = useAppDispatch();

    const [getPokemonData] = useGetPokemonListData();

    useEffect(() => {
        dispatch(getPokemonData());
    }, [dispatch]);

    return (
        <div className='pokemon-list-page'>
            <PokemonToolbarSection />
            <PokemonViewSection />
        </div>
    );
};

export default PokemonListPage;

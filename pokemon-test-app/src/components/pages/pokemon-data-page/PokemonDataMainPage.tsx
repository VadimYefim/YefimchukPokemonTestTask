import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Col, Image, Row } from 'antd';

import { PokemonStat } from '../../../constants/pokemonTypes';

import { clearCurrentPokemonData } from '../../../redux/pokemon-store/pokemon.actions';
import { selectCurrentPokemonData } from '../../../redux/pokemon-store/pokemon.selectors';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

import useGetCurrentPokemonData from '../../hooks/useGetCurrentPokemonData';

import './PokemonDataMainPage.scss';

const PokemonDataMainPage = () => {
    const { pokemonId } = useParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [getCurrentPokemonData] = useGetCurrentPokemonData();

    const currentPokemonData = useAppSelector(selectCurrentPokemonData);

    useEffect(() => {
        if (pokemonId) {
            dispatch(getCurrentPokemonData(pokemonId));
        }
    }, [pokemonId]);

    const handleBackClick = (): void => {
        navigate('/pokemon');
        dispatch(clearCurrentPokemonData());
    };

    return (
        <div className='pokemon-data-main-page'>
            <div className='pokemon-back-button-wrapper'>
                <Button onClick={handleBackClick}>BACK TO POKEMONS LIST</Button>
            </div>

            <div className='pokemon-image-section'>
                <Image
                    width={300}
                    preview={false}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemonData?.id}.png`}
                />
                <div className='pokemon-stats'>
                    {currentPokemonData?.stats?.map((stat: PokemonStat) => {
                        return (
                            <div>
                                {stat?.name}: {stat?.baseStat}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className='pokemon-moves'>
                <Row justify='start'>
                    {currentPokemonData?.moves?.map((move: string) => {
                        return <Col span={8}>{move}</Col>;
                    })}
                </Row>
            </div>
        </div>
    );
};

export default PokemonDataMainPage;

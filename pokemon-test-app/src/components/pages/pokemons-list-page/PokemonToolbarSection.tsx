import { useState } from 'react';

import { Col, Input, Row, Select } from 'antd';

import { setFilteredPokemons } from '../../../redux/pokemon-store/pokemon.actions';
import { useAppDispatch } from '../../../redux/store';

import useFilteredPokemons from '../../hooks/useFilteredPokemons';
import useGetFilteredByTypePokemons from '../../hooks/useGetFilteredByTypePokemons';
import useGetPokemonTypes from '../../hooks/useGetPokemonTypes';

const { Search } = Input;

const PokemonToolbarSection = () => {
    const dispatch = useAppDispatch();

    const [name, setName] = useState<string | null>('');
    const [type, setType] = useState<string | null>('');

    const [pokemonTypes] = useGetPokemonTypes();
    const [getPokemonByName] = useFilteredPokemons();
    const [getPokemonsByType] = useGetFilteredByTypePokemons();

    const handlePokemonSearch = (searchValue?: string): void => {
        if (searchValue) {
            setName(searchValue);
            setType('');
            dispatch(getPokemonByName(searchValue));
        }
    };

    const handlePokemonSearchChange = (event?: any): void => {
        if (!event?.target?.value) {
            setName('');
            setType('');
            dispatch(setFilteredPokemons([]));
        }
    };

    const handleSelectChange = (value?: any): void => {
        if (value) {
            setName('');
            setType(value);
            dispatch(getPokemonsByType(value));
        } else {
            setName('');
            setType('');
            dispatch(setFilteredPokemons([]));
        }
    };

    return (
        <div className='pokemon-toolbar-section'>
            <Row>
                <Col span={16} offset={0}>
                    <Search
                        value={name || undefined}
                        onChange={handlePokemonSearchChange}
                        placeholder='Search by full name'
                        onSearch={handlePokemonSearch}
                        enterButton
                        allowClear
                    />
                </Col>
                <Col span={6} offset={2}>
                    <Select
                        value={type || undefined}
                        placeholder='Chooze pokemon type'
                        onChange={handleSelectChange}
                        options={pokemonTypes}
                        allowClear
                    />
                </Col>
            </Row>
        </div>
    );
};

export default PokemonToolbarSection;

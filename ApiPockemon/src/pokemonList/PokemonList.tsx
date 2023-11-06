import React                from 'react';
import {
    FlatList,
    View,
    StyleSheet
    }                       from 'react-native';
import {PokemonListItem}    from './PokemonListItem';
import { stylesPokemonList } from '../styles/stylesPokemonList';

type Pokemon = {
    id      : number;
    name    : string;
    sprites : {
        front_default: string;
    };
};

interface PokemonListProps {
    data: Pokemon[];
}

export function PokemonList({ data }: PokemonListProps) {
    return (
        <View style={stylesPokemonList.container}>
            <FlatList
                data        = {data.map((pokemon, index)    => ({ ...pokemon, id: index + 1 }))}
                keyExtractor= {(item)                       => item.id.toString()}
                renderItem  = {({ item })                   => <PokemonListItem pokemon={item} />}
            />
        </View>
    );
}

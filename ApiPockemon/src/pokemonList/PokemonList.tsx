import React                from 'react';
import {
    FlatList,
    View,
    StyleSheet
    }                       from 'react-native';
import {PokemonListItem}    from './PokemonListItem';

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
        <View style={styles.container}>
            <FlatList
                data        = {data.map((pokemon, index)    => ({ ...pokemon, id: index + 1 }))}
                keyExtractor= {(item)                       => item.id.toString()}
                renderItem  = {({ item })                   => <PokemonListItem pokemon={item} />}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container   : {
        flex            : 1,
        backgroundColor : 'grey',
        top             : 50,
        borderRadius    : 50
    },
    textSyle    : {
        textAlign       : 'center'
    }
});
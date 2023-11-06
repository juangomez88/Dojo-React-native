import React    from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View
}               from 'react-native'
import { stylesPokemonListItem } from '../styles/stylesPokemonListItem';

type Pokemon = {
    id      : number;
    name    : string;
    sprites : {
        front_default: string;
    };
};

interface PokemonListItemProps {
    pokemon: Pokemon;
}

export function PokemonListItem({ pokemon } : PokemonListItemProps) {
    return (
        <View style={stylesPokemonListItem.container}>
            <Text style={stylesPokemonListItem.pokemonContainer}>
                {pokemon.id}.{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>

            <View style={stylesPokemonListItem.imageContainer}>
                <Image 
                    source  = {{uri: pokemon.sprites.front_default}}
                    style   = {stylesPokemonListItem.imageStyle}
                />
            </View>
        </View>
    );
}

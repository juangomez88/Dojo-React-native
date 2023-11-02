import React    from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View
}               from 'react-native'

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
        <View style={styles.container}>
            <Text style={styles.pokemonContainer}>
                {pokemon.id}.{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>

            <View style={styles.imageContainer}>
                <Image 
                    source  = {{uri: pokemon.sprites.front_default}}
                    style   = {styles.imageStyle}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor : "lightgrey",
        marginTop   : 10
    },
    pokemonContainer: {
        fontSize    : 32,
        textAlign   : "center",
        marginTop   : 10
    },
    imageContainer: {
        width       : 200,
        height      : 200,
        alignSelf   : "center",
        borderRadius: 10,
        overflow    : 'hidden',
    },
    imageStyle: {
        flex        : 1,
        width       : undefined,
        height      : undefined,
    }
});

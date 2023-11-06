import { StyleSheet } from "react-native";

export const stylesPokemonListItem = StyleSheet.create({
    container: {
        backgroundColor : "lightgrey",
        marginTop   : 10
    },
    pokemonContainer: {
        fontSize    : 28,
        textAlign   : "center",
        marginTop   : 5
    },
    imageContainer: {
        width       : 200,
        height      : 200,
        alignSelf   : "center",
        borderRadius: 30,
        overflow    : 'hidden',
    },
    imageStyle: {
        flex        : 1,
        width       : undefined,
        height      : undefined,
    }
});

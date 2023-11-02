import React,{
    useState,
    }                           from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
    }                           from 'react-native';
import { useFirstGenPokemons }  from '../API/API';
import {PokemonList}            from '../pokemonList/PokemonList';


export default function MainComponent() {
    const [currentPage, setCurrentPage] = useState(1);
    const data                          = useFirstGenPokemons(currentPage);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (data.length < 10) {
            return;
        }
        setCurrentPage(currentPage + 1);
    };

    return (
        <View style={styles.container}>
            <Text style         = {styles.title}>First generation Pokemon</Text>
            <PokemonList data={data} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style   = {styles.button}
                    onPress = {goToPreviousPage}
                >
                    <Text style = {styles.textButton}>Atras</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style   = {styles.button}
                    onPress = {goToNextPage}
                >
                    <Text style = {styles.textButton}>{currentPage}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex            : 1,
        justifyContent  : 'center',
        alignItems      : 'center',
        backgroundColor : 'black',
    },
    buttonContainer: {
        flexDirection  : 'row',
        justifyContent  : 'space-between',
        alignItems      : 'center',
    },
    button:{
        backgroundColor: 'blue',
        padding        : 10,
        borderRadius   : 30,
        shadowRadius   : 10,
    },
    textButton:{
        color           : 'white',
        fontWeight      : 'bold',
        textAlign       : 'center',
        textTransform   : 'uppercase',
    },
    title: {
        fontSize        : 32,
        color           : 'black'
    },
})
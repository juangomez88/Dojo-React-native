import React,{
    useState,
    }                           from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
    }                           from 'react-native';
import { useFirstGenPokemons }  from '../API/API';
import {PokemonList}            from '../pokemonList/PokemonList';


export default function ListPokemonScreen() {
    const [currentPage, setCurrentPage] = useState(1);
    const data                          = useFirstGenPokemons(currentPage);

    const goToPreviousPage              = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage                  = () => {
        if (data.length < 10) {
            return;
        }
        setCurrentPage(currentPage + 1);
    };
    
    console.log('useFirstGenPokemons', data);
    return (
        <View style={styles.container}>
            <View>
                <Text style         = {styles.title}>Primera Generación</Text>
                <Text style         = {styles.title}>Pockemon</Text>
            </View>
            <View  style={styles.secundaryContainer}>
                <PokemonList data={data} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style   = {styles.button}
                        onPress = {goToPreviousPage}
                    >
                        <Text style = {styles.textButton}>Atras</Text>
                    </TouchableOpacity>
                    <Text style = {styles.textButton}>{currentPage}</Text>
                    <TouchableOpacity
                        style   = {styles.button}
                        onPress = {goToNextPage}
                    >
                        <Text style = {styles.textButton}>Siguiente</Text>
                    </TouchableOpacity>
                </View>
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
    secundaryContainer: {
        flexDirection   : 'column',
        justifyContent  : 'center',
        marginbutton    : 50,
    },
    buttonContainer: {
        flexDirection   : 'row',
        justifyContent  : 'space-between',
        alignItems      : 'center',
    },
    button:{
        backgroundColor: 'blue',
        padding         : 10,
        margin          : 50,
        borderRadius    : 30,
        shadowRadius    : 10,
    },
    textButton:{
        color           : 'white',
        fontWeight      : 'bold',
        textAlign       : 'center',
        textTransform   : 'uppercase',
    },
    title: {
        fontSize        : 32,
        fontWeight      : 'bold',
        textAlign       : 'center',
        color           : 'white',
    },
})
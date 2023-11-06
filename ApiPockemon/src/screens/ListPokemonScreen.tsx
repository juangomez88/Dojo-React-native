import React,{
    useState,
    }                               from 'react';
import {
    Text,
    TouchableOpacity,
    View
    }                               from 'react-native';
import { useFirstGenPokemons }      from '../API/API';
import {PokemonList}                from '../pokemonList/PokemonList';
import { stylesListScreen }         from '../styles/stylesListScreen';
import { NativeStackScreenProps }   from '@react-navigation/native-stack';
// import { StackScreenProps } from '@react-navigation/stack';

// interface Props extends StackScreenProps<any, any> { }
interface Props extends NativeStackScreenProps<any, any> { }


export default function ListPokemonScreen({navigation }: Props) {
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
        <View style={stylesListScreen.container}>
            <View style={[stylesListScreen.box, stylesListScreen.boxBody]} >
                <View style={stylesListScreen.secundaryContainer}>
                    <Text style = {stylesListScreen.title}>Primera Generación</Text>
                    <Text style = {stylesListScreen.title}>Pokemon</Text>
                </View>
                <View  style={stylesListScreen.buttonContainer}>
                <TouchableOpacity
                        style   = {stylesListScreen.button}
                        onPress = {goToPreviousPage}
                    >
                        <Text style = {stylesListScreen.textButton}>Pag. Anterior</Text>
                    </TouchableOpacity>
                    <Text style = {stylesListScreen.textButton}>{currentPage}</Text>
                    <TouchableOpacity
                        style   = {stylesListScreen.button}
                        onPress = {goToNextPage}
                    >
                        <Text style = {stylesListScreen.textButton}>Pag. Siguiente</Text>
                    </TouchableOpacity>
                </View>
                <PokemonList data={data} />
                <View>
                    <TouchableOpacity
                        style   = {stylesListScreen.button}
                        onPress = {() => navigation.goBack()}
                    >
                        <Text style = {stylesListScreen.textButton}>Atras</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

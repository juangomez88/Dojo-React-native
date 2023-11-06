import React,{
    }                               from 'react';
import {
    Text, 
    TouchableOpacity, 
    View, 
    }                               from 'react-native';
import { NativeStackScreenProps }   from '@react-navigation/native-stack';
import { stylesListScreen }         from '../styles/stylesListScreen';

interface Props extends NativeStackScreenProps<any, any> { }

export const HomeScreen = ({navigation }: Props) => {

    return (
        <View style={stylesListScreen.container}>
            <Text style         = {stylesListScreen.title}>Pantalla Principal</Text>
            <View style={stylesListScreen.buttonContainer}>
                <TouchableOpacity
                        style   = {stylesListScreen.button}
                        onPress = {() => navigation.navigate('ListPokemonScreen')}
                    >
                    <Text style = {stylesListScreen.textButton}>Lista Pokemon</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style       = {stylesListScreen.button}
                    onPress     = {() => navigation.navigate('SearchPokemonScreen')}
                >
                    <Text style = {stylesListScreen.textButton}>Buscar Pokemon</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


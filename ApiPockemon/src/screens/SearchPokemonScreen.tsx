import React,{
    useState,
    }                               from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    }                               from "react-native";
import axios                        from "axios";
import { NativeStackScreenProps }   from "@react-navigation/native-stack";
import { stylesListScreen }         from "../styles/stylesListScreen";

// interface Props extends StackScreenProps<any, any> { }
interface Props extends NativeStackScreenProps<any, any> { }


export const SearchPokemonScreen = ({navigation }: Props) => {
    const [searchTerm, setSearchTerm]   = useState('');
    const [pokemonData, setPokemonData] = useState<any>(null);

    const searchPokemon = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
            setPokemonData(response.data);
        } catch (error) {
            console.error(error);
            setPokemonData(null);
        }
    };

    return(
        <View style   = {stylesListScreen.container}>
            <View style={[stylesListScreen.box, stylesListScreen.boxBody]}>
                <View>
                    <Text style={stylesListScreen.title}>Buscar Pokemon</Text>
                </View>
                <TextInput
                    style       =   {stylesListScreen.textInput}
                    placeholder = "Nombre del Pokémon"
                    value       = {searchTerm}
                    onChangeText= {(text) => setSearchTerm(text.toLowerCase())}
                />
                <TouchableOpacity
                    style       = {stylesListScreen.button}
                    onPress     = {searchPokemon}
                >
                    <Text style = {stylesListScreen.textButton}>Buscar</Text>
                </TouchableOpacity>
                {pokemonData && (
                    <ScrollView  style = {stylesListScreen.secundaryContainer}>
                        <Text style = {stylesListScreen.labelScreen}>  Nombre: {pokemonData.name}</Text>
                        <Image
                            source  = {{ uri: pokemonData.sprites.front_default }}
                            style   = {{ width: 300, height: 300 }}
                        />
                        <Text style = {stylesListScreen.labelScreen}>Experiencia Base: {pokemonData.base_experience}</Text>
                        <Text  style = {stylesListScreen.labelScreen}>Habilidades:</Text>
                            {pokemonData.abilities.map((ability: any) => (
                                <Text  style = {stylesListScreen.labelScreen} key={ability.ability.name}>{ability.ability.name}</Text>
                            ))}
                    </ScrollView>
                )}
            </View>
            <TouchableOpacity
                style   = {stylesListScreen.button}
                onPress = {() => navigation.goBack()}
            >
                <Text style = {stylesListScreen.textButton}>Atras</Text>
            </TouchableOpacity>
        </View>
        )
}
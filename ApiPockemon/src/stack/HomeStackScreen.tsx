import React                            from "react";
import ListPokemonScreen                from "../screens/ListPokemonScreen";
import { SearchPokemonScreen }          from "../screens/SearchPokemonScreen";
import { HomeScreen }                   from "../screens/HomeScreen";
import { createNativeStackNavigator }   from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const HomeStackScreen = () => {
    return (
            <Stack.Navigator
                initialRouteName  = "Inicio"            
            >
                <Stack.Screen 
                    name="Inicio"
                    component={HomeScreen} 
                />
                <Stack.Screen 
                    name="ListPokemonScreen"
                    component={ListPokemonScreen} 
                />
                <Stack.Screen 
                    name="SearchPokemonScreen"
                    component={SearchPokemonScreen}
                />
            </Stack.Navigator>

    );
};

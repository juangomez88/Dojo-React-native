import React,{
    }               from 'react';
import {
    StyleSheet,
    Text, View 
    }               from 'react-native';


export default function MainComponent() {
    

    return (
        <View style={styles.container}>
            <Text style         = {styles.title}>Pantalla Principal</Text>
            
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
import React                    from 'react'
import { HomeStackScreen }      from './src/stack/HomeStackScreen';
import { NavigationContainer }  from '@react-navigation/native';

export default function App() {
return (
    <NavigationContainer>
        <HomeStackScreen />
    </NavigationContainer> 

    )   
}
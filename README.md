# Dojo-React-native

## Instalaciones requeridas

Se necesitaran para el realizar el proyecto en windows:

* Node: Se recomienda la version LTS de Node, link de descarga: [Node](https://nodejs.org/en/download)
* React Native command line interface.
* JDK.
* Android Studio.
  
React Native también requiere el kit de desarrollo Java SE (JDK) , que también se puede instalar con Chocolatey. Este puede se instalado
con el simbolo del sistema de administrador (Click derecho sobre el simbolo del sistema y seleccione "Ejecutar Adminitrador"), luego ejecute
el siguiente comando:

`choco install -y nodejs-lts microsoft-openjdk11`

## Instale el SDK de Android

Android Studio instala el último SDK de Android de forma predeterminada. Sin embargo, crear una aplicación React Native con código nativo requiere el Android 13 (Tiramisu)SDK en particular. Se pueden instalar SDK de Android adicionales a través del Administrador de SDK en Android Studio.

## Configure las variables de entorno ANDROID_HOME

Las herramientas React Native requieren la configuración de algunas variables de entorno para poder crear aplicaciones con código nativo.

1. Abra el Panel de control de Windows.
2. Haga clic en Cuentas de usuario, luego haga clic en Cuentas de usuario nuevamente
3. Haga clic en Cambiar mis variables de entorno
4. Haga clic en Nuevo... para crear una nueva ANDROID_HOMEvariable de usuario que apunte a la ruta a su SDK de Android:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/a3968d45-7fef-4ece-ab44-045ad28475a1)

El SDK se instala, de forma predeterminada, en la siguiente ubicación:

`%LOCALAPPDATA%\Android\Sdk`

## En caso de necesitar las intrucciones desde  la documentación oficial

[Configurar el entorno de desarrollo](https://reactnative.dev/docs/environment-setup?guide=native&os=windows)

# Iniciar poryecto

En una carpata donde quieras iniciar el proyecto realiza:

## Iniciar el proyecto con react native

`npx react-native@latest init NOMBRE_PROYECTO`

## [Opcional] Usar una versión o plantilla específica

`npx react-native@X.XX.X init AwesomeProject --version X.XX.X`
Luego de terminada la instalación con el comando **cd** "nombre de la carpeta" ingresar a la carpeta

## Dependencias

* `npm i expo-status-bar`

## Iniciar proyecto

En consola digita:

* `Code .` para abrir el **Visual estudio code**
* `npm start`
Luego de presionado el comando algo asi se despleagará en la consola:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/b4462b19-bd72-4445-8777-4b026d75d7ca)

Presionamos ***a*** para desplegar el emulador de *andriod*, luego de esperar un momento se debe desplegar una aplicacion
similar a esta:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/5f42613e-55c9-4093-bfd0-49376dd01aa1)

En la raiz principal del proyecto crear la carpeta ***src***, y dentro de esta crear tres ***carpetas*** así:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/b499a334-c140-4f6c-ba0a-3b63b5f4a184)

Vamos a usar la api de pokemon [pokéAPI](https://pokeapi.co/)

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/b8976225-f4b4-4d77-a8de-e92a246ca823)

En la carpeta ***api*** vamos crear el archivo **Api.tsx** asi:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/9e824ad3-5a7f-4404-a3f9-5ee637927528)

En el archivo **Api.tsx** pondremos el siguiente código:

```JavaScript
import React, { useEffect, useState } from 'react';

const pokePath = "https://pokeapi.co/api/v2/";
const pokeQuery = "pokemon?limit=300&offset=0";
const firstGenPokemonPath = `${pokePath}${pokeQuery}`;

export function useFirstGenPokemons() {
    const [firstGenPokemonDetails, setFirstGenPokemonDetails] = useState<any[]>([]);

    useEffect(() => {
        const fetchFirstGenPokemons = async () => {
            try {
                const firstGenPokemonIdsResponse = await fetch(firstGenPokemonPath);
                if (!firstGenPokemonIdsResponse.ok) {
                    throw new Error('Error al obtener datos de la API');
                }
                const firstGenPokemonIdsBody = await firstGenPokemonIdsResponse.json();

                const firstGenPokemonDetails = await Promise.all(
                    firstGenPokemonIdsBody.results.map(async (p: { url: string }) => {
                        try {
                            const pDetailsResponse = await fetch(p.url);
                            if (!pDetailsResponse.ok) {
                                throw new Error('Error al obtener detalles del Pokémon');
                            }
                            const pDetails = await pDetailsResponse.json();
                            return pDetails;
                        } catch (error) {
                            console.error('Error al obtener detalles del Pokémon:', error);
                            return null;
                        }
                    })
                );

                setFirstGenPokemonDetails(firstGenPokemonDetails.filter((p) => p !== null));
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
            }
        };

        fetchFirstGenPokemons();
    }, []);

    return firstGenPokemonDetails;
}
```

Este archivo será el que nos conecta con la [Api](https://pokeapi.co/), se importaran los ***useEffect*** y ***useState*** de react.
Las constantes:

```javascript
const pokePath = "https://pokeapi.co/api/v2/";
const pokeQuery = "pokemon?limit=300&offset=0";
const firstGenPokemonPath = `${pokePath}${pokeQuery};
```

Sirven para acotar la cantidad de respuestas que el api nos dará, es decir la cantidad de pokemones. Y la función ***useFirstGenPokemons*** se exporta para que pueda ser utilizada en otros componentes.

Ahora la carpeta ***pokemonListItem*** crea mos el archivo **PokemonListItem.tsx** así:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/aa5038bb-45f6-472f-85f4-795026b9be3f)

En el archivo **PokemonListItem.tsx** empezaremos con las importaciones y posteriormente con los estilos que utilizaremos, así:

```javascript
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgrey",
        marginTop: 10
    },
    pokemonContainer: {
        fontSize: 32,
        textAlign: "center",
        marginTop: 10
    },
    imageContainer: {
        width: 200,
        height: 200,
        alignSelf: "center",
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageStyle: {
        flex: 1,
        width: undefined,
        height: undefined,
    }
});
```

Posteriormente se definen tres propiedades un ***type***:

* id (número de identificación del Pokémon),
* name (nombre del Pokémon)
* sprites (que tiene una propiedad llamada front_default que contiene una URL de la imagen del Pokémon).

Estas quedarían de la siguiente forma:

```javascript
    type Pokemon = {
        id: number;
        name: string;
        sprites: {
            front_default: string;
        };
    };
```

Se define una interfaz llamada PokemonListItemProps que toma un objeto pokemon de tipo Pokemon.

```javascript
interface PokemonListItemProps {
    pokemon: Pokemon;
}
```

Finalmente definimos la función **PokemonListItem**:

```javascript
function PokemonListItem({ pokemon } : PokemonListItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.pokemonContainer}>
                {pokemon.id}.{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>

            <View style={styles.imageContainer}>
                <Image 
                    source={{uri: pokemon.sprites.front_default}}
                    style={styles.imageStyle}
                />
            </View>
        </View>
    );
}

```

el archivo completo quedaría asi:

```javascript
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type Pokemon = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
};

interface PokemonListItemProps {
    pokemon: Pokemon;
}


function PokemonListItem({ pokemon } : PokemonListItemProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.pokemonContainer}>
                {pokemon.id}.{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>

            <View style={styles.imageContainer}>
                <Image 
                    source={{uri: pokemon.sprites.front_default}}
                    style={styles.imageStyle}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgrey",
        marginTop: 10
    },
    pokemonContainer: {
        fontSize: 32,
        textAlign: "center",
        marginTop: 10
    },
    imageContainer: {
        width: 200,
        height: 200,
        alignSelf: "center",
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageStyle: {
        flex: 1,
        width: undefined,
        height: undefined,
    }
});

export default PokemonListItem;
```

Luego en la misma carpeta ***pokemonList*** creamos el archivo **PokemonList** así:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/94579261-0013-4df7-a45d-2c55e1c81469)

iniciamos con las siguientes importación:

```javascript
import React from 'react';
import PokemonListItem from './PokemonListItem';
import { FlatList, View, StyleSheet } from 'react-native';
```

y los estilos que vamos a usar:

```javascript
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        top: 50,
        borderRadius: 50
    },
    textSyle: {
        textAlign: 'center'
    }
});
```

Como en el archivo anterior definimos:

```javascript
type Pokemon = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
};

interface PokemonListProps {
    data: Pokemon[];
}
```

Y posteriormente se crea la funcion **PokemonList** que toma el objeto que devuelve el **api** y lo destructura como argumento **data** para poder mostrar los pokemon como una estructura de **react**.

```javascript
function PokemonList({ data }: PokemonListProps) {
    return (
        <View style={styles.container}>
            <FlatList
                data={data.map((pokemon, index) => ({ ...pokemon, id: index + 1 }))}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PokemonListItem pokemon={item} />}
            />
        </View>
    );
}

```

este sería el archivo final:

```javascript
// PokemonList.js - Componente para la lista de Pokémon
import React from 'react';
import PokemonListItem from './PokemonListItem';
import { FlatList, View, StyleSheet } from 'react-native';

type Pokemon = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
};

interface PokemonListProps {
    data: Pokemon[];
}

function PokemonList({ data }: PokemonListProps) {
    return (
        <View style={styles.container}>
            <FlatList
                data={data.map((pokemon, index) => ({ ...pokemon, id: index + 1 }))}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PokemonListItem pokemon={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        top: 50,
        borderRadius: 50
    },
    textSyle: {
        textAlign: 'center'
    }
});

export default PokemonList;
```

Ahora en la carpeta ***mainComponent*** creamos el archivo **MainComponent.tsx**, así:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/ee43dbea-ac10-4e2a-ad5b-135a8abd8ded)

Igual que en los archivos anteriores empazamos con las importaciones:

```javascript
import React from 'react';
import { useFirstGenPokemons } from '../api/APi';
import PokemonList from '../pokemonList/PokemonList';
import { StyleSheet, Text, View } from 'react-native';
```

Y los estilos que usaremos:

```javascript
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 32,
        color: 'black'
    },
})
```

Posteriormente, creamos la funcion **MainComponent()** que será la encargada de retornar los elementos de nuestra aplicación:

```javascript
export default function MainComponent() {
    const firstGenPokemonDetails = useFirstGenPokemons();

    console.log('firstGenPokemonDetails', firstGenPokemonDetails);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>First generation Pokemon</Text>
            <PokemonList data={firstGenPokemonDetails} />
        </View>


    );
}
```

La linea: `console.log('firstGenPokemonDetails', firstGenPokemonDetails);` nos muestra en consola si la api nos está retornado información.

Finalmente el archivo completo se vería así:

```javascript
import React from 'react';
import { useFirstGenPokemons } from '../api/APi';
import PokemonList from '../pokemonList/PokemonList';
import { StyleSheet, Text, View } from 'react-native';


export default function MainComponent() {
    const firstGenPokemonDetails = useFirstGenPokemons();

    console.log('firstGenPokemonDetails', firstGenPokemonDetails);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>First generation Pokemon</Text>
            <PokemonList data={firstGenPokemonDetails} />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 32,
        color: 'black'
    },
})
```

Si vamos al simulador esta será la vista que tendremos:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/4037124a-5980-4cf1-928e-faddb5deb4c6)

esto porque el archivo de entrada de la aplicación **App.tsx** no se ha modificado, debemos borrar su contenido y poner el siguiente codigo:

```javascript
import React from 'react'
import MainComponent from './src/mainComponent/MainComponent';

export default function App() {
return (
    <MainComponent />
)
}
```

El resultado puede tardar un poco, en caso no verse un cambio podemos tipear la tecla **r** para realizar la acción de ***reload the app***. El resultado final es este:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/c3f61f5c-2161-4862-872e-9e08687a537b)

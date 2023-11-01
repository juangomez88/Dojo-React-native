# Dojo-React-native

## Instalaciones requeridas:
Se necesitaran para el realizar el proyecto en windows:

  * Node: Se recomienda la version LTS de Node, link de descarga: [Node](https://nodejs.org/en/download) 
  * React Native command line interface.
  
  * JDK.

  * Android Studio.
  

React Native también requiere el kit de desarrollo Java SE (JDK) , que también se puede instalar con Chocolatey. Este puede se instalado
con el simbolo del sistema de administrador (Click derecho sobre el simbolo del sistema y seleccione "Ejecutar Adminitrador"), luego ejecute
el siguiente comando:

`choco install -y nodejs-lts microsoft-openjdk11`

## Instale el SDK de Android:
Android Studio instala el último SDK de Android de forma predeterminada. Sin embargo, crear una aplicación React Native con código nativo requiere el Android 13 (Tiramisu)SDK en particular. Se pueden instalar SDK de Android adicionales a través del Administrador de SDK en Android Studio.

## Configure las variables de entorno ANDROID_HOME: 
Las herramientas React Native requieren la configuración de algunas variables de entorno para poder crear aplicaciones con código nativo.

1. Abra el Panel de control de Windows.
1. Haga clic en Cuentas de usuario, luego haga clic en Cuentas de usuario nuevamente
1. Haga clic en Cambiar mis variables de entorno
1. Haga clic en Nuevo... para crear una nueva ANDROID_HOMEvariable de usuario que apunte a la ruta a su SDK de Android:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/a3968d45-7fef-4ece-ab44-045ad28475a1)


El SDK se instala, de forma predeterminada, en la siguiente ubicación:

`%LOCALAPPDATA%\Android\Sdk`

## En caso de necesitar las intrucciones desde  la documentación oficial:
### [Configurar el entorno de desarrollo](https://reactnative.dev/docs/environment-setup?guide=native&os=windows) 

# Iniciar poryecto:

En una carpata donde quieras iniciar el proyecto realiza:

## Iniciar el proyecto con react native:
`npx react-native@latest init NOMBRE_PROYECTO`


# [Opcional] Usar una versión o plantilla específica:
`npx react-native@X.XX.X init AwesomeProject --version X.XX.X`

Luego de terminada la instalación con el comando **cd** "nombre de la carpeta" ingresar a la carpeta 

## Dependencias:
* `npm i expo-status-bar`

## Iniciar proyecto:

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

Vamos a usar la api de [pokemon](https://pokeapi.co/)

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/b8976225-f4b4-4d77-a8de-e92a246ca823)


En la carpeta ***api*** vamos crear el archivo **Api.tsx** asi:

![image](https://github.com/juangomez88/Dojo-React-native/assets/60585685/9e824ad3-5a7f-4404-a3f9-5ee637927528)


En el archivo **Api.tsx** pondremos el siguiente código:

```
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
Este archivo será el que nos conecta con la [Api](https://pokeapi.co/), se importaran los ***UseEffect*** y ***useState*** de react.
Las constantes: 
```
const pokePath = "https://pokeapi.co/api/v2/";
const pokeQuery = "pokemon?limit=300&offset=0";
const firstGenPokemonPath = `${pokePath}${pokeQuery};
```
Sirven para acotar la cantidad de respuestas que el api nos dará, es decir la cantidad de pokemones. Y la función ***useFirstGenPokemons*** se exporta para que pueda ser utilizada en otros componentes.

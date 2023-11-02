import React,{
    useEffect,
    useState
    }           from 'react';

const pokePath              = "https://pokeapi.co/api/v2/";
// const pokeQuery             = "pokemon?limit=300&offset=0";
// const firstGenPokemonPath   = `${pokePath}${pokeQuery}`;

export function useFirstGenPokemons(page: number) {
    const [firstGenPokemonDetails, setFirstGenPokemonDetails]   = useState<any[]>([]);
    const limit                                                 = 50;
    const offset                                                = (page - 1) * limit;

    useEffect(() => {
        const fetchFirstGenPokemons = async () => {
            try {
                const pagePokemonPath               = `${pokePath}pokemon?limit=${limit}&offset=${offset}`;
                const firstGenPokemonIdsResponse    = await fetch(pagePokemonPath);

                if (!firstGenPokemonIdsResponse.ok) {
                    throw new Error('Error al obtener datos de la API');
                }
                
                const firstGenPokemonIdsBody    = await firstGenPokemonIdsResponse.json();
                const firstGenPokemonDetails    = await Promise.all(
                    firstGenPokemonIdsBody.results.map(async (p: { url: string }) => {
                        try {
                            const pDetailsResponse = await fetch(p.url);
                            if (!pDetailsResponse.ok) {
                                throw new Error('Error al obtener detalles del Pokémon');
                            }
                            return await pDetailsResponse.json();
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
    }, [page]);
    return firstGenPokemonDetails;
}
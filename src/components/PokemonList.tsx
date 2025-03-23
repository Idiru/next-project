'use client'

import { fetchPokemonList } from '@/features/pokemon/pokemonListSlice'
import { RootState } from "../store/store"
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { EnrichedPokemonSummary } from '@/types/pokemon'
import { useAppDispatch } from '@/store/hooks'
import PokemonBlock from './PokemonBlock'



export default function PokemonList() {
    const dispatch = useAppDispatch() //to be able to use Redux and the slice created to fetch the list of Pokemon

    const { pokemonList, loading, error } = useSelector(
        (state: RootState) => state.pokemonList
    )

    //We store the number of clicks inside the localStorage, we create it if it does not exist yet or we update it 
    const handleClick = (pokemonName: string) => {
        try {
            const stored = localStorage.getItem("clicksCount");
            let updatedClicks: Record<string, number> = {};

            if (stored) {
                updatedClicks = JSON.parse(stored);

                if (typeof updatedClicks !== 'object' || updatedClicks === null) {
                    updatedClicks = {};
                }
            }

            updatedClicks[pokemonName] = (updatedClicks[pokemonName] || 0) + 1; //We check if the pokemon already exist to add 1 to the tracker or we add it

            localStorage.setItem("clicksCount", JSON.stringify(updatedClicks));
            console.log(`+1 click on ${pokemonName}`, updatedClicks);
        } catch (e) {
            console.error("Erreur lors du tracking de clics", e);
        }
    };

    useEffect(
        () => {
            dispatch(fetchPokemonList()) //Using the data fetch
        }, [dispatch]
    )


    if (loading) return <p>Loading...</p> //In case it's long to receive the data from the API
    if (error) return <p>Error : Impossible to load the Pokemon List {error}</p> //In case the fetch failed 


    return (
        <>
            <div className='container-list'>
                <h1 className="text-center">Pokemon List</h1>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 list-none p-0">{
                    pokemonList.map((pokemon: EnrichedPokemonSummary) => (
                        //Dedicated Pokemon block create, we map it to repeat it with the different pokemons
                        // We also give to the dedicated component the name of the pokemon, we use it as parameter in the detail page in case of a click on it
                        <li onClick={() => handleClick(pokemon.name)} className="text-center" key={pokemon.name}>
                            <PokemonBlock name={pokemon.name} sprite={pokemon.sprite} />
                        </li>
                    ))
                }
                </ul>
            </div >
        </>
    )
}

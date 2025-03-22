'use client'

import { fetchPokemonList } from '@/features/pokemon/pokemonListSlice'
import { RootState } from "../store/store"
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PokemonSummary } from '@/types/pokemon'
import { useAppDispatch } from '@/store/hooks'


export default function PokemonList() {
    const dispatch = useAppDispatch()

    const { pokemonList, loading, error } = useSelector(
        (state: RootState) => state.pokemonList
    )

    useEffect(
        () => {
            dispatch(fetchPokemonList())
        }, [dispatch]
    )

    if (loading) return <p>Chargement...</p>
    if (error) return <p>Erreur : {error}</p>

    return (
        <>
            <div className='container-list'>
                <h1>Pokemon List</h1>
                <ul className="list-disc pl-6">{
                    pokemonList.map((pokemon: PokemonSummary) => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))
                }
                </ul>
            </div>
        </>
    )
}

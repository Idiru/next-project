'use client'

import { fetchPokemonList } from '@/features/pokemon/pokemonListSlice'
import type { RootState } from '../store/store'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { PokemonSummary } from '@/types/pokemon'
import { useAppDispatch } from '@/store/hooks'
import PokemonBlock from './PokemonBlock'

export default function PokemonList(): React.ReactElement {
	const dispatch = useAppDispatch()

	const { pokemonList, loading, error } = useSelector(
		(state: RootState) => state.pokemonList
	)

	useEffect(() => {
		void dispatch(fetchPokemonList())
	}, [dispatch])

	/* TODO: Here you can uses <Suspense> to show a loading state check in the doc https://nextjs.org/docs/app/getting-started/fetching-data#client-components */
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error : Impossible to load the Pokemon List {error}</p>
	return (
		<>
			<div className="container-list">
				<h1 className="text-center">Pokemon List</h1>
				<ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 list-none p-0">
					{pokemonList.map((pokemon: PokemonSummary) => (
						<li className="text-center" key={pokemon.name}>
							<PokemonBlock name={pokemon.name} />
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

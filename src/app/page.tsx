import PokemonList from '@/components/PokemonList'

export default function Home(): React.ReactElement {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<PokemonList />
		</div>
	)
}

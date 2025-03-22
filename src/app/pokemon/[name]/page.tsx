import Image from 'next/image'

//Cause of some issue to get the parameter inside the url with Next (params soon depreciated and use "use"
// needed to divided the code into 2 parts - SSR and CSR)
// I chose to keep it simple without useEffect or useState cause this page is not dynamic
// after the first render so no need to complexify it)

export default async function PokemonDetailPage({
	params,
}: {
	params: { name: string }
}): Promise<React.ReactElement> {
	const { name } = params
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
	const pokemonData = await res.json()

	console.log(pokemonData)

	return (
		<div className="container-pokemon flex flex-col items-center justify-center min-h-screen text-center">
			<div className=""></div>
			<Image
				src="/pikachu.png"
				alt={name}
				width={150}
				height={150}
				className="object-contain"
			/>
			<h1>{name}</h1>
		</div>
	)
}

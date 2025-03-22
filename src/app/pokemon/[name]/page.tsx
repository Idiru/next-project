import Image from 'next/image'
import { PokemonPageParams } from "@/types/pokemon"


//Cause of some issue to get the parameter inside the url with Next (params soon depreciated and use "use" 
// needed to divided the code into 2 parts - SSR and CSR) 
// I chose to keep it simple without useEffect or useState cause this page is not dynamic 
// after the first render so no need to complexify it)

export default async function PokemonDetailPage({ params }: PokemonPageParams) {

    const { name } = params // Destructuring to avoid repeating "params."

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    const pokemonData = await res.json()

    console.log(pokemonData)

    return (
        <div className="container-pokemon flex flex-col items-center justify-center min-h-screen text-center">
            <div className=''>

            </div>
            <Image
                src="/pikachu.png"
                alt={name}
                width={150}
                height={150}
                className="object-contain"
                priority
            />
            <h1>{name}</h1>

        </div>
    )
}

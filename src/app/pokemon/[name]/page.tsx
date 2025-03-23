import PokemonItems from "@/components/PokemonItems";
import PokemonItemsDetails from "@/components/PokemonItemDetails";
import Image from "next/image";
import PokemonClickCount from "@/components/PokemonClickCount"

//Cause of some issue to get the parameter inside the url with Next (params soon depreciated and use "use"
// needed to divided the code into 2 parts - SSR and CSR)
// I chose to keep it simple without useEffect or useState cause this page is not dynamic
// after the first render so no need to complexify it)

type Props = {
    params: Promise<{ name: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function PokemonDetailPage(
    props: Props
): Promise<React.ReactElement> {
    const params = await props.params;
    const { name } = params;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemonData = await res.json();

    console.log(pokemonData)


    return (
        <div className="container-pokemon flex items-center gap-10 justify-center min-h-screen text-center">
                <div className="container-pokemon-items">
                    <PokemonItems />
                </div>
                <div className="container-pokemon-content">
                    <Image
                        src={pokemonData.sprites.front_default}
                        alt={name}
                        width={150}
                        height={150}
                        className="object-contain"
                    />
                    <h1>{name}</h1>
                    <PokemonClickCount name={name}/>
                </div>
                <PokemonItemsDetails itemsData={pokemonData} />
        </div>
    );
}

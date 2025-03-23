/* eslint-disable */

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { EnrichedPokemonSummary } from '@/types/pokemon'

//Dedicated component for the Pokemon block, we get the data thanks to props drilling
export default function PokemonBlock({ name, sprite }: EnrichedPokemonSummary) {

    return (
        <div>
            <Link href={`/pokemon/${name}`} >
                <Image
                    src={sprite}
                    alt={name}
                    width={150}
                    height={150}
                    className="object-contain"
                />
                {name}
            </Link>
        </div>
    )
}

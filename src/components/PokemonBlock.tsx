import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PokemonSummary } from '@/types/pokemon'

export default function PokemonBlock({ name }: PokemonSummary) {

    return (
        <div>
            <Link href={`/pokemon/${name}`} >
                <Image
                    src="/pikachu.png"
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

'use client'

import React, { useContext } from 'react'
import ItemsContext from "../contexts/ItemsContext";
export default function PokemonItems() {

    const { setItemSelected } = useContext(ItemsContext)

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {

        const value = e.currentTarget.textContent;

        if (value) {
            setItemSelected(value)
        }

    }

    return (

        
        <div>
            <ul className="space-y-4">
                <li onClick={handleClick}>abilities</li>
                <li onClick={handleClick}>moves</li>
                <li onClick={handleClick}>stats</li>
            </ul>
        </div>
    )
}

'use client'

import React, { useContext } from 'react'
import ItemsContext from "../contexts/ItemsContext";


export default function PokemonItems() {

    const { setItemSelected } = useContext(ItemsContext) //Context API used to share the item value selected

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => { //Little fonction to handle the event and the item selected

        const value = e.currentTarget.textContent;

        if (value) {
            setItemSelected(value) //Setter update
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

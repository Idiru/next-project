'use client';

/* eslint-disable */

import ItemsContext from "../contexts/ItemsContext";
import { useContext } from 'react';

type Props = {
  itemsData: Record<string, unknown>;
};

export default function PokemonItemsDetails({ itemsData }: Props) {

  const { itemSelected } = useContext(ItemsContext) //We get from the context the item selected

  const itemArray = itemsData?.[itemSelected] as object[];

  //Then depending from the string, we display the right data
  return (
    <div>
      <ul> 
        {itemArray && itemArray.length > 0 ? (
          itemArray.map((item: any, index: number) => {
            if (itemSelected === "abilities") {
              return <li key={index}>{item.ability.name}</li>;
            } else if (itemSelected === "moves") {
              return <li key={index}>{item.move.name}</li>;
            } else if (itemSelected === "stats") {
              return <li key={index}>{`${item.stat.name}: ${item.base_stat}`}</li>;

            } else {
              return <li key={index}>Error: no data</li>;
            }
          })
        ) : (""
        )}
      </ul>
    </div>
  )
}

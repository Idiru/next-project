'use client';

/* eslint-disable */

import ItemsContext from "../contexts/ItemsContext";
import { useContext } from 'react';

type Props = {
  itemsData: Record<string, unknown>; // accepte un objet avec des clés dynamiques
};



export default function PokemonItemsDetails({ itemsData }: Props) {

  const { itemSelected } = useContext(ItemsContext)


  const itemArray = itemsData?.[itemSelected] as object[];


  console.log("itemSelected:", itemSelected);
  console.log("itemsData:", itemsData);
  console.log("itemsData[itemSelected]:", itemsData?.[itemSelected]);



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
              return <li key={index}>{item.stat.name}</li>;
            } else {
              return <li key={index}>Non supporté</li>;
            }
          })
        ) : ( ""
        )}
      </ul>
    </div>
  )
}

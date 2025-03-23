'use client'

import { createContext } from "react";

type ItemsContextType = {
  itemSelected: string;
  setItemSelected: (value: string) => void;
  clicksCount: Record<string, number>;
  setClicksCount: React.Dispatch<React.SetStateAction<Record<string, number>>>;

};

//Little Context API to share the value of the item selected inside the component PokemonItems with a state variable
const ItemsContext = createContext<ItemsContextType>({
  itemSelected: "",
  setItemSelected: () => { },
  clicksCount: {},
  setClicksCount: () => { },
});

export default ItemsContext;

'use client'

import { createContext } from "react";

type ItemsContextType = {
  itemSelected: string;
  setItemSelected: (value: string) => void;
};

const ItemsContext = createContext<ItemsContextType>({
  itemSelected: "",
  setItemSelected: () => {},
});

export default ItemsContext;

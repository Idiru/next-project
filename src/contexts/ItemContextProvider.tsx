'use client'

import { useState } from "react";
import ItemsContext from "./ItemsContext";

export const ItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const [itemSelected, setItemSelected] = useState('');
  const [clicksCount, setClicksCount] = useState<Record<string, number>>({});

  return (
    <ItemsContext.Provider value={{ itemSelected, setItemSelected, clicksCount, setClicksCount }}>
      {children}
    </ItemsContext.Provider>
  );
};
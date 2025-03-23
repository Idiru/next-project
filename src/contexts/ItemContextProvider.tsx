'use client';

import { useState } from "react";
import ItemsContext from "./ItemsContext";

function ItemsProvider({ children }: { children: React.ReactNode }) {
  const [itemSelected, setItemSelected] = useState("");

  return (
    <ItemsContext.Provider value={{ itemSelected, setItemSelected }}>
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsProvider;

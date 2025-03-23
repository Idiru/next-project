'use client';
import React, { useState, useEffect } from 'react'

type Props = {
  name: string;
};

//Component dedicated to display the tracking count 
export default function PokemonClickCount({ name }: Props) {

  const [count, setCount] = useState(0);

//We get the count inside the localStorage and then we filter according to the related pokemon
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("clicksCount");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          const value = parsed[name] ?? 0;
          setCount(value);
        } catch (e) {
          console.error("❌ Erreur de parsing localStorage:", e);
        }
      }
    }
  }, [name]);

  return (
    <div>
      <p>Number of clicks: {count}</p>
    </div>
  )
}

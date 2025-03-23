/* eslint-disable */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  PokemonState,
  FetchPokemonListResponse,
  EnrichedPokemonSummary,
} from "../../types/pokemon";

export const fetchPokemonList = createAsyncThunk<EnrichedPokemonSummary[]>(
  "pokemonList/fetchPokemonList",
  async (): Promise<EnrichedPokemonSummary[]> => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data: FetchPokemonListResponse = await res.json();

    const enrichedResults: EnrichedPokemonSummary[] = await Promise.all(
      data.results
        .filter(
          (pokemon): pokemon is { name: string; url: string } =>
            typeof pokemon.url === "string"
        )
        .map(async (pokemon) => {
          try {
            const res = await fetch(pokemon.url);
            const fullData = await res.json();
            return {
              name: pokemon.name,
              url: pokemon.url,
              sprite: fullData.sprites.front_default ?? null,
            };
          } catch (e: any) {
            return {
              name: pokemon.name,
              url: pokemon.url,
              sprite: null,
            };
          }
        })
    );

    return enrichedResults;
  }
);

const initialState: PokemonState = {
  pokemonList: [],
  loading: false,
  error: null as string | null,
};

const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonList = action.payload;
      })
      .addCase(fetchPokemonList.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Error: Impossible to fetch the data";
      });
  },
});

export default pokemonListSlice.reducer;

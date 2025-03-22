// src/features/user/userSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PokemonSummary, PokemonState, FetchPokemonResponse } from '../../types/pokemon'


export const fetchPokemonList = createAsyncThunk<PokemonSummary[]>(
    "pokemonList/fetchPokemonList",
    async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
        const data : FetchPokemonResponse = await res.json()
        return data.results
    }
)

const initialState: PokemonState = {
    pokemonList: [],
    loading: false, 
    error: null as string | null, 
}

const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchPokemonList.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(fetchPokemonList.fulfilled, (state, action) => {
            state.loading = false
            state.pokemonList = action.payload
        })
        .addCase(fetchPokemonList.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || "Error: Impossible to fetch the data"
        })
        
  }
  },
  
)

export default pokemonListSlice.reducer

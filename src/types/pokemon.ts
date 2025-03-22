export type PokemonSummary = {
  name: string;
  url: string;
};

export type PokemonState = {
  pokemonList: PokemonSummary[];
  loading: boolean;
  error: string | null;
};

export type FetchPokemonResponse = {
    count: number
    next: string | null
    previous: string | null
    results: PokemonSummary[]
  }

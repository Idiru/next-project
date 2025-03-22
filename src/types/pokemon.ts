export type PokemonSummary = {
  name: string;
};

export type PokemonState = {
  pokemonList: PokemonSummary[];
  loading: boolean;
  error: string | null;
};

export type FetchPokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
};

export type PokemonPageParams = {
  params: {
    name: string;
  };
};

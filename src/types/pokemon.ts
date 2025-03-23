// Résumé de chaque Pokémon dans la liste (GET /pokemon)
export type PokemonSummary = {
  name: string;
  url: string | null; 
};

// Réponse complète de la liste des Pokémon (GET /pokemon?limit=...)
export type FetchPokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
};

// Réponse détaillée d’un Pokémon individuel (GET /pokemon/:name)
export type FetchPokemonDetailResponse = {
  sprites: {
    front_default: string | null;
  };
};

// Version enrichie qu’on stocke dans le state (avec le sprite)
export type EnrichedPokemonSummary = {
  name: string;
  sprite: string;
};

// Typage du state Redux
export type PokemonState = {
  pokemonList: EnrichedPokemonSummary[];
  loading: boolean;
  error: string | null;
};

// Pour les routes dynamiques de Next.js (ex: [name].tsx)
export type PokemonPageParams = {
  params: {
    name: string;
  };
};

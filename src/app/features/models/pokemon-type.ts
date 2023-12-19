export interface PokemonType {
  name: string;
  pokemon: PokemonTypePokemon[];
}

export interface PokemonTypePokemon {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
  details: PokemonDetails[];
}

export interface PokemonDetails {
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[]; // You might want to define a separate interface for moves
  name: string;
  sprites: {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
  };
  weight: number;
}

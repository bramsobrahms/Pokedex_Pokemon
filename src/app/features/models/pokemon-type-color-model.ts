export interface PokemonTypeColorModel {

  id: number;
  name: string;
  color: {
    name: string;
  };
  base_happiness: number;
  capture_rate: number;
  height?: number;
  weight?: number;
  sprites?: {
    front_default: string;
    back_default: string;
  };
  pokemon_species: PokemonSpecies[];

}

export interface PokemonSpecies {

  name: string;
  url: string;
  varieties: PokemonVariety[];

}

export interface PokemonVariety {

  is_default: boolean;
  pokemon: {
    name: string;
    url: string;
  };

}

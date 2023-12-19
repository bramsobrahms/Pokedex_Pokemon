export interface PokemonType {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemon: Pokemon[];
  sprites: {
    back_default: string;
    front_default: string;
  }
}

export interface Pokemon {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;

}


export interface PokemonModel {

  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    0: {
      type: {
        name: string;
      };
    }
  }
  sprites: {
    front_default: string;
    back_default: string;
  }

}

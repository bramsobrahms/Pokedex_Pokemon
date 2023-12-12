export interface PokemonTypeColorModel {
  // pokemon_species: {
  //   0: {
  //     name: string;
  //   }
  //
  //   url: {
  //     varieties: {
  //       0: {
  //         pokemon: {
  //           url: {
  //             height: number;
  //             weight: number;
  //             sprites: {
  //               front_default: string;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }

  pokemon_species: {
    name: string;
    url: string;
  }[];
  varieties: {
    pokemon: {
      url: string;
    }
  }[];



}


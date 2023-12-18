import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { forkJoin, mergeMap, Observable } from "rxjs";
import { PokemonModel } from "../models/pokemon-model";
import { PokemonColorModel } from "../models/pokemon-color-model";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getOne(id: number): Observable<PokemonModel> {
    return this._http.get<PokemonModel>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  getAllPokemonColor(color: string): Observable<PokemonColorModel[]> {
    return this._http.get<{ pokemon_species: { name: string; url: string }[] }>(`https://pokeapi.co/api/v2/pokemon-color/${color}`)
      .pipe(
        mergeMap(response => {
          const pokemonSpeciesUrls = response.pokemon_species.map(species => species.url);
          const pokemonRequests = pokemonSpeciesUrls.map(url => this.getPokemonData(url));
          return forkJoin(pokemonRequests);
        })
      );
  }

  private getPokemonData(url: string): Observable<PokemonColorModel> {
    const pokemonUrl = url.replace('/pokemon-species/', '/pokemon/');
    return this._http.get<PokemonColorModel>(pokemonUrl);
  }

}

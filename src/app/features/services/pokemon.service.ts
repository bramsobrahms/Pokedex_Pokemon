import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {catchError, forkJoin, mergeMap, Observable, of} from "rxjs";
import { PokemonModel } from "../models/pokemon-model";
import { PokemonColorModel } from "../models/pokemon-color-model";
import {PokemonType} from "../models/pokemon-type";


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

  getAllPokemonType(type: string): Observable<any[]> {
    return this._http.get(`https://pokeapi.co/api/v2/type/${type}`).pipe(
      mergeMap((response: any) => {
        const pokemonSpecies = response.pokemon || [];

        if (pokemonSpecies.length === 0) {
          return forkJoin([] as any[]);
        }

        const pokemonRequests = pokemonSpecies.map((pokemon: any) => this.getPokemonType(pokemon.pokemon.url));

        return forkJoin(pokemonRequests) as Observable<any[]>;
      }),
      catchError(error => {
        console.error('Error:', error);
        return [] as any[];
      })
    );
  }

  private getPokemonType(url: string): Observable<any> {
    return this._http.get(url);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {catchError, forkJoin, mergeMap, Observable, of} from "rxjs";
import { PokemonModel } from "../models/pokemon-model";
import { PokemonColorModel } from "../models/pokemon-color-model";
import {PokemonTypeComponent} from "../pokemon-type/pokemon-type.component";
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

  getAllPokemonType(type: string): Observable<PokemonType[]> {
    return this._http.get(`https://pokeapi.co/api/v2/type/${type}`).pipe(
      mergeMap((response: any) => {
        const pokemonSpeciesUrls = response.pokemon?.map((pokemon: any) => pokemon.pokemon.url) || [];

        if (pokemonSpeciesUrls.length === 0) {
          return forkJoin([] as any[]);
        }

        const pokemonRequests = pokemonSpeciesUrls.map((url: string) => this.getPokemonType(url));

        return forkJoin(pokemonRequests) as Observable<PokemonType[]>;
      }),
      catchError(error => {
        console.error('Error:', error);
        return [] as any[];
      })
    );
  }


  private getPokemonType(url: string): Observable<PokemonType[]> {
    return this._http.get<PokemonType[]>(url);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonModel} from "../models/pokemon-model";
import {PokemonTypeColorModel} from "../models/pokemon-type-color-model";


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

  getAllBlue(): Observable<PokemonTypeColorModel> {
    return this._http.get<PokemonTypeColorModel>(`https://pokeapi.co/api/v2/pokemon-color/blue`);
  }

  getAllRed(): Observable<PokemonTypeColorModel> {
    return this._http.get<PokemonTypeColorModel>(`https://pokeapi.co/api/v2/pokemon-color/red`);
  }

  getAllYellow(): Observable<PokemonTypeColorModel> {
    return this._http.get<PokemonTypeColorModel>(`https://pokeapi.co/api/v2/pokemon-color/yellow`);
  }

  getAllGreen(): Observable<PokemonTypeColorModel> {
    return this._http.get<PokemonTypeColorModel>(`https://pokeapi.co/api/v2/pokemon-color/green`);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonModel} from "../models/pokemon-model";
import {PokemonTypeModel} from "../models/pokemon-type-model";

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

  getAllBlue(): Observable<PokemonTypeModel> {
    return this._http.get<PokemonTypeModel>(`https://pokeapi.co/api/v2/pokemon-color/blue`);
  }
}

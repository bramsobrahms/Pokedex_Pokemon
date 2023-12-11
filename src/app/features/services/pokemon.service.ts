import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonModel} from "../models/pokemon-model";

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
}

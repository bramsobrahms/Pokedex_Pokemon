import {Component, OnInit} from '@angular/core';
import {PokemonType} from "../models/pokemon-type";
import {PokemonService} from "../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-list-type-pokemon',
  templateUrl: './pokemon-list-type-pokemon.component.html',
  styleUrls: ['./pokemon-list-type-pokemon.component.scss']
})
export class PokemonListTypePokemonComponent implements OnInit{

  pokemonTypes: PokemonType[] = [];
  type: string = '';

  constructor(
    private readonly _pokemonServ: PokemonService,
    private readonly _ar: ActivatedRoute,
  ) {
  }


  ngOnInit(): void {
    this._ar.params.subscribe(params => {
      this.type = params['type'];
      this.loadPokemonData();
    });
  }

  loadPokemonData(): void {
    this._pokemonServ.getAllPokemonType(this.type).subscribe(data => {
      this.pokemonTypes = data.map(pokemon => ({
        ...pokemon,
        weight: pokemon.weight / 10,
        height: pokemon.height *10,
      }));
      //console.log(this.pokemonTypes);
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {PokemonTypeColorModel} from "../models/pokemon-type-color-model";
import {PokemonService} from "../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon-color',
  templateUrl: './pokemon-color.component.html',
  styleUrls: ['./pokemon-color.component.scss']
})
export class PokemonColorComponent implements OnInit{

  pokemonData: PokemonTypeColorModel[] = [];
  color: string;

  constructor(
    private readonly _pokemonServ: PokemonService,
    private readonly _ar: ActivatedRoute,

  ) {
    this.color = '';
  }

  ngOnInit() {
    this._ar.params.subscribe(params => {
      this.color = params['color'];
      this.loadPokemonData();
    });
  }

  loadPokemonData(): void {
    this._pokemonServ.getAllPokemonColor(this.color)
      .subscribe((data: PokemonTypeColorModel[]) => {
        this.pokemonData = data;
        console.log(data);
      });
  }

}

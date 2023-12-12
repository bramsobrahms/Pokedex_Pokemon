import { Component } from '@angular/core';
import {PokemonTypeColorModel} from "../../models/pokemon-type-color-model";
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modal-poke-green',
  templateUrl: './modal-poke-green.component.html',
  styleUrls: ['./modal-poke-green.component.scss']
})
export class ModalPokeGreenComponent {

  pokemonColor: PokemonTypeColorModel | null = null;

  constructor(
    private readonly _pokemonServ: PokemonService,
    private readonly _ar: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this._ar.params.subscribe({
      next: (params:any) => {
        this._pokemonServ.getAllGreen().subscribe(
          (data: PokemonTypeColorModel) => {
            this.pokemonColor = data;
          }
        )
      }
    })
  }

}

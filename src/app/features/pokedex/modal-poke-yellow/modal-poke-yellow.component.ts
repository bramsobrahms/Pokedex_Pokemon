import {Component, OnInit} from '@angular/core';
import {PokemonTypeColorModel} from "../../models/pokemon-type-color-model";
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modal-poke-yellow',
  templateUrl: './modal-poke-yellow.component.html',
  styleUrls: ['./modal-poke-yellow.component.scss']
})
export class ModalPokeYellowComponent implements OnInit{

  pokemonColor: PokemonTypeColorModel | null = null;

  constructor(
    private readonly _pokemonServ: PokemonService,
    private readonly _ar: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this._ar.params.subscribe({
      next: (params:any) => {
        this._pokemonServ.getAllYellow().subscribe(
          (data: PokemonTypeColorModel) => {
            this.pokemonColor = data;
          }
        )
      }
    })
  }

}

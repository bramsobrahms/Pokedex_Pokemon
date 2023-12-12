import {Component, OnInit} from '@angular/core';
import {PokemonTypeColorModel} from "../../models/pokemon-type-color-model";
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-modal-poke-red',
  templateUrl: './modal-poke-red.component.html',
  styleUrls: ['./modal-poke-red.component.scss']
})
export class ModalPokeRedComponent implements OnInit{

  pokemonColor: PokemonTypeColorModel | null = null;

  constructor(
    private readonly _pokemonServ: PokemonService,
    private readonly _ar: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this._ar.params.subscribe({
      next: (params:any) => {
        this._pokemonServ.getAllRed().subscribe(
          (data: PokemonTypeColorModel) => {
            this.pokemonColor = data;
          }
        )
      }
    })
  }

}

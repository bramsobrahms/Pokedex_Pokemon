import {Component, OnInit} from '@angular/core';
import {PokemonTypeModel} from "../../models/pokemon-type-model";
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modal-poke',
  templateUrl: './modal-poke.component.html',
  styleUrls: ['./modal-poke.component.scss']
})
export class ModalPokeComponent implements OnInit{

  pokemonColor: any[] = [];

  constructor(
    private readonly _pokemonServ: PokemonService,
    private readonly _ar: ActivatedRoute,
  ) {
  }

  //TODO AFFICHE LES POKEMON BLEU
  ngOnInit(): void {
    this._ar.params.subscribe({
      next: (params:any) => {
        this._pokemonServ.getAllBlue().subscribe(
          (data: PokemonTypeModel) => {
            this.pokemonColor = [];
            this.pokemonColor.push(data);
          }
        )
      }
      })
    }
  }

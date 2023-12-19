import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {PokemonType} from "../models/pokemon-type";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})

export class PokemonTypeComponent implements OnInit{

  pokemonTypes: PokemonType[] = [];
  type:string;

  constructor(
    private readonly _pokemonServ: PokemonService,
    private readonly _ar: ActivatedRoute,
    private readonly _router: Router,
  ) {
    this.type = '';
  }

  ngOnInit(): void {

  }


}

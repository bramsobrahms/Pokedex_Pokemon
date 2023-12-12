import { Component } from '@angular/core';
import {PokemonModel} from "../../models/pokemon-model";
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {

  pokemon!: PokemonModel;

  constructor(
    private readonly _pokemonServ: PokemonService,
    private readonly _ar: ActivatedRoute,
    private readonly _router: Router,
  ) {
  }

  ngOnInit(): void {
    // let pokemonId = this._ar.snapshot.params['id'];
    // this._pokeonServ.getOne(pokemonId).subscribe({
    //   next: (data: PokemonModel) => {
    //     this.pokemon = data;
    //     console.log( data)
    //   }
    // })

    this._ar.params.subscribe({
        next: (params:any) => {
          this._pokemonServ.getOne(params.id).subscribe({
            next: (data: PokemonModel) => {
              this.pokemon = data;
              console.log( data)
            }
          })
        }
      }
    )

  }

  isModalOpen: boolean = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
  //
  // clickMore(): void {
  //   let pokemonId = this._ar.snapshot.params['id'];
  //   ++pokemonId;
  //
  //
  //   console.log(pokemonId)
  //   this._pokeonServ.getOne(pokemonId).subscribe({
  //     next: (data: PokemonModel) => {
  //       this.pokemon = data;
  //       console.log( data)
  //     }
  //   })
  //
  //   // @ts-ignore
  //   this._router.navigate(['pokemon/'+pokemonId])
  // }
  //
  //
  // clickLess(): void {
  //   let pokemonId = this._ar.snapshot.params['id'];
  //   --pokemonId;
  //
  //
  //   console.log(pokemonId)
  //   this._pokeonServ.getOne(pokemonId).subscribe({
  //     next: (data: PokemonModel) => {
  //       this.pokemon = data;
  //       console.log( data)
  //     }
  //   })
  //
  //   // @ts-ignore
  //   this._router.navigate(['pokemon/'+pokemonId])
  //
  // }

}

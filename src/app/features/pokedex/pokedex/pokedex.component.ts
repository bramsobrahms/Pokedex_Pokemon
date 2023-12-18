import { Component } from '@angular/core';
import {PokemonModel} from "../../models/pokemon-model";
import {PokemonService} from "../../services/pokemon.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonTypeColorModel} from "../../models/pokemon-type-color-model";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {

  pokemon!: PokemonModel;
  showImage: boolean = true;
  pokemonData: PokemonTypeColorModel[] = [];

  color: string = 'default-color';

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

  changeImage(isTopCorss: boolean) {
    this.showImage = isTopCorss;
  }

  loadPokemonData(): void {
    this._pokemonServ.getAllPokemonColor(this.color)
      .subscribe((data: PokemonTypeColorModel[]) => {
        this.pokemonData = data;
        console.log(data);
        this._router.navigate(['pokemon/color/'+ this.color])
      });
  }

  updateColor(newColor: string): void {
    console.log('Color updated to:', newColor);
    this.color = newColor;
    this.loadPokemonData();

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

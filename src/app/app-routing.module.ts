import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokedexComponent} from "./core/components/pokedex/pokedex.component";
import {DetailPokemonComponent} from "./features/pokedex/detail-pokemon/detail-pokemon.component";
import {ModalPokeComponent} from "./features/pokedex/modal-poke/modal-poke.component";

const routes: Routes = [
  { path: '', redirectTo: 'pokedex', pathMatch:'full' },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent },
  { path: 'modal', component: ModalPokeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

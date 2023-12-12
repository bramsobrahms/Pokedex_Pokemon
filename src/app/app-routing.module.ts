import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModalPokeComponent} from "./features/pokedex/modal-poke/modal-poke.component";
import {HomeComponent} from "./core/components/home/home.component";
import {PokedexComponent} from "./features/pokedex/pokedex/pokedex.component";
import {ModalPokeRedComponent} from "./features/pokedex/modal-poke-red/modal-poke-red.component";
import {ModalPokeYellowComponent} from "./features/pokedex/modal-poke-yellow/modal-poke-yellow.component";
import {ModalPokeGreenComponent} from "./features/pokedex/modal-poke-green/modal-poke-green.component";

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path:'pokedex/:id', component: PokedexComponent },
  { path: 'pokemon/blue', component: ModalPokeComponent },
  { path: 'pokemon/red', component: ModalPokeRedComponent },
  { path: 'pokemon/yellow', component: ModalPokeYellowComponent },
  { path: 'pokemon/green', component: ModalPokeGreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {PokedexComponent} from "./features/pokedex/pokedex/pokedex.component";
import {PokemonColorComponent} from "./features/pokemon-color/pokemon-color.component";

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path:'pokedex/:id', component: PokedexComponent },
  { path: 'pokemon/color/:color', component: PokemonColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {PokedexComponent} from "./features/pokedex/pokedex/pokedex.component";
import {PokemonColorComponent} from "./features/pokemon-color/pokemon-color.component";
import {PokemonTypeComponent} from "./features/pokemon-type/pokemon-type.component";

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pokedex/:id', component: PokedexComponent },
  { path: 'pokemon/color/:color', component: PokemonColorComponent },
  { path: 'pokemon/type/:type', component: PokemonTypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

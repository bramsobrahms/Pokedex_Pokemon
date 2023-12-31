import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import {FooterComponent} from "./layout/footer/footer.component";
import { HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './core/components/home/home.component';
import { PokedexComponent } from './features/pokedex/pokedex/pokedex.component';
import { PokemonColorComponent } from './features/pokemon-color/pokemon-color.component';
import { PokemonTypeComponent } from './features/pokemon-type/pokemon-type.component';
import { PokemonListTypePokemonComponent } from './features/pokemon-list-type-pokemon/pokemon-list-type-pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PokedexComponent,
    PokemonColorComponent,
    PokemonTypeComponent,
    PokemonListTypePokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

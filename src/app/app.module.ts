import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import {FooterComponent} from "./layout/footer/footer.component";
import { PokedexComponent } from './core/components/pokedex/pokedex.component';
import { DetailPokemonComponent } from './features/pokedex/detail-pokemon/detail-pokemon.component';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    PokedexComponent,
    DetailPokemonComponent,
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

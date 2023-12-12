import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import {FooterComponent} from "./layout/footer/footer.component";
import { HttpClientModule} from "@angular/common/http";
import { ModalPokeComponent } from './features/pokedex/modal-poke/modal-poke.component';
import { HomeComponent } from './core/components/home/home.component';
import { PokedexComponent } from './features/pokedex/pokedex/pokedex.component';
import { ModalPokeRedComponent } from './features/pokedex/modal-poke-red/modal-poke-red.component';
import { ModalPokeYellowComponent } from './features/pokedex/modal-poke-yellow/modal-poke-yellow.component';
import { ModalPokeGreenComponent } from './features/pokedex/modal-poke-green/modal-poke-green.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    ModalPokeComponent,
    HomeComponent,
    PokedexComponent,
    ModalPokeRedComponent,
    ModalPokeYellowComponent,
    ModalPokeGreenComponent,
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

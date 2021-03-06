import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/shared/app-header/app-header.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { LoginForm } from './components/forms/login-form.component';
import { PokemonCataloguePage } from './pages/pokemon-catalogue-page/pokemon-catalogue-page.component';
import { PokemonDetailPage } from './pages/pokemon-detail-page/pokemon-detail-page.component';
import { TrainerPage } from './pages/trainer-page/trainer-page.component';
import { Pokemon } from './components/pokemons/pokemon.component';
import { NotFoundPage } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginPage,
    LoginForm,
    PokemonCataloguePage,
    PokemonDetailPage,
    TrainerPage,
    Pokemon,
    NotFoundPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/shared/app-header/app-header.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { LoginForm } from './components/forms/login-form.component';
import { PokemonCataloguePage } from './pages/pokemon-catalogue-page/pokemon-catalogue-page.component';
import { PokemonDetailPage } from './pages/pokemon-detail-page/pokemon-detail-page.component';
import { TrainerPage } from './pages/trainer-page/trainer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginPage,
    LoginForm,
    PokemonCataloguePage,
    PokemonDetailPage,
    TrainerPage,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

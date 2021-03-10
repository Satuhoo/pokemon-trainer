import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerPage } from './pages/trainer-page/trainer-page.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { PokemonCataloguePage } from './pages/pokemon-catalogue-page/pokemon-catalogue-page.component';
import { PokemonDetailPage } from './pages/pokemon-detail-page/pokemon-detail-page.component';

const routes :Routes = [{
    path: 'login',
    component: LoginPage
},{
    path: '',
    pathMatch: 'full',
    component: TrainerPage
},{
    path: 'pokemons',
    component: PokemonCataloguePage
},{
    path: 'pokemons/:id',
    component: PokemonDetailPage
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
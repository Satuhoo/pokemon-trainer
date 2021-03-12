import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerPage } from './pages/trainer-page/trainer-page.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { PokemonCataloguePage } from './pages/pokemon-catalogue-page/pokemon-catalogue-page.component';
import { PokemonDetailPage } from './pages/pokemon-detail-page/pokemon-detail-page.component';
import { SessionGuard } from './guards/session.guard';

const routes :Routes = [{
    path: 'login',
    component: LoginPage
},{
    path: '',
    pathMatch: 'full',
    component: TrainerPage,
    canActivate: [SessionGuard]
},{
    path: 'pokemons',
    component: PokemonCataloguePage,
    canActivate: [SessionGuard]
},{
    path: 'pokemons/:id',
    component: PokemonDetailPage,
    canActivate: [SessionGuard]
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
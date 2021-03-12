import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainerPage } from './pages/trainer-page/trainer-page.component';
import { LoginPage } from './pages/login-page/login-page.component';
import { PokemonCataloguePage } from './pages/pokemon-catalogue-page/pokemon-catalogue-page.component';
import { PokemonDetailPage } from './pages/pokemon-detail-page/pokemon-detail-page.component';
import { SessionGuard } from './guards/session.guard';
import { NotFoundPage } from './pages/not-found-page/not-found-page.component';

const routes :Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: '/pokemons'
},{
    path: 'login',
    component: LoginPage
},{
    path: 'pokemons',
    component: PokemonCataloguePage,
    canActivate: [SessionGuard]
},{
    path: 'trainer',
    component: TrainerPage,
    canActivate: [SessionGuard]
},{
    path: 'pokemons/:id',
    component: PokemonDetailPage,
    canActivate: [SessionGuard]
},{
    path: '**',
    component: NotFoundPage
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
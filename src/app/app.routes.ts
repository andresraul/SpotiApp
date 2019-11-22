import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearshComponent } from './components/searsh/searsh.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearshComponent},
    {path: 'artist/:id', component: ArtistaComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];


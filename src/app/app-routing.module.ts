import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchCharacterComponent } from './components/search-character/search-character.component';
import { SearchLocationComponent } from './components/search-location/search-location.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'search-character', component: SearchCharacterComponent },
  { path: 'search-location', component: SearchLocationComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '',  pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

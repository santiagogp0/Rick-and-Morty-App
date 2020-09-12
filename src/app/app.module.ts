import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ryMService } from './services/rym.service';
import { SearchCharacterComponent } from './components/search-character/search-character.component';
import { SearchLocationComponent } from './components/search-location/search-location.component';
import { LoadComponent } from './components/load/load.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    LocationsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    SearchCharacterComponent,
    SearchLocationComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ryMService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

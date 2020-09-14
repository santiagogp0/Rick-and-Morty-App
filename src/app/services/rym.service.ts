import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ryMService {

  private mainUrl = 'https://rickandmortyapi.com/api/';

  constructor(
    private http: HttpClient
  ) { }

  public getCharacters() {
    return this.http.get(`${ this.mainUrl }character`);
  }

  public getAllLocations() {
    return this.http.get(`${ this.mainUrl }location`);
  }

  public searchCharacter( query: string ) {
    return this.http.get(`${ this.mainUrl }character/?name=${ query }`);
  }

  public searchLocation( query: string ) {
    return this.http.get(`${ this.mainUrl }location/?name=${query}`);
  }

  public getCharactersById( id: string ) {
    return this.http.get(`${ this.mainUrl }character/${id}`);
  }

  public getLocationById( id: string ) {
    return this.http.get(`${ this.mainUrl }location/${id}`);
  }

}

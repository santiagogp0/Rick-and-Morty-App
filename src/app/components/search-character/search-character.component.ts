import { Component, OnInit } from '@angular/core';
import { ryMService } from 'src/app/services/rym.service';

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.css']
})
export class SearchCharacterComponent implements OnInit {

  charactersList: any[] = [];
  loading: boolean;

  constructor(
    private rYMSrv: ryMService
  ) { }

  ngOnInit(): void {
  }

  searchCharacter( query: string ) {
    console.log( query );
    this.loading = true;
    this.rYMSrv.searchCharacter( query ).subscribe( (data: any) => {
      this.charactersList = data;
      this.loading = false;
    } );
  }

}

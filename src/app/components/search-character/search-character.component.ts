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
  notFound: boolean;

  constructor(
    private rYMSrv: ryMService
  ) { }

  ngOnInit(): void {
  }

  searchCharacter( query: string ) {
      this.loading = true;
      this.rYMSrv.searchCharacter( query ).subscribe( (data: any) => {
        this.charactersList = data.results;
        this.loading = false;
      }, error => {
        this.notFound = true;
      });
  }

}

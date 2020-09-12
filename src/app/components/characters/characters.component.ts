import { Component, OnInit } from '@angular/core';
import { ryMService } from 'src/app/services/rym.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public charactersList: any[] = [];
  public loading: boolean;

  constructor(
    private rYMSrv: ryMService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.rYMSrv.getCharacters().subscribe( resp => {
      this.charactersList = resp['results'];
      this.loading = false;
    } );
  }

}

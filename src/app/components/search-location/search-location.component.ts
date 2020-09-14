import { Component, OnInit } from '@angular/core';
import { ryMService } from 'src/app/services/rym.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {

  locationList: any[] = [];
  loading: boolean;
  notFound: boolean;

  constructor(
    private rYMSrv: ryMService
  ) { }

  ngOnInit(): void {
  }

  searchLocation( query: string ) {
    this.loading = true;
    this.rYMSrv.searchLocation( query ).subscribe( data => {
      this.locationList = data['results'];
      this.loading = false;
    }, error => {
      this.notFound = true;
    } );
  }

}

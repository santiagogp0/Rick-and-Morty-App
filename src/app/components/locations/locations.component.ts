import { Component, OnInit } from '@angular/core';
import { ryMService } from '../../services/rym.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locationsList: any[] = [];
  loading: boolean;

  constructor(
    private rYMSrv: ryMService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.rYMSrv.getAllLocations().subscribe( resp => {
      this.locationsList = resp['results'];
      this.loading = false;
    } );

  }

}

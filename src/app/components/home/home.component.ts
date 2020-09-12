import { Component, OnInit } from '@angular/core';
import { ryMService } from '../../services/rym.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private ryMSrv: ryMService
  ) { }

  ngOnInit(): void {
    this.ryMSrv.getCharacters().subscribe( resp => console.log( resp ) );
  }

}

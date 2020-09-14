import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ryMService } from '../../services/rym.service';

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.css']
})
export class DragNDropComponent implements OnInit {

  public characters: any[] = [];
  public loading: boolean;

  constructor(
    private rYMSrv: ryMService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.rYMSrv.getCharacters().subscribe( data => {
      this.characters = data['results'];
      this.loading = false;
    } );
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.characters, event.previousIndex, event.currentIndex);
  }

}

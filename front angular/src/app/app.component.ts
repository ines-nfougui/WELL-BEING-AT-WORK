import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEventComponent } from './add-event/add-event.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dg : MatDialog){

  }


  title = 'test';


  popAddEvent(){
    this.dg.open(AddEventComponent);
  }

}

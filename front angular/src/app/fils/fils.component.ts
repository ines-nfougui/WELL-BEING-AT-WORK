import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent  {
@Output() 
parentfunction:EventEmitter<any> = new EventEmitter()
 data =  {name :"aniel " , age:24} 
  constructor() { }

  ngOnInit(): void {
   
  }
  sendData(){
    
    this.parentfunction.emit(this.data)
  }

}

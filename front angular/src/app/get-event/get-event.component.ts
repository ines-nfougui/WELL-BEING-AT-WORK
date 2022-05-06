import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ParticipeService } from 'src/service/participe.service';
import { ProductsService } from 'src/service/products.service';
import { Event } from '../model/Event';

@Component({
  selector: 'app-get-event',
  templateUrl: './get-event.component.html',
  styleUrls: ['./get-event.component.css']
})
export class GetEventComponent implements OnInit {
  listeven: any
  bestEvent;
  constructor(
    private servp: ProductsService,
    private _sanitizer : DomSanitizer,
    private prtcp : ParticipeService
    ) { }

  ngOnInit(): void {
    this.refreshFeed()
    this.getBestEvent();
  }

  refreshFeed(){
    this.servp.getUnarchivedEvents().subscribe((data: Event[]) => {
      this.listeven = data
      console.log(this.listeven)
    });
  }

  getBestEvent(){
    this.servp.getBest().subscribe(res => {
      this.bestEvent = res;
    })
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }


  /**OVER HERE */

  participer(idEvent : number){
    this.prtcp.participate(idEvent,3).subscribe(()=>{
      this.refreshFeed();
      this.getBestEvent();
    })
  }

  checkIfSubscribed(idEvent : number) : boolean {
    let decision : boolean
    this.prtcp.check_if_subscribed(idEvent,1).subscribe(res => {
      decision = res
    })
    return decision;
  }


}

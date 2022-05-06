import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/model/Event';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  addUrl: string = 'api/event/add-event'
  addWithImage : string = 'http://localhost:8082/event/addI'
  productsUrl: string = 'api/products'
  getallurl: string = 'api/event//retrieve-all-evenemnts'
  getbyid: string = 'http://localhost:8082/event/get-event-byId/'
  deleteById : string = 'http://localhost:8082/event/remove-evenement/';
  up : string = 'http://localhost:8082/event/modify-evenement';
  participants : string = 'http://localhost:8082/participe/retrieve-all-participe-byEvent/';
  acts : string = "http://localhost:8082/actualite/get-actualites"
  bestEvent : string = 'http://localhost:8082/event/BestEvent';
  getUnarchived : string = 'http://localhost:8082/event/get_non_archived_event'
  archive : string = 'http://localhost:8082/event/archive_event'
  unarchive : string = 'http://localhost:8082/event/unarchive_event'
  constructor(private http: HttpClient) { }



  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.getallurl)
  }

  getBest() : Observable<any>{
    return this.http.get(this.bestEvent);
  }

  addEvent(event: Event) {
    return this.http.post<Event>(this.addUrl, event);
  }

  addEventWithImage(fd : FormData) : Observable<any> {
    return this.http.post(this.addWithImage,fd);
  }

  getEventById(idEvent: number): Observable<Event[]> {
    return this.http.get<Event[]>(this.getbyid + idEvent)
  }

  deleteEvent(idEvent : number) : Observable<any> {
    return this.http.delete(this.deleteById+idEvent);
  }

  updateEvent(event) : Observable<any>{
    return this.http.put(this.up,event);
  }

  getParticipants(idEvent : number) : Observable<any>{
    return this.http.get(this.participants+idEvent);
  }

  getActualités() : Observable<any>{
    return this.http.get(this.acts);
  }

  getUnarchivedEvents() : Observable<any>{
    return this.http.get(this.getUnarchived);
  }

  archiveEvent(idEvent : number) : Observable<any>{
    return this.http.put(this.archive+"/"+idEvent,null);
  }

  unarchiveEvent(idEvent : number) : Observable<any>{
    return this.http.put(this.unarchive+"/"+idEvent,null);
  }


}

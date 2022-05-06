import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipeService {

  prefix : string = 'http://localhost:8082';

  constructor(
    private http : HttpClient
  ) { }

  participate(idEvent : number, idUser : number) : Observable<any> {
    return this.http.get(this.prefix+"/affecter/"+idEvent+"/"+idUser)
  }

  check_if_subscribed(idEvent : number, idUser : number) : Observable<any>{
    return this.http.get(this.prefix+"/check_if_subscribed/"+idEvent+"/"+idUser);
  }

  



}

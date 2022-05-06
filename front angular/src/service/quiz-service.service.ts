import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/model/Quiz';
import { Answer } from 'src/app/quiz/Answer';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  addUrl:string='http://localhost:8082/quiz/add-quiz'
  getallQuiz :string='http://localhost:8082/quiz/retrieve-all-quiz'
  getbyid: string='http://localhost:8082/quiz/get-quiz-byId'
  deleteById: string='http://localhost:8082/quiz/remove-quiz/'
  up: string='http://localhost:8082/quiz/modify-Quiz'
  answer : string = 'http://localhost:8082/add-answer/'


  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.getallQuiz)
  }

  addQuiz(quiz : Quiz) {
    return this.http.post(this.addUrl, quiz)
  }
  getQuizById(idQ: number): Observable<any> {
    return this.http.get(this.getbyid + idQ)
  }

  
  delteQuiz(idQ : number) : Observable<any> {
    return this.http.delete(this.deleteById+idQ);
  }

  updateQuiz(quiz: Quiz) : Observable<any>{
    return this.http.put(this.up,quiz);
  }

  addAnswer(idUser : number, idQuestion : number , answer : Answer) : Observable<any>{
    return this.http.post(this.answer+idUser+"/"+idQuestion,answer);
  }

  getBestUser() : Observable<any>{
    return this.http.get('http://localhost:8082/bestUser');
  }

}

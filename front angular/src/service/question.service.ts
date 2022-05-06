import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/model/Question';
import { Answer } from 'src/app/quiz/Answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  
  getallU="api/question/retrieve-all-question"

  remove = "http://localhost:8082/question/remove-question/"




  constructor(private http:HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>("http://localhost:8082/question/retrieve-all-question")
  }

  addQuestion(question : Question, idQuiz : number) : Observable<any> {
    return this.http.post("http://localhost:8082/question/add-question/"+idQuiz,question);
  }

  deleteQuestion(id : number) : Observable<any>{
    return this.http.delete(this.remove+id)
  }

  addBatch(answers : any) : Observable<any>{
    return this.http.post("http://localhost:8082/add-answers-batch",answers);
  }

  addOneAnswer(fd : FormData) : Observable<any>{
    return this.http.post("http://localhost:8082/add-one-answer",fd);
  }

}

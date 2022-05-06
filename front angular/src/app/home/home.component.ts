import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductsService } from 'src/service/products.service';
import { QuizServiceService } from 'src/service/quiz-service.service';
import { QuizQuestionsComponent } from '../quiz/quiz-questions/quiz-questions.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service : ProductsService,
    private _sanitizer : DomSanitizer,
    private dg : MatDialog,
    private qs : QuizServiceService
  ) { }

  actualites : any;

  ngOnInit(): void {
    this.getActulaites();
    this.getBestUser()
  }

  bestUser! : any;

  getActulaites(){
    this.service.getActualités().subscribe(res => {
      this.actualites = res;
      console.log(this.actualites)
    })
  }

  getBestUser(){
    this.qs.getBestUser().subscribe(res =>{
      this.bestUser = res;
    })
  }

  convert(base64String) {
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String)
  }

  getQuizQuestions(questions : any){
    this.dg.open(QuizQuestionsComponent,{
      data : {
        questions : questions
      },
      width : "80%"
    });
  }

}

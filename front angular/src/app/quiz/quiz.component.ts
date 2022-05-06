import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizServiceService } from 'src/service/quiz-service.service';
import { Quiz } from '../model/Quiz';
import { QuestionComponent } from '../question/question.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: [
    './quiz.component.css',
    './assets/css/nucleo-icons.css',
    './assets/css/nucleo-svg.css',
    './assets/css/nucleo-svg.css',
    './assets/css/argon-dashboard.css'
  ]
})
export class QuizComponent implements OnInit {
  listqui: any
  constructor(
    private serv: QuizServiceService,
    private dg : MatDialog
    ) { }

  ngOnInit(): void {
    this.serv.getAll().subscribe((data: Quiz[]) => {
      this.listqui = data
      console.log(this.listqui)

    })
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
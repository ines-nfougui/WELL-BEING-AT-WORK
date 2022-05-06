import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuizServiceService } from 'src/service/quiz-service.service';
import { AddQuestionToQuizComponent } from '../add-question-to-quiz/add-question-to-quiz.component';
import { AddQuizComponent } from '../add-quiz/add-quiz.component';
import { ConfirmDeleteQComponent } from '../confirm-delete-q/confirm-delete-q.component';
import { QuizDetailsComponent } from '../quiz-details/quiz-details.component';
import { UpdateQuizComponent } from '../update-quiz/update-quiz.component';

@Component({
  selector: 'app-quiz-admin',
  templateUrl: './quiz-admin.component.html',
  styleUrls: ['./quiz-admin.component.css',
    './assets/css/nucleo-icons.css',
    './assets/css/nucleo-svg.css',
    './assets/css/nucleo-svg.css',
    './assets/css/argon-dashboard.css']
})
export class QuizAdminComponent implements OnInit {

  listqui: any;

  constructor(
    private servp: QuizServiceService,
    private dg: MatDialog
  ) { }

  ngOnInit(): void {
    this.refreshFeed();
  }

  refreshFeed() {
    this.servp.getAll().subscribe(res => {
      this.listqui = res
    });
  }

  addQuizDialog() {
    this.dg.open(AddQuizComponent).afterClosed().subscribe(() => {
      this.refreshFeed();
    })
  }

  getQuizUsingId(id: number): any {
    this.servp.getQuizById(id).subscribe((res) => {
      return res.dateS;
    })
  }

  popUpQuestions(questions: any) {
    this.dg.open(QuizDetailsComponent, {
      data: {
        data: questions
      }
    }).afterClosed().subscribe(() => {
      this.refreshFeed();
    })
  }

  popUpAddQuestion(idQuiz: number) {
    this.dg.open(AddQuestionToQuizComponent, {
      data: {
        id: idQuiz
      }
    }).afterClosed().subscribe(() => {
      this.refreshFeed();
    })
  }

  confirmDelete(idQ: number) {
    this.dg.open(ConfirmDeleteQComponent, {
      data: {
        'id': idQ
      }
    }).afterClosed().subscribe(() => {
      this.refreshFeed();
    })
  }
  openUpdate(quiz: any) {
    this.dg.open(UpdateQuizComponent, {
      data: {
        'quiz': quiz
      }
    }).afterClosed().subscribe(() => {
      this.refreshFeed();
    })
  }



}



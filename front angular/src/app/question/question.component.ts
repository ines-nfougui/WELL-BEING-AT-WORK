import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from 'src/service/question.service';
import { QuizServiceService } from 'src/service/quiz-service.service';
import { AdminAddQuestionComponent } from '../admin-add-question/admin-add-question.component';
import { Question } from '../model/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css',
    './assets/css/nucleo-icons.css',
    './assets/css/nucleo-svg.css',
    './assets/css/nucleo-svg.css',
    './assets/css/argon-dashboard.css']
})
export class QuestionComponent implements OnInit {
  listquestion: any
  constructor(
    private questionService: QuestionService,
    private quizService: QuizServiceService,
    private dialog: MatDialog
  ) { }


  questions: any;

  ngOnInit(): void {
    this.refreshFeed();
  }


  refreshFeed() {
    this.questionService.getAll().subscribe(res => {
      this.questions = res;
    })
  }

  popAddQuestion() {
    this.dialog.open(AdminAddQuestionComponent).afterClosed().subscribe(() => {
      this.refreshFeed();
    })
  }

  getQuizById(id: any): string {
    let dt: string
    this.quizService.getQuizById(id).subscribe(res => {
      dt = res.dateS;
    })
    return dt;
  }

  popConfirmDeleteQuestion(id: number) {
    this.dialog.open(ConfirmDeleteQuestion, {
      data: {
        id: id
      }
    }).afterClosed().subscribe(() => {
      this.refreshFeed();
    })
  }

}

@Component({
  selector: 'app-admin-confirm-delete-question',
  templateUrl: './confirm-delete.component.html',
  styleUrls: [
    './question.component.css',
    './assets/css/nucleo-icons.css',
    './assets/css/nucleo-svg.css',
    './assets/css/nucleo-svg.css',
    './assets/css/argon-dashboard.css'
  ]
})
export class ConfirmDeleteQuestion implements OnInit {

  constructor(
    private questionService: QuestionService,
    private quizService: QuizServiceService,
    private dialog: MatDialogRef<ConfirmDeleteQuestion>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private sb: MatSnackBar
  ) { }

  id: number;

  ngOnInit(): void {
    this.id = this.data['id']
  }

  confirmDelete(id: number) {
    this.questionService.deleteQuestion(id).subscribe(() => {
      this.dialog.close();
      this.sb.open("Supprimé", "Ok", {
        duration: 3000
      })
    })
  }


}
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizServiceService } from 'src/service/quiz-service.service';

@Component({
  selector: 'app-confirm-delete-q',
  templateUrl: './confirm-delete-q.component.html',
  styleUrls: ['./confirm-delete-q.component.css']
})
export class ConfirmDeleteQComponent implements OnInit {

  constructor(
    private thisDialog: MatDialogRef<ConfirmDeleteQComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private quizservice: QuizServiceService,
    private sb: MatSnackBar
  ) { }

  idQ: number;

  ngOnInit(): void {
    this.idQ = this.data['id']
  }

  no() {
    this.thisDialog.close();
  }


  yes() {
    this.quizservice.delteQuiz(this.data['id']).subscribe(() => {
      this.thisDialog.close();
      this.sb.open('Quiz Supprimé', 'Ok', {
        duration: 3000
      })
    })
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizServiceService } from 'src/service/quiz-service.service';
import { ConfirmDeleteQuestionComponent } from '../confirm-delete-question/confirm-delete-question.component';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit {

  constructor(
    private quizService : QuizServiceService,
    @Inject(MAT_DIALOG_DATA) private data : any,
    private thisDg : MatDialogRef<QuizDetailsComponent>,
    private sb : MatSnackBar,
    private dg : MatDialog
  ) { }

  questions : any;

  ngOnInit(): void {
    this.questions = this.data['data'];
  }

  popUpConfirmDelete(id : number){
    this.dg.open(ConfirmDeleteQuestionComponent,{
      data : {
        id : id
      }
    }).afterClosed().subscribe(()=>{
      this.thisDg.close();
    })
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from 'src/service/question.service';
import { QuizServiceService } from 'src/service/quiz-service.service';

@Component({
  selector: 'app-confirm-delete-question',
  templateUrl: './confirm-delete-question.component.html',
  styleUrls: ['./confirm-delete-question.component.css']
})
export class ConfirmDeleteQuestionComponent implements OnInit {

  constructor(
    private questionService: QuestionService,
    private quizService : QuizServiceService,
    private dialog: MatDialogRef<ConfirmDeleteQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) private data : any,
    private sb : MatSnackBar
  ) { }

  id : number;

  ngOnInit(): void {
    this.id = this.data['id']
  }

  confirmDelete(id : number){
    this.questionService.deleteQuestion(id).subscribe(()=>{
      this.dialog.close();
      this.sb.open("Supprimé","Ok",{
        duration : 3000
      })
    })
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizServiceService } from 'src/service/quiz-service.service';
import { Quiz } from '../model/Quiz';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  form: FormGroup;

  constructor(private quizservice: QuizServiceService,
    private thisDg: MatDialogRef<UpdateQuizComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private sb: MatSnackBar
  ) { }


  quiz: Quiz;

  ngOnInit(): void {
    this.quiz = new Quiz();

    // console.log(new Date(this.data['event'].dateC).toISOString().slice(0,10))
    // console.log(new Date(this.data['event'].dateS).toISOString().slice(0,10))
    this.form = new FormGroup({
      idQ: new FormControl(this.data['quiz'].idQ, [Validators.required]),
      dateC: new FormControl(new Date(this.data['event'].dateC).toISOString().slice(0, 10), [Validators.required]),
      dateS: new FormControl(new Date(this.data['event'].dateS).toISOString().slice(0, 10), [Validators.required])
    })
  }



  submit() {
    if (this.form.valid) {
      this.quiz.idQ = this.data['quiz'].idQ
      this.quiz.dateC = this.form.value.dateCom
      this.quiz.dateS = this.form.value.dateFin


      //console.log(this.quiz);
      this.quizservice.updateQuiz(this.quiz).subscribe(() => {
        this.thisDg.close();
        this.sb.open("Quiz Modifié", "Ok", {
          duration: 3000
        })
      })
    }
  }

}

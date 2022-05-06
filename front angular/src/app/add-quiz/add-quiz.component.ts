import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { QuizServiceService } from 'src/service/quiz-service.service';
import { Quiz } from '../model/Quiz';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css',
    './assets/css/nucleo-icons.css',
    './assets/css/nucleo-svg.css',
    './assets/css/nucleo-svg.css',
    './assets/css/argon-dashboard.css']
})
export class AddQuizComponent implements OnInit {

  constructor(
    private quizservice: QuizServiceService,
    private router: Router,
    private sb: MatSnackBar,
    private thisDialog: MatDialogRef<AddQuizComponent>
  ) { }

  form: FormGroup;
  quiz: Quiz;

  ngOnInit(): void {
    this.quiz = new Quiz
    this.form = new FormGroup({
      nom : new FormControl('',[Validators.required]),
      dateS: new FormControl('', [Validators.required]),
    })
  }

  submit() {
    if (this.form.valid) {
      this.quiz.dateS = new Date(this.form.value.dateS)
      this.quiz.nom = this.form.value.nom
      console.log(this.quiz)
      //console.log(this.quiz)
      this.quizservice.addQuiz(this.quiz).subscribe(() => {
        this.thisDialog.close();
      })
    } else {
      console.log("NO")
      this.sb.open("Vous devez Remplir tous les Champs", "Compris", {
        duration: 3000
      })
    }
  }

}

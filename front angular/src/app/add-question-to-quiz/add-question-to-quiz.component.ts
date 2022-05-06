import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from 'src/service/question.service';
import { Question } from '../model/Question';

@Component({
  selector: 'app-add-question-to-quiz',
  templateUrl: './add-question-to-quiz.component.html',
  styleUrls: ['./add-question-to-quiz.component.css',
    './assets/css/nucleo-icons.css',
    './assets/css/nucleo-svg.css',
    './assets/css/nucleo-svg.css',
    './assets/css/argon-dashboard.css']
})
export class AddQuestionToQuizComponent implements OnInit {

  constructor(
    private serviceQuestion: QuestionService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private thisDialog: MatDialogRef<AddQuestionToQuizComponent>,
    private sb: MatSnackBar
  ) { }

  form: FormGroup;

  question: Question

  idQuiz: number

  ngOnInit(): void {
    this.idQuiz = this.data['id']

    this.form = new FormGroup({
      question: new FormControl('', [Validators.required]),
      option1: new FormControl('', [Validators.required]),
      option2: new FormControl('', [Validators.required]),
      option3: new FormControl('', [Validators.required]),
      correctRep: new FormControl('', [Validators.required]),
    })
  }

  submit() {
    if (this.form.valid) {
      this.question = new Question();
      this.question.question = this.form.value.question
      this.question.option1 = this.form.value.option1
      this.question.option2 = this.form.value.option2
      this.question.option3 = this.form.value.option3
      this.question.croorectRep = this.form.value.correctRep
      this.serviceQuestion.addQuestion(this.question, this.idQuiz).subscribe(() => {
        this.thisDialog.close();
        this.sb.open("Ajoutée avec succées", "Ok", {
          duration: 3000
        })
      })
    } else {
      this.sb.open("Veuillez Remplir tous les Champs", "Compris", {
        duration: 3000
      })
    }
  }

}

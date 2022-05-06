import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from 'src/service/question.service';
import { QuizServiceService } from 'src/service/quiz-service.service';
import { Question } from '../model/Question';

@Component({
  selector: 'app-admin-add-question',
  templateUrl: './admin-add-question.component.html',
  styleUrls: [
    './admin-add-question.component.css',
    './assets/css/nucleo-icons.css',
    './assets/css/nucleo-svg.css',
    './assets/css/nucleo-svg.css',
    './assets/css/argon-dashboard.css'
  ]
})
export class AdminAddQuestionComponent implements OnInit {

  constructor(
    private questionService : QuestionService,
    private quizService : QuizServiceService,
    private thisDialog : MatDialogRef<AdminAddQuestionComponent>,
    private sb : MatSnackBar
  ) { }

  form : FormGroup

  question : Question

  quizs : any;

  ngOnInit(): void {
    this.quizService.getAll().subscribe(res => {
      this.quizs = res
      console.log(res)
    })
    this.form = new FormGroup({
      question : new FormControl('',[Validators.required]),
      option1 : new FormControl('',[Validators.required]),
      option2 : new FormControl('',[Validators.required]),
      option3 : new FormControl('',[Validators.required]),
      correctRep : new FormControl('',[Validators.required]),
      associatedQuiz : new FormControl('',[Validators.required])
    })
  }

  log(){
    console.log(this.selectedOption)
  }

  selectedOption : number;

  submit(){
    if(this.form.valid){
      this.question = new Question();
      this.question.question = this.form.value.question
      this.question.option1 = this.form.value.option1
      this.question.option2 = this.form.value.option2
      this.question.option3 = this.form.value.option3
      this.question.croorectRep = this.form.value.correctRep
      this.questionService.addQuestion(this.question,this.selectedOption).subscribe(()=>{
        this.thisDialog.close();
        this.sb.open("Ajoutée avec succées","Ok",{
          duration : 3000
        })
      })
    }else {
      this.sb.open("Veuillez Remplir tous les Champs","Compris",{
        duration: 3000
      })
    }
  }

}

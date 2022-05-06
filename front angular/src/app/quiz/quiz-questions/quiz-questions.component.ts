import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionService } from 'src/service/question.service';
import { Answer } from '../Answer';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data : any,
    private questionService : QuestionService,
    private thisDg : MatDialogRef<QuizQuestionsComponent>
  ) { }

  questions : any;

  form : FormGroup;

  ngOnInit(): void {
    this.questions = this.data['questions']
    this.form = new FormGroup({
      response1 : new FormControl('',[Validators.required]),
      response2 : new FormControl(''),
      response3 : new FormControl(''),
      response4 : new FormControl(''),
      response5 : new FormControl('')
    })
  }

  reponse : Answer

  submit(){
    var responses = new Array();
    
    if(this.form.value.response1 != ''){
      this.reponse = new Answer();
      this.reponse.answer = this.form.value.response1
      let fd1 = new FormData();
      fd1.append("answer",this.form.value.response1)
      fd1.append("idUser","2")
      fd1.append("idQuestion",this.questions[0].idQ)
      this.reponse.iduser = 1
      this.reponse.idqUQuestion = this.questions[0].idQ
      this.questionService.addOneAnswer(fd1).subscribe();
      responses.push(this.reponse);
    }
    if(this.form.value.response2 != ''){
      this.reponse = new Answer();
      this.reponse.answer = this.form.value.response2
      this.reponse.iduser = 1
      this.reponse.idqUQuestion = this.questions[1].idQ
      let fd2 = new FormData();
      fd2.append("answer",this.form.value.response2)
      fd2.append("idUser","2")
      fd2.append("idQuestion",this.questions[1].idQ)
      this.questionService.addOneAnswer(fd2).subscribe();
      responses.push(this.reponse);
    }
    if(this.form.value.response3 != ''){
      this.reponse = new Answer();
      this.reponse.answer = this.form.value.response3
      this.reponse.iduser = 1
      this.reponse.idqUQuestion = this.questions[2].idQ
      let fd3 = new FormData();
      fd3.append("answer",this.form.value.response3)
      fd3.append("idUser","2")
      fd3.append("idQuestion",this.questions[2].idQ)
      this.questionService.addOneAnswer(fd3).subscribe();
      responses.push(this.reponse);
    }
    if(this.form.value.response4 != ''){
      this.reponse = new Answer();
      this.reponse.answer = this.form.value.response4
      this.reponse.iduser = 1
      this.reponse.idqUQuestion = this.questions[3].idQ
      let fd4 = new FormData();
      fd4.append("answer",this.form.value.response4)
      fd4.append("idUser","2")
      fd4.append("idQuestion",this.questions[3].idQ)
      this.questionService.addOneAnswer(fd4).subscribe();
      responses.push(this.reponse);
    }
    if(this.form.value.response5 != ''){
      this.reponse = new Answer();
      this.reponse.answer = this.form.value.response5
      this.reponse.iduser = 1
      this.reponse.idqUQuestion = this.questions[0].idQ
      let fd5 = new FormData();
      fd5.append("answer",this.form.value.response5)
      fd5.append("idUser","2")
      fd5.append("idQuestion",this.questions[4].idQ)
      this.questionService.addOneAnswer(fd5).subscribe();
      responses.push(this.reponse);
    }
    this.thisDg.close();
  }

}

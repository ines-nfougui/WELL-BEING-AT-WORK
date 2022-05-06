import { NgModule,Input,EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { GetEventComponent } from './get-event/get-event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { QuizComponent } from './quiz/quiz.component';
import { ConfirmDeleteQuestion, QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'
import { MatButtonModule } from '@angular/material/button';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { EvenementsAdminComponent, UpdateEventComponent } from './evenements-admin/evenements-admin.component';
import { NewsComponent } from './news/news.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { QuizQuestionsComponent } from './quiz/quiz-questions/quiz-questions.component';
import { MatStepperModule } from '@angular/material/stepper';
import { QuizAdminComponent } from './quiz-admin/quiz-admin.component';
import { QuizDetailsComponent } from './quiz-details/quiz-details.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmDeleteQuestionComponent } from './confirm-delete-question/confirm-delete-question.component';
import { UpdateQuizComponent } from './update-quiz/update-quiz.component';
import { AddQuestionToQuizComponent } from './add-question-to-quiz/add-question-to-quiz.component';
import { ConfirmDeleteQComponent } from './confirm-delete-q/confirm-delete-q.component';
import { AdminAddQuestionComponent } from './admin-add-question/admin-add-question.component'

@NgModule({
  declarations: [
    AppComponent,
    GetEventComponent,
    QuizComponent,
    QuestionComponent,
    AddEventComponent,
    HeaderComponent,
    HomeComponent,
    AdminHeaderComponent,
    EvenementsAdminComponent,
    UpdateEventComponent,
    NewsComponent,
    QuizQuestionsComponent,
    QuizAdminComponent,
    QuizDetailsComponent,
    AddQuizComponent,
    ConfirmDeleteQuestionComponent,
    UpdateQuizComponent,
    AddQuestionToQuizComponent,
    ConfirmDeleteQComponent,
    AdminAddQuestionComponent,
    ConfirmDeleteQuestion
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatStepperModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

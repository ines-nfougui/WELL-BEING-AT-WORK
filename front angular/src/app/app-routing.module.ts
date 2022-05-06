import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AddEventComponent } from './add-event/add-event.component';
import { EvenementsAdminComponent } from './evenements-admin/evenements-admin.component';
import { GetEventComponent } from './get-event/get-event.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { QuestionComponent } from './question/question.component';
import { QuizAdminComponent } from './quiz-admin/quiz-admin.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  // { path: 'getevent',component:GetEventComponent },
  //{ path: '**', component:NotfoundComponent},
  { path: 'client/quiz',component:QuizComponent },
  { path: 'admin/questions',component:QuestionComponent },
  { path: 'client/home', component:HomeComponent},
  { path: 'client/events', component:GetEventComponent},
  { path: 'admin/events' , component:EvenementsAdminComponent},
  { path: 'admin/quiz' , component : QuizAdminComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

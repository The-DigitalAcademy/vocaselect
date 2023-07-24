import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeQuizComponent } from './Pages/welcome-quiz/welcome-quiz.component';
import { LoginComponent } from './Pages/login/login.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { DreamJobComponent } from './Pages/dream-job/dream-job.component';

const routes: Routes = [

  {path : 'welcome-quize' , component: WelcomeQuizComponent },
  {path : 'login' , component: LoginComponent },
  {path : 'landing' , component: LandingPageComponent},
  {path : 'subjects' , component: SubjectsComponent },
  {path: 'dream-job', component: DreamJobComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

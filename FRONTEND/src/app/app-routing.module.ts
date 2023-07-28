import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { DreamJobComponent } from './Pages/dream-job/dream-job.component';
import { RegisterComponent } from './Pages/register/register.component';
import { WelcomeQuizComponent } from './Pages/welcome-quiz/welcome-quiz.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizQuestionsComponent } from './Pages/quiz-questions/quiz-questions.component';

const routes: Routes = [
 { path: 'login', component:LoginComponent},
 { path: 'register', component: RegisterComponent},
 { path:'', component: LandingPageComponent},
 { path: 'subjects', component: SubjectsComponent},
 { path: 'dream-job', component: DreamJobComponent},
 {path:'welcome-quiz', component: WelcomeQuizComponent},
 {path:'navbar', component:NavbarComponent},
 {path:'quiz-questions', component:QuizQuestionsComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

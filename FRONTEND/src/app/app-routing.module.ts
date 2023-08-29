import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardsService } from './_services/auth-guards.service';

import { NavbarComponent } from './components/navbar/navbar.component';

import { WelcomeQuizComponent } from './Pages/_Quiz/welcome-quiz/welcome-quiz.component';
import { LoginComponent } from './Pages/_Auth/login/login.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { SubjectmarksComponent } from './Pages/subjectmarks/subjectmarks.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { DreamJobComponent } from './Pages/dream-job/dream-job.component';
import { RegisterComponent } from './Pages/_Auth/register/register.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { FillCareerComponent } from './Pages/fill-career/fill-career.component';

import { RequestPasswordResetComponent } from './Pages/request-password-reset/request-password-reset.component';
import { PasswordResetComponent } from './Pages/password-reset/password-reset.component';
import { ViewCareeerComponent } from './Pages/view-careeer/view-careeer.component';

import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { QuizQuestionsComponent } from './Pages/_Quiz/quiz-questions/quiz-questions.component';
import { CourseDetailsComponent } from './Pages/course-details/course-details.component';
import { QuizCourseInfoComponent } from './Pages/_Quiz/quiz-course-info/quiz-course-info.component';
import { TimelineComponent } from './Pages/timeline/timeline.component';
import { ProfileComponent } from './Pages/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'subjects', component: SubjectsComponent , canActivate: [AuthGuardsService]},
  { path: 'dream-job', component: DreamJobComponent , canActivate: [AuthGuardsService]},
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuardsService]},
  { path: 'fill-career', component: FillCareerComponent , canActivate: [AuthGuardsService]},
  { path: 'welcome-quize', component: WelcomeQuizComponent , canActivate: [AuthGuardsService]},
  { path: 'subjectmarks', component: SubjectmarksComponent , canActivate: [AuthGuardsService]},
  { path: 'hamburger', component: HamburgerComponent},
  { path: 'nav', component: NavbarComponent},
  { path: 'passwordReset/:email', component: PasswordResetComponent},
  { path: 'forgotPassword', component: RequestPasswordResetComponent},
  { path: 'subjects', component: SubjectsComponent },
  { path: 'dream-job', component: DreamJobComponent, data: { showNav: true }},
  { path: 'home', component: HomepageComponent },
  { path: 'fill-career', component: FillCareerComponent },
  { path: 'welcome-quiz', component: WelcomeQuizComponent },
  { path: 'subjectmarks', component: SubjectmarksComponent },
  { path: 'login', component: RegisterComponent },
  { path: 'register', component: LoginComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'course-details', component: CourseDetailsComponent},
  { path: 'quizSelectedCourse', component: QuizCourseInfoComponent},
  { path: 'hamburger', component:HamburgerComponent},
  { path: 'timeline', component: TimelineComponent },
  { path: 'nav', component: NavbarComponent},
  { path: 'viewcareer', component: ViewCareeerComponent },
  {path: 'profile', component: ProfileComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'quiz-questions', component: QuizQuestionsComponent},
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardsService]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeQuizComponent } from './Pages/welcome-quiz/welcome-quiz.component';
import { LoginComponent } from './Pages/login/login.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { SubjectmarksComponent } from './Pages/subjectmarks/subjectmarks.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { DreamJobComponent } from './Pages/dream-job/dream-job.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { FillCareerComponent } from './Pages/fill-career/fill-career.component';
import { CareerChoiceComponent } from './Pages/career-choice/career-choice.component';
import { CoursesComponent } from './Pages/courses/courses.component';
import { QuizComponent } from './Pages/quiz/quiz.component';
import { Quiz2Component } from './Pages/quiz2/quiz2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewCareeerComponent } from './Pages/view-careeer/view-careeer.component';

import { CareersComponent } from './Pages/careers/careers.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { QuizQuestionsComponent } from './Pages/quiz-questions/quiz-questions.component';
import { CourseDetailsComponent } from './Pages/course-details/course-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'dream-job', component: DreamJobComponent, data: { showNav: true }},
  { path: 'home', component: HomepageComponent },
  { path: 'fill-career', component: FillCareerComponent },
  { path: 'welcome-quiz', component: WelcomeQuizComponent },
  { path: 'subjectmarks', component: SubjectmarksComponent },
  { path: 'careerChoice', component: CareerChoiceComponent},
  { path: 'welcome-quize', component: WelcomeQuizComponent },
  { path: 'login', component: RegisterComponent },
  { path: 'register', component: LoginComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'subjects', component: SubjectsComponent },
  //fill the career course details route
  { path: 'career/:courseName', component: CareerChoiceComponent},
  //Course Details - AI from fill career
  { path: 'course-details', component: CourseDetailsComponent},

  { path: 'career', component: CareerChoiceComponent},

  { path: 'courses', component: CoursesComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'quiz2', component: Quiz2Component},
  { path: 'hamburger', component:HamburgerComponent},

  { path: 'nav', component: NavbarComponent},
  { path: 'viewcareer', component: ViewCareeerComponent },
  
  { path: 'careers', component: CareersComponent},
  { path: 'quiz-questions', component: QuizQuestionsComponent},
  

  
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

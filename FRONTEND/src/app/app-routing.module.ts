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
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewCareeerComponent } from './Pages/view-careeer/view-careeer.component';
import { TimelineComponent } from './Pages/timeline/timeline.component';
import { CareersComponent } from './Pages/careers/careers.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'dream-job', component: DreamJobComponent, data: { showNav: true }},
  { path: 'home', component: HomepageComponent },
  { path: 'fill-career', component: FillCareerComponent },
  { path: 'welcome-quize', component: WelcomeQuizComponent },
  { path: 'login', component: RegisterComponent },
  { path: 'register', component: LoginComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'subjectmarks', component: SubjectmarksComponent },
  { path: 'hamburger', component: HamburgerComponent},
  { path: 'nav', component: NavbarComponent},
  { path: 'viewcareer', component: ViewCareeerComponent },
  { path: 'timeline', component: TimelineComponent},
  { path: 'careers', component: CareersComponent},
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

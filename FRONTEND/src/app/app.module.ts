import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { RegisterComponent } from './Pages/register/register.component';
import { LoginComponent } from './Pages/login/login.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { HomeComponent } from './Pages/home/home.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { CareersComponent } from './Pages/careers/careers.component';
import { CoursesPageComponent } from './Pages/courses-page/courses-page.component';
import { CareerQuestionComponent } from './Pages/career-question/career-question.component';
import { CareerChoiceComponent } from './Pages/career-choice/career-choice.component';
import { StartQuizPageComponent } from './Pages/start-quiz-page/start-quiz-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HamburgerComponent,
    RegisterComponent,
    LoginComponent,
    LandingPageComponent,
    HomeComponent,
    SubjectsComponent,
    CareersComponent,
    CoursesPageComponent,
    CareerQuestionComponent,
    CareerChoiceComponent,
    StartQuizPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

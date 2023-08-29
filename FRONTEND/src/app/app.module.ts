import { CUSTOM_ELEMENTS_SCHEMA, NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginComponent } from './Pages/_Auth/login/login.component';
import { RegisterComponent } from './Pages/_Auth/register/register.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';

import { CommonModule } from '@angular/common';
import { FillCareerComponent } from './Pages/fill-career/fill-career.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { DreamJobComponent } from './Pages/dream-job/dream-job.component';
import { SubjectmarksComponent } from './Pages/subjectmarks/subjectmarks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizQuestionsComponent } from './Pages/_Quiz/quiz-questions/quiz-questions.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { ViewCareeerComponent } from './Pages/view-careeer/view-careeer.component';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { CourseDetailsComponent } from './Pages/course-details/course-details.component';
import { TimelineComponent } from './Pages/timeline/timeline.component';
import { WelcomeQuizComponent } from './Pages/_Quiz/welcome-quiz/welcome-quiz.component';
import { PasswordResetComponent } from './Pages/password-reset/password-reset.component';
import { RequestPasswordResetComponent } from './Pages/request-password-reset/request-password-reset.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    SubjectsComponent,
    WelcomeQuizComponent,
    QuizQuestionsComponent,
    DreamJobComponent,
    FillCareerComponent,
    HomepageComponent,
    NavbarComponent,
    PasswordResetComponent,
    RequestPasswordResetComponent,
    ViewCareeerComponent,
    HamburgerComponent,
    SubjectmarksComponent,
    CourseDetailsComponent,
    TimelineComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
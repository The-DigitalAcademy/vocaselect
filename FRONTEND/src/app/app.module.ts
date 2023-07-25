import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { WelcomeQuizComponent } from './Pages/welcome-quiz/welcome-quiz.component';
import { UserService } from './_services/user.service';

import { CommonModule } from '@angular/common';
import { FillCareerComponent } from './Pages/fill-career/fill-career.component';

@NgModule({
  declarations: [
    AppComponent,
    HamburgerComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    SubjectsComponent,
    WelcomeQuizComponent,
    FillCareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [UserService],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

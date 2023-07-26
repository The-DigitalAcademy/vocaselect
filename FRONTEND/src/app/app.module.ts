import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { WelcomeQuizComponent } from './Pages/welcome-quiz/welcome-quiz.component';
import { DreamJobComponent } from './Pages/dream-job/dream-job.component';
import { CommonModule } from '@angular/common';
import { FillCareerComponent } from './Pages/fill-career/fill-career.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    HamburgerComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    SubjectsComponent,
    WelcomeQuizComponent,
    DreamJobComponent,
    FillCareerComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

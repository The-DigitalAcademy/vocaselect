import { NgModule,} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { WelcomeQuizComponent } from './Pages/welcome-quiz/welcome-quiz.component';
// import { UserService } from './_services/user.service';
import { CareerChoiceComponent } from './Pages/career-choice/career-choice.component';

import { CommonModule } from '@angular/common';
import { FillCareerComponent } from './Pages/fill-career/fill-career.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { DreamJobComponent } from './Pages/dream-job/dream-job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './Pages/courses/courses.component';
// import { SharedDataService } from './_services/_ChatGPT_Services/api-shared.service';

// import {MatButtonModule} from '@angular/material/button';

// import {MatSidenavModule} from '@angular/material/sidenav';
// import { authInterceptorProviders } from './helpers/auth.interceptor';



// import {MatSidenavModule} from '@angular/material/sidenav';
// import { authInterceptorProviders } from './helpers/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    SubjectsComponent,
    CareerChoiceComponent,
    WelcomeQuizComponent,
    DreamJobComponent,
    FillCareerComponent,
    HomepageComponent,
    CoursesComponent,
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule
    // MatSidenavModule, 
    // MatButtonModule 
  ],
  providers: [ ],
  schemas: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

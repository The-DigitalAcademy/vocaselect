import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { DreamJobComponent } from './Pages/dream-job/dream-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HamburgerComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    SubjectsComponent,
    DreamJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

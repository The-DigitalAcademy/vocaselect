import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginComponent } from './Pages/login/login.component';
import { SubjectsComponent } from './Pages/subjects/subjects.component';
import { DreamJobComponent } from './Pages/dream-job/dream-job.component';
import { RegisterComponent } from './Pages/register/register.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
 { path: 'login', component:LoginComponent},
 { path: 'register', component: RegisterComponent},
 { path:'landing', component: LandingPageComponent},
 { path: 'subjects', component: SubjectsComponent},
 { path: 'dream-job', component: DreamJobComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

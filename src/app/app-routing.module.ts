import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { ProfileComponent } from './login/profile/profile.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path : '',component:HomeComponent},
  {path : 'bookdetail',component:BookdetailComponent},
  {path : 'login',component:LoginComponent},
  {path : 'register',component:RegistrationComponent},
  {path : 'bookedit/:id',component:BookeditComponent},
  {path : 'bookcreate',component:BookcreateComponent},
  {path : 'profile',component:ProfileComponent },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

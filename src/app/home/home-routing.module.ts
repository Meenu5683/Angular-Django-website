import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailComponent } from '../bookdetail/bookdetail.component';


const routes: Routes = [
    {path: 'bookdetail' , component:BookdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
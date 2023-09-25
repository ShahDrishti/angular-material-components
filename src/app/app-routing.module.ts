import { NgModule } from "@angular/core";
import{ Routes, RouterModule} from '@angular/router';

import { MaterialTableComponent } from './material-table/material-table.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const appRoutes: Routes = [
  {path:'table', component: MaterialTableComponent},
  {path:'form', component:ReactiveFormComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) 
  ],
  exports:[RouterModule]
})

export class AppRoutingModule { }
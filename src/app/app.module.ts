import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MaterialTableComponent,
    ReactiveFormComponent,
    HomeComponent
  ],
  imports: [ 
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

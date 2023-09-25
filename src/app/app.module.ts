import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTableComponent,
    ReactiveFormComponent
  ],
  imports: [ 
    BrowserModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports:[MatTableModule]
})
export class AppModule { }

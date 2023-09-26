import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
    loginForm: FormGroup = new FormGroup({
      userData :new FormGroup({
        name : new FormControl(null,
          Validators.required),
        email: new FormControl(
          null,
          [Validators.required, Validators.email]
          )
      }),
    })
    constructor(private fb: FormBuilder){}

    ngOnInit(){}
}

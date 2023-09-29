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
        name : new FormControl(
          null,
          [Validators.required]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          ),
        password: new FormControl(null,
          [Validators.required,Validators.minLength(8)]
          )
          
      }),
    })
    constructor(private fb: FormBuilder){}

    ngOnInit(){
      this.loginForm.setValue({
        userData:{
          name:'max',
          email:'max@gmail.com',
          password:''
        } 


      })
      this.loginForm.statusChanges.subscribe((status) => console.log(status));
    };
    

    onContinue(){
      if(this.loginForm.valid)
      {
       console.log(this.loginForm);
       this.loginForm.reset();
      }
    }

    get passwordControl(){
      return this.loginForm.get('userData.password');
    }
}

import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {

  loader:boolean;
  signUpForm:FormGroup;
  hide = true;

  constructor(private _router:Router,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loading();
    this.GroupSignUp();
  }


  GroupSignUp(){
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required], 
      confirmPassword: ['', Validators.required],
    })
  }

  get name() { return this.signUpForm.get('name'); }
  get lastName() { return this.signUpForm.get('lastName'); }
  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get confirmPassword() { return this.signUpForm.get('confirmPassword'); }

  loading() {
    this.loader = true;
    setTimeout(() => {
      this.texto();
     
    }, 5500);
  }


  texto(){
    console.log("ENTRO")
    this.loader = false;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  onSubmit() {
    if(this.signUpForm.valid){
      this.signUpForm.reset();
      this._router.navigate(['/'])
    }else {

    }
   /*  console.log("entro") */
  }
  
}

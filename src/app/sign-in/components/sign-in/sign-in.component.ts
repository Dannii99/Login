import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {

  loader:boolean;
  opacity:boolean;
  opacityIn:boolean;
  opacityForm:boolean;
  moveAnimate:boolean;
  signUpForm:FormGroup;
  hide = true;



  constructor(private _router:Router,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loading();
    this.GroupSignUp();
    this.moveAnimate = true;
    this.opacityIn = false;
    this.opacityForm = false;
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
    this.opacity = true;
    setTimeout(() => {
      this.loader = false;
      console.log("se cumple")
      this.animation()
    }, 6500);
  }
  
  animation(){
    console.log("ENTRO")
    this.opacityIn = true;
    setTimeout(() => {
      this.opacity = false;
      this.opacityForm = true;
    }, 4500);
    this.moveAnimate = true;
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

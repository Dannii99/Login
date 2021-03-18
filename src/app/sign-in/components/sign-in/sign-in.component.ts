import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import Swal from 'sweetalert2';


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
              private formBuilder:FormBuilder,
              private _auth:AuthService) { }

  ngOnInit(): void {
    this.loading();
    this.GroupSignUp();
    this.moveAnimate = true;
    this.opacityIn = false;
    this.opacityForm = false;
  }

  GroupSignUp(){
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]], 
      confirmPassword: ['', [Validators.required]],
    });
  }
  get name() { return this.signUpForm.get('name'); }
  get lastName() { return this.signUpForm.get('lastName'); }
  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }
  get confirmPassword() { return this.signUpForm.get('confirmPassword'); }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit() {
    if(this.signUpForm.valid){
      Swal.fire({
        allowOutsideClick: false,
        icon: 'info',
        text: 'Espere por favor...',
      });
      Swal.showLoading();
      this._auth.userNew( this.signUpForm.value ).subscribe(resp => {
        console.log(resp);
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Usuario creado correctamente',
          showConfirmButton: false,
          timer: 1500
        }).then((result:any) => {
           result = this._router.navigateByUrl('');
        });
        this.GroupSignUp();
      }, (err) => {
        Swal.fire({
          icon: 'error',
          text: err.error.error.message,
        });
        console.log(err.error.error.message);
      });
      
    }
  }
  
  
  loading() {
    this.loader = true;
    this.opacity = true;
    setTimeout(() => {
      this.loader = false;
      this.animation()
    }, 6500);
  }
  
  animation(){
    this.opacityIn = true;
    setTimeout(() => {
      this.opacity = false;
      this.opacityForm = true;
    }, 4500);
    this.moveAnimate = true;
  }

}

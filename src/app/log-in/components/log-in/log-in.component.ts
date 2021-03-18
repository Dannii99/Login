import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
 
  loader:boolean;
  opacity:boolean;
  opacityIn:boolean;
  opacityForm:boolean;
  moveAnimate:boolean;
  loginForm:FormGroup;
  hide = true;

  constructor(private _router:Router,
    private formBuilder:FormBuilder,
    private _auth:AuthService) { }

  ngOnInit(): void {
    this.GroupLogin();
    this.loading();
    this.moveAnimate = true;
    this.opacityIn = false;
    this.opacityForm = false;
  }

  GroupLogin(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]], 
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(){
    if(this.loginForm.valid) {
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...',
    });
    Swal.showLoading();
    this._auth.login( this.loginForm.value ).subscribe( (resp) => {
      console.log(resp);
      Swal.close();      
      this._router.navigateByUrl('/home');
      this.GroupLogin();
    }, (err) => {
      Swal.fire({
        icon: 'error',
        text: err.error.error.message,
      });
      console.log(err.error.error.message);
    });

  /* dannii.ospino@gmail.com */
  /* danny123 */

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

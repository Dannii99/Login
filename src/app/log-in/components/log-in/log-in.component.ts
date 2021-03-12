import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
})
export class LogInComponent implements OnInit {
  loader: boolean;
  loginForm:FormGroup;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.GroupLogin();
    this.loading();
  }

  GroupLogin(){
    this.loginForm = this.formBuilder.group({
     
    })
  }


  loading() {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 5500);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  

}

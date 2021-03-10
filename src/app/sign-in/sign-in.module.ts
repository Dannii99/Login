import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';

/* form */
import { ReactiveFormsModule } from '@angular/forms'

/* materiak module */
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }

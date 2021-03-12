import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';

/* form */
import { ReactiveFormsModule } from '@angular/forms'

/* materiak module */
import { MaterialModule } from '../material/material.module'

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    LogInRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class LogInModule { }

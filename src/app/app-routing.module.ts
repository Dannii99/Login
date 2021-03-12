import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* components */
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path: '',
        loadChildren: () =>
          import('./log-in/log-in.module').then(
            (m) => m.LogInModule
          ),
      },
      {
        path: 'signUp',
        loadChildren: () =>
          import('./sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then(
            (m) => m.HomeModule
          ),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

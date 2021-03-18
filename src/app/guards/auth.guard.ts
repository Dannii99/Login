import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _auth: AuthService,
    private _router: Router){ }
    
  canActivate():boolean {
      console.log("Guard");
      if(this._auth.estaAutenticado()){
        return true;
      }else {
      this._router.navigateByUrl('')
      return false;
      }
    
  }
  
}

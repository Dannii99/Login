import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* import { UsuarioModel } from '../models/usuario.model'; */
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyCobj0xFdVemMhaG6ngVfM3Xj0jFOAQ29M';
  userToken:string;

  /* Crear nuevo usuario */
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  /* Login */
 // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { 
/*     this.leerToken(); */
  }

  /* ================ salir ==================== */
  logout() {
    localStorage.removeItem('token');
  }
  /* ================================================= */



  /* ================ ingresar  ==================== */
/*   login( usuario:UsuarioModel ){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
      // ...usuario 
    }
    return this.http.post(
      `${this.url}/accounts:signInWithPassword?key=${this.apikey}`,
      authData
    ).pipe(
      map( resp => {
        console.log('Entro en el map del RXJS')
        this.guardarToken( resp['idToken'] );
        return resp;
      } )
    )
  } */
/* ================================================= */


  /* ================ new user ==================== */
/*   userNew( usuario:UsuarioModel ){
    const authData = {
      email: usuario.email,
      password: usuario.password,
      returnSecureToken: true
    }
    return this.http.post(
      `${this.url}/accounts:signUp?key=${this.apikey}`,
      authData
    ).pipe(
      map( resp => {
        console.log('Entro en el map del RXJS')
        this.guardarToken( resp['idToken'] );
        return resp;
      } )
    )
  } */


  private guardarToken( idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken() {
    if(localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    }else {
      this.userToken = '';
    }
    return this.userToken; 
  }

/* ================================================= */



  estaAutenticado():boolean {
    if(this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expitaDate = new Date();
    expitaDate.setTime(expira);
    
    if(expitaDate > new Date()) {
      return true;
    }else {
      return false
    }

  }

}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  loader: boolean;
  constructor(private _auth: AuthService,
            private _router:Router) { }

  ngOnInit(): void {
  this.loading();
  }

  loading() {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 5500);
  }

  
  logout() {
    this._auth.logout();
    this._router.navigateByUrl('');

  }
}

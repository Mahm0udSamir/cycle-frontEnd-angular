import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login = false;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
     if (this.login) {
       this.authService.logout();
       this.router.navigate(['home']);
      //  this.login = false;
     } else {
       this.authService.login();
      //  this.login = true;
     }
     this.login = !this.login;
  }

}

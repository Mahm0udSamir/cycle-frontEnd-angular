import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServerService } from '../login/loginServer.service';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login: boolean;
  type: string;
  constructor(
    private router: Router,
    private loginServerService: LoginServerService,
    private authService: AuthService,

  ) { }

  ngOnInit() {
    const localLogin = JSON.parse(localStorage.getItem('login'));
    const localType = localStorage.getItem('type');


    if (!localStorage.getItem('token')) {
      this.loginServerService.userType.subscribe(
        (type: string) => {
          this.type = type;
          console.log('login', this.type);
        }
      );

      this.loginServerService.loggedIn.subscribe(
        (login) => {
          this.login = login;
        }
      );
    } else {
      this.login = localLogin;
      this.type = localType;
      console.log(this.login, this.type);
    }
  }

  onLogin() {
     if (this.login) {
      // logout
      // this.loginServerService.loggedIn.emit(false);
      this.loginServerService.logOutService();
      this.login = false;
      this.router.navigate(['/']);
    } else {
      // login
      this.router.navigate(['/home/login']);
     }
  }

}

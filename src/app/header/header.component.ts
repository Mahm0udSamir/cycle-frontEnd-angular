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
  hideMenue = false;
  userBalance: string;
  userEmail: string;
  userImg: string = null;
  userId: string;
  userName: string;
  img = false;

  constructor(
    private router: Router,
    private loginServerService: LoginServerService,
    private authService: AuthService,

  ) { }

  ngOnInit() {
    const localLogin = JSON.parse(localStorage.getItem('login'));
    const localType = localStorage.getItem('type');

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
      this.login = localLogin;
      this.type = localType;
      console.log(this.login, this.type);

      // for user nav
      // if (this.type === 'user') {
        this.loginServerService.userBalance.subscribe((balance: string) => {
          this.userBalance = balance;
      });
      this.loginServerService.userEmail.subscribe((email: string) => {
        this.userEmail = email;
        console.log('email  : ', this.userEmail);
      });
      this.loginServerService.userId.subscribe((id: string) => {
         this.userId = id;
        });
        this.loginServerService.userImg.subscribe((img: string) => {
          if(img != 'null') {
            this.userImg = img;
            console.log('name  : ', this.userImg);
          } else if(img == 'null') {
            this.img = true;
          }
          console.log(this.userImg);
        });
        this.loginServerService.userName.subscribe((name: string) => {
          this.userName = name;
          console.log('name  : ', this.userName);
       });

        this.userBalance = localStorage.getItem('balance');
        this.userEmail = localStorage.getItem('email');
        this.userImg = localStorage.getItem('img');
        this.userId = localStorage.getItem('id');
        this.userName = localStorage.getItem('name');
        // };
        console.log('userImage  : ', this.userImg);
        // }
  }

  onLogin() {
     if (this.login) {
      // logout
      this.loginServerService.loggedIn.emit(false);
      localStorage.clear();
      this.hideMenue = false;
      this.login = false;
      this.router.navigate(['reload/home/home']);
    } else {
      // login
      this.router.navigate(['/home/login']);
     }
  }

}

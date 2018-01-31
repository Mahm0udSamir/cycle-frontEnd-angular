import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServerService } from './loginServer.service';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 @ViewChild('f') loginForm: NgForm;
 @ViewChild('email') email;
 @ViewChild('password') password;
  constructor(private loginServerService: LoginServerService, private router :Router) { }
  ngOnInit() {
  }

  onSubmit() {
    const userData: User = new User(this.email.value, this.password.value);
    this.loginServerService.loginService(userData)
      .subscribe(
        data => {
            this.loginServerService.userType.emit(data.type);
            this.loginServerService.loggedIn.emit(true);
            localStorage.setItem('token', data.token);
            localStorage.setItem('type', data.type);
            localStorage.setItem('login', 'true' );
            console.log(data);
            this.router.navigate(['/']);

           // localStorage.setItem('userId', data.token);
           // this.router.navigateByUrl('/');
        },
        error => {
          console.error(error);
          // this.loginServerService.loggedIn.emit(false);
        }
    );

  }


}

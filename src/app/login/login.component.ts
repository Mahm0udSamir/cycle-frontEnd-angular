import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServerService } from './loginServer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 @ViewChild('f') loginForm: NgForm;
 @ViewChild('email') email;
 @ViewChild('password') password;
  constructor(private loginServerService: LoginServerService) { }

  ngOnInit() {
  }
 
  onSubmit() {
    const userData = {_token:'' ,email: this.email.value, password: this.password.value, login: 'login'};
    this.loginServerService.loginService(userData)
      .subscribe(
        data => {
            localStorage.setItem('token', data.token);
            console.log(data);
           // localStorage.setItem('userId', data.userId);
           // this.router.navigateByUrl('/');
        },
        error => console.error(error)
    );

  }


}

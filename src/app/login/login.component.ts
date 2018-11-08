import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServerService } from './loginServer.service';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { Md2Toast } from 'md2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 @ViewChild('R') registerForm: NgForm;
 @ViewChild('f') loginForm: NgForm;
 loginEmail: string;
 email: string;
 reEmail: string;
 verified = false;
 message: string ;
 toggle = true; // true -> login, false-> register
  constructor(
    private toast: Md2Toast,
    private loginServerService: LoginServerService,
    private router: Router) { }
  ngOnInit() {
  }

  onSubmit() {
    this.loginEmail = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const userData: User = new User(this.loginEmail, password);
    console.log(this.loginForm.value.email);
    console.log(userData);
    this.loginServerService.loginService(userData)
      .subscribe(
        data => {
          if (data.success && data.verified !== '1') {
              // setTimeout(() => {
                this.verified = true;
                this.message = 'Your account is not verified';
              // }, 4000);
          } else if (data.success && data.verified === '1') {
              this.loginServerService.userType.emit(data.type);
              this.loginServerService.loggedIn.emit(true);
              localStorage.setItem('token', data.token);
              localStorage.setItem('type', data.type);
              localStorage.setItem('login', 'true' );

              if (data.type === 'user') {
                this.loginServerService.userBalance.emit(data.balance );
                this.loginServerService.userEmail.emit(data.email);
                this.loginServerService.userId.emit(data.id);
                this.loginServerService.userImg.emit(data.img);
                this.loginServerService.userName.emit(data.name);
                localStorage.setItem('balance', data.balance );
                localStorage.setItem('email', data.email );
                localStorage.setItem('id', data.id );
                localStorage.setItem('img', data.img );
                localStorage.setItem('name', data.name );
              } else if (data.type === 'maintainance') {
                this.loginServerService.userEmail.emit(data.email);
                this.loginServerService.userId.emit(data.id);
                this.loginServerService.userImg.emit(data.img);
                this.loginServerService.userName.emit(data.name);
                localStorage.setItem('email', data.email );
                localStorage.setItem('id', data.id );
                localStorage.setItem('img', data.img );
                localStorage.setItem('name', data.name );
              }
              this.router.navigate(['/reload/home/home']);
              // window.location.reload();
            } else if (!data.success) {
                console.log(data);
                this.message = 'Incorrect Email or Password';
                setTimeout(() => {
                  this.message = null;
                }, 4000);
            }
            console.log(data);

            // this.router.navigate(['/']);
            // if(data.type === 'user') {
            //   // this.router.navigate(['/reload/user/history']);

            // }
           // localStorage.setItem('userId', data.token);
           // this.router.navigateByUrl('/');
        },
        error => {
          console.error( error);
          this.toast.show('Check your connectin!', 7000);
          
          // this.loginServerService.loggedIn.emit(false);
        }
    );


  }
  onRegister() {
    console.log(this.registerForm.value.name);
    console.log(this.registerForm.value.email);
    console.log(this.registerForm.value.password);
    const name = this.registerForm.value.name;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    this.loginServerService.registerService(name, email, password).subscribe(
      data => {
        if (data.success[0] == true) {
          this.message = 'Account created successfully';
          this.loginEmail =  email;
          console.log(this.loginEmail);
          setTimeout(() => {
            // this.router.navigate(['/home/login']);
            this.toggle = !this.toggle;
            this.message = 'Check your email for verification';
            // this.verified = true;
          }, 2000);
          this.message = 'Check your email for verification';
          // this.onSubmit(this.registerForm);
        } else if (data.success[0] == 'false') {
          this.message = data.email[0];
          setTimeout(() => {
            this.message = null;
          }, 4000);
        }
        console.log(data);
      },
      error => {
        console.error( error);
        this.toast.show('Check your connectin!', 7000);
        
        // this.loginServerService.loggedIn.emit(false);
      }
    );
  }

  onVerify() {
    const email = this.loginEmail;
    this.loginServerService.verificationService(email).subscribe(
      data => {
        if (data.success) {
          this.message = '';
          setTimeout(() => {
            this.message = 'Sent successfully check your email';
            this.verified = false;
          }, 1000);
          this.message = 'Sent successfully check your email';
          this.verified = false;
        } else if (!data.success) {
          this.message = 'Please try again!';
          this.verified = true;
        }
      }, error => {
        this.toast.show('Check your connectin!', 7000);
        
      }
    );
  }

}

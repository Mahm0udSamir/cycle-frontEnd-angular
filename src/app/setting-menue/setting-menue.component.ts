import { Component, OnInit } from '@angular/core';
import { LoginServerService } from '../login/loginServer.service';
import { UserProfileService } from '../user/userProfile.service';
import { Router } from '@angular/router';
import { Md2Toast } from 'md2/toast/toast';

@Component({
  selector: 'app-setting-menue',
  templateUrl: './setting-menue.component.html',
  styleUrls: ['./setting-menue.component.css']
})
export class SettingMenueComponent implements OnInit {
  toggle = false;
  type: string;
  login: boolean;

  constructor(
    private loginServerService: LoginServerService,
    private userService: UserProfileService,
    private router: Router,
    private toast: Md2Toast
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
  }

  onDelete(password) {
    console.log(password.value);
    console.log(localStorage.getItem('id'));
    const id = localStorage.getItem('id');
    this.userService.deleteAccount(id, password.value).subscribe(
      data => {
        if (data.success) {
          this.loginServerService.loggedIn.emit(false);
          localStorage.clear();
          this.router.navigate(['reload/home/home']);
        } else if (!data.success) {
          this.toast.show('Incorrect password!', 3000);
        }
      }, error => {
        this.toast.show('Please try again', 2000);
      }
    );
  }

}

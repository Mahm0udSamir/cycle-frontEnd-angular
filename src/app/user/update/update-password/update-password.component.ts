import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../userProfile.service';
import { Router } from '@angular/router';
import { LoginServerService } from '../../../login/loginServer.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./../update-email/update-email.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  message: string;
  constructor(
    private userService: UserProfileService,
    private router: Router,
    private loginServerService: LoginServerService
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    const email = localStorage.getItem('email');
    const password = f.value.password;
    const repassword = f.value.repassword;
    this.userService.updatePassword(email, password, repassword).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          this.router.navigate(['/reload/home/home']);
          return;
        } else {
          // alert(JSON.stringify(data));
          this.message = 'Please enter your current password!';
        }
      },
      error => {
        console.log(error);
        this.message = 'Something wrong please try again!';
      }
    );
  }
}

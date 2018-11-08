import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../userProfile.service';
import { Router } from '@angular/router';
import { LoginServerService } from '../../../login/loginServer.service';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.css']
})
export class UpdateEmailComponent implements OnInit {
  message: string;
  constructor(
    private userService: UserProfileService,
    private router: Router,
    private loginServerService: LoginServerService
  ) { }

  ngOnInit() {
  }

  onSubmit(f){
    console.log(f.value.remail);
    const email = localStorage.getItem('email');
    const remail = f.value.remail;
    this.userService.updateEmail(email, remail).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          this.loginServerService.userEmail.emit(remail);
          localStorage.setItem('email', remail );
          this.router.navigate(['/reload/home/home']);
          return;
        } else {
          // alert(JSON.stringify(data));
          this.message = 'This email may be used!';
        }
      },
      error => {
        console.log(error);
        this.message = 'Something wrong please try again!';
      }
    );
  }
}

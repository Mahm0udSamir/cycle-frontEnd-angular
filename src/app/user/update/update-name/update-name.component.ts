import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../userProfile.service';
import { Router } from '@angular/router';
import { LoginServerService } from '../../../login/loginServer.service';

@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.component.html',
  styleUrls: ['./../update-email/update-email.component.css']
})
export class UpdateNameComponent implements OnInit {
  message: string;
  constructor(
    private userService: UserProfileService,
    private router: Router,
    private loginServerService: LoginServerService
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    console.log(f.value.name);
    const email = localStorage.getItem('email');
    const name = f.value.name;
    this.userService.updateName(email, name).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          this.loginServerService.userName.emit(name);
          localStorage.setItem('name', name );
          this.router.navigate(['/reload/home/home']);
          return;
        } else {
          alert(JSON.stringify(data));
          this.message = 'Something wrong please try again!';
        }
      },
      error => {
        console.log(error);
        this.message = 'Something wrong please try again!';
      }
    );
  }
}

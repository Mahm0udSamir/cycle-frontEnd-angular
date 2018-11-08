import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Md2Toast } from 'md2/toast/toast';
import { UserProfileService } from '../userProfile.service';
import { LoginServerService } from '../../login/loginServer.service';

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./../update/update-email/update-email.component.css']
})
export class UserFeedbackComponent implements OnInit {
  message: string;
  constructor(
    private userService: UserProfileService,
    private router: Router,
    private toast: Md2Toast
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    const content = f.value.feedback;
    const id = Number(localStorage.getItem('id'));
    // alert(`id= ${id} ,  balance= ${balance}`);
    this.userService.addFeedback(id, content).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          this.toast.show('Added successfully', 3000);
          this.router.navigate(['/reload/home/home']);
          return;
        } else {
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

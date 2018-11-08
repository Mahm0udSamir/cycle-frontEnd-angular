import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Md2Toast } from 'md2/toast/toast';
import { MaintenanceService } from '../maintenance.service';

@Component({
  selector: 'app-maintenance-feedback',
  templateUrl: './maintenance-feedback.component.html',
  styleUrls: ['./../../user/update/update-email/update-email.component.css']
})
export class MaintenanceFeedbackComponent implements OnInit {
  message: string;
  constructor(
    private maintenanceService: MaintenanceService,
    private router: Router,
    private toast: Md2Toast
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    const content = f.value.feedback;
    const id = localStorage.getItem('id');
    this.maintenanceService.addFeedback(id, content).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          this.toast.show('Added successfully', 3000);
          this.router.navigate(['/reload/home/home']);
          // alert(JSON.stringify(data));
          return;
        } else {
          // alert(JSON.stringify(data));
          // this.message = 'Something wrong please try again!';
          this.message = data;
        }
      },
      error => {
        console.log(error);
        alert(JSON.stringify(error));
        this.message = 'Something wrong please try again!';
      }
    );
  }
}

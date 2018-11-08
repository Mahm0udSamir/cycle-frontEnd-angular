import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedbackService } from './feedback.service';
import { Router } from '@angular/router';
import { Md2Toast } from 'md2/toast/toast';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, OnDestroy {
  time1;
  time2;
  userFeedbacks: {
    user_id: number,
    user_name: string,
    user_img: string,
    feedback_id: number,
    feedback: string
  }[];

  maintenanceFeedbacks: {
    user_id: number,
    user_name: string,
    maintenance_img: string,
    feedback_id: number,
    feedback: string
  }[];

  user_id: number;
  user_name: string;
  maintenance_img: string;
  feedback_id: number;
  feedback: string;
  showDetails = false;
  type = 'user';

  constructor( private feedbackService: FeedbackService, private router: Router, private toast: Md2Toast) { }

  ngOnInit() {
    // this.userFeedbacks = this.feedbackService.getUsersFeedback();
    this.feedbackService.getUsersFeedback().subscribe(
      (data) => {
        this.userFeedbacks = [...data];
      },
      (error) => {
        console.log(error);
      }
    );

    this.feedbackService.getMaintenanceFeedback().subscribe(
      (data) => {
        this.maintenanceFeedbacks = [...data];
      },
      (error) => {
        console.log(error);
      }
    );

    this.time1 = setInterval(() => {
      this.feedbackService.getUsersFeedback().subscribe(
        (data) => {
          if (JSON.stringify(this.userFeedbacks) !== JSON.stringify(data)) {
            this.userFeedbacks = [];
            this.userFeedbacks = [...data];
            console.log('userfeedback updated');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }, 1000);

    this.time2 = setInterval(() => {
      this.feedbackService.getMaintenanceFeedback().subscribe(
        (data) => {
          if (JSON.stringify(this.maintenanceFeedbacks) !== JSON.stringify(data)) {
            this.maintenanceFeedbacks = [];
            this.maintenanceFeedbacks = [...data];
            console.log('maintenanceFeedbacks updated');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }, 1000);
  }


  ngOnDestroy() {
    clearInterval(this.time1);
    clearInterval(this.time2);
    console.log('clear time feedback');
  }

  getData(feedback: {
    user_id: number,
    user_name: string,
    user_img: string,
    feedback_id: number,
    feedback: string
  }) {
    console.log(feedback);
    this.user_id = feedback.user_id;
    this.user_name = feedback.user_name;
    this.maintenance_img = feedback.user_img;
    this.feedback = feedback.feedback;
    this.feedback_id = feedback.feedback_id;
    this.showDetails = true;
  }
  getMaintenanceData(feedback: {
    maintenance_id: number,
    maintenanece_name: string,
    maintenance_img: string,
    feedback_id: number,
    feedback: string
  }) {
    console.log(feedback);
    this.user_id = feedback.maintenance_id;
    this.user_name = feedback.maintenanece_name;
    this.maintenance_img = feedback.maintenance_img;
    this.feedback = feedback.feedback;
    this.feedback_id = feedback.feedback_id;
    this.showDetails = true;
  }

  onDelete() {
    this.feedbackService.deleteFeedback(this.feedback_id).subscribe(
      data => {
        console.log(data);
        if (data.success[0]) {
          this.router.navigate(['/reload/admin/feedback']);
          return;
        } else {
          alert(data.success[0]);
        }
      },
      error => {
        alert(error);
      });
  }

  onAddToHome() {
    this.feedbackService.addFeedtoHome(this.feedback_id).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          this.toast.show('Added successfully.', 1000);
          return;
        } else {
          this.toast.show('Please try again!', 1000);
        }
      },
      error => {
        alert(error);
      });
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedbackService } from '../admin/feedback/feedback.service';
import { Md2Toast } from 'md2/toast/toast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  feedbacks = [];
  time;
  type;
  length = 0;
  constructor(private feedbackService: FeedbackService, private toast: Md2Toast) { }

  ngOnInit() {
    this.type =  localStorage.getItem('type');
    this.feedbackService.getFeedtoHome().subscribe(
      (data) => {
        this.feedbacks = [...data];
        this.length = this.feedbacks.length;
      },
      (error) => {
        console.log(error);
        this.toast.show('Check your connectin!', 4000);
      }
    );

    this.time = setInterval(() => {
      this.feedbackService.getFeedtoHome().subscribe(
        (data) => {
          if (JSON.stringify(this.feedbacks) !== JSON.stringify(data)) {
            this.feedbacks = [];
            this.feedbacks = [...data];
            this.length = data.length;
            console.log('Home userfeedback updated');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.time);
    console.log('clear time Home feedbacks');
  }

  onDeleteFeedback(id: string) {
    this.feedbackService.deleteFeedFromHome(id).subscribe(
      (data) => {
        if (data.success) {
          this.toast.show('Removed Successfully', 1000);
        } else if (!data.success) {
          this.toast.show('Please try again!', 1000);
        }
      },
      (error) => {
        console.log(error);
        
      }
    );

  }
}

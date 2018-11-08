import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../userProfile.service';
import { Router } from '@angular/router';
import { Md2Toast } from 'md2/toast/toast';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  id: string = localStorage.getItem('id');
  mouseOvered = [];
  histories: any[] = [];

  constructor(private userProfile: UserProfileService,  private router: Router, private toast: Md2Toast) { }

  ngOnInit() {
    this.userProfile.getHistory(this.id).subscribe(
      data => {
        this.histories = data;
        console.log('histories ', this.histories.length);
        for ( let i = 0; i < data.length; i++) {
          this.mouseOvered.push(false);
        }
      }
    );
    // if (this.histories) {
      // for ( let i = 0; i < this.histories.length; i++) {
      
    // }
  }

  onDeleteHistory(history_id: string) {
    this.userProfile.deleteHistory(this.id, history_id).subscribe(
      data => {
        if (data.success) {
          this.router.navigate(['/reload/user/history']);
        } else {
          this.toast.show('Please try again!', 1000);
        }
      }
    );
  }
}

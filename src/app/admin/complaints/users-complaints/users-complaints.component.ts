import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ComplaintService } from './../complaints.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-complaints',
  templateUrl: './users-complaints.component.html',
  styleUrls: ['./user-complaints.css']
})

export class UsersComplaintsComponent implements OnInit, OnDestroy {
  time;
  complains: {
    complain_id: number,
    user_id: number,
    user_name: string,
    user_img: string,
    bike_id: number,
    complain: string,
    bike_name: string,
  }[];
  complain_id: number;
  user_id: number;
  user_name: string;
  user_img: string;
  bike_id: number;
  complain: string;
  bike_name: string;
  showDetails = false;

  constructor(private complaintService: ComplaintService, private router: Router) { }

  ngOnInit() {
    this.complaintService.getAllUsersComplaints().subscribe(
      data => {
        console.log(data);
        this.complains = [...data];
      },
      error => {
        console.log(error);
      }
    );

    this.time = setInterval(() => {
      this.complaintService.getAllUsersComplaints().subscribe(
        data => {
          if ( JSON.stringify(this.complains) !==  JSON.stringify(data)) {
            console.log('update Users complaints');
            this.complains = [];
            this.complains = [...data];
          }
        },
        error => {
          console.log(error);
        }
      );
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.time);
    console.log('clear time user complaint' );
  }

  getData(complain: {
    complain_id: number,
    user_id: number,
    user_name: string,
    user_img: string,
    complain: string,
    bike_id: number,
    bike_name: string;
  }) {
    console.log(complain);
    this.complain_id = complain.complain_id;
    this.user_id = complain.user_id;
    this.user_name = complain.user_name;
    this.user_img = complain.user_img;
    this.complain = complain.complain;
    this.bike_id = complain.bike_id;
    this.bike_name = complain.bike_name;
    this.showDetails = true;
  }


  onDelete() {
    this.complaintService.deleteUserComplain(this.complain_id).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          this.router.navigate(['/reload/admin/user-complaint']);
          return;
        } else {
          alert(data.success);
        }
      },
      error => {
        alert(error);
      });
  }
}

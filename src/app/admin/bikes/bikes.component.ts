import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../shared/bike.service';
import { Bike } from '../../shared/bike';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  search: string;
  bikes: Bike[];
  constructor(private bikeService: BikeService, private router: Router) { }

  ngOnInit() {
    // this.bikeService.refreshBikes.subscribe(
    //   bikes => { this.bikes = bikes }
    // );
    this.bikeService.getAllbikes().subscribe(
      data => {
        this.bikes = data;
        // this.bikeService.refreshBikes.emit(data);
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }
  onDelete(id) {
    console.log(id)
    this.bikeService.removeBike(id).subscribe(
      data => {
        if (data.success) {
          this.router.navigate(['/reload/admin/bikes']);
        } else {
          alert('error ocure');
        }
      },
      error => {
        console.log(error);
      }
    );

  }



}

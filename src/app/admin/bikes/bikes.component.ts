import { Component, OnInit, OnDestroy } from '@angular/core';
import { BikeService } from '../../shared/bike.service';
import { Bike } from '../../shared/bike';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit, OnDestroy {
  time;
  search: string;
  bikes: Bike[];
  constructor(private bikeService: BikeService, private router: Router) { }

  ngOnInit() {
    this.bikeService.getAllbikes().subscribe(
      data => {
        this.bikes = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

    this.time = setInterval(() => {
      this.bikeService.getAllbikes().subscribe(
        data => {
          if ( JSON.stringify(this.bikes) !==  JSON.stringify(data)) {
            this.bikes = data;
            console.log('updated bikes');
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
      console.log('clear time bikes' );
  }

  
  onDelete(id) {
    console.log(id);
    this.bikeService.removeBike(id).subscribe(
      data => {
        if (data.success) {
          this.router.navigate(['/reload/admin/bikes']);
        } else {
          console.log(JSON.stringify(data.success));
        }
      },
      error => {
        console.log(error);
      }
    );

  }



}

import { Component, OnInit, ViewChild } from '@angular/core';
import { BikeService } from '../../../shared/bike.service';
import { Bike } from '../../../shared/bike';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-bike',
  templateUrl: './new-bike.component.html',
  styleUrls: ['./new-bike.component.css']
})
export class NewBikeComponent implements OnInit {
  name;
  errorMessage = null;
  bikesName = new Array();
  constructor(private bikeService: BikeService, private router: Router) { }

  ngOnInit() {
    this.bikeService.getAllbikes().subscribe(
      (data: Bike[]) => {
        data.forEach((bike: Bike) => {
          this.bikesName.push(bike.name);
      });
     }
    );
  }

  onKey() {
    if (this.bikesName.filter((bike) => bike === this.name.trim())[0]) { // bike name from bikesName[]
        this.errorMessage = 'The name has already been taken.';
      } else {
        this.errorMessage = null;
      }

  }

  onSubmit() {
    const bike = {
      name: this.name.trim(),
      lat: 33.0,
      lng: 34.00,
      is_locked: 0
    };


    this.bikeService.addBike(bike).subscribe(
      data => {
        console.log( data);
        if (data.success[0]) {
          this.router.navigate(['/reload/admin/bikes']);
          return;
        } else {
          this.errorMessage = data.name[0];
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}

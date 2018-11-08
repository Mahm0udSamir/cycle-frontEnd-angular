import { Component, OnInit, ViewChild } from '@angular/core';
import { Bike } from '../../../shared/bike';
import { Router } from '@angular/router';
import { MaintenancesService } from '../maintenances.service';


@Component({
  selector: 'app-new-maintenance',
  templateUrl: './new-maintenance.component.html',
  styleUrls: ['./new-maintenance.component.css']
})
export class NewMaintenanceComponent implements OnInit {
  message: String;
  constructor(private maintenancesService: MaintenancesService, private router: Router) { }

  ngOnInit() { }

  // onKey() {
  //   // if (this.bikesName.filter((bike) => bike === this.name.trim())[0]) { // bike name from bikesName[]
  //   //     this.errorMessage = 'The name has already been taken.';
  //   //   } else {
  //   //     this.errorMessage = null;
  //   //   }

  // }

  onSubmit(f) {
     console.log(f.value.name);
     console.log(f.value.email);
     console.log(f.value.password);
      this.maintenancesService.addMaintenance({name: f.value.name, email: f.value.email, password: f.value.password}).subscribe(
        data => {
          console.log( data);
          if (data.success[0]) {
            this.router.navigate(['/reload/admin/maintenances']);
            return;
          } else {
            this.message = data.email[0];
          }
        },
        error => {
          console.log(error);
        }
      );
    }

}


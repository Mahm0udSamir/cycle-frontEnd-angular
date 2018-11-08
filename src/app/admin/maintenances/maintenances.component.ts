import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { MaintenancesService } from './maintenances.service';
import { Router } from '@angular/router';
import { Md2Toast } from 'md2/toast/toast';

@Component({
  selector: 'app-maintenances',
  templateUrl: './maintenances.component.html',
  styleUrls: ['./maintenances.component.css']
})
export class MaintenancesComponent implements OnInit, OnDestroy {
  @ViewChild('name') name: ElementRef;
  @ViewChild('email') eamil: ElementRef;
  time;
  maintenances: any[];
  search: string;
  count = 0;
  newName;
  newEmail;
  constructor(
    private maintenancesService: MaintenancesService,
    private router: Router,
    private toast: Md2Toast) { }

  ngOnInit() {
    this.maintenancesService.getAllMaintenances().subscribe(
      (maintenances) => {
        this.maintenances = maintenances;
        console.log(maintenances);
      },
      (error) => {
        console.log(error);
      }
    );

    this.time = setInterval(() => {
      this.maintenancesService.getAllMaintenances().subscribe(
        (maintenances) => {
          if (JSON.stringify(this.maintenances) !== JSON.stringify(maintenances)) {
            this.maintenances = maintenances;
            console.log('Update maintenances');
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
  }

  // delete maintaenace
  onDelete(id) {
    this.maintenancesService.deleteMaintenance(id).subscribe(
      (data) => {
        if (data.success) {
          this.router.navigate(['/reload/admin/maintenances']);
        } else {
          alert('error ocure');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }


  // edit maintaince
  checkEdit() {
    if (this.count === 1) {
      this.toast.show('Can\'t edit 2 at the same time!', 2000);
      return true;
    } else {
      this.count++;
      return false;
    }
  }

  cancleEdit() {
    this.count = 0;
    return true;
  }

  setNewName() {
    this.newName = this.name.nativeElement.value;
  }
  setNewEmail() {
    this.newEmail = this.eamil.nativeElement.value;
  }


  saveEdit(email, name, id) {
    console.log('name :: ', this.newName);
    console.log('email :: ', this.newEmail);
    console.log('count :: ', this.count);
    console.log(`maintainance.name: ${name},  maintainance.email: ${email}, maintenance.id: ${id}`);


    if (name !== this.newName && email !== this.newEmail) {
      this.maintenancesService.editMaintenanceName(email, this.newName).subscribe(
        (data) => {
          if (data.success) {
            // this.router.navigate(['/reload/admin/maintenances']);
          } else {
            // console.log('error 55555555 : ' , data);
            this.toast.show('Invalid Name!', 2000);
          }
        },
        (error) => {
          console.log(error);
        }
      );
      this.maintenancesService.editMaintenanceEmail(email, this.newEmail).subscribe(
        (data) => {
          if (data.success) {
            this.router.navigate(['/reload/admin/maintenances']);
          } else {
            // console.log('error 55555555 : ' , data);
            this.toast.show('Invalid Email try again like \texample@gmail.com', 2000);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else if (name !== this.newName) {
      this.maintenancesService.editMaintenanceName(email, this.newName).subscribe(
        (data) => {
          if (data.success) {
            this.router.navigate(['/reload/admin/maintenances']);
          } else {
            // console.log('error 55555555 : ' , data);
            this.toast.show('Invalid Name!', 2000);
          }
        },
        (error) => {
          console.log(error);
        }
      );

    } else if (email !== this.newEmail) {
      // if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.newEmail)) {
      //   return this.toast.show('Invalid Email try again like \t example@gmail.com', 3500);
      // }
      this.maintenancesService.editMaintenanceEmail(email, this.newEmail).subscribe(
        (data) => {
          if (data.success) {
            this.router.navigate(['/reload/admin/maintenances']);
          } else {
            console.log('error 55555555 : ', data);
            this.toast.show('Invalid Email try again like \t example@gmail.com', 3500);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
    if (this.count === 1) {
      this.cancleEdit();
    }
  }

}

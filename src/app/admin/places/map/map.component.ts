import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit, OnDestroy } from '@angular/core';
import { BikeService } from '../../../shared/bike.service';
import { UserService } from '../../../shared/user.service';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
})
export class MapComponent implements OnInit, OnDestroy {
  time;
  lat = 34.000000;
  lng = 40.000000;
  locations = [];
  bikeData = [];
  constructor(
    private bickeService: BikeService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.bickeService.getAllbikes().subscribe(
      bickesData => {
        this.bikeData = bickesData;
        console.log('data ', this.bikeData);
        // this.locations = data;
        bickesData.forEach(bicke => {
          // let user: {
          //   id: number,
          //   email: string,
          //   img: string,
          //   name: string,
          //   balance: string,
          // };

          this.locations.push({
            user_id: Number(bicke.user_id),
            lat: Number(bicke.lat),
            lng: Number(bicke.lng),
            name: bicke.name,
            status: bicke.status
            // user: {}
          });

          // if (bicke.status === 'locked' || bicke.status === 'unlocked' ) {
          //   this.userService.getUserById(bicke.user_id).subscribe(
          //     userData => {
          //       // for (let i = 0; i < this.locations.length; i++) {
          //         if (bicke.user_id === userData.id) {
          //           user = userData;
          //           console.log('user ii ', user);
          //         }
          //       // }
          //       console.log('locations ii ', this.locations);
          //     },
          //     error => {
          //       console.log(error);
          //     }
          //  );
          // }

        });
        console.log('locations ', this.locations);
      }
    );

    // this.bikeData.forEach(bicke => {
    //  let user: {
    //     id: number,
    //     email: string,
    //     img: string,
    //     name: string,
    //     balance: string,
    //   };
    //   if (bicke.status === 'locked' || bicke.status === 'unlocked' ) {
    //     this.userService.getUserById(bicke.user_id).subscribe(
    //       userData => {
    //         user = {
    //           id: userData.id,
    //           email: userData.email,
    //           img: userData.img,
    //           name: userData.name,
    //           balance: userData.balance
    //         };
    //         for (let i = 0; i < this.locations.length; i++) {
    //           if(this.locations[i].user_id === userData.id) {
    //             this.locations[i].user = user;
    //           }
    //         }
    //         console.log('user ii ', user);
    //         console.log('locations ii ', this.locations);
    //       },
    //       error => {
    //         console.log(error);
    //       }
    //     );
    //   }
    // });

    this.time = setInterval(() => {
      this.bickeService.getAllbikes().subscribe(
        data => {
          if (JSON.stringify(this.bikeData) !== JSON.stringify(data)) {
            this.locations = [];
            this.bikeData = data;
            console.log('data ', data);
            console.log('locations ', this.locations);
            // this.locations = data;
            data.forEach(bicke => {
              this.locations.push({
                lat: Number(bicke.lat),
                lng: Number(bicke.lng),
                name: bicke.name,
                status: bicke.status
              });
            });
          }
        });
    }, 1000);

  }

  ngOnDestroy() {
    clearInterval(this.time);
  }
}

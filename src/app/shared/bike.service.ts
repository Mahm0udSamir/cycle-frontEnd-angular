import { Bike } from './bike';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class BikeService {
    bikes: Bike[];

    refreshBikes = new EventEmitter<Bike[]>();
    constructor(private http: Http) { }

    // get all bikes
    getAllbikes() {
        const body = `client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/bike/bikes', body, {headers})
            .map(
            (response: Response) => {
                this.bikes = response.json();
                return response.json();
            }
            )
            .catch((error: Response) => Observable.throw(error));
    }

    // add one
    addBike(bike: { name: string, lat: number, lng: number, status: string }) {
        // added to dom
        // this.refreshBikes.subscribe(
        //     (bikes: Bike[]) => {
        //         this.bikes = bikes;
        //         console.log('My up  : ' , this.bikes);
        //     }
        // );
        // const newBike = {
        //     id: (this.bikes.length > 0 )?this.bikes[this.bikes.length-1].id+1: 1,
        //     name:bike.name,
        //     lat:bike.lat,
        //     lng: bike.lng,
        //     is_locked: bike.is_locked,
        //     created_at: moment().format('YYYY-MM-DD HH:m:s'),
        //     updated_at: moment().format('YYYY-MM-DD HH:m:s')
        // };
        // this.bikes.push(newBike);
        // this.refreshBikes.emit(this.bikes);


        // added to server
        // tslint:disable-next-line:max-line-length
        const body = `name=${bike.name}&lat=${bike.lat}&lng=${bike.lng}&status=${bike.status}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/bike/create', body, { headers })
            .map(
            (response: Response) => {
                return response.json();
            }
            )
            .catch((error: Response) => Observable.throw(error));
    }

    // remove one
    removeBike(id: number) {
        // remove from dom
        // this.bikes = this.bikes.filter((bike: Bike) => bike.id !== id);
        // this.refreshBikes.emit(this.bikes);

        // remove from server
        const body = `id=${id}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/bike/delete', body, { headers })
            .map(
            (response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error));
    }
}

import { Injectable, EventEmitter} from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from '../shared/user';

@Injectable()
export class LoginServerService {
    userType = new EventEmitter<string>();
    loggedIn = new EventEmitter<boolean>();
    userBalance = new EventEmitter<string>();
    userEmail = new EventEmitter<string>();
    userId = new EventEmitter<string>();
    userImg = new EventEmitter<string>();
    userName = new EventEmitter<string>();

    constructor (private http: Http) {}

    loginService(userData: User) {
         console.log( userData);
         const body = `email=${userData.email}&password=${userData.password}&client_id=webApp&client_pass=bicloud_App2018#@`;
         const headers = new Headers();
         headers.append('Content-Type', 'application/x-www-form-urlencoded');

         return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/login', body, {headers: headers})
         .map(
             (response: Response) => {
                 return response.json();
            })
         .catch( (error: Response) => Observable.throw(error.json()) );

    }
    registerService(name: string, email: string, password: string) {
         const body = `name=${name}&email=${email}&password=${password}&client_id=webApp&client_pass=bicloud_App2018#@`;
         const headers = new Headers();
         headers.append('Content-Type', 'application/x-www-form-urlencoded');

         return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/signup', body, {headers: headers})
         .map(
             (response: Response) => {
                 return response.json();
            })
         .catch( (error: Response) => Observable.throw(error.json()) );

    }

    verificationService(email: string) {
         const body = `email=${email}&client_id=webApp&client_pass=bicloud_App2018#@`;
         const headers = new Headers();
         headers.append('Content-Type', 'application/x-www-form-urlencoded');

         return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/send/confirm/email', body, {headers: headers})
         .map(
             (response: Response) => {
                 return response.json();
            })
         .catch( (error: Response) => Observable.throw(error.json()) );

    }
}
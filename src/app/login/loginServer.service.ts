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
  
    constructor (private http: Http){}

    logOutService(){
        localStorage.removeItem('token');
        localStorage.removeItem('type');
        localStorage.removeItem('login');
    }

    loginService(userData: User) {
         console.log( userData);
         const body = 'email=' + userData.email +'&password=' + userData.password;
         const headers = new Headers();
         headers.append('Content-Type', 'application/x-www-form-urlencoded');

         return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/login', body, {headers: headers})
         .map(
             (response: Response) => {
                 return response.json();
            })
         .catch( (error: Response) => Observable.throw(error.json()) );

        }
}
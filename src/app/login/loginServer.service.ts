import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginServerService {
    constructor (private http: Http){}

    loginService(userData) {
         const body = JSON.stringify(userData);
         console.log(typeof userData);
        // let body = 'email=' + userData.email +'&password=' + userData.password;
        //  body = body.replace('@', '%40');
        // console.log(body);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/login', body, {headers} )
            .map(
                (response: Response) => {
                    return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));

    }

}
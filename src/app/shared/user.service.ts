import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
    users: User[];
    constructor(private http: Http) {}
    getAllUsers() {
        const body = `client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/admin/users', body, {headers})
            .map(
                (response: Response) => {
                    this.users = response.json();
                    return response.json();
                })
                .catch((error: Response) => Observable.throw(error.json())
            );
    }

    // delete user
    deleteUser(id: number) {
        const body = `id=${id}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://mousaelenanyfciscu.000webhostapp.com/app/webservice/admin/deleteuser', body, {headers})
            .map(
                (response: Response) => {
                    return response.json();
              })
              .catch((error: Response) => Observable.throw(error.json()));
    }

    // get user by id
    getUserById(id) {
        const body = `user_id=${id}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/show/user', body, {headers})
            .map(
                (response: Response) => {
                    return response.json();
              })
              .catch((error: Response) => Observable.throw(error.json()));
    } 
}

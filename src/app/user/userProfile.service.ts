import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserProfileService {
    constructor(private http: Http) {}

    getHistory(id: string) {
        const body = `id=${id}&client_id=webApp&client_pass=bicloud_App2018#@`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/history', body,  {headers: headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    updateEmail(email: string, remail: string) {
        const body = `email=${email}&remail=${remail}&client_id=webApp&client_pass=bicloud_App2018#@`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/update/email', body,  {headers: headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    updateName(email: string, name: string) {
        const body = `email=${email}&name=${name}&client_id=webApp&client_pass=bicloud_App2018#@`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/update/name', body,  {headers: headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    updatePassword(email: string, password: string, repassword: string) {
        const body = `email=${email}&password=${password}&repassword=${repassword}&client_id=webApp&client_pass=bicloud_App2018#@`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/update/password', body,  {headers: headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    updateBalance(id: number, balance: number) {
        const body = `id=${id}&balance=${balance}&client_id=webApp&client_pass=bicloud_App2018#@`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/update/balance', body,  {headers: headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    deleteAccount(id: string, password: number) {
        const body = `id=${id}&password=${password}&client_id=webApp&client_pass=bicloud_App2018#@`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/delete/account', body,  {headers: headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    addFeedback(id: number, content: string) {
        const body = `user_id=${id}&content=${content}&client_id=webApp&client_pass=bicloud_App2018#@`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/feedback/create', body,  {headers: headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    deleteHistory(user_id: string, history_id: string) {
        const body = `user_id=${user_id}&history_id=${history_id}&client_id=webApp&client_pass=bicloud_App2018#@`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/remove/history/1',
             body,  {headers: headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }
}

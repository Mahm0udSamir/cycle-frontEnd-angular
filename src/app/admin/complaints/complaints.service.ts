import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ComplaintService {
    constructor(private http: Http) {}

    getAllComplaints() {
        const body = `client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/complain/Complain/all', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    getAllUsersComplaints() {
        const body = `client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/complains/user', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    addComplain(content: string) {
        const body = `content=${content}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/complain/createComplain', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    updateComplain(id: number , content: string) {
        const body = `complain_id=${id}&content=${content}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/complain/update', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    deleteComplain(id: number) {
        const body = `complain_id=${id}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/complain/delete', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    deleteUserComplain(id: number) {
        const body = `complain_id=${id}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(
            'https://mousaelenanyfciscu.000webhostapp.com/app/webservice/complain/user/delete',
            body,
            {headers}
        )
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }
}

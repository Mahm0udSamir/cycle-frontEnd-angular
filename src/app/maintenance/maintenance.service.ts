import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MaintenanceService {
    constructor(private http: Http) {}

    addFeedback(id: string, content: string) {
        const body = `maintenance_id=${id}&content=${content}&client_id=webApp&client_pass=bicloud_App2018#@`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/maintenance/feedback/create',
                    body,  {headers: headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));

    }
}

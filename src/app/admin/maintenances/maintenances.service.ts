import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MaintenancesService {
    constructor(private http: Http) {}
    getAllMaintenances() {
        const body = `client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/maintenance/maintenances', body, {headers})
            .map(
                (response: Response) => {
                    // this.users = response.json();
                    return response.json();
                })
                .catch((error: Response) => Observable.throw(error.json())
            );
    }

    // delete Maintenances
    deleteMaintenance(id: number) {
        const body = `id=${id}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/maintenance/deleteMaintenance', body, {headers})
            .map(
                (response: Response) => {
                    return response.json();
              })
              .catch((error: Response) => Observable.throw(error.json()));
    }

    // edit maintenance name
    editMaintenanceName(email, name) {
        const body = `email=${email}&name=${name}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // tslint:disable-next-line:max-line-length
        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/update/name', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
          })
          .catch((error: Response) => Observable.throw(error.json()));
    }

    // edit maintenance email
    editMaintenanceEmail(email, remail) {
        const body = `email=${email}&remail=${remail}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // tslint:disable-next-line:max-line-length
        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/user/update/email', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
          })
          .catch((error: Response) => Observable.throw(error.json()));
    }

    // add maintenance
    addMaintenance(maintenance: {name: string, email: string, password: string}) {
        // tslint:disable-next-line:max-line-length
        const body = `name=${maintenance.name}&email=${maintenance.email}&password=${maintenance.password}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('http://mousaelenanyfciscu.000webhostapp.com/app/webservice/maintenance/createMaintenance', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
          })
          .catch((error: Response) => Observable.throw(error.json()));
    }
}


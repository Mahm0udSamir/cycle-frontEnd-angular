import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedbackService {
    constructor(private http: Http) {}

    getUsersFeedback() {
        const body = `client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/feedback/user/feedback', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    getMaintenanceFeedback() {
        const body = `client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/feedback/maintenance/feedback', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    // addComplain(content: string) {
    //     const body = `content=${content}`;
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //     return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/complain/createComplain', body, {headers})
    //     .map(
    //         (response: Response) => {
    //             return response.json();
    //         }
    //     ).catch((error: Response) => Observable.throw(error.json()));
    // }

    // updateComplain(id: number , content: string) {
    //     const body = `complain_id=${id}&content=${content}`;
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //     return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/complain/update', body, {headers})
    //     .map(
    //         (response: Response) => {
    //             return response.json();
    //         }
    //     ).catch((error: Response) => Observable.throw(error.json()));
    // }

    deleteFeedback(id: number) {
        const body = `feedback_id=${id}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/feedback/delete', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    addFeedtoHome(id: number) {
        const body = `id=${id}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/feedback/add/home', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }

    getFeedtoHome() {
        const body = `client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/feedback/home', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }
    deleteFeedFromHome(id: string) {
        const body = `id=${id}&client_id=webApp&client_pass=bicloud_App2018#@`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('https://mousaelenanyfciscu.000webhostapp.com/app/webservice/feedback/remove/home', body, {headers})
        .map(
            (response: Response) => {
                return response.json();
            }
        ).catch((error: Response) => Observable.throw(error.json()));
    }
}

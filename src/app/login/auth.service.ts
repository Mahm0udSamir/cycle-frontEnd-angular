import { Injectable } from '@angular/core';
@Injectable()
export class AuthService{
   login: boolean;
   type: string;
    
    constructor() {}
    
    isAdminAuthenticated() {
     const token = localStorage.getItem('token');
       this.type = localStorage.getItem('type');
       this.login = JSON.parse(localStorage.getItem('login'));
        
        const promise = new Promise(
            (resolve, reject) => {
                if(this.login && this.type === 'admin' && token) {resolve(true);}
            }
        );
        return promise;
    }
}

// this.loggedIn = this.getLogin();
// this.loginServerService.userType.subscribe(
    //     (type) => {
        //         this.type = type;
        //         console.log('type in auth  ',type);
//     }
// );
import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../userProfile.service';
import { Router } from '@angular/router';
import { LoginServerService } from '../../../login/loginServer.service';

@Component({
  selector: 'app-update-balance',
  templateUrl: './update-balance.component.html',
  styleUrls: ['./../update-email/update-email.component.css']
})
export class UpdateBalanceComponent implements OnInit {
  message: string;
  constructor(
    private userService: UserProfileService,
    private router: Router,
    private loginServerService: LoginServerService
  ) { }

  ngOnInit() {
  }

  onSubmit(f) {
    const balance = f.value.balance;
    const id = Number(localStorage.getItem('id'));
    // alert(`id= ${id} ,  balance= ${balance}`);
    this.userService.updateBalance(id, balance).subscribe(
      data => {
        console.log(data);
        if (data.success) {
          this.loginServerService.userBalance.emit(balance );
          localStorage.setItem('balance', balance );
          this.router.navigate(['/reload/home/home']);
          return;
        } else {
          alert(JSON.stringify(data));
        }
      },
      error => {
        console.log(error);
        this.message = 'Something wrong please try again!';
      }
    );
  }
}

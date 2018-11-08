import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user';
import { Router } from '@angular/router';
import { Md2Toast } from 'md2/toast/toast';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  search: string;
  users: User[];
  time;

  constructor(
    private userService: UserService,
    private router: Router,
    private toast: Md2Toast) { }

  ngOnInit() {

    this.userService.getAllUsers().subscribe(
      users => {
        this.users = users;
        console.log(this.users);
      },
      error => {
        console.log(error);
      }
    );
    this.time = setInterval(() => {
      this.userService.getAllUsers().subscribe(
        users => {
          if ( JSON.stringify(this.users) !==  JSON.stringify(users)) {
            this.users = users;
            console.log('updated users');
          }
        },
        error => {
          console.log(error);
        }
      );
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.time);
  }

  onDelete(id) {
    console.log('delete by id', id);
    this.userService.deleteUser(id).subscribe(
      data => {
        if (data.success) {
          this.router.navigate(['/reload/admin/users']);
        } else {
          alert('error ocure');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  search: string;
  users: User[];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // setInterval(
    //   () => {

        this.userService.getAllUsers().subscribe(
          users => {
            this.users = users;
            console.log(this.users);
          },
          error => {
            console.log(error);
          }
        );
      // },1000
    // )
  }

  onDelete(id) {
    console.log('delete by id', id );
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

import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../userProfile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: {balance: string, email: string, img: string, id: string, name: string};

  constructor(private userService: UserProfileService) { }

  ngOnInit() {
   this.user = {
      balance: localStorage.getItem('balance'),
      email: localStorage.getItem('email'),
      img: localStorage.getItem('img'),
      id: localStorage.getItem('id'),
      name: localStorage.getItem('name')
   };

   console.log(this.user);
  }


}

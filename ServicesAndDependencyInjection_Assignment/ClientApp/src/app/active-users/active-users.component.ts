import { Component } from '@angular/core';
import { userService } from '../User.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  constructor(private userservice: userService) { }

  ngOnInit() {
    this.users = this.userservice.activeUsers;
  }
  onSetToInactive(id: number) {
    this.userservice.inactive(id);
  }
}

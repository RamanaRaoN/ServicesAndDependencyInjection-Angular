import { Component} from '@angular/core';
import { userService } from '../User.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
 users: string[];
  constructor(private userservice: userService) { }

  ngOnInit() {
    this.users = this.userservice.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userservice.active(id);
  }
}

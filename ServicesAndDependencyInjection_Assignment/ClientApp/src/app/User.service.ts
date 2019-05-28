
import { Injectable } from "@angular/core";
import { counterService } from "./Counter.service";

@Injectable()
export class userService{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: counterService) { }
  inactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.inactivecount();
  }

  active(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.activecount();
  }
}

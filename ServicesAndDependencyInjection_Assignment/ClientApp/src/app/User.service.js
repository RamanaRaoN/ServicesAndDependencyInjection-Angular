"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@Injectable()
var userService = /** @class */ (function () {
    function userService(counterService) {
        this.counterService = counterService;
        this.activeUsers = ['Max', 'Anna'];
        this.inactiveUsers = ['Chris', 'Manu'];
        //@Output() inactiveCounter = new EventEmitter<number>();
        //@Output() activeCounter = new EventEmitter<number>()
        this.inactiveCounter = [];
        this.activeCounter = [];
    }
    userService.prototype.inactive = function (id) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        //this.inactiveCounter.push(this.inactiveCounter.length + 1);
        this.counterService.inactivecount();
    };
    userService.prototype.active = function (id) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        // this.activeCounter.push(this.activeCounter.length + 1);
        this.counterService.activecount();
    };
    return userService;
}());
exports.userService = userService;
//# sourceMappingURL=User.service.js.map
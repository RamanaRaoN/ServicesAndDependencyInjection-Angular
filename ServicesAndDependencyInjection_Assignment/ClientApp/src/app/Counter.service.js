"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counterService = /** @class */ (function () {
    function counterService() {
        this.inactiveCounter = 0;
        this.activeCounter = 0;
    }
    counterService.prototype.inactivecount = function () {
        this.inactiveCounter++;
        console.log('active to inactive ' + this.inactiveCounter);
    };
    counterService.prototype.activecount = function () {
        this.activeCounter++;
        console.log('Inactive to active ' + this.activeCounter);
    };
    return counterService;
}());
exports.counterService = counterService;
//# sourceMappingURL=Counter.service.js.map
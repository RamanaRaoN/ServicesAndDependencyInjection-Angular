
export class counterService{

  inactiveCounter: number =0;
  activeCounter: number = 0;

  inactivecount() {
    this.inactiveCounter++;
    console.log('active to inactive ' + this.inactiveCounter);
  }
  activecount() {
    this.activeCounter++;
    console.log('Inactive to active ' + this.activeCounter);
  }
}

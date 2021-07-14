export default class Button {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.buttonName = name;
  }
  display() {
    //button wird designt
   
    fill(0, 200, 0);
    rect(this.x, this.y, 192.5, 50, 15);
    textSize(20);
    fill(250);
    text(this.buttonName, this.x + 35, this.y + 30);
  }
  //wenn der Button gerückt wird, wird der hitTest true
  hitTest() {
  
    if (
      mouseX >= this.x &&
      mouseX <= this.x + 192.5 &&
      mouseY >= this.y &&
      mouseY <= this.y + 50
    ) {
      return true;
    } else {
      return false;
    }
  }

}


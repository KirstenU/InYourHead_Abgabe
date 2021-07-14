//hier werden Buttons erzeiúgt
export default class Button {
  constructor(x, y, width, height, name, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.buttonName = name;
    this.color = "#" + color;
  }
  display() {
    //den sollten wir auch noch responsive machen
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, 10);
    textFont("Hero New");
    textSize(30);
    fill(0);
    text(this.buttonName, this.x + 65, this.y + 45);
  }
  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      //return true;
      console.log("HIT");
    } else {
      //return false;
      console.log("false");
    }
  }
}

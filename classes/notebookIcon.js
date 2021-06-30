export default class NotebookIcon {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.picture = loadImage("pictures/icon.png");
    this.width = width;
    this.height = height;
  }
  display() {
    image(this.picture, this.x, this.y, this.width, this.height);
  }
  hitTest() {
    if (
      mouseX < this.x + this.width &&
      mouseX > this.x &&
      mouseY < this.y + this.height &&
      mouseY > this.y
    ) {
      return true;
    } else {
      return false;
    }
  }
}

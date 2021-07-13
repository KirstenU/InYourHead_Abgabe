//das hier ist ein Test für die Welt Beste Projekt Gruppe ever!!!
class NotebookIcon {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.picture = loadImage("icon.png");
    /*height und width habe ich weg gelassen, weil man 
    diese ja auch im Image Tag einstellen kann*/
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

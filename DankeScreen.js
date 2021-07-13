import Button from "./neueButtons.js";
let backbutton = new Button(465, 450, 230, 65, "Zurück zum Start", "c9a6b9");

export default class DankeScreen {
  constructor() {}
  display() {
    rect(50, 50, 100);
    image(this.picture, 0, 0, 1162, 700);
    backbutton.display();
  }
  hitTest() {
    if (
      mouseX >= backbutton.x &&
      mouseX <= backbutton.x + backbutton.width &&
      mouseY >= backbutton.y &&
      mouseY <= backbutton.y + backbutton.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}

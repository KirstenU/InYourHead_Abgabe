import Button from "./neueButtons.js";
let nextbutton = new Button(465, 450, 230, 65, "Weiter", "c9a6b9");

export default class FamilyScreen {
  constructor() {}
  display(picture) {
    rect(50, 50, 100);
    image(picture, 0, 0, 1162, 700);
    nextbutton.display();
  }
  hitTest() {
    if (
      mouseX >= nextbutton.x &&
      mouseX <= nextbutton.x + nextbutton.width &&
      mouseY >= nextbutton.y &&
      mouseY <= nextbutton.y + nextbutton.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}

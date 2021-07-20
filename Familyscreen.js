//auf dieser Art von Screens wird zuerst festgelet, wo das Hintergrundbild angezeigt werden soll und welche Buttons wo anzeiegt werden.
//im Anschluss bekommen diese Buttons einen hitTest, mit dem getestet wird, ob die gedrückt wurden.
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

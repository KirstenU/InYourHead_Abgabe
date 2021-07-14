//auf dieser Art von Screens wird zuerst festgelet, wo das Hintergrundbild angezeigt werden soll und welche Buttons wo anzeiegt werden.
//im Anschluss bekommen diese Buttons einen hitTest, mit dem getestet wird, ob die gedrückt wurden.import Button from "./neueButtons.js";
import Button from "./neueButtons.js";
let nextbutton = new Button(465, 450, 230, 65, "Start", "c9a6b9");

export default class Name {
  constructor() {}
  display(picture) {
    image(picture, 0, 0, 1162, 700);
    nextbutton.display();
  }
  hitTest() {
    if (
      mouseX >= 465 &&
      mouseX <= 465 + 230 &&
      mouseY >= 450 &&
      mouseY <= 450 + 65
    ) {
      return true;
    } else {
      return false;
    }
  }
}

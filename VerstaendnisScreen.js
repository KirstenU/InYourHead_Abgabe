//auf dieser Art von Screens wird zuerst festgelet, wo das Hintergrundbild angezeigt werden soll und welche Buttons wo anzeiegt werden.
//im Anschluss bekommen diese Buttons einen hitTest, mit dem getestet wird, ob die gedrückt wurden.
import Button from "./neueButtons.js";
let okaybutton = new Button(465, 450, 230, 65, "Okay!", "c9a6b9");

export default class VerstaendnisScreen {
  constructor() {}
  display(picture) {
    image(picture, 0, 0, 1162, 700);
    okaybutton.display();
  }
  hitTest() {
    if (
      mouseX >= okaybutton.x &&
      mouseX <= okaybutton.x + okaybutton.width &&
      mouseY >= okaybutton.y &&
      mouseY <= okaybutton.y + okaybutton.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}

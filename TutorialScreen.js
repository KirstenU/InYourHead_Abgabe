//auf dieser Art von Screens wird zuerst festgelet, wo das Hintergrundbild angezeigt werden soll und welche Buttons wo anzeiegt werden.
//im Anschluss bekommen diese Buttons einen hitTest, mit dem getestet wird, ob die gedrückt wurden.
import Button from "./neueButtons.js";
let verstandenbutton = new Button(825, 560, 230, 65, "Verstanden", "c9a6b9");
let weiterbutton = new Button(825, 560, 230, 65, "Weiter", "c9a6b9");

export default class TutorialScreen {
  constructor() {}
  displayfirst(picture1) {
    image(picture1, 0, 0, 1162, 700);
    weiterbutton.display();
  }
  displaysecond(picture2) {
    image(picture2, 0, 0, 1162, 700);
    verstandenbutton.display();
  }
  hitTestWeiter() {
    if (
      mouseX >= weiterbutton.x &&
      mouseX <= weiterbutton.x + weiterbutton.width &&
      mouseY >= weiterbutton.y &&
      mouseY <= weiterbutton.y + weiterbutton.height
    ) {
      return true;
    } else {
      return false;
    }
  }
  hitTestVerstanden() {
    if (
      mouseX >= verstandenbutton.x &&
      mouseX <= verstandenbutton.x + verstandenbutton.width &&
      mouseY >= verstandenbutton.y &&
      mouseY <= verstandenbutton.y + verstandenbutton.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}

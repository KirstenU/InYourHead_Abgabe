import Button from "./neueButtons.js";
let backbutton = new Button(465, 450, 230, 65, "Zurück zum Start", "c9a6b9");
//auf dieser Art von Screens wird zuerst festgelet, wo das Hintergrundbild angezeigt werden soll und welche Buttons wo anzeiegt werden.
//im Anschluss bekommen diese Buttons einen hitTest, mit dem getestet wird, ob die gedrückt wurden.
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

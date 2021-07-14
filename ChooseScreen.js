import Button from "./neueButtons.js";
let freundebutton = new Button(320, 330, 230, 65, "FreundIn", "c9a6b9");
let familiebutton = new Button(610, 330, 230, 65, "Elternteil", "c9a6b9");

//auf dieser Art von Screens wird zuerst festgelet, wo das Hintergrundbild angezeigt werden soll und welche Buttons wo anzeiegt werden.
//im Anschluss bekommen diese Buttons einen hitTest, mit dem getestet wird, ob die gedrückt wurden.
export default class ChooseScreen {
  constructor() {}
  display(picture) {
    image(picture, 0, 0, 1162, 700);
    freundebutton.display();
    familiebutton.display();
  }
  hitTestFreunde() {
    if (
      mouseX >= freundebutton.x &&
      mouseX <= freundebutton.x + freundebutton.width &&
      mouseY >= freundebutton.y &&
      mouseY <= freundebutton.y + freundebutton.height
    ) {
      return true;
    } else {
      return false;
    }
  }
  hitTestFamilie() {
    if (
      mouseX >= familiebutton.x &&
      mouseX <= familiebutton.x + familiebutton.width &&
      mouseY >= familiebutton.y &&
      mouseY <= familiebutton.y + familiebutton.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}

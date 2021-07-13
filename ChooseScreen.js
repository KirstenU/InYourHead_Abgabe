import Button from "./neueButtons.js";
let freundebutton = new Button(320, 330, 230, 65, "FreundIn", "c9a6b9");
let familiebutton = new Button(610, 330, 230, 65, "Elternteil", "c9a6b9");

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

import Button from "./neueButtons.js";
let spielbutton = new Button(290, 410, 230, 65, "Spielen", "c9a6b9");
let tutorialbutton = new Button(645, 410, 230, 65, "Tutorial", "c9a6b9");

export default class Startscreen {
  constructor() {}
  display(picture) {
    image(picture, 0, 0, 1162, 700);
    spielbutton.display();
    tutorialbutton.display();
  }
  hitTestSpiel() {
    if (
      mouseX >= spielbutton.x &&
      mouseX <= spielbutton.x + 230 &&
      mouseY >= spielbutton.y &&
      mouseY <= spielbutton.y + 65
    ) {
      return true;
    } else {
      return false;
    }
  }
  hitTestTutorial() {
    if (
      mouseX >= tutorialbutton.x &&
      mouseX <= tutorialbutton.x + 230 &&
      mouseY >= tutorialbutton.y &&
      mouseY <= tutorialbutton.y + 65
    ) {
      return true;
    } else {
      return false;
    }
  }
}

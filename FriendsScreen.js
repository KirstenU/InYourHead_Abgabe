import Button from "./neueButtons.js";
let nextbutton2 = new Button(465, 450, 230, 65, "Weiter", "c9a6b9");

export default class FriendsScreen {
  constructor() {}
  display(picture) {
    rect(50, 50, 100);
    image(picture, 0, 0, 1162, 700);
    nextbutton2.display();
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

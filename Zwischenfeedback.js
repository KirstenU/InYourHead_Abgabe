import GameButton from "./gameButton.js";
import Export from "./Export.js";
let weiterButton = new GameButton(825, 560);
let exitGame = new GameButton(560, 560);
export default class Zwischenfeedback {
  constructor(trigger, wellBeing, bPName, number) {
    this.trigger = trigger;
    this.knowledge = 4;
    this.wellBeing = wellBeing;
    this.bPName = bPName;
    this.number = number;
  }
  display(picture) {
    let data = new Export(this.bPName);
    image(picture, 0, 0, 1162, 700);
    weiterButton.display(8);
    exitGame.display(9);
    text(this.wellBeing, 105, 350);
    text(this.trigger, 105, 420);
    text(this.knowledge, 105, 490);
    text(data.createMiddleFeedback[number], 105, 590, 1000);
  }
  hitTestWeiter() {
    if (
      mouseX >= weiterButton.x &&
      mouseX <= weiterButton.x + weiterButton.width &&
      mouseY >= weiterButton.y &&
      mouseY <= weiterButton.y + weiterButton.height
    ) {
      return true;
    } else {
      return false;
    }
  }
  hitTestExit() {
    if (
      mouseX >= exitGame.x &&
      mouseX <= exitGame.x + exitGame.width &&
      mouseY >= exitGame.y &&
      mouseY <= exitGame.y + exitGame.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}

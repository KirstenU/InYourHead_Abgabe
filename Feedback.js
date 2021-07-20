//auf dieser Art von Screens wird zuerst festgelet, wo das Hintergrundbild angezeigt werden soll und welche Buttons wo anzeiegt werden.
//im Anschluss bekommen diese Buttons einen hitTest, mit dem getestet wird, ob die gedrückt wurden.
import GameButton from "./gameButton.js";
import Export from "./organisation/Export.js";
let weiterButton = new GameButton(560, 560);
let nochmal = new GameButton(560, 560);
let exitGame = new GameButton(825, 560);
export default class Feedback {
  constructor(trigger, wellBeing, knowledge, bPName, number) {
    this.trigger = trigger;
    this.knowledge = knowledge;
    this.wellBeing = wellBeing;
    this.bPName = bPName;
    this.number = number;
    this.met = false;
  }
  display(picture) {
    let data = new Export(this.bPName);
    image(picture, 0, 0, 1162, 700);
    weiterButton.display(2);
    exitGame.display(8);
    fill(0);
    textSize(20);
    text(this.wellBeing * -1, 115, 175);
    text(this.trigger, 115, 225);
    text(this.knowledge, 115, 275);
    text(data.createMiddleFeedback[this.number], 105, 350, 950);
  }
  finalDisplay(picture) {
    let data = new Export(this.bPName);
    image(picture, 0, 0, 1162, 700);
    nochmal.display(7);
    exitGame.display(8);
    fill(0);
    textSize(20);
    text(this.wellBeing * -1, 115, 175);
    text(this.trigger, 115, 225);
    text(this.knowledge, 115, 275);
    for (let i = 0; i < data.finalFeedback.length; i++) {
      translate(0, 330);
      text(data.finalFeedback[i], 105, 20 * i, 950);
    }
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

export default class GameButton {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 65;
    this.width = 230;
    this.buttonArray = [
      "Start",
      "Tutorial",
      "Weiter",
      "Verstanden",
      "Okay",
      "FreundIn",
      "Elternteil",
      "Spiel verlassen",
      "Spiel beenden",
      "nochmal spielen",
    ];
    this.textSize = 30;
  }

  display(number) {
    push();
    noStroke();
    fill("#C9A6B9");
    rect(this.x, this.y, this.width, this.height, 15);
    pop();

    push();
    translate(this.x + 115, this.y + 42, 5);
    fill(0);
    textFont("Hero New");
    textSize(this.textSize);
    textAlign(CENTER);
    text(this.buttonArray[number], 0, 0);
    pop();

    if (textWidth(this.buttonArray[number]) > 25) {
      this.textSize = 25;
    }
    // console.log(textWidth(this.buttonArray[9]));
  }

  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + 230 &&
      mouseY >= this.y &&
      mouseY <= this.y + 65
    ) {
      return true;
    } else {
      return false;
    }
  }
  /*colourchange() {
      if (mouseIsPressed) {
        fill(255);
        text("EJF", 50, 50);
        this.buttonName = "YIPPIE";
        console.log("NÖ");
      }
    }*/
}

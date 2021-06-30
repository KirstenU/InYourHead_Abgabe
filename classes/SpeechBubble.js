export default class SpeechBubble {
  constructor(message, person) {
    this.x = 350;
    this.y = 200;
    this.message = message;
    this.height = height;
    this.person = person;
    this.hitter = false;
    this.hitterNumber = 0;
    this.done = false;
    this.width = 200;
    this.line = line;
    this.textLeading = 3.5;
  }
  messageHeight(maxWidth) {
    textSize(12);
    let text = this.message.split(" ");
    this.line = "";
    let textHeight = this.textLeading;
    for (let i = 0; i < text.length; i++) {
      let textLine = this.line + text[i] + " ";
      let textWidth = drawingContext.measureText(textLine).width;
      if (textWidth > maxWidth && i > 0) {
        this.line = text[i] + " ";
        textHeight += this.textLeading;
      } else {
        this.line = textLine;
      }
    }

    return textHeight;
  }
  display(direction, color) {
    this.height = this.messageHeight(this.textLeading);
    if (this.hitter === false) {
      translate(this.x, this.y);
      if (direction === "left") {
        fill(color);
        rect(-20, -10, this.width + 20, this.height + 20, 10);
        if (this.hitterNumber === 0) {
          if (this.height > 10) {
            triangle(
              this.width - 20,
              this.height - 25,
              this.width - 10,
              this.height - 20,
              this.width - 20,
              this.height - 15
            );
          } else if (this.height <= 10) {
            triangle(
              this.width - 20,
              0,
              this.width - 10,
              5,
              this.width - 20,
              10
            );
          }
        }
        fill(0, 0, 0);
        text(this.message, -10, 0, this.width - 20);
      }
      if (direction === "right") {
        fill(color);
        rect(-10, -10, this.width + 20, this.height + 20, 10);
        if (this.hitterNumber === 0) {
          if (this.height > 10) {
            triangle(
              this.width - 20,
              this.height - 25,
              this.width - 10,
              this.height - 20,
              this.width - 20,
              this.height - 15
            );
          } else if (this.height <= 10) {
            triangle(
              this.width - 20,
              0,
              this.width - 10,
              5,
              this.width - 20,
              10
            );
          }
        }
        fill(0, 0, 0);
        text(this.message, 0, 0, this.width - 20);
      }
    }
  }
  hitTest(hit) {
    push();
    if (this.height > 10) {
      if (
        (mouseIsPressed &&
          mouseX >= this.x + this.width - 20 &&
          mouseX <= this.x + this.width - 10 &&
          mouseY >= this.y + this.height - 25 &&
          mouseY <= this.y + this.height - 15) ||
        hit > 0
      ) {
        this.y = this.y - this.height - 30;
        this.hitterNumber = this.hitterNumber + 1;
        if (this.hitterNumber > 1) {
          this.hitter = true;
        }
      }
    }
    if (this.height <= 10) {
      if (
        (mouseIsPressed &&
          mouseX >= this.x + this.width - 20 &&
          mouseX <= this.x + this.width - 10 &&
          mouseY >= this.y &&
          mouseY <= this.y + 10) ||
        hit > 0
      ) {
        this.y = this.y - this.height - 30;
        this.hitterNumber = this.hitterNumber + 1;
        if (this.hitterNumber > 1) {
          this.hitter = true;
        }
      }
    }
    pop();
  }
  all(hit, direction, color) {
    push();
    this.messageHeight();
    this.hitTest(hit);
    this.display(direction, color);
    pop();
  }
}

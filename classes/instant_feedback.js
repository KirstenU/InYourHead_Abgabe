export default class InstantFeedback {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.feedbackText = "";
    this.instantFeedbackNotebook = [];
  }
  display(message) {
    fill(255);
    rect(this.x, this.y, this.width, this.height, 10);
    push();
    translate(this.x, this.y);
    fill(0);
    triangle(
      this.width - 20,
      this.y + 20,
      this.width - 10,
      this.y + 25,
      this.width - 20,
      this.y + 30
    );
    pop();
    push();
    fill(0);
    textSize(15);
    text(message, this.x + 10, this.y + 30, this.width - 20);
    pop();
    // }
  }
  hitTest() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Notebook extends InstantFeedback {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  displayNotebook() {
    fill(255);
    rect(this.x, this.y, this.width, this.height, 10);
    text(this.feedbackText, this.x + 20, this.y + 20);
  }
}

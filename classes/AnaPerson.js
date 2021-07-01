let Namearray = ["Test"];
let Hoverthoughtarray = ["erster Test", "zweiter Test", "dritter Test"];

export default class AnaPerson {
  constructor(x, y, width, height, name, currentMood, hoverthought) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hoverthought = hoverthought;
    this.name = name;
    this.currentMood = currentMood;
    this.picturesad = loadImage("pictures/bP/sad.png");
    this.picturehappy = loadImage("pictures/bP/happy.png");
    this.pictureneutral = loadImage("pictures/bP/neutral.png");
    this.picturecrying = loadImage("pictures/bP/crying.png");
    this.picturescared = loadImage("pictures/bP/scared.png");
  }
  hover() {
    if (
      (mouseX >= this.x &&
        mouseX <= this.x + this.width &&
        mouseY >= this.y + 135 &&
        mouseY <= this.y + ana.height) ||
      (mouseX >= this.x + 75 &&
        mouseX <= this.x + this.width - 30 &&
        mouseY >= this.y + 5 &&
        mouseY <= this.y + ana.height - 125)
    ) {
      push();
      fill(255);
      ellipse(450, 100, 200, 100);
      ellipse(370, 170, 40);
      ellipse(340, 200, 20);
      fill(0);
      Hoverthoughtarray.push(ana.hoverthought);
      text(Hoverthoughtarray[ana.hoverthought], 415, 100);
      pop();
    } else {
      fill(100);
    }
  }
  mood() {
    push();
    textSize(15);
    fill(255);
    if (this.currentMood === "happy") {
      image(this.picturehappy, this.x, this.y, this.width, this.height);
      console.log("Happy");
    } else if (this.currentMood === "crying") {
      image(this.picturecrying, this.x, this.y, this.width, this.height);
      console.log("crying");
    } else if (this.currentMood === "neutral") {
      image(this.pictureneutral, this.x, this.y, this.width, this.height);
      console.log("neutral");
    } else if (this.currentMood === "sad") {
      image(this.picturesad, this.x, this.y, this.width, this.height);
      console.log("sad");
    } else if (this.currentMood === "scared") {
      image(this.picturescared, this.x, this.y, this.width, this.height);
      console.log("scared");
    }
    pop();
  }
}

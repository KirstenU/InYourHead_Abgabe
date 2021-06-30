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
    this.picture = loadImage("pictures/bP/sad.png");
  }
  hover() {
    image(this.picture, this.x, this.y, this.width, this.height);
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
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
    if (this.currentMood === "laugh") {
      text(" Moodchange 😂", 150, 450);
    } else if (this.currentMood === "smilecry") {
      text("Moodchange 🥲", 150, 450);
    } else if (this.currentMood === "heart") {
      text("Moodchange 😍", 150, 450);
    }
    pop();
  }
}

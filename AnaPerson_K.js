let Namearray = ["Test"];
let Hoverthoughtarray = ["erster Test", "zweiter Test", "dritter Test"];

export default class AnaPerson {
  constructor(x, y, width, height, name, currentMood, hoverthought) {
    //müsste man nicht eine alternative finden zu width und height beim hovern weil das Bild von der bP ja keine viereckige umrandung hat?
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hoverthought = hoverthought;
    this.name = name;
    this.currentMood = currentMood;
    this.picturesad = loadImage("bP/sad.png");
    this.picturehappy = loadImage("bP/happy.png");
    this.pictureneutral = loadImage("bP/neutral.png");
    this.picturecrying = loadImage("bP/crying.png");
    this.picturescared = loadImage("bP/scared.png");
    this.textLeading = 10;
    this.line = line;
  }
  //vgl Hilfe von Herr Toepper
  messageHeight(maxWidth) {
    //text wird überall dort, wo ein Leerzeichen ist, gespalten und als neues Element in einem Array aufgerufen
    let text = this.hoverthought.split(" ");
    //hier wird nur this.line erzeigt, ohne ihm einen Wert zuzuweisen
    this.line = "";
    //wenn textHeight und textLeaning nicht verschieden definiert werden, funktioniert textHeight += this.textLeading; nicht mehr
    let textHeight = this.textLeading;
    for (let i = 0; i < text.length; i++) {
      //hier wird jetzt jedes Wort einzeln durchgegangen und mit einem Leerzeichen ergänzt, damit der Text lesbar ist.
      let textLine = this.line + text[i] + " ";
      //The p5.js API provides a lot of functionality for creating graphics, but there is some native HTML5 Canvas functionality that is not exposed by p5. You can still call it directly using the variable drawingContext, as in the example shown.(https://p5js.org/reference/#/p5/drawingContext)
      let textWidth = drawingContext.measureText(textLine).width;
      //hier wird, wenn die Textlänge einer Zeile den maximalen Wert, den diese Annehmen soll,überschreitet, eine Zeile hinzugeefügt
      if (textWidth > maxWidth && i > 0) {
        this.line = text[i] + " ";
        // a+=b === a=a+b
        textHeight += this.textLeading;
      } else {
        this.line = textLine;
      }
    }
    return textHeight;
  }
  hover() {
    //bei hover wird gedankenblase angezeigt
    if (
      (mouseX >= this.x &&
        mouseX <= this.x + this.width &&
        mouseY >= this.y + 135 &&
        mouseY <= this.y + this.height) ||
      (mouseX >= this.x + 75 &&
        mouseX <= this.x + this.width - 30 &&
        mouseY >= this.y + 5 &&
        mouseY <= this.y + this.height - 125)
    ) {
      push(); //hier zum Beispiel ein translate für eine mögliche Animation der Gedankenblase
      fill(255);
      //wird Gedankenblase gecodet? uuund wenn ja, können es ja eig feste Werte wie hier sein oder? Ist ja immer die gleiche Position
      //Julie: ich würde es von der Position von der bP ausmachen
      this.speechbubblehHeight = this.messageHeight(this.textLeading);
      ellipse(450, 200, 600, 200);
      ellipse(370, 370, 40);
      ellipse(340, 400, 20);
      fill(0);
      /*Hoverthoughtarray.push(ana.hoverthought);
      text(Hoverthoughtarray[ana.hoverthought], 415, 100);*/
      text(this.hoverthought, 230, 190, 500);
      pop();
    } else {
      fill(100);
    }
  }
  mood() {
    push();
    textSize(30);
    //je nach mood wird ein anderes bild displayt
    if (this.currentMood === "happy") {
      image(this.picturehappy, this.x, this.y, this.width, this.height);
      //  console.log("Happy");
    } else if (this.currentMood === "crying") {
      image(this.picturecrying, this.x, this.y, this.width, this.height);
      // console.log("crying");
    } else if (this.currentMood === "neutral") {
      image(this.pictureneutral, this.x, this.y, this.width, this.height);
      //console.log("neutral");
    } else if (this.currentMood === "sad") {
      image(this.picturesad, this.x, this.y, this.width, this.height);
      // console.log("sad");
    } else if (this.currentMood === "scared") {
      image(this.picturescared, this.x, this.y, this.width, this.height);
      // console.log("scared");
    }
    pop();
  }
}

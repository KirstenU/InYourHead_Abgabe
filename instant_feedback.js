//erstellt zum ersten Mal und mit richtigen Klassen am 27.06.2021
//überarbeitet am 30.06
export default class InstantFeedback {
  constructor(message) {
    this.x = 400;
    this.y = 35;
    this.width = 477;
    this.height = height;
    this.message = message;
    this.line = line;
    //Zeilenabstand
    this.textLeading = 4;
  }
  messageHeight(maxWidth) {
    //text wird überall dort, wo ein Leerzeichen ist, gespalten und als neues Element in einem Array aufgerufen
    let text = this.message.split(" ");
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

  display() {
    //weiterhin wird die Texthöhe als this.height definiert
    this.height = this.messageHeight(this.textLeading);
    fill(255);
    rect(this.x + 180, this.y, this.width, this.height + 20, 10);
    push();
    translate(this.x, this.y);
    fill(0);
    triangle(
      this.width - 20 + 180,
      this.y + 20,
      this.width - 10 + 180,
      this.y + 25,
      this.width - 20 + 180,
      this.y + 30
    );
    pop();
  }

  displayText() {
    push();
    fill(0);
    textFont("Hero New");
    textSize(20);
    text(this.message, this.x + 200, this.y + 30, this.width - 20);
    pop();
  }

  //richtiger hitTest
  hitTest() {
    if (
      mouseX >= this.x + this.width - 20 + 180 &&
      mouseX <= this.x + this.width - 10 + 180 &&
      mouseY >= this.y + this.y + 10 &&
      mouseY <= this.y + this.y + 30
    ) {
      return true;
    } else {
      return false;
    }
  }
}

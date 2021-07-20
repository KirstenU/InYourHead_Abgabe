export default class Button {
  constructor(x, y, message) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.message = message;
    this.width = 192.5;

    this.textLeading = 15;
    this.line = line;
    this.message = message;

    /*this.trigger = trigger;
    this.wellBeing = wellBeing;
    this.knowledge = knowledge;*/
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

  display(otherheight, top) {
    textFont("Hero New");
    this.height = this.messageHeight(this.textLeading);
    if (this.height < 60) {
      this.height = 60;
    }

    this.y = 665 - this.height;

    fill("#e2efde");
    rect(this.x, this.y, this.width, this.height, 15);
    push();
    textSize(20);
    fill(0);
    if (this.height < otherheight) {
      this.height = otherheight;
    }
    text(this.message, this.x + 20, this.y + 25, this.width - 20);
    pop();
  }
  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}

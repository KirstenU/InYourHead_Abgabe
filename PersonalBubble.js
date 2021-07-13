export default class PersonalBubble {
  constructor(color, direction) {
    this.color = color;
    this.direction = direction;
  }
}
/*nextMessageHeight(maxWidth) {
    push();
    //text wird überall dort, wo ein Leerzeichen ist, gespalten und als neues Element in einem Array aufgerufen
    let nextText = this.lastmessage.split(" ");
    //hier wird nur this.line erzeigt, ohne ihm einen Wert zuzuweisen
    this.nextLine = "";
    //wenn textHeight und textLeaning nicht verschieden definiert werden, funktioniert textHeight += this.textLeading; nicht mehr
    let nextTextHeight = this.textLeading;
    for (let i = 0; i < nextText.length; i++) {
      //hier wird jetzt jedes Wort einzeln durchgegangen und mit einem Leerzeichen ergänzt, damit der Text lesbar ist.
      let nextTextLine = this.nextLine + nextText[i] + " ";
      //The p5.js API provides a lot of functionality for creating graphics, but there is some native HTML5 Canvas functionality that is not exposed by p5. You can still call it directly using the variable drawingContext, as in the example shown.(https://p5js.org/reference/#/p5/drawingContext)
      let nextTextWidth = drawingContext.measureText(nextTextLine).width;
      //hier wird, wenn die Textlänge einer Zeile den maximalen Wert, den diese Annehmen soll,überschreitet, eine Zeile hinzugeefügt
      if (nextTextWidth > maxWidth && i > 0) {
        this.nextLine = nextText[i] + " ";
        // a+=b === a=a+b
        nextTextHeight += this.textLeading;
      } else {
        this.nextLine = nextTextLine;
      }
    }

    return nextTextHeight;
    pop();
  }*/

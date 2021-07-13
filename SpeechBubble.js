export default class SpeechBubble {
  constructor(message, person, lastMessage) {
    this.x = 850;
    this.y = 700;
    this.message = message;
    this.lastMessage = lastMessage;
    this.height = height;
    this.lastHeight = "";
    this.person = person;
    this.hitter = false;
    this.hitterNumber = 0;
    this.done = false;
    this.width = 200;
    this.line = line;
    //Zeilenabstand
    this.textLeading = 12;
    //this.hitHeight = 350;
    //ein ersatz für return true/false
    this.mouseHittet = false;
  }
  //vgl Hilfe von Herr Toepper
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

  nextMessageHeight(maxWidth) {
    //text wird überall dort, wo ein Leerzeichen ist, gespalten und als neues Element in einem Array aufgerufen
    let nextText = this.lastMessage.split(" ");
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
  }

  display(direction, color) {
    textFont("Hero New");
    //weiterhin wird die Texthöhe als this.height definiert
    this.height = this.messageHeight(this.textLeading);
    this.lastHeight = this.nextMessageHeight(this.textLeading);
    //wenn der Button einer Sprechblase noch nie gedrückt würde
    if (this.hitter === false) {
      translate(this.x, this.y);
      //die Sprechblasen können rechts, pder links angeordnet sein
      if (direction === "left") {
        //color ist abhängig von der Person und wird in PersonalBubble bzw in dem Array person der Hauptdatei definiert
        fill(color);
        noStroke();
        //sprechblase

        rect(-20, -10, this.width + 20, this.height + 20, 10);
        triangle(
          -20,
          this.height - 30,
          -20,
          this.height - 10,
          -40,
          this.height - 10
        );

        if (this.hitterNumber === 0) {
          //wenn die Höhe kleiner als 10 ist, entsteht das Problem, dass der Pfeil zu weit oben angezeigt würde, weshalb es ein Sonderfall ist
          //button
          if (this.height > 10) {
            fill(255);
            triangle(
              this.width - 20,
              this.height - 25,
              this.width - 10,
              this.height - 20,
              this.width - 20,
              this.height - 15
            );
          } else if (this.height <= 10) {
            fill(255);
            stroke(255);
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
        textSize(20);
        // https://editor.p5js.org/gfm262/sketches/TGK6Th4Xr
        text(this.message, -10, 30, this.width - 20);
      }
      if (direction === "right") {
        fill(color);
        noStroke();

        rect(-10, -10, this.width + 20, this.height + 20, 10);
        //spiegelt an der Senkrechten
        triangle(
          this.width + 10,
          this.height - 30,
          this.width + 10,
          this.height - 10,
          this.width + 30,
          this.height - 10
        );

        if (this.hitterNumber === 0) {
          if (this.height > 10) {
            fill(0);
            stroke(0);
            triangle(
              this.width - 20,
              this.height - 25,
              this.width - 10,
              this.height - 20,
              this.width - 20,
              this.height - 15
            );
          } else if (this.height <= 10) {
            fill(255);
            stroke(255);
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
        textSize(20);
        noStroke();
        text(this.message, 0, 30, this.width - 20);
      }
    }
  }

  hitTest(hit) {
    push();

    //vgl oben es gibt 2 Anordnungen für einen Pfeil
    if (this.height > 10) {
      if (
        (mouseX >= this.x + this.width - 20 &&
          mouseX <= this.x + this.width - 10 &&
          mouseY >= this.y + this.height - 25 &&
          mouseY <= this.y + this.height - 15) ||
        hit > 0
      ) {
        this.mouseHittet = true;
        //die Sprechblase wird entsprechend der Höhe der folgenden Sprechblase nach oben verschoben
        if (this.height < 12) {
          this.height = 20;
        }
        if (this.lastHeight < 12) {
          this.lastHeight = 20;
        }
        this.y = 600 - this.height - this.lastHeight - 30;

        this.hitterNumber = this.hitterNumber + 1;
        //wenn hitter true ist, wird die Sprechblase nicht mehr angezeigt. Das ist erst bei 2 der Fall, da die letzte Nachricht vor der aktuellen Nachricht noch lesbar sein soll
        if (this.hitterNumber > 1) {
          this.hitter = true;
        }
      }
    } else {
      if (
        (mouseX >= this.x + this.width - 20 &&
          mouseX <= this.x + this.width - 10 &&
          mouseY >= this.y &&
          mouseY <= this.y + 10) ||
        hit > 0
      ) {
        this.mouseHittet = true;
        if (this.lastHeight >= 12) {
          this.height = 20;
          this.y = 600 - this.height - this.lastHeight - 30;
          console.log("Szenario 3");
        } else {
          this.y = 550;
          console.log("Szenario 4");
        }
        console.log("HitClass");
        this.hitterNumber = this.hitterNumber + 1;
        if (this.hitterNumber > 1) {
          this.hitter = true;
        }
      }
    }
    pop();
  }
  //hier werden nochmal alle Dateien kombiniert
  all(direction, color) {
    push();
    this.messageHeight();
    this.nextMessageHeight();
    this.display(direction, color);
    pop();
  }
}

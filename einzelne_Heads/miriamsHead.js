import SpeechBubble from "./classes/SpeechBubble.js";
import PersonalBubble from "./classes/PersonalBubble.js";
import AnaPersonParameter from "./classes/AnaPersonParameter.js";
import WellBeing from "./classes/WellBeing.js";
let bPbubble = new PersonalBubble("#e2efde", "right");
let otherbubble = new PersonalBubble("#ffcccc", "left");
//bP
let parameter = new AnaPersonParameter(0, -3);
let mood = new WellBeing(100, 100, parameter.trigger, parameter.wellBeing);
//bubble
let counter = 0;
//in bubbleArray werden alle Objekte definiert
let bubbleArray = [];
//in person und messageArray müssen an gleicher Stelle im Array die Inhalte (also wer sagt was) definiert werden
let person = ["bP", "user", "user"];
let messageArray = [
  "Hallo Kirrrrrrrrrrrrrrrrrsten ug ggccc hhcghnd Julie :)))  Mein Name ist sehr lange Nachricht.  Ich wüsste zu gerne, ob ich funktioniere, oder nciht, aber noch ish poehf uhlajhsalkj alksj lksaj lksj lkajs lkasj lkasj lkajs kjklllllllllllllajalllllllll  jslkdjldksjkl akj lksjdkj laskjfe lkdfsadfa d fasddsffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff fffffffffff ffffffffffffffffff fffffffffffffffffffffffff fffffffffffff ff    ffffffffffffffffffffffffffffffffff fffffffffff f f  f  f jkhajktv iogakjeh rakjhr cljkhr akjehr akjhe  ",
  "hii",
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet ",
];
//Hilfe von Herr Toepper und https://p5js.org/examples/objects-array-of-objects.html
//die Anzahl an Nachrichten definiert, wieviele neue Sprechblasen erzeugt wird
for (let i = 0; i < messageArray.length; i++) {
  bubbleArray.push(new SpeechBubble(messageArray[i], person[i]));
}

function draw() {
  clear();
  background(255);
  //counter geht jede Stelle der Array durch. Eine for-Schleife würde dabei alle Objekte gleichzeitig aufrufen, weshalb es so gelöst werden musste
  if (counter <= messageArray.length) {
    //die einzelnen Elemente von bubbleArray sind die Objekte der Klasse Speechbubble, die vor der function draw erzeugt wurden
    //es muss für jede Person, die Auftreten kann eine If-funktion erstellt werden. Die Anzahl ist aber überschaubar.
    if (bubbleArray[counter].person === "bP") {
      bubbleArray[counter].all(0, bPbubble.direction, bPbubble.color);
    } else if (bubbleArray[counter].person === "user") {
      bubbleArray[counter].all(0, otherbubble.direction, otherbubble.color);
    }
    if (bubbleArray[counter].hitterNumber > 0) {
      counter = counter + 1;
    }
  }
  //durch diese if-Bedingung wird die letzte Sprechblase auch angezeigt
  if (counter <= messageArray.length && counter - 1 >= 0) {
    if (bubbleArray[counter - 1].person === "bP") {
      bubbleArray[counter - 1].all(0, bPbubble.direction, bPbubble.color);
    } else if (bubbleArray[counter - 1].person === "user") {
      bubbleArray[counter - 1].all(0, otherbubble.direction, otherbubble.color);
    }
  }

  //das ist die Anzeige des Stimmungsbalkens
  mood.display();
}

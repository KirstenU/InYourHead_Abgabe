//vorerst einfach ignoerieren
import SpeechBubble from "./SpeechBubble.js";
import PersonalBubble from "./PersonalBubble.js";
import AnaPersonParameter from "./AnaPersonParameter.js";
import WellBeing from "./WellBeing.js";
let bPbubble = new PersonalBubble("#e2efde", "right");
let otherbubble = new PersonalBubble("#ffcccc", "left");
//bP
let parameter = new AnaPersonParameter(0, -3);
let mood = new WellBeing(100, 100, parameter.trigger, parameter.wellBeing);
//bubble
let person = ["bP", "user", "user"];
let counter = 0;
//messageArray
let bubbleArray = [];
let content = [
  "Hallo Kirrrrrrrrrrrrrrrrrsten ug ggccc hhcghnd Julie :)))  Mein Name ist sehr lange Nachricht.  Ich wüsste zu gerne, ob ich funktioniere, oder nciht, aber noch ish poehf uhlajhsalkj alksj lksaj lksj lkajs lkasj lkasj lkajs kjklllllllllllllajalllllllll  jslkdjldksjkl akj lksjdkj laskjfe lkdfsadfa d fasddsffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff fffffffffff ffffffffffffffffff fffffffffffffffffffffffff fffffffffffff ff    ffffffffffffffffffffffffffffffffff fffffffffff f f  f  f jkhajktv iogakjeh rakjhr cljkhr akjehr akjhe  ",
  "bp",
  "hii",
  "user",
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet ",
  "user",
];
let messageArray = [
  "Hallo Kirrrrrrrrrrrrrrrrrsten ug ggccc hhcghnd Julie :)))  Mein Name ist sehr lange Nachricht.  Ich wüsste zu gerne, ob ich funktioniere, oder nciht, aber noch ish poehf uhlajhsalkj alksj lksaj lksj lkajs lkasj lkasj lkajs kjklllllllllllllajalllllllll  jslkdjldksjkl akj lksjdkj laskjfe lkdfsadfa d fasddsffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff fffffffffff ffffffffffffffffff fffffffffffffffffffffffff fffffffffffff ff    ffffffffffffffffffffffffffffffffff fffffffffff f f  f  f jkhajktv iogakjeh rakjhr cljkhr akjehr akjhe  ",
  "hii",
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet ",
];
for (let i = 0; i < content.length - 1; i = i + 2) {
  bubbleArray.push(new SpeechBubble(content[i], content[i + 1]));
}

function draw() {
  clear();
  background(255);
  for (let i = 0; i < content.length - 1; i = i + 2) {
    bubbleArray.push(new SpeechBubble(content[i], content[i + 1]));
  }
  if (counter <= content.length - 1) {
    if (bubbleArray[counter].person === "bP") {
      bubbleArray[counter].all(0, bPbubble.direction, bPbubble.color);
    } else if (bubbleArray[counter].person === "user") {
      bubbleArray[counter].all(0, otherbubble.direction, otherbubble.color);
    }
    if (bubbleArray[counter].hitterNumber > 0) {
      counter = counter + 2;
    }
  }
  if (counter <= content.length - 1 && counter - 1 >= 0) {
    if (bubbleArray[counter - 1].person === "bP") {
      bubbleArray[counter - 1].all(0, bPbubble.direction, bPbubble.color);
    } else if (bubbleArray[counter - 1].person === "user") {
      bubbleArray[counter - 1].all(0, otherbubble.direction, otherbubble.color);
    }
  }

  /*
  speech.all(speechi.hitterNumber, bPbubble.direction);
  if (speech.hitterNumber >= 1) {
    speechi.all(0, otherbubble.direction);
  }*/
  mood.display();
}

import Button from "./classes/Button.js";
import AnaPerson from "./classes/AnaPerson.js";
import NotebookIcon from "./classes/notebookIcon.js";
import InstantFeedback from "./classes/instant_feedback.js";
import SpeechBubble from "./classes/SpeechBubble.js";
import PersonalBubble from "./classes/PersonalBubble.js";
import AnaPersonParameter from "./classes/AnaPersonParameter.js";
import WellBeing from "./classes/WellBeing.js";

let icon = new NotebookIcon(20, 20, 50, 50);
let instantFeedback = new InstantFeedback(350, 50, 200, 100, "hallo");
let name = "Entscheidung";
let entscheidungsButton = new Button(150, 500, name);
let feedback1 = "hallo, ich bin das erste Feedback";
let feedbackAnzeigen = false;
let bPbubble = new PersonalBubble("#e2efde", "right");
let otherbubble = new PersonalBubble("#ffcccc", "left");
let parameter = new AnaPersonParameter(0, -3);
let mood = new WellBeing(100, 100, parameter.trigger, parameter.wellBeing);
let counter = 0;
let bubbleArray = [];
let person = ["bP", "user", "user"];
let messageArray = [
  "Hallo Kirrrrrrrrrrrrrrrrrsten ug ggccc hhcghnd Julie :)))  Mein Name ist sehr lange Nachricht.  Ich wüsste zu gerne, ob ich funktioniere, oder nciht, aber noch ish poehf uhlajhsalkj alksj lksaj lksj lkajs lkasj lkasj lkajs kjklllllllllllllajalllllllll  jslkdjldksjkl akj lksjdkj laskjfe lkdfsadfa d fasddsffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff fffffffffff ffffffffffffffffff fffffffffffffffffffffffff fffffffffffff ff    ffffffffffffffffffffffffffffffffff fffffffffff f f  f  f jkhajktv iogakjeh rakjhr cljkhr akjehr akjhe  ",
  "hii",
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet ",
];
let Namearray = ["Test"];

for (let i = 0; i < messageArray.length; i++) {
  bubbleArray.push(new SpeechBubble(messageArray[i], person[i]));
}

function mouseClicked() {
  if (icon.hitTest()) {
    console.log("Icon geklickt");
  }

  if (entscheidungsButton.hitTest()) {
    console.log("Entscheidung getroffen");
    instantFeedback.instantFeedbackNotebook.unshift(feedback1);
    console.log(
      "Arraylänge= " + instantFeedback.instantFeedbackNotebook.length
    );
    feedbackAnzeigen = true;
  }
  if (instantFeedback.hitTest()) {
    console.log("dreieck getroffen - feedback verschwindet");
    feedbackAnzeigen = false;
  }
}
window.mouseClicked = mouseClicked;

let ana = new AnaPerson(100, 100, 200, 300, "Miriam", "happy", "1");
Namearray.push(ana.name);
console.log(Namearray[1]);

function draw() {
  clear();
  push();
  fill(100);
  noStroke();
  rect(0, 0, 1162, 700);
  pop();
  ana.hover();
  ana.mood();
  icon.display();

  if (feedbackAnzeigen === true) {
    instantFeedback.display(feedback1);
  }
  instantFeedback.hitTest();
  entscheidungsButton.display();

  if (counter <= messageArray.length) {
    if (bubbleArray[counter].person === "bP") {
      bubbleArray[counter].all(0, bPbubble.direction, bPbubble.color);
    } else if (bubbleArray[counter].person === "user") {
      bubbleArray[counter].all(0, otherbubble.direction, otherbubble.color);
    }
    if (bubbleArray[counter].hitterNumber > 0) {
      counter = counter + 1;
    }
  }
  if (counter <= messageArray.length && counter - 1 >= 0) {
    if (bubbleArray[counter - 1].person === "bP") {
      bubbleArray[counter - 1].all(0, bPbubble.direction, bPbubble.color);
    } else if (bubbleArray[counter - 1].person === "user") {
      bubbleArray[counter - 1].all(0, otherbubble.direction, otherbubble.color);
    }
  }
  mood.display();
}
window.draw = draw;

import Button from "./classes/Button.js";
import AnaPerson from "./classes/AnaPerson_K.js";

let name = "TEST";
let firstButton = new Button(400, 300, name);

function mouseClicked() {
  firstButton.hitTest();
  //Farbe ändern bei Klick? Sonst ohne if
  //firstButton.colourchange();
}

let ana = new AnaPerson(100, 100, 200, 300, "Miriam", "heart", "1");
Namearray.push(ana.name);
console.log(Namearray[1]);

function draw() {
  clear();
  ana.hover();
  ana.mood();
  firstButton.display();
}

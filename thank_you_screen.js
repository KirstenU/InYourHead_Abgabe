//auf dieser Art von Screens wird zuerst festgelet, wo das Hintergrundbild angezeigt werden soll und welche Buttons wo anzeiegt werden.
//im Anschluss bekommen diese Buttons einen hitTest, mit dem getestet wird, ob die gedrückt wurden.
import GameButton from "./gameButton";
let thankYouBackground = loadImage("./Screens_ohneButtons/DankeScreen.jpg");
let backToStartButton = new GameButton(825, 560);

function draw() {
  image(thankYouBackground, 0, 0, 1162, 700);
  backToStartButton.display(10);
}

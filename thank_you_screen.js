
import GameButton from "./gameButton";
let thankYouBackground= loadImage("./Screens_ohneButtons/DankeScreen.jpg");
let backToStartButton= new GameButton(825, 560);

function draw(){
image(thankYouBackground,0,0,1162,700);
backToStartButton.display(10);
}
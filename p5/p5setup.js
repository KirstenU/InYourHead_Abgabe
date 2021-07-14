function preload() {
  abendessen = loadImage("./backgroundScreens/abendessen.png");
  baeckerei = loadImage("./backgroundScreens/baeckerei.png");
  bekannte = loadImage("./backgroundScreens/bekannte.png");
  bekannteTuer = loadImage("./backgroundScreens/bekannteTuer.png");
  blumenladen = loadImage("./backgroundScreens/blumenladen.png");
  entensee = loadImage("./backgroundScreens/entensee.png");
  haeuser = loadImage("./backgroundScreens/haeuser.png");
  handy = loadImage("./backgroundScreens/handy.png");
  hausTante = loadImage("./backgroundScreens/hausTante.png");
  kueche = loadImage("./backgroundScreens/kueche.png");
  musikladen = loadImage("./backgroundScreens/musikLaden.png");
  oberfeld = loadImage("./backgroundScreens/oberfeld.png");
  park = loadImage("./backgroundScreens/park.png");
  picknick = loadImage("./backgroundScreens/picknick.png");
  schule = loadImage("./backgroundScreens/schule.png");
  tanteDraussen = loadImage("./backgroundScreens/tanteDraussen.png");
  tanteDraussenBp = loadImage("./backgroundScreens/tanteDraussenBp.png");
  tanteEssen = loadImage("./backgroundScreens/tanteEssen.png");
  teller = loadImage("./backgroundScreens/teller.png");
  wohnzimmer = loadImage("./backgroundScreens/wohnzimmer.png");
  startPic = loadImage("./Screens_ohneButtons/StartScreen.jpg");
  verstanden = loadImage("./Screens_ohneButtons/Verstaendnistext.jpg");
  choosePic = loadImage("./Screens_ohneButtons/Position.jpg");
  familypic = loadImage("./Screens_ohneButtons/Elternteil.jpg");
  namePic = loadImage("./Screens_ohneButtons/Name_2.jpg");
  friendsPic = loadImage("./Screens_ohneButtons/FreundIn.jpg");
  tutorialOne = loadImage("./Screens_ohneButtons/Tutorial_1.jpg");
  tutorialTwo = loadImage("./Screens_ohneButtons/Tutorial_2.jpg");
  exitPic = loadImage("./exit_button.png");
  notebookIcon = loadImage("./icon.png");
  situationOne = loadImage("./Screens_ohneButtons/Feedback_Screens.jpg");
  situationTwo = loadImage("./Screens_ohneButtons/Feedback_Screens2.jpg");
  situationThree = loadImage("./Screens_ohneButtons/Feedback_Screens3.jpg");
  situationFour = loadImage("./Screens_ohneButtons/Feedback_Screens4.jpg");
  dankePic = loadImage("./Screens_ohneButtons/DankeScreen.jpg");
  parkPic = loadImage("./backgroundScreens/park.png");
  picknickPic = loadImage("./backgroundScreens/picknick.png");
}
window.preload = preload;

function setup() {
  createCanvas(1162, 700);
  frameRate(30);
}

window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});
new p5();
var width = windowWidth;
var height = windowHeight;

let nameBackground = loadImage("./Screens_ohneButtons/Name_2.jpg");
let fieldPressed = false;
let pbNameArray = [];

let field = {
  x: 467,
  y: 333,
  r: 226,
  g: 229,
  b: 222,
};

function draw() {
  clear();

  //image(nameBackground,0,0,1162,700);
  if (fieldPressed === true) {
    push();
    noStroke();
    fill(field.r, field.g, field.b);
    rect(field.x, field.y, 516, 66, 10);
    pop();
  }
  push();
  textFont("Hero New");
  textSize(30);
  text(pbNameArray.join(""), field.x + 20, field.y + 45);
  console.log(pbNameArray);
  pop();
}

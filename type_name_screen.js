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

/*function mouseClicked(){
if(mouseX>field.x&& 
    mouseX<field.x+514&&
    mouseY>field.y&&
    mouseY<field.y+62){
        fieldPressed=true;
    }
}


function keyPressed() {
    if (keyIsDown(8)) {
      //löschen
      pbNameArray.pop();
    }
    if (keyIsDown(32)) {
      //Leertaste     
      pbNameArray.push(" ");
      pbNameArray.pop();
 
    }
}


function keyTyped(){
    pbNameArray.push(key);  
    if (keyIsDown(13)) { //enter
      pbNameArray.pop();
      nameWritten = true;
    } 
} */

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

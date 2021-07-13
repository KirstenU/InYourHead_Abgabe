export default class Exit{
    constructor(x,y){
        this.x= x;
        this.y=y;
        this.width=50;
        this.height=50;
        this.icon=loadImage("exit_button.png");
    }
    displayButton(){
        image(this.icon, this.x, this.y, this.width, this.height);
    }
    hitTest(){
        if(mouseX>this.x && mouseX<this.x+this.width&& mouseY> this.y && mouseY< this.y+this.height){
            return true;
        }else {
            return false;
        }
    }

}
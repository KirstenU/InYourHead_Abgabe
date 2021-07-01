import AnaPersonParameter from "./AnaPersonParameter.js";
export default class WellBeing extends AnaPersonParameter {
  constructor(x, y, trigger, wellBeing) {
    super(trigger, wellBeing);
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    stroke(0);
    strokeWeight(1);
    translate(100, 25);
    rect(0, 0, 200, 50, 10);
    noStroke();
    fill(255, 0, 0);
    if (this.wellBeing > 0) {
      rect(100, 0, this.wellBeing * 33, 50, 10);
      rect(100, 0, 5, 50);
    }
    if (this.wellBeing < 0) {
      rect((3 + this.wellBeing) * 33, 0, Math.abs(this.wellBeing), 50, 10);
      rect(95, 0, 5, 50);
    }
    if (this.wellBeing === 0) {
      rect(90, 0, 20, 50, 10);
    }
    strokeWeight(1);
    stroke(0);
    line(100, 0, 100, 50);
    pop();
  }
}

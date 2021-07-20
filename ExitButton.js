export default class Exit {
  constructor() {}
  hitTest() {
    if (mouseX >= 1075 && mouseX <= 1125 && mouseY >= 35 && mouseY <= 85) {
      return true;
    }
  }
}

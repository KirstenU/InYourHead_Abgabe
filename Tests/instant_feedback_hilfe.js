class Notebook {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.notebookPic = loadImage("Notebook_test.png");
  }
  displayPaper() {
    image(this.notebookPic, this.x, this.y, this.width, this.height);
  }
}

class InstantFeedback extends Notebook {
  //sollte ich nicht lieber die this.. Sachen
  //in die Parameter von der jeweiligen Methode
  //schreiben? Denn wenn ich sonst nur mein Feeback
  //aufrufen will muss ich ja nicht noch die Koordinaten vom
  //Notebook dazu schreiben

  constructor(x, y, width, height, message) {
    super(x, y, width, height);
    //super(); ??
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.feedbackText = message;
    this.instantFeedbackNotebook = [];
  }
  //Array Index als message

  displayFeedback() {
    this.displayPaper();
    fill(255);
    textSize(20);
    text(this.feedbackText, this.x, this.y, this.width, this.height);
  }
  //Wir müssen Text Size responsive zur Größe vom Notebook machen
  // wir müssen auch ein heightMessurement einfügen sowie Miri
  //Oder ver. Arten von Text Blöcken
}
let notes = new InstantFeedback(200, 200, 300, 300, "bla bli blup");
let notes2 = new InstantFeedback(50, 50, 100, 100, "hallo");

function draw() {
  notes.displayFeedback();
  notes2.displayFeedback();
}

//Instant Feedback is THE ONE und
// die Notebook Class erbt vom instant Feedback

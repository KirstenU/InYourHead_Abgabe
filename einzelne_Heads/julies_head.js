import NotebookIcon from "./classes/notebookIcon.js";
import InstantFeedback from "./classes/instant_feedback.js";
import Button from "./classes/Button.js";
// import Notebook from "./instant_feedback.js";

let icon = new NotebookIcon(50, 50, 50, 50);
let instantFeedback = new InstantFeedback(300, 50, 200, 100, "hallo");
let entscheidungsButton = new Button(350, 300, "Entscheidung");
// let notebookPaper= new Notebook(50,50,200,200);

/*hier könnten wir einfach eine Art Backlog anlegen 
in dem wird die verschiedenen Instant Feedback Antworten 
speichern können. So viele sind es ja auch nicht oder? :D 
mhmmm wir könnten dann beim hitTest aber Probleme kriegen
welche Variable dann geunshiftet wird..?*/

let feedback1 = "hallo, ich bin das erste Feedback";

////
let feedbackAnzeigen = false;
function draw() {
  clear();
  icon.display();
  // notebookPaper.displayNotebook();
  if (feedbackAnzeigen === true) {
    instantFeedback.display(feedback1);
  }
  instantFeedback.hitTest();
  entscheidungsButton.display();
}

function mouseClicked() {
  if (icon.hitTest()) {
    console.log("Icon geklickt");
    // notebookPaper.displayNotebook();
  }

  if (entscheidungsButton.hitTest()) {
    console.log("Entscheidung getroffen");
    instantFeedback.instantFeedbackNotebook.unshift(feedback1);
    console.log(
      "Arraylänge= " + instantFeedback.instantFeedbackNotebook.length
    );
    feedbackAnzeigen = true;
  }
  if (instantFeedback.hitTest()) {
    console.log("dreieck getroffen - feedback verschwindet");
    // instantFeedback.feedbackgelesen = false; //kann der das
    feedbackAnzeigen = false;
  }
}

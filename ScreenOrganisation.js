import Button from "./Button.js";
import Export from "./Export.js";
import SpeechBubble from "./SpeechBubble.js";
import InstantFeedback from "./instant_feedback.js";
let speechbubble = [];
let feedbackk = [];
let expo = new Export("any");
for (let i = 0; i < this.expo.messageArray.length; i++) {
  speechbubble.push(new SpeechBubble(0, "hello", "bp", "bye"));
}
let button = [];

for (let i = 0; i < expo.instantFeedbackMessage.length; i++) {
  feedbackk.push(
    new InstantFeedback(100, 100, 100, 100, expo.instantFeedbackMessage[i])
  );
}
for (let i = 0; i < expo.buttonMessage.length; i++) {
  button.push(new Button(100, 100, expo.buttonMessade[i]));
}
export default class ScreenOrganisation {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.state = { game: "pregame", situation: "street", person: "friend" };
    //this.expo = {picturePreGame=[],picturePostGame=[],backgroundPicture=[], notebook=[],instantFeedback=[], person=[], speechBubble=[], }
    this.pictruesPregame = [];
    this.background = [];
    this.backgroundNumber = 0;
    this.pregameNumber = 0;
    this.number = { hover: 0, button1: 0, button2: 0, button3: 0 };
    this.min = { button: 0, hover: 0, speechBubble: 0, feedback: 0 };
    this.max = { button: 0, speechBubble: 0, feedback: 0 };
    this.visible = {
      button: false,
      hover: false,
      speechBubble: false,
      feedback: false,
    };
    this.button = y = 300;
  }
  display(
    abendessen,
    baeckerei,
    bekannte,
    bekannteTuer,
    blumenladen,
    entensee,
    haeuser,
    handy,
    hausTante,
    kueche,
    musikladen,
    oberfeld,
    park,
    picknick,
    schule,
    tanteDraussen,
    tanteDraussenBp,
    tanteEssen,
    teller,
    wohnzimmer,
    startscreen,
    tutorial1,
    position,
    nameIt
  ) {
    push();

    this.expo.backgroundPicture = [
      abendessen,
      baeckerei,
      bekannte,
      bekannteTuer,
      blumenladen,
      entensee,
      haeuser,
      handy,
      hausTante,
      kueche,
      musikladen,
      oberfeld,
      park,
      picknick,
      schule,
      tanteDraussen,
      tanteDraussenBp,
      tanteEssen,
      teller,
      wohnzimmer,
    ];
    this.expo.pictruesPregame = [startscreen, tutorial1, position, nameIt];
    this.expo.picturePostGame = [situation3, end];
    //wollen wir auch unabhängig von den Bildern versuchen, diese Zahlen zu benutzen, oder die states ausschreiben?
    if (this.state.game === "pregame") {
      for (let i = 0; i < this.expo.picturePreGame; i++) {
        image(this.expo.picturePreGame[i], 0, 0, 100, 100);
      }
    }
    if (this.state.game === "ingame") {
      if (this.state.person === "friend") {
        image(this.background[this.backgroundNumber], 0, 0, 100, 100);
        if (this.state.situation === "street") {
          push();
          this.visible.speechBubble = true;
          this.backgroundNumber = 6;
          this.min.speechBubble = 16;
          this.max.speechBubble = 18;
          this.number.button1 = 0;
          this.number.button2 = 1;
          if (speechbubble[18].hitTest()) {
            this.visible.button = true;
            if (button[0].hitTest()) {
              this.state.situation = "duck";
            }
            /*if (button[1].hitTest()) {
              this.state.situation = "leni";
            }*/
          }
          pop();
        }
        if (this.state.situation === "duck") {
          push();
          this.backgroundnumber = 5;
          this.visible.button = true;
          this.visible.hover = true;
          this.number.hover = 5;
          this.number.button1 = 2;
          this.number.button2 = 3;
          this.visible.button = true;
          if (button[2].hitTest() || button[3].hitTest()) {
            this.number.hover = 0;
            this.visible.button = false;
            this.visible.speechBubble = true;
            this.min.speechBubble = 19;
            this.max.speechBubble = 20;
            if (speechbubble[20].hitTest()) {
              this.state.game = "pregame";
            }
          }
          pop();
        }
        /*    if (this.state.situation === "leni") {
          this.backgroundNumber = 2;
          button[4].display();
          button[5].display();
          if (button[4].hitTest()) {
            this.state.situation = "leniNear";
          }
          if (button[5].hitTest()) {
            this.state.situation = "school";
          }
        }
        if (this.state.situation === "leniNear") {
          this.backgroundNumber = 3;
          this.min.speechBubble = 21;
          this.max.speechBubble = 25;
          this.number.hover = 6;
          if (speechbubble[25].hitTest()) {
            this.number.feedback = 2;
            if (feedbackk[2].hitTest()) {
              this.state.situation = "school";
            }
          }
        }
        if (this.state.situation === "school") {
          this.backgroundNumber = 14;
          this.min.speechBubble = 26;
          this.max.speechBubble = 26;
          if (button[6].hitTest) {
            this.min.speechBubble = 27;
            this.max.speechBubble = 27;
            if (speechbubble[27].hitTest()) {
              this.state.game = "pregame";
            }
          }
          if (button[7].hitTest) {
            this.min.speechBubble = 28;
            this.max.speechBubble = 28;
            if (speechbubble[28].hitTest()) {
              this.state.game = "pregame";
            }
          }
        }
        if (this.state.situation === "shopping") {
          this.backgroundNumber = 6;
          this.min.speechBubble = 73;
          this.max.speechBubble = 77;
        }
        if (this.state.situation === "bakery") {
          this.backgroundNumber = 1;
        }
        if (this.state.situation === "flower") {
          this.backgroundNumber = 4;
          this.min.speechBubble = 78;
          this.max.speechBubble = 79;
        }
        if (this.state.situation === "music") {
          this.backgroundNumber = 10;
          this.min.speechBubble = 82;
          this.max.speechBubble = 82;
        }
        if (this.state.situation === "mobilephone") {
          this.backgroundNumber = 7;
          this.min.speechBubble = 29;
          this.max.speechBubble = 32;
        }
        if (this.state.situation === "oberfeld") {
          this.backgroundNumber = 11;
          this.min.speechBubble = 57;
          this.max.speechBubble = 58;
          if (this.state === "picknick") {
            this.backgroundNumber === 13;
            this.min.speechBubble = 61;
            this.max.speechBubble = 61;
          }
        }
        if (this.state.situation === "park") {
          this.backgroundNumber = 12;
          this.min.speechBubble = 37;
          this.max.speechBubble = 38;
          if (this.state === "picknick") {
            this.backgroundNumber === 13;
            this.min.speechBubble = 42;
            this.max.speechBubble = 42;
          }
        }
        if (this.state === "television") {
          this.backgroundNumber = 19;
          this.min.speechBubble = 95;
          this.max.speechBubble = 96;
        }
      }
      if ((this.state.person = "parent")) {
        if (this.state.situation === "street") {
          this.backgroundNumber = 6;
          this.min.speechBubble = 100;
          this.max.speechBubble = 102;
        }
        if (this.state.situation === "duck") {
          this.backgroundnumber = 5;
          this.min.speechBubble = 5;
          this.max.speechBubble = 5;
        }
        if (this.state.situation === "leni") {
          this.backgroundNumber = 2;
        }
        if (this.state.situation === "leniNear") {
          this.backgroundNumber = 3;
          this.min.speechBubble = 21;
          this.max.speechBubble = 25;
        }
        if (this.state.situation === "school") {
          this.backgroundNumber = 14;
          this.min.speechBubble = 26;
          this.max.speechBubble = 26;
        }
        if (this.state.situation === "shopping") {
          this.backgroundNumber = 6;
          this.min.speechBubble = 10;
          this.max.speechBubble = 11;
        }
        if (this.state.situation === "bakery") {
          this.backgroundNumber = 1;
        }
        if (this.state.situation === "flower") {
          this.backgroundNumber = 4;
          this.min.speechBubble = 12;
          this.max.speechBubble = 13;
        }
        if (this.state.situation === "kitchen") {
          this.backgroundNumber = 9;
        }
        if (this.state.situation === "dinner") {
          this.backgroundNumber = 0;
          this.min.speechBubble = 3;
          this.max.speechBubble = 3;
        }
        if (this.state.situation === "auntHouseWithbP") {
          this.backgroundNumber = 16;
          this.min.speechBubble = 85;
          this.max.speechBubble = 87;
        }
        if (this.state.situation === "auntHouse") {
          this.backgroundNumber = 15;
        }
        if (this.state.situation === "auntDinner") {
          this.backgroundNumber = 17;
          this.min.speechBubble = 93;
          this.max.speechBubble = 93;
        }*/
      }
    }

    pop();
  }
  hitTest() {
    if (
      mouseX <= this.x &&
      mouse >= this.x + this.width &&
      mouseY <= this.y &&
      mouseY >= this.y + this.height
    ) {
      return true;
    }
  }
}
//mit preload() Bilder reinladen
// buttonkoordinate und größe definieren
//states für die Verschiedenen Szenen erstellen? Extradatei mit Funktionen
//stated, die schon existieren: pregame und ingame

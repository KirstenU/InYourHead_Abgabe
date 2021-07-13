import SpeechBubble from "./SpeechBubble.js";
import PersonalBubble from "./PersonalBubble.js";
import AnaPersonParameter from "./AnaPersonParameter.js";
import WellBeing from "./WellBeing.js";
import Export from "./Export.js";
import Button from "./decisionButton.js";
import Situation from "./organisation/Szenes.js";
import StartScreen from "./StartScreen.js";
import VerstaendnisScreen from "./VerstaendnisScreen.js";
import ChooseScreen from "./ChooseScreen.js";
import FriendsScreen from "./FriendsScreen.js";
import Name from "./Name.js";
import TutorialScreen from "./TutorialScreen.js";
import Feedback from "./Feedback.js";
import {
  dialog,
  minSpeechbubble,
  maxSpeechbubble,
} from "./organisation/dialog.js";
import AnaPerson from "./AnaPerson_K.js";
import InstantFeedback from "./instant_feedback.js";
import Notebook from "./notebook.js";
//nameScreen
let knowledge = 0;
let fieldPressed = false;
let field = {
  x: 467,
  y: 333,
  r: 226,
  g: 229,
  b: 222,
};
let feedbackScreen = [];
//states
let gameState = "pregame";
let pregameState = "start";
let situationPerson = "friend";
let state = "street";
let visible = {
  dialog: true,
  button: false,
  hover: false,
  feedback: false,
  noteBook: false,
};
let numberFeedback = 0;
let allTheNotebook = [];
let notebookNumber = 0;
//bP
let start = new StartScreen();
let gotIt = new VerstaendnisScreen();
let choose = new ChooseScreen();
let friend = new FriendsScreen();
let name = new Name();
let tutorial = new TutorialScreen();

let parameter = new AnaPersonParameter(0, -2);
let mood = new WellBeing(
  100,
  100,
  parameter.trigger,
  parameter.wellBeing,
  numberFeedback
);
let situation = new Situation(state, situationPerson);
let bPbubble = new PersonalBubble("#c9a6b9", "left");
let userbubble = new PersonalBubble("#e2efde", "right");
let auntbubble = new PersonalBubble("#d9d9d9", "right");
let sisterbubble = new PersonalBubble("#d9d9d9", "right");
let lenibubble = new PersonalBubble("#d9d9d9", "right");
let notebook = new Notebook();
//für die Namensarrays
let pbNameArray = [];
let bPName = " Toni ";

let currentMood = "neutral";
let thought = "";
let ana = new AnaPerson(100, 300, 250, 400, bPName, currentMood, thought);
let nameWritten = false;
let three = false;
mood.wellBeing = 0;
//bubble
dialog(situationPerson, state);
let counter = minSpeechbubble;
//in bubbleArray werden alle Objekte definiert
let bubbleArray = [];
let y = 500;
//instantFeedback
let allTheInstantFeedback = [];
let feedbackNumber = 0;
//buttons
let allTheButtons = [];
let buttonNumber1 = 0;
let buttonNumber2 = 1;
let buttonNumber3 = 2;
let alltheThoughts = [];
//in person und messageArray müssen an gleicher Stelle im Array die Inhalte (also wer sagt was) definiert werden
function keyPressed() {
  if (keyIsDown(8)) {
    //löschen
    pbNameArray.pop();
  }
  if (keyIsDown(32)) {
    //Leertaste
    pbNameArray.push(" ");
  }

  fill(0, 255, 0);
}
window.keyPressed = keyPressed;

function keyTyped() {
  pbNameArray.push(key);
  if (keyIsDown(13)) {
    //enter
    pbNameArray.pop();
    nameWritten = true;
  }
}
window.keyTyped = keyTyped;

//Hilfe von Herr Toepper und https://p5js.org/examples/objects-array-of-objects.html
//die Anzahl an Nachrichten definiert, wieviele neue Sprechblasen erzeugt wird

function mouseClicked() {
  if (gameState === "pregame") {
    if (pregameState === "start") {
      if (start.hitTestSpiel()) {
        pregameState = "gotIt";
      } else if (start.hitTestTutorial()) {
        pregameState = "tutorial1";
      }
    } else if (pregameState === "gotIt") {
      if (gotIt.hitTest()) {
        pregameState = "choose";
      }
    } else if (pregameState === "tutorial1") {
      if (tutorial.hitTestWeiter()) {
        pregameState = "tutorial2";
      }
    } else if (pregameState === "tutorial2") {
      if (tutorial.hitTestVerstanden()) {
        pregameState = "choose";
      }
    } else if (pregameState === "choose") {
      if (choose.hitTestFreunde()) {
        pregameState = "story";
      }
    } else if (pregameState === "story") {
      if (friend.hitTest()) {
        pregameState = "name";
      }
    } else if (pregameState === "name") {
      if (
        mouseX > field.x &&
        mouseX < field.x + 514 &&
        mouseY > field.y &&
        mouseY < field.y + 62
      ) {
        fieldPressed = true;
      }
      if (name.hitTest()) {
        nameWritten = true;
        state = "street";
        gameState = "ingame";
      }
    }
  } else if (gameState === "feedbackduck") {
    numberFeedback = 0;

    if (feedbackScreen[numberFeedback].hitTestWeiter()) {
      state = "shopping";
      gameState = "ingame";
    }
  } else if (gameState === "feedbackschool") {
    numberFeedback = 1;
    data.finalFeedback.push(data.createMiddleFeedback[numberFeedback]);
    if (feedbackScreen[numberFeedback].hitTestWeiter()) {
      state = "shopping";
      gameState = "ingame";
    }
  } else if (gameState === "feedbackCD") {
    numberFeedback = 6;
    data.finalFeedback.push(data.createMiddleFeedback[numberFeedback]);
    if (feedbackScreen[numberFeedback].hitTestWeiter()) {
      state = "mobilephone";
      gameState = "ingame";
    }
  } else if (gameState === "feedbackIgnore") {
    numberFeedback = 7;
    data.finalFeedback.push(data.createMiddleFeedback[numberFeedback]);
    if (feedbackScreen[numberFeedback].hitTestWeiter()) {
      state = "mobilephone";
      gameState = "ingame";
    }
  } else if (gameState === "feedbackOberfeld") {
    numberFeedback = 10;
    data.finalFeedback.push(data.createMiddleFeedback[numberFeedback]);
    if (feedbackScreen[numberFeedback].hitTestWeiter()) {
      state = "television1";
      gameState = "ingame";
      visible.button = false;
      dialog(situationPerson, state);
      counter = 96;
      buttonNumber1 = 38;
      buttonNumber2 = 39;
    }
  } else if (gameState === "feedbackHerrengarten") {
    numberFeedback = 11;
    data.finalFeedback.push(data.createMiddleFeedback[numberFeedback]);
    if (feedbackScreen[numberFeedback].hitTestWeiter()) {
      state = "television1";
      gameState = "ingame";
      visible.button = false;
      dialog(situationPerson, state);
      counter = 96;
      buttonNumber1 = 38;
      buttonNumber2 = 39;
    }
  } else if (gameState === "feedback7") {
    numberFeedback = 12;
    data.finalFeedback.push(data.createMiddleFeedback[numberFeedback]);
  } else if (gameState === "ingame") {
    if (nameWritten === true) {
      if (state === "street") {
        visible.hover = false;
        visible.dialog = true;
        buttonNumber1 = 0;
        buttonNumber2 = 1;
        if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
          visible.button = true;
          visible.dialog = false;
          if (visible.button === true && allTheButtons[0].hitTest()) {
            if (mood.wellBeing < 3) {
              mood.wellBeing++;
            }
            state = "duck";
            counter = 20;
            dialog(situationPerson, state);
            visible.dialog = true;
            visible.button = false;
            visible.hover = true;
            thought = 5;
          }
          if (visible.button === true && allTheButtons[1].hitTest()) {
            if (mood.wellBeing > -3) {
              mood.wellBeing--;
            }
            state = "leni";
            buttonNumber1 = 4;
            buttonNumber2 = 5;
            //  visible.hover = false;
          }
        }
      } else if (state === "duck") {
        dialog(situationPerson, state);

        visible.dialog = true;
        buttonNumber1 = 2;
        buttonNumber2 = 3;
        visible.hover = true;
        thought = 5;
        if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
          visible.button = true;

          if (
            (visible.button === true && allTheButtons[2].hitTest()) ||
            (visible.button === true && allTheButtons[3].hitTest())
          ) {
            state = "duck2";
            feedbackNumber = 0;

            visible.feedback = true;
            if (mood.wellBeing < 3) {
              mood.wellBeing++;
            }
          }
        }
      } else if (state === "duck2") {
        visible.feedback = true;
        visible.dialog = false;
        visible.button = false;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
          gameState = "feedbackduck";
        }
      } else if (state === "leni") {
        visible.feedback = false;
        visible.hover = false;
        visible.button = true;
        if (visible.button === true && allTheButtons[4].hitTest()) {
          feedbackNumber = 2;
          visible.feedback = true;
          if (mood.wellBeing > -3) {
            mood.wellBeing--;
          }
          counter = 22;
          state = "leniNear";
          dialog(situationPerson, state);
          visible.hover = true;
          thought = 5;
          visible.button = false;
        }

        visible.dialog = true;
        if (visible.button === true && allTheButtons[5].hitTest()) {
          //neutral
          state = "school1";

          counter = 27;
          dialog(situationPerson, state);

          visible.button = false;
          buttonNumber1 = 6;
          buttonNumber2 = 7;
        }
      } else if (state === "leniNear") {
        visible.feedback = true;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
        }
        visible.hover = true;
        thought = 5;
        visible.dialog = true;
        if (
          bubbleArray[maxSpeechbubble - 3].mouseHittet === true &&
          visible.feedback === false
        ) {
          state = "school1";

          counter = 27;
          dialog(situationPerson, state);
          visible.button = false;
          visible.dialog = true;
          buttonNumber1 = 6;
          buttonNumber2 = 7;
        }
      } else if (state === "school1") {
        visible.feedback = false;
        visible.hover = false;
        visible.dialog = true;
        visible.button = true;
        if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
          visible.button = true;
          if (visible.button === true && allTheButtons[6].hitTest()) {
            state = "school2";
            feedbackNumber = 3;
            counter = 27;
            visible.button = false;
            visible.feedback = true;
            if (mood.wellBeing < 3) {
              mood.wellBeing++;
            }
          }
          if (visible.button === true && allTheButtons[7].hitTest()) {
            state = "school3";
            feedbackNumber = 4;
            counter = 28;
            visible.button = false;
            visible.feedback = true;
            if (mood.wellBeing > -3) {
              mood.wellBeing--;
            }
          }

          /* das muss vor den state = "television1";

        visible.button = false;
        dialog(situationPerson, state);
        counter = 95;
        buttonNumber1 = 38;
        buttonNumber2 = 39;
        */
          if (visible.button === true && allTheButtons[7].hitTest()) {
            feedbackNumber = 4;
            visible.feedback = true;
            if (mood.wellBeing > -3) {
              mood.wellBeing--;
            }
            gameState = "feedbackschool";
          }
        }
        /*counter = 29;
          dialog(situationPerson, state);
          visible.dialog = true;
          visible.button = false;*/
      } /*else if (state === "school2") {
        visible.dialog = true;
        if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
          visible.button = true;
        }
      } */ else if (state === "television1") {
        visible.hover = true;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
        }
        visible.feedback = true;
        if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
          visible.button = true;
          if (visible.button === true && allTheButtons[38].hitTest()) {
            feedbackNumber = 19;
            visible.feedback = true;
            if (mood.wellBeing > -3) {
              mood.wellBeing--;
            }
            state = "television2";
            visible.button = false;
            dialog(situationPerson, state);
            counter = 98;
            three = true;
            buttonNumber1 = 40;
            buttonNumber2 = 42;
            buttonNumber3 = 41;
          }
          if (visible.button === true && allTheButtons[39].hitTest()) {
            feedbackNumber = 20;
            visible.feedback = true;
            if (mood.wellBeing < 3) {
              mood.wellBeing++;
            }
            state = "television2";
            visible.button = false;
            dialog(situationPerson, state);
            counter = 98;
            three = true;
            buttonNumber1 = 40;
            buttonNumber2 = 42;
            buttonNumber3 = 41;
          }
        }
      } else if (state === "television2") {
        visible.hover = false;
        visible.dialog = true;
        if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
          visible.button = true;
          if (visible.button === true && allTheButtons[40].hitTest()) {
            feedbackNumber = 21;
            visible.feedback = true;
            if (allTheInstantFeedback[feedbackNumber].hitTest()) {
              visible.feedback = false;
            }
            //neutral
            state = "television3";
            visible.button = false;
            dialog(situationPerson, state);
            visible.hover = true;
            thought = 7;
            counter = 99;
          }
          if (visible.button === true && allTheButtons[41].hitTest()) {
            feedbackNumber = 22;
            visible.feedback = true;
            if (mood.wellBeing < 3) {
              mood.wellBeing++;
            }
            state = "television3";
            visible.button = false;
            dialog(situationPerson, state);
            visible.hover = true;
            thought = 7;
            visible.hover = true;
            thought = 7;
            counter = 99;
          }
          if (visible.button === true && allTheButtons[42].hitTest()) {
            feedbackNumber = 23;
            visible.feedback = true;
            if (mood.wellBeing < 3) {
              mood.wellBeing++;
            }
            state = "television3";
            visible.button = false;
            dialog(situationPerson, state);
            visible.hover = true;
            thought = 7;
            counter = 99;
          }
        }
      } else if (state === "television3") {
        visible.feedback = true;
        visible.dialog = true;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
        }
      } else if (state === "shopping") {
        visible.button = false;
        console.log(bubbleArray[counter].hitter);
        if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
          visible.button = true;
        }

        dialog(situationPerson, state);
        buttonNumber1 = 17;
        buttonNumber2 = 18;
        visible.dialog = true;

        if (visible.button === true && allTheButtons[18].hitTest()) {
          if (mood.wellBeing < 3) {
            mood.wellBeing++;
          }
          state = "flower";
          visible.button = false;
          dialog(situationPerson, state);
          counter = 79;
        }
        if (visible.button === true && allTheButtons[17].hitTest()) {
          if (mood.wellBeing > -3) {
            mood.wellBeing--;
          }
          state = "backery";
          visible.feedback = false;
          visible.dialog = false;
          visible.button = true;
          buttonNumber1 = 19;
          buttonNumber2 = 20;
        }
      } else if (state === "flower") {
        console.log("f");
        visible.dialog = true;
        if (
          bubbleArray[maxSpeechbubble - 2].mouseHittet === true &&
          visible.feedback === false
        ) {
          state = "music";
        }
      } else if (state === "backery") {
        console.log("b1");
        if (visible.button === true && allTheButtons[19].hitTest()) {
          state = "backery2";
          counter = 14;
          visible.dialog = true;
          feedbackNumber = 7;
          visible.feedback = true;
          visible.button = false;
          if (mood.wellBeing < 3) {
            mood.wellBeing++;
          }
        }
        if (visible.button === true && allTheButtons[20].hitTest()) {
          state = "backery3";
          feedbackNumber = 8;
          counter = 15;
          visible.dialog = true;
          visible.feedback = true;
          visible.button = false;
          if (mood.wellBeing > -3) {
            mood.wellBeing--;
          }
        }
      } else if (state === "backery2") {
        visible.dialog = true;
        visible.button = false;
        visible.feedback = true;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
          state = "music";
        }
      } else if (state === "backery3") {
        visible.feedback = true;
        visible.button = false;
        visible.dialog = true;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
        }
        if (
          bubbleArray[maxSpeechbubble - 2].mouseHittet === true &&
          visible.feedback === false
        ) {
          state = "music";
          counter = 84;
          visible.dialog = true;
          visible.button = false;
          visible.feedback = false;
          visible.hover = false;
          buttonNumber1 = 21;
          buttonNumber2 = 22;
        }
      } else if (state === "music") {
        if (visible.button === true && allTheButtons[21].hitTest()) {
          state = "music2";
          feedbackNumber = 9;
          visible.dialog = true;
          visible.button = false;
          visible.feedback = true;
          visible.hover = true;
          if (mood.wellBeing < 3) {
            mood.wellBeing++;
          }
        }
        if (visible.button === true && allTheButtons[22].hitTest()) {
          state = "music3";
          feedbackNumber = 10;
          visible.button = false;
          visible.feedback = true;
          visible.hover = false;
          visible.dialog = false;
          if (mood.wellBeing > -3) {
            mood.wellBeing--;
          }
        }
      } else if (state === "music2") {
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
        }
        if (
          visible.feedback === false &&
          bubbleArray[maxSpeechbubble - 3].mouseHittet === true
        ) {
          gameState = "feedbackCD";
        }
      } else if (state === "music3") {
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
          gameState = "feedbackignore";
        }
      }
      if (counter < maxSpeechbubble) {
        bubbleArray[counter].hitTest(0);

        if (bubbleArray[counter].hitterNumber > 0) {
          counter = counter + 1;
        }
      }
      if (notebook.hitTestOpen() && visible.noteBook === false) {
        push();
        knowledge = knowledge + 1;
        visible.noteBook = true;

        pop();
      }
      if (notebook.hitTestClose() && visible.noteBook === true) {
        push();
        visible.noteBook = false;
        pop();
      }
    }

    if (counter <= maxSpeechbubble && counter - 1 >= minSpeechbubble) {
      bubbleArray[counter - 1].hitTest(0);
    }
    if (counter === maxSpeechbubble - 1) {
      //visible.dialog = false; // wieder rein
    }
  }
}
window.mouseClicked = mouseClicked;

function draw() {
  if (gameState === "pregame") {
    if (pregameState === "start") {
      start.display(startPic);
    } else if (pregameState === "gotIt") {
      gotIt.display(verstanden);
    } else if (pregameState === "choose") {
      choose.display(choosePic);
      fill(0);
      textSize(20);
      text("coming soon", 670, 430);
    } else if (pregameState === "story") {
      friend.display(friendsPic);
    } else if (pregameState === "name") {
      name.display(namePic);
      fill(0);
      textSize("e2efde");
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
      if (nameWritten === false) {
      }
    } else if (pregameState === "tutorial1") {
      tutorial.displayfirst(tutorialOne);
    } else if (pregameState === "tutorial2") {
      tutorial.displaysecond(tutorialTwo);
    }
  }
  if (gameState === "ingame") {
    if (nameWritten === true) {
      bPName = pbNameArray.join("");
      situation.background(
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
        wohnzimmer
      );
      fill(200, 200, 200, 40);
      rect(0, 0, 1162, 700);
      situation.situation = state;

      /*if (state === "school1") {
      schoolBubble = new SpeechBubble(
        "Was glaubst du, wann ich wieder an die Schule gehen kann?",
        "user",
        ""
      );
      schoolBubble.y = 450;

      schoolBubble.all(userbubble.direction, userbubble.color);
      schoolBubble.hitTest();
    }*/
      let data = new Export(bPName);
      for (let i = 0; i < data.createMiddleFeedback.length; i++) {
        feedbackScreen.push(
          new Feedback(
            parameter.trigger,
            parameter.wellBeing,
            knowledge,
            bPName,
            i
          )
        );
      }
      ana.hoverthought = data.hoverMessage[thought];
      ana.mood();
      if (visible.hover === true) {
        ana.hover();
      }
      // if (visible.dialog === true) {

      for (let i = 0; i < data.dialogMessage.length; i++) {
        bubbleArray.push(
          new SpeechBubble(
            data.dialogMessage[i],
            data.person[i],
            data.dialogMessage[i + 1]
          )
        );
        if (i === maxSpeechbubble - 1) {
          bubbleArray.push(
            new SpeechBubble(data.dialogMessage[i], data.person[i], ". .")
          );
        }
      }
      if (visible.dialog === true) {
        if (state === "school1") {
          //bubbleArray[counter].height = 50;
          //  bubbleArray[counter].all(userbubble.direction, userbubble.color);
        }

        if (counter < maxSpeechbubble) {
          bubbleArray[counter].y =
            600 -
            bubbleArray[counter].messageHeight(
              bubbleArray[counter].textLeading
            );
        }

        if (counter < maxSpeechbubble) {
          //die einzelnen Elemente von bubbleArray sind die Objekte der Klasse Speechbubble, die vor der function draw erzeugt wurden
          //es muss für jede Person, die Auftreten kann eine If-funktion erstellt werden. Die Anzahl ist aber überschaubar.
          if (bubbleArray[counter].person === "bP") {
            bubbleArray[counter].all(bPbubble.direction, bPbubble.color);
          } else if (bubbleArray[counter].person === "user") {
            bubbleArray[counter].all(userbubble.direction, userbubble.color);
          } else if (bubbleArray[counter].person === "Leni") {
            bubbleArray[counter].all(lenibubble.direction, lenibubble.color);
          } else if (bubbleArray[counter].person === "sister") {
            bubbleArray[counter].all(
              sisterbubble.direction,
              sisterbubble.color
            );
          } else if (bubbleArray[counter].person === "aunt") {
            bubbleArray[counter].all(auntbubble.direction, auntbubble.color);
          }

          if (bubbleArray[counter].hitterNumber > 0) {
            counter = counter + 1;
          }
        }

        //durch diese if-Bedingung wird die letzte Sprechblase auch angezeigt
        //Sprechblasen gehen langsam nach oben
        if (counter < maxSpeechbubble && counter - 1 >= minSpeechbubble) {
          if (bubbleArray[counter - 1].person === "bP") {
            bubbleArray[counter - 1].all(bPbubble.direction, bPbubble.color);
          } else if (bubbleArray[counter - 1].person === "user") {
            bubbleArray[counter - 1].all(
              userbubble.direction,
              userbubble.color
            );
          } else if (bubbleArray[counter - 1].person === "Leni") {
            bubbleArray[counter - 1].all(
              lenibubble.direction,
              lenibubble.color
            );
          } else if (bubbleArray[counter - 1].person === "sister") {
            bubbleArray[counter - 1].all(
              sisterbubble.direction,
              sisterbubble.color
            );
          } else if (bubbleArray[counter - 1].person === "aunt") {
            bubbleArray[counter - 1].all(
              auntbubble.direction,
              auntbubble.color
            );
          }
        }
      }
      //screenOrganisation
      for (let i = 0; i < data.buttonMessage.length; i++) {
        allTheButtons.push(
          new Button(data.buttonX[i], data.buttonY[i], data.buttonMessage[i])
        );
      }
      //Feedback besteht aus einem Display für den Hintergrund und einem für den Text.
      //zuerst wird wieder ein Array erzeugt, in dem alle Feedbacks gespeichert werden, dann werden die Bedingeungen festgelegt, unter denne
      //das instant Feedback gezeugt wird (visible.feedback muss true sein)
      for (let i = 0; i < data.instantFeedbackMessage.length; i++) {
        allTheInstantFeedback.push(
          new InstantFeedback(data.instantFeedbackMessage[i])
        );
      }
      if (visible.feedback === true) {
        allTheInstantFeedback[feedbackNumber].display();
        allTheInstantFeedback[feedbackNumber].displayText();
      }

      //(siehe InstantFeedback)
      //die display Methode des Buttons wird so aufgerufen, wie das instant Feedback
      for (let i = 0; i < data.buttonMessage.length; i++) {
        allTheButtons.push(
          new Button(data.buttonX[i], data.buttonY[i], data.buttonMessage[i])
        );
      }
      if (visible.button === true) {
        allTheButtons[buttonNumber1].display(
          allTheButtons[buttonNumber2].height
        );
        allTheButtons[buttonNumber2].display(
          allTheButtons[buttonNumber1].height
        );
        //es gibt einige Ausnahmefälle, in denne ein dritter Button angezeigt wird. Um bei den restlichen Buttons zu vermeiden, dass
        //ein ein nonexistenter dritter Button aufgerufen wird, wird diese Bedingung mit hinzugefügt
        if (three === true) {
          allTheButtons[buttonNumber3].display(
            allTheButtons[buttonNumber3].height
          );
        }
      }

      //weil die Funktion draw die Befehle zwar wahrgenommen,aber immer nur kurz auf false gegangen ist.

      console.log(visible.noteBook);
      if (visible.noteBook === true) {
        push();
        notebook.display();
        fill(0);
        textSize(20);
        translate(notebook.x, notebook.y + 60);
        for (let i = 0; i < allTheNotebook.length; i++) {
          text(allTheNotebook[i], 10, 10 * i, notebook.width - 20);
        }
        pop();
      }
      image(notebookIcon, 35, 35, 50, 50);
      image(exitPic, 1075, 35, 50, 50);
      fill(255);
      //der Stimmungsbalken wird abgebildet
      mood.display();
      //der Wert des Stimmungsbalkens beeinflusst den Gesichtsausdruck der betroffenen Person. Dieser kann froh, neutral, oder traurig/verängstigt sein
      if (mood.wellBeing < -1) {
        ana.currentMood = "scared";
      } else if (mood.wellBeing >= -1 && mood.wellBeing <= 1) {
        ana.currentMood = "neutral";
      } else if (mood.wellBeing > 1) {
        ana.currentMood = "happy";
      }
    }
  }
  if (
    gameState === "feedbackduck" ||
    gameState === "feedbackschool" ||
    gameState === "feedbackCD" ||
    gameState === "feedbackIgnore" ||
    gameState === "feedbackOberfeld" ||
    gameState === "feedbackHerrengarten"
  ) {
    feedbackScreen[numberFeedback].display(situationOne);
    if (feedbackScreen[numberFeedback].met === false) {
      data.finalFeedback.push(data.createMiddleFeedback[numberFeedback]);
      feedbackScreen[numberFeedback].met = true;
    }
  }
}
window.draw = draw;

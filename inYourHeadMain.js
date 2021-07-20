import SpeechBubble from "./SpeechBubble.js";
import PersonalBubble from "./PersonalBubble.js";
import AnaPersonParameter from "./AnaPersonParameter.js";
import WellBeing from "./WellBeing.js";
import Export from "./organisation/Export.js";
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
import Exit from "./ExitButton.js";
import DankeScreen from "./DankeScreen.js";
//Parameter
let knowledge = 0;

//nameScreen
let fieldPressed = false;
let field = {
  x: 467,
  y: 333,
  r: 226,
  g: 229,
  b: 222,
};
//feedback
let numberFeedback = 0;
//states
let gameState = "pregame";
let pregameState = "start";
let situationPerson = "friend";
let state = "street";
//visibles
let visible = {
  dialog: true,
  button: false,
  hover: false,
  feedback: false,
  noteBook: false,
};
//arrays
let feedbackScreen = [];
let allTheNotebook = [];
let pbNameArray = [];
//bP
let danke = new DankeScreen();
let exit = new Exit();
let start = new StartScreen();
let gotIt = new VerstaendnisScreen();
let choose = new ChooseScreen();
let friend = new FriendsScreen();
let name = new Name();
let tutorial = new TutorialScreen();
let parameter = new AnaPersonParameter(0, -2, 0);
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
dialog(situationPerson, state);
//Name
let bPName = " Toni ";
let currentMood = "neutral";
let thought = "";
let ana = new AnaPerson(100, 300, 250, 400, bPName, currentMood, thought);
let nameWritten = false;
let three = false;
mood.wellBeing = 0;
//für die Sprechblase
let counter = minSpeechbubble;
let bubbleArray = [];
//notebook
let newNote = false;
//instantFeedback
let allTheInstantFeedback = [];
let feedbackNumber = 0;
//buttons
let allTheButtons = [];
let buttonNumber1 = 0;
let buttonNumber2 = 1;
let buttonNumber3 = 2;
//für die Namenseingabe
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

function mouseClicked() {
  console.log(state);
  //hier werden auf eine viel zu komlizierte Art festgelegt, was wann angezeigt/nicht angezeigt wird.
  //Das alles hätte in verschiedene Dateien exportiert werden müssen, aber leider haben wir uns in Sachen code ein bisschen verschätzt
  //bzw den Code unterschätzt. Sorry, dass es so unordentlic, unübersichtlich unnötig und kompliziert ist.
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
    let firstfeedback = new Feedback(
      parameter.trigger,
      parameter.wellBeing,
      parameter.knowledge,
      bPName,
      0
    );
    firstfeedback.display(situationOne);
    numberFeedback = 0;
    if (feedbackScreen[0].hitTestWeiter()) {
      state = "shopping";
      gameState = "ingame";
      visible.dialog = true;
      dialog(situationPerson, state);
      counter = 73;
      visible.button = true;
      buttonNumber1 = 18;
      buttonNumber2 = 17;
      visible.hover = false;
      visible.feedback = false;
    }
  } else if (gameState === "feedbackschool") {
    let secondFeedback = new Feedback(
      parameter.trigger,
      parameter.wellBeing,
      1 + parameter.knowledge,
      bPName,
      1
    );
    secondFeedback.display(situationOne);
    numberFeedback = 1;
    if (feedbackScreen[numberFeedback].hitTestWeiter()) {
      state = "shopping";
      gameState = "ingame";
      visible.dialog = true;
      dialog(situationPerson, state);
      counter = 73;
      visible.button = true;
      buttonNumber1 = 18;
      buttonNumber2 = 17;
      visible.hover = false;
      visible.feedback = false;
    }
  } else if (gameState === "feedbackCD") {
    let seventhFeedback = new Feedback(
      parameter.trigger,
      parameter.wellBeing,
      2 + parameter.knowledge,
      bPName,
      6
    );
    seventhFeedback.display(situationTwo);
    numberFeedback = 6;
    if (feedbackScreen[numberFeedback].hitTestWeiter()) {
      state = "television1";
      gameState = "ingame";
      visible.button = false;
      dialog(situationPerson, state);
      counter = 95;
      buttonNumber1 = 38;
      buttonNumber2 = 39;
      visible.dialog = true;
      visible.hover = false;
      visible.feedback = false;
    }
  } else if (gameState === "feedbackIgnore") {
    let eightFeedback = new Feedback(
      parameter.trigger,
      parameter.wellBeing,
      2 + parameter.knowledge,
      bPName,
      7
    );
    eightFeedback.display(situationTwo);
    numberFeedback = 7;
    if (feedbackScreen[numberFeedback].hitTestWeiter()) {
      state = "television1";
      gameState = "ingame";
      visible.button = false;
      visible.feedback = false;
      dialog(situationPerson, state);
      counter = 95;
      buttonNumber1 = 38;
      buttonNumber2 = 39;
      visible.dialog = true;
      visible.hover = false;
      visible.feedback = false;
    }
    //eine Situation, die wir nicht mehr geschafft haben
  } /*else if (gameState === "feedbackOberfeld") {
    numberFeedback = 10;
    if (feedbackScreen[numberFeedback].hitTestWeiter()) {
      state = "television1";
      gameState = "ingame";
      visible.button = false;
      dialog(situationPerson, state);
      counter = 95;
      buttonNumber1 = 38;
      buttonNumber2 = 39;
      visible.dialog = true;
      visible.hover = false;
      visible.feedback = false;
    }
  } else if (gameState === "feedbackHerrengarten") {
    numberFeedback = 11;
    if (feedbackScreen[numberFeedback].hitTestWeiter()) {
      state = "television1";
      gameState = "ingame";
      visible.button = false;
      dialog(situationPerson, state);
      counter = 95;
      buttonNumber1 = 38;
      buttonNumber2 = 39;
      visible.dialog = true;
      visible.hover = false;
      visible.feedback = false;
    }
  }*/ else if (gameState === "finalFeedback") {
    let finalFeedback = new Feedback(
      parameter.trigger,
      parameter.wellBeing,
      knowledge,
      bPName,
      0
    );
    numberFeedback = 12;
    if (finalFeedback.hitTestWeiter()) {
      gameState = "pregame";
      pregameState = "start";
    } else if (finalFeedback.hitTestExit()) {
      gameState = "danke";
    }
  } else if (gameState === "danke") {
    if (danke.hitTest()) {
      gameState = "pregame";
      pregameState = "start";
    }
  } else if (gameState === "ingame") {
    if (nameWritten === true) {
      if (exit.hitTest()) {
        gameState = "finalFeedback";
      }
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
              parameter.trigger = parameter.trigger + 1;
            }
            state = "leni";
            buttonNumber1 = 4;
            buttonNumber2 = 5;
            thought = 6;
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
          visible.dialog = false;
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
          situation.notebookTextNumber = 0;
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
            parameter.trigger = parameter.trigger + 1;
          }
          counter = 22;
          state = "leniNear";
          dialog(situationPerson, state);
          visible.hover = true;
          thought = 6;
          visible.button = false;
        }

        visible.dialog = true;
        if (visible.button === true && allTheButtons[5].hitTest()) {
          //neutral
          state = "school1";
          visible.dialog = true;
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
          situation.notebookTextNumber = 0;
        }
        visible.hover = true;
        thought = 6;
        visible.dialog = true;
        if (
          bubbleArray[maxSpeechbubble - 3].mouseHittet === true &&
          visible.feedback === false
        ) {
          visible.dialog = true;
          state = "school1";
          counter = 27;
          dialog(situationPerson, state);
          buttonNumber1 = 6;
          buttonNumber2 = 7;
        }
      } else if (state === "school1") {
        visible.feedback = false;
        visible.hover = false;
        visible.dialog = true;
        visible.button = false;
        if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
          visible.button = true;
          if (visible.button === true && allTheButtons[6].hitTest()) {
            state = "school2";
            feedbackNumber = 3;
            counter = 28;
            visible.button = false;
            visible.feedback = true;

            if (mood.wellBeing < 3) {
              mood.wellBeing++;
            }
          }
          if (visible.button === true && allTheButtons[7].hitTest()) {
            state = "school3";
            feedbackNumber = 4;
            counter = 29;
            visible.button = false;
            visible.feedback = true;

            if (mood.wellBeing > -3) {
              mood.wellBeing--;
              parameter.trigger = parameter.trigger + 1;
            }
          }
          if (visible.button === true && allTheButtons[7].hitTest()) {
            feedbackNumber = 4;
            visible.feedback = true;
            if (mood.wellBeing > -3) {
              mood.wellBeing--;
              parameter.trigger = parameter.trigger + 1;
            }
            gameState = "feedbackschool";
          }
        }
      } else if (state === "school2") {
        visible.feedback = false;
        visible.hover = false;
        visible.dialog = true;
        visible.button = false;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
          situation.notebookTextNumber = 0;
        }
        if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
          gameState = "feedbackschool";
        }
      } else if (state === "school3") {
        visible.feedback = false;
        visible.hover = false;
        visible.dialog = true;
        visible.button = false;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
          situation.notebookTextNumber = 0;
        }
        if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
          gameState = "feedbackschool";
        }
      } else if (state === "television1") {
        visible.hover = true;
        visible.feedback = false;
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
              parameter.trigger = parameter.trigger + 1;
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
            thought = 8;
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
            thought = 8;
            visible.hover = true;
            thought = 8;
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
            thought = 8;
            counter = 99;
          }
        }
      } else if (state === "television3") {
        visible.feedback = true;
        visible.dialog = true;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
          if (allTheInstantFeedback[feedbackNumber].hitTest()) {
            visible.feedback = false;
            situation.notebookTextNumber = 0;
          }
          gameState = "finalFeedback";
        }
      } else if (state === "shopping") {
        visible.button = false;

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
            parameter.trigger = parameter.trigger + 1;
          }
          state = "backery";
          visible.feedback = false;
          visible.dialog = false;
          visible.button = true;
          buttonNumber1 = 19;
          buttonNumber2 = 20;
        }
      } else if (state === "flower") {
        visible.dialog = true;
        if (
          bubbleArray[maxSpeechbubble - 2].mouseHittet === true &&
          visible.feedback === false
        ) {
          state = "music";
          visible.dialog = true;
          counter = 84;
          visible.button = false;
          visible.feedback = false;
          visible.hover = false;
          buttonNumber1 = 21;
          buttonNumber2 = 22;
        }
      } else if (state === "backery") {
        visible.dialog = false;
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

          counter = 13;
          visible.dialog = true;
          visible.feedback = true;
          visible.button = false;
          if (mood.wellBeing > -3) {
            mood.wellBeing--;
            parameter.trigger = parameter.trigger + 1;
          }
        }
      } else if (state === "backery2") {
        visible.dialog = true;
        visible.button = false;
        visible.feedback = true;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
          state = "music";
          visible.dialog = true;
          visible.button = false;
          visible.feedback = false;
          visible.hover = false;
          buttonNumber1 = 21;
          buttonNumber2 = 22;
          situation.notebookTextNumber = 0;
        }
      } else if (state === "backery3") {
        console.log("loggg");
        visible.feedback = true;
        visible.button = false;
        visible.dialog = true;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
          if (allTheInstantFeedback[feedbackNumber].hitTest()) {
            visible.feedback = false;
            situation.notebookTextNumber = 0;
          }
        }
        if (
          bubbleArray[maxSpeechbubble - 2].mouseHittet === true &&
          visible.feedback === false
        ) {
          state = "music";
          counter = 84;
          visible.dialog = false;
          visible.button = false;
          visible.feedback = false;
          visible.hover = false;
          buttonNumber1 = 21;
          buttonNumber2 = 22;
        }
      } else if (state === "music") {
        visible.dialog = true;
        if (bubbleArray[maxSpeechbubble - 2].mouseHittet === true) {
          visible.button = true;
        }
        if (visible.button === true && allTheButtons[21].hitTest()) {
          state = "music2";
          feedbackNumber = 9;
          visible.dialog = false;
          visible.button = false;
          visible.feedback = true;
          visible.hover = true;
          thought = 11;
          counter = 84;
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
            parameter.trigger = parameter.trigger + 1;
          }
        }
      } else if (state === "music2") {
        visible.hover = true;
        visible.dialog = true;
        visible.feedbacktrue;
        if (allTheInstantFeedback[feedbackNumber].hitTest()) {
          visible.feedback = false;
          situation.notebookTextNumber = 0;
        }
        if (bubbleArray[maxSpeechbubble - 3].mouseHittet === true) {
          gameState = "feedbackCD";
        }
      } else if (state === "music3") {
        feedbackNumber = 10;
        situation.notebookTextNumber = 0;
        if (allTheInstantFeedback[10].hitTest()) {
          console.log("hit");
          gameState = "feedbackIgnore";
        }
      }
      //wenn auf den Schwarzen Peil einer Sprechblase gedrück wird, wird der Counter um einers größer. Der Counter gibt dabei an, welce Sprechblase angezeigt werden soll.
      if (counter < maxSpeechbubble) {
        bubbleArray[counter].hitTest(0);

        if (bubbleArray[counter].hitterNumber > 0) {
          counter = counter + 1;
        }
      }
      //wenn auf den Button oben gedrückt wird, öffnet sich das Notebook
      if (notebook.hitTestOpen() && visible.noteBook === false) {
        push();
        knowledge = knowledge + 1;
        visible.noteBook = true;

        pop();
      }
      // wenn das Notebook geöffnet ist und man auf den schwarzen Dreiechksbutten drückt, schließt es sich wieder.
      if (notebook.hitTestClose() && visible.noteBook === true) {
        push();
        visible.noteBook = false;
        pop();
      }
    }

    if (counter <= maxSpeechbubble && counter - 1 >= minSpeechbubble) {
      bubbleArray[counter - 1].hitTest(0);
    }
  }
}
window.mouseClicked = mouseClicked;

function draw() {
  //es gibt 2 States: state (das ist ingame) und die gameStates, die allgemein anzeigen, was allgemein angezeigt wid
  if (gameState === "pregame") {
    // hier wird angegeben, was wann gezeigt werden soll.
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
  /* if (mouseX < 1075 && mouseX > 1125 && mouseY < 35 && mouseY > 85) {
        gameState = "finalFeedback";
      } */
  if (gameState === "danke") {
    danke.display(dankePic);
  }
  if (gameState === "finalFeedback") {
    let finalFeedback = new Feedback(
      parameter.trigger,
      parameter.wellBeing,
      knowledge,
      bPName,
      0
    );
    finalFeedback.finalDisplay(situationFour, allTheNotebook);
  }
  //wenn nichtts beim Namen eingegeben wird, heißt die bP (=betroffene Person) Toni
  if (pbNameArray.length === 0) {
    bPName = "Toni";
  } else {
    //ansonsten wird der Name zusammengefasst als bPName bezeichnet
    bPName = pbNameArray.join("");
  }
  if (gameState === "ingame") {
    //die forlgenden Dateien können nur dann erzeugt werden, wenn der Name der bP fest steht
    if (nameWritten === true) {
      if (pbNameArray.length === 0) {
        bPName = "Toni";
      } else {
        bPName = pbNameArray.join("");
      }
      //hier werden alle Arrays geladen.
      let data = new Export(bPName);
      situation.notebookfeedback(newNote);
      //diese datei ist für die Hintergründe in game zuständig
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
      //die Hintergründe waren zu grell, deshalb ein transparentes Rechteck, dass die Farben abschwächen soll
      fill(200, 200, 200, 40);
      rect(0, 0, 1162, 700);
      situation.situation = state;

      //hier werden die Feedbacks erzeugt
      //Hilfe von Herr Toepper und Quelle: https://p5js.org/examples/objects-array-of-objects.html
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
      // die Hoverthoughts werden in einer anderen Datei festgelegt
      ana.hoverthought = data.hoverMessage[thought];
      ana.mood();
      if (visible.hover === true) {
        ana.hover();
      }

      //Hilfe von Herr Toepper und https://p5js.org/examples/objects-array-of-objects.html
      //die Anzahl an Nachrichten definiert, wieviele neue Sprechblasen erzeugt wird
      //die einzelnen Elemente von bubbleArray sind die Objekte der Klasse Speechbubble, die vor der function draw erzeugt wurden
      //es muss für jede Person, die Auftreten kann eine If-funktion erstellt werden. Die Anzahl ist aber überschaubar.
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
      //es gint 2 Buttons nebeneinander, die getrennt voneiander behandelt werden
      if (visible.button === true) {
        allTheButtons[buttonNumber1].display(
          allTheButtons[buttonNumber2].height
        );
        allTheButtons[buttonNumber2].display(
          allTheButtons[buttonNumber1].height
        );
        //wenn es drei Sprechblasen gibt, tritt dieser Sonderfall ein
        if (three === true) {
          allTheButtons[buttonNumber3].display(
            allTheButtons[buttonNumber3].height
          );
        }
      }

      //weil die Funktion draw die Befehle zwar wahrgenommen,aber immer nur kurz auf false gegangen ist.

      if (visible.noteBook === true) {
        push();
        notebook.display();
        fill(0);
        textSize(20);
        translate(notebook.x, notebook.y + 60);
        for (let i = 0; i < situation.notebookText.length; i++) {
          text(situation.notebookText[i], 10, 30 + 50 * i, notebook.width - 20);
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
  //siehe oben: die Methode derSprechblase

  let data = new Export(bPName);
  //die Gamestates werden hier angezeigt
  if (gameState === "feedbackduck" || gameState === "feedbackschool") {
    if (feedbackScreen[numberFeedback].met === false) {
      //wenn ein Feedback gegebe wird, wir dieses für das final Feedback gespeichert
      allTheNotebook.push(data.createMiddleFeedback[numberFeedback]);
      feedbackScreen[numberFeedback].met = true;
    }
  } else if (gameState === "feedbackCD" || gameState === "feedbackIgnore") {
    if (feedbackScreen[numberFeedback].met === false) {
      allTheNotebook.push(data.createMiddleFeedback[numberFeedback]);
      feedbackScreen[numberFeedback].met = true;
    }
  } /*else if (
    gameState === "feedbackOberfeld" ||
    gameState === "feedbackHerrengarten"
  ) {
    if (feedbackScreen[numberFeedback].met === false) {
      allTheNotebook.push(data.createMiddleFeedback[numberFeedback]);

      feedbackScreen[numberFeedback].met = true;
    }
  }*/ else if (gameState === "television2" || gameState === "television3") {
    if (feedbackScreen[numberFeedback].met === false) {
      allTheNotebook.push(data.createMiddleFeedback[numberFeedback]);

      feedbackScreen[numberFeedback].met = true;
    }
  }
}
window.draw = draw;

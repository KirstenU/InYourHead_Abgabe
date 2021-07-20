import Export from "./Export.js";
let data = new Export("bP");
//eine allgemeine Klasse, die festlegt, wann was angezeigt werdn soll
export default class Situation {
  constructor(situation, person) {
    this.situation = situation;
    this.person = person;
    this.minSpeechbubble = 0;
    this.maxSpeechbubble = 1;
    this.hoverNumber = 0;
    this.buttonNumber = { one: 0, two: 0, three: 0 };
    this.feedback = 0;
    this.picture = "";
    this.notebookText = [];
    this.notebookTextNumber = 0;
  }
  button() {
    if (this.person === "friend") {
      if (this.situation === "street") {
        this.buttonNumber.one = 0;
        this.buttonNumber.two = 1;
      }
      if (this.situation === "duck") {
        this.buttonNumber.one = 2;
        this.buttonNumber.two = 3;
      }
      if (this.situation === "leni") {
        this.buttonNumber.one = 4;
        this.buttonNumber.two = 5;
      }
      if (this.situation === "school") {
        this.buttonNumber.one = 6;
        this.buttonNumber.two = 7;
      }
      if (this.situation === "shopping") {
        this.buttonNumber.one = 18;
        this.buttonNumber.two = 17;
      }
      if (this.situation === "bakery") {
        this.buttonNumber.one = 30;
        this.buttonNumber.two = 20;
      }
      if (this.situation === "music") {
        this.buttonNumber.one = 22;
        this.buttonNumber.two = 21;
      }
      if (this.situation === "mobilephone") {
        this.buttonNumber.one = 32;
        this.buttonNumber.two = 31;
      }
      if (this.situation === "oberfeld") {
        this.buttonNumber.one = 33;
        this.buttonNumber.two = 34;
        this.buttonNumber.three = 35;
        if (this === "picknick") {
          this.buttonNumber.one = 37;
          this.buttonNumber.two = 36;
        }
      }
      if (this.situation === "park") {
        this.buttonNumber.one = 33;
        this.buttonNumber.two = 34;
        this.buttonNumber.three = 35;
        if (this === "picknick") {
          this.buttonNumber.one = 37;
          this.buttonNumber.two = 36;
        }
      }

      if (this.situation === "television1") {
        this.buttonNumber.one = 38;
        this.buttonNumber.two = 39;
      }
      if (this.situation === "television2") {
        this.buttonNumber.one = 40;
        this.buttonNumber.two = 41;
        this.buttonNumber.three = 42;
      }
    }
    if ((this.person = "parent")) {
      if (this.situation === "street") {
        this.buttonNumber.one = 0;
        this.buttonNumber.two = 1;
      }
      if (this.situation === "duck") {
        this.buttonNumber.one = 3;
        this.buttonNumber.two = 2;
      }
      if (this.situation === "leni") {
        this.buttonNumber.one = 4;
        this.buttonNumber.two = 5;
      }
      if (this.situation === "school") {
        this.buttonNumber.one = 6;
        this.buttonNumber.two = 7;
      }
      if (this.situation === "shopping") {
        this.buttonNumber.one = 18;
        this.buttonNumber.two = 17;
      }
      if (this.situation === "bakery") {
        this.buttonNumber.one = 19;
        this.buttonNumber.two = 20;
      }
      if (this.situation === "kitchen") {
        this.buttonNumber.one = 9;
        this.buttonNumber.two = 8;
      }
      if (this.situation === "dinner") {
        if (this.situation === "dinner1") {
          this.buttonNumber.one = 11;
          this.buttonNumber.two = 10;
        }
        if (this.situation === "dinner2") {
          this.buttonNumber.one = 12;
          this.buttonNumber.two = 13;
        }
        if (this.situation === "dinner3") {
          this.buttonNumber.one = 14;
          this.buttonNumber.two = 16;
        }
      }
      if (this.situation === "auntHouseWithbP") {
        if (this.situation === "auntHouseWithbP1") {
          this.buttonNumber.one = 23;
          this.buttonNumber.two = 24;
        }
        if (this.situation === "auntHouseWithbP2") {
          this.buttonNumber.one = 28;
          this.buttonNumber.two = 29;
          this.buttonNumber.three = 30;
        }
      }
      if (this.situation === "auntDinner") {
        this.buttonNumber.one = 25;
        this.buttonNumber.two = 26;
        this.buttonNumber.three = 27;
      }
    }
  }
  dialog() {
    if (this.person === "friend") {
      if (this.situation === "street") {
        this.minSpeechbubble = 16;
        this.maxSpeechbubble = 19;
      }
      if (this.situation === "duck") {
        this.minSpeechbubble = 20;
        this.maxSpeechbubble = 22;
      }

      if (this.situation === "leniNear") {
        this.minSpeechbubble = 22;
        this.maxSpeechbubble = 26;
      }
      if (this.situation === "school") {
        if (this.situation === "school1") {
          this.minSpeechbubble = 27;
          this.maxSpeechbubble = 27;
        }
        if (this.situation === "school2") {
          this.minSpeechbubble = 28;
          this.maxSpeechbubble = 28;
        }
        if (this.situation === "school3") {
          this.minSpeechbubble = 29;
          this.maxSpeechbubble = 29;
        }
      }
      if (this.situation === "shopping") {
        this.minSpeechbubble = 74;
        this.maxSpeechbubble = 78;
      }
      if (this.situation === "flower") {
        this.minSpeechbubble = 79;
        this.maxSpeechbubble = 80;
      }
      if (this.situation === "music") {
        this.minSpeechbubble = 83;
        this.maxSpeechbubble = 83;
      }
      if (this.situation === "music2") {
        this.minSpeechbubble = 85;
        this.maxSpeechbubble = 85;
      }

      if (this.situation === "mobilephone1") {
        this.minSpeechbubble = 30;
        this.maxSpeechbubble = 31;
      }
      if (this.situation === "mobilephone2") {
        this.minSpeechbubble = 54;
        this.maxSpeechbubble = 57;
      }
      if (this.situation === "mobilephone3") {
        this.minSpeechbubble = 34;
        this.maxSpeechbubble = 37;
      }
      //changed

      if (this.situation === "oberfeld1") {
        this.minSpeechbubble = 57;
        this.maxSpeechbubble = 59;
      }
      if (this.situation === "oberfeld2") {
        this.minSpeechbubble = 39;
        this.maxSpeechbubble = 40;
      }
      if (this.situation === "oberfeld3") {
        this.minSpeechbubble = 59;
        this.maxSpeechbubble = 61;
      }

      if (this.situation === "picknick1") {
        this.minSpeechbubble = 61;
        this.maxSpeechbubble = 62;
      }
      if (this.situation === "picknick2") {
        this.minSpeechbubble = 63;
        this.maxSpeechbubble = 66;
      }
      if (this.situation === "picknick3") {
        this.minSpeechbubble = 66;
        this.maxSpeechbubble = 73;
      }
      if (this.situation === "park1") {
        this.minSpeechbubble = 37;
        this.maxSpeechbubble = 39;
      }
      if (this.situation === "park2") {
        this.minSpeechbubble = 39;
        this.maxSpeechbubble = 40;
      }

      if (this.situation === "parkpicknick1") {
        this.minSpeechbubble = 42;
        this.maxSpeechbubble = 43;
      }
      if (this.situation === "parkpicknick2") {
        this.minSpeechbubble = 43;
        this.maxSpeechbubble = 46;
      }
      if (this.situation === "parkpicknick3") {
        this.minSpeechbubble = 46;
        this.maxSpeechbubble = 53;
      }

      if (this.situation === "television1") {
        this.minSpeechbubble = 95;
        this.maxSpeechbubble = 97;
      }
      if (this.situation === "television2") {
        this.minSpeechbubble = 97;
        this.maxSpeechbubble = 98;
      }
      if (this.situation === "television3") {
        this.minSpeechbubble = 98;
        this.maxSpeechbubble = 100;
      }
    }
    if (this.person === "parent") {
      if (this.situation === "street") {
        this.minSpeechbubble = 100;
        this.maxSpeechbubble = 103;
      }
      if (this.situation === "duck") {
        this.minSpeechbubble = 5;
        this.maxSpeechbubble = 6;
      }
      if (this.situation === "leniNear") {
        this.minSpeechbubble = 21;
        this.maxSpeechbubble = 26;
      }

      if (this.situation === "school1") {
        this.minSpeechbubble = 26;
        this.maxSpeechbubble = 27;
      }
      if (this.situation === "school2") {
        this.minSpeechbubble = 27;
        this.maxSpeechbubble = 28;
      }
      if (this.situation === "school3") {
        this.minSpeechbubble = 28;
        this.maxSpeechbubble = 29;
      }

      if (this.situation === "shopping") {
        this.minSpeechbubble = 10;
        this.maxSpeechbubble = 12;
      }

      if (this.situation === "backery1") {
        this.minSpeechbubble = 14;
        this.maxSpeechbubble = 15;
      }
      if (this.situation === "backery2") {
        this.minSpeechbubble = 15;
        this.maxSpeechbubble = 16;
      }

      if (this.situation === "flower") {
        this.minSpeechbubble = 12;
        this.maxSpeechbubble = 14;
      }
      if (this.situation === "kitchen") {
        this.minSpeechbubble = 3;
        this.maxSpeechbubble = 4;
      }

      if (this.situation === "dinner1") {
        this.minSpeechbubble = 4;
        this.maxSpeechbubble = 6;
      }
      if (this.situation === "dinner2") {
        this.minSpeechbubble = 6;
        this.maxSpeechbubble = 8;
      }
      if (this.situation === "dinner3") {
        this.minSpeechbubble = 8;
        this.maxSpeechbubble = 10;
      }

      if (this.situation === "auntHouseWithbP1") {
        this.minSpeechbubble = 85;
        this.maxSpeechbubble = 88;
      }
      if (this.situation === "auntHouseWithbP2") {
        this.minSpeechbubble = 88;
        this.maxSpeechbubble = 89;
      }
      if (this.situation === "auntHouseWithbP3") {
        this.minSpeechbubble = 89;
        this.maxSpeechbubble = 93;
      }
      if (this.situation === "auntHouseWithbP4") {
        this.minSpeechbubble = 91;
        this.maxSpeechbubble = 93;
      }
      if (this.situation === "auntHouseWithbP5") {
        this.minSpeechbubble = 94;
        this.maxSpeechbubble = 95;
      }

      if (this.situation === "auntDinner") {
        this.minSpeechbubble = 93;
        this.maxSpeechbubble = 94;
      }
    }
  }
  notebookfeedback() {
    if (this.notebookTextNumber === 0) {
      if (this.situation === "duck2") {
        this.notebookText.push(data.instantFeedbackForNotebook[0]);
        this.notebookTextNumber = 1;
      }
      if (this.situation === "leniNear") {
        this.notebookText.push(data.instantFeedbackForNotebook[2]);
        this.notebookTextNumber = 1;
      }
      if (this.situation === "school2" || this.situation === "school3") {
        this.notebookText.push(data.instantFeedbackForNotebook[4]);
        this.notebookTextNumber = 1;
      }

      if (this.situation === "backery2" || this.situation === "backery3") {
        this.notebookText.push(data.instantFeedbackForNotebook[7]);
        this.notebookTextNumber = 1;
      }

      if (this.situation === "music2" || this.situation === "music3") {
        this.notebookText.push(data.instantFeedbackForNotebook[9]);
        this.notebookTextNumber = 1;
      }

      if (this.situation === "television3") {
        this.notebookText.push(data.instantFeedbackForNotebook[10]);
        this.notebookTextNumber = 1;
      }
    }
  }
  background(
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
  ) {
    if (this.situation === "street") {
      image(haeuser, 0, 0, 1162, 700);
    }
    if (this.situation === "duck" || this.situation === "duck2") {
      image(entensee, 0, 0, 1162, 700);
    }
    if (this.situation === "leni") {
      image(bekannteTuer, 0, 0, 1162, 700);
    }
    if (this.situation === "leniNear") {
      image(bekannte, 0, 0, 1162, 700);
    }
    if (
      this.situation === "school1" ||
      this.situation === "school2" ||
      this.situation === "school3"
    ) {
      image(schule, 0, 0, 1162, 700);
    }
    if (this.situation === "shopping") {
      image(haeuser, 0, 0, 1162, 700);
    }
    if (
      this.situation === "backery" ||
      this.situation === "backery2" ||
      this.situation === "backery3"
    ) {
      image(baeckerei, 0, 0, 1162, 700);
    }
    if (this.situation === "flower") {
      image(blumenladen, 0, 0, 1162, 700);
    }
    if (
      this.situation === "music" ||
      this.situation === "music2" ||
      this.situation === "music3"
    ) {
      image(musikladen, 0, 0, 1162, 700);
    }
    if (
      this.situation === "mobilephone1" ||
      this.situation === "mobilephone2" ||
      this.situation === "mobilephone3"
    ) {
      image(handy, 0, 0, 1162, 700);
    }
    if (
      this.situation === "oberfeld1" ||
      this.situation === "oberfeld2" ||
      this.situation === "oberfeld3"
    ) {
      image(oberfeld, 0, 0, 1162, 700);
    }
    if (
      this.situation === "park1" ||
      this.situation === "park2" ||
      this.situation === "park3"
    ) {
      image(park, 0, 0, 1162, 700);
    }
    if (
      this.situation === "picknick1" ||
      this.situation === "picknick2" ||
      this.situation === "picknick3" ||
      this.situation === "parkpicknick1" ||
      this.situation === "parkpicknick2" ||
      this.situation === "parkpicknick3"
    ) {
      image(picknick, 0, 0, 1162, 700);
    }
    if (
      this.situation === "television1" ||
      this.situation === "television2" ||
      this.situation === "television3"
    ) {
      image(wohnzimmer, 0, 0, 1162, 700);
    }
    if (this.situation === "kitchen") {
      image(kueche, 0, 0, 1162, 700);
    }
    if (this.situation === "dinner") {
      image(abendessen, 0, 0, 1162, 700);
    }
    if (this.situation === "auntHouseWithbP") {
      image(tanteDraussenBp, 0, 0, 1162, 700);
    }
    if (this.situation === "auntHouse") {
      image(tanteDraussen, 0, 0, 1162, 700);
    }
    if (this.situation === "auntDinner") {
      image(tanteEssen, 0, 0, 1162, 700);
    }
    if (this.situation === "plate") {
      image(teller, 0, 0, 1162, 700);
    }
  }
}

//hier wird angezeigt, wann welche Dialogintervalle anzeiegt werden
export var minSpeechbubble = 0;
export var maxSpeechbubble = 0;
export function dialog(person, situation) {
  if (person === "friend") {
    if (situation === "street") {
      minSpeechbubble = 16;
      maxSpeechbubble = 19;
    }
    if (situation === "duck") {
      minSpeechbubble = 20;
      maxSpeechbubble = 22;
    }
    if (situation === "leniNear") {
      minSpeechbubble = 22;
      maxSpeechbubble = 27;
    }

    if (situation === "school1") {
      minSpeechbubble = 27;
      maxSpeechbubble = 28;
    }
    if (situation === "school2") {
      minSpeechbubble = 28;
      maxSpeechbubble = 30;
    }
    if (situation === "school3") {
      minSpeechbubble = 29;
      maxSpeechbubble = 31;
    }
    if (situation === "shopping") {
      minSpeechbubble = 73;
      maxSpeechbubble = 78;
    }
    if (situation === "backery3") {
      minSpeechbubble = 13;
      maxSpeechbubble = 16;
    }
    if (situation === "backery2") {
      minSpeechbubble = 14;
      maxSpeechbubble = 17;
    }
    if (situation === "flower") {
      minSpeechbubble = 79;
      maxSpeechbubble = 81;
    }
    if (situation === "music") {
      minSpeechbubble = 83;
      maxSpeechbubble = 85;
    }
    if (situation === "music2") {
      minSpeechbubble = 85;
      maxSpeechbubble = 87;
    }
    if (situation === "mobilephone1") {
      minSpeechbubble = 30;
      maxSpeechbubble = 31;
    }
    if (situation === "mobilephone2") {
      minSpeechbubble = 54;
      maxSpeechbubble = 57;
    }
    if (situation === "mobilephone3") {
      minSpeechbubble = 34;
      maxSpeechbubble = 37;
    }
    if (situation === "oberfeld1") {
      minSpeechbubble = 57;
      maxSpeechbubble = 59;
    }
    if (situation === "oberfeld2") {
      minSpeechbubble = 39;
      maxSpeechbubble = 40;
    }
    if (situation === "oberfeld3") {
      minSpeechbubble = 59;
      maxSpeechbubble = 61;
    }
    if (situation === "picknick1") {
      minSpeechbubble = 61;
      maxSpeechbubble = 62;
    }
    if (situation === "picknick2") {
      minSpeechbubble = 63;
      maxSpeechbubble = 66;
    }
    if (situation === "picknick3") {
      minSpeechbubble = 66;
      maxSpeechbubble = 73;
    }
    if (situation === "park1") {
      minSpeechbubble = 37;
      maxSpeechbubble = 39;
    }
    if (situation === "park2") {
      minSpeechbubble = 39;
      maxSpeechbubble = 40;
    }
    if (situation === "parkpicknick1") {
      minSpeechbubble = 42;
      maxSpeechbubble = 43;
    }
    if (situation === "parkpicknick2") {
      minSpeechbubble = 43;
      maxSpeechbubble = 46;
    }
    if (situation === "parkpicknick3") {
      minSpeechbubble = 46;
      maxSpeechbubble = 53;
    }

    if (situation === "television1") {
      minSpeechbubble = 96;
      maxSpeechbubble = 98;
    }
    if (situation === "television2") {
      minSpeechbubble = 98;
      maxSpeechbubble = 99;
    }
    if (situation === "television3") {
      minSpeechbubble = 99;
      maxSpeechbubble = 101;
    }
  }
  /////////////////////PARENTS//////////////////////////////////////
  if (person === "parent") {
    if (situation === "street") {
      minSpeechbubble = 100;
      maxSpeechbubble = 103;
    }
    if (situation === "leniNear") {
      minSpeechbubble = 21;
      maxSpeechbubble = 26;
    }

    if (situation === "school1") {
      minSpeechbubble = 26;
      maxSpeechbubble = 27;
    }
    if (situation === "school2") {
      minSpeechbubble = 27;
      maxSpeechbubble = 28;
    }
    if (situation === "school3") {
      minSpeechbubble = 28;
      maxSpeechbubble = 29;
    }

    if (situation === "shopping") {
      minSpeechbubble = 10;
      maxSpeechbubble = 12;
    }

    if (situation === "backery1") {
      minSpeechbubble = 14;
      maxSpeechbubble = 15;
    }
    if (situation === "backery2") {
      minSpeechbubble = 15;
      maxSpeechbubble = 16;
    }

    if (situation === "flower") {
      minSpeechbubble = 12;
      maxSpeechbubble = 14;
    }
    if (situation === "kitchen") {
      minSpeechbubble = 0;
      maxSpeechbubble = 4;
    }

    if (situation === "dinner1") {
      minSpeechbubble = 4;
      maxSpeechbubble = 6;
    }
    if (situation === "dinner2") {
      minSpeechbubble = 6;
      maxSpeechbubble = 8;
    }
    if (situation === "dinner3") {
      minSpeechbubble = 8;
      maxSpeechbubble = 10;
    }

    if (situation === "auntHouseWithbP1") {
      minSpeechbubble = 85;
      maxSpeechbubble = 88;
    }
    if (situation === "auntHouseWithbP2") {
      minSpeechbubble = 88;
      maxSpeechbubble = 89;
    }
    if (situation === "auntHouseWithbP3") {
      minSpeechbubble = 89;
      maxSpeechbubble = 93;
    }
    if (situation === "auntHouseWithbP4") {
      minSpeechbubble = 91;
      maxSpeechbubble = 93;
    }
    if (situation === "auntHouseWithbP5") {
      minSpeechbubble = 94;
      maxSpeechbubble = 95;
    }

    if (situation === "auntDinner") {
      minSpeechbubble = 93;
      maxSpeechbubble = 94;
    }
  }
}
//dies ist ein Kommentar von Julie um 19:05

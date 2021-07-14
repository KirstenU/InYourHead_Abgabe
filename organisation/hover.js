//hier werden die Hover für die Situationen festgelegt
let hoverNumber = 0;
export function hover(person, situation) {
  if (person === "friend") {
    if (situation === "duck") {
      hoverNumber = 5;
    }

    if (situation === "leniNear") {
      hoverNumber = 6;
    }
    if (situation === "backery") {
      hoverNumber = 3;
    }
    if (situation === "flower") {
      hoverNumber = 4;
    }
    if (situation === "music2") {
      hoverNumber = 11;
    }
    if (situation === "oberfeld3") {
      hoverNumber = 10;
    }
    if (situation === "park3") {
      hoverNumber = 9;
    }
    if (situation === "television3") {
      hoverNumber = 8;
    }
  }
  if ((person = "parent")) {
    if (situation === "duck") {
      hoverNumber = 5;
    }
    if (situation === "leniNear") {
      hoverNumber = 6;
    }
    if (situation === "bakery") {
      hoverNumber = 3;
    }
    if (situation === "flower") {
      hoverNumber = 2;
    }
    if (situation === "kitchen") {
    }
    if (situation === "dinner") {
      if (situation === "dinner1") {
        hoverNumber = 0;
      }
      if (situation === "dinner2") {
        hoverNumber = 1;
      }
    }
  }
}

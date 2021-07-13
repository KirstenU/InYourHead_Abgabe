let situation = "";
export function screens(
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
  if (situation === "street") {
    image(haeuser, 0, 0, 1162, 700);
  }
  if (situation === "duck") {
    image(entensee, 0, 0, 1162, 700);
  }
  if (situation === "leni") {
    image(bekannteTuer, 0, 0, 1162, 700);
  }
  if (situation === "leniNear") {
    image(bekannte, 0, 0, 1162, 700);
  }
  if (
    situation === "school1" ||
    situation === "school2" ||
    situation === "school3"
  ) {
    image(schule, 0, 0, 1162, 700);
  }
  if (situation === "shopping") {
    image(haeuser, 0, 0, 1162, 700);
  }
  if (situation === "bakery") {
    image(baeckerei, 0, 0, 1162, 700);
  }
  if (situation === "flower") {
    image(blumenladen, 0, 0, 1162, 700);
  }
  if (situation === "music" || situation === "music2") {
    image(musikladen, 0, 0, 1162, 700);
  }
  if (situation === "mobilephone1" || "mobilephone2" || "mobilephone3") {
    image(handy, 0, 0, 1162, 700);
  }
  if (
    situation === "oberfeld1" ||
    situation === "oberfeld2" ||
    situation === "oberfeld3"
  ) {
    image(oberfeld, 0, 0, 1162, 700);
  }
  if (situation === "park1" || situation === "park2" || situation === "park3") {
    image(park, 0, 0, 1162, 700);
  }
  if (
    state === "picknick1" ||
    state === "picknick2" ||
    state === "picknick3" ||
    state === "parkpicknick1" ||
    state === "parkpicknick2" ||
    state === "parkpicknick3"
  ) {
    image(picknick, 0, 0, 1162, 700);
  }
  if (
    state === "television1" ||
    state === "television2" ||
    state === "television3"
  ) {
    image(wohnzimmer, 0, 0, 1162, 700);
  }
  if (situation === "kitchen") {
    image(kueche, 0, 0, 1162, 700);
  }
  if (situation === "dinner") {
    image(abendessen, 0, 0, 1162, 700);
  }
  if (situation === "auntHouseWithbP") {
    image(tanteDraussenBp, 0, 0, 1162, 700);
  }
  if (situation === "auntHouse") {
    image(tanteDraussen, 0, 0, 1162, 700);
  }
  if (situation === "auntDinner") {
    image(tanteEssen, 0, 0, 1162, 700);
  }
  if (situation === "plate") {
    image(teller, 0, 0, 1162, 700);
  }
}

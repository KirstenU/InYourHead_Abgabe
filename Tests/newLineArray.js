//@Kirsten wir wolltenn erreichen, dass jedes Elemet eines Arrays in einer neuen Zeile angezeigt wird
//das wird für den Notizblock benoetigt
let animals = ["🐹", "🐶", "🐰", "🐱", "🐵", "🦁"];

function draw() {
  for (let i = 0; i < animals.length; i++) {
    text(animals[i], 100, 100 + 20 * i);
  }
}

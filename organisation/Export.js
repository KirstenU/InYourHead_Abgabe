//in diese Datei wurden unsere Arrays exprotiert, da diese Sehr umfangreich sind.
//man findet...
export default class Export {
  constructor(bP) {
    this.bP = bP;
    //die Nachrichten der Sprechblasen
    this.buttonMessage = [
      "...zum Park gehen",
      "....zur Schule gehen",
      "Enten beobachten",
      this.bP + " Entenfutter anbieten",
      "Frau Leni grüßen",
      "Frau Leni nicht grüßen",
      "Sobald du bereit bist, aber bestimmt nicht mehr lange.",
      "Du bist doch gerade erst zu Hause angekommen.",
      "Ich rufe " + this.bP + "zum Kochen dazu.",
      "ich koche alleine",
      this.bP + " nimmt sich selbst Essen",
      this.bP + " Essen geben",
      "beobachten, was auf " + this.bP + "s Teller ist",
      this.bP + "s Teller ignorieren",
      "Das sind schon nicht so viele Kalorien",
      "Ich würde mich freuen, wenn du ein bisschen mehr isst",
      "Freut mich, dass wir alle zusammen essen können.",
      "...zum Bäcker gehen",
      "...zum Blumenladen gehen",
      "Welchen Kuchen wollen wir kaufen?",
      "Du siehst blass aus. Willst du lieber raus gehen?",
      "Schau dir mal die CD an.",
      "CD ignorieren",
      "Ja",
      "Nein",
      "...oder lieber nicht?",
      "...mit oder ohne O-Saft? Oder lieber Kuchen?",
      "...oder lieber ein Glas Wasser mit Zitrone?",
      "Das wollte ich mir gerade nehmen.",
      "Heb es doch noch für deinen Mann auf. Der hat bestimmt noch Hunger nach der Arbeit",
      "nichts tun",
      "Aufs Oberfeld",
      "Ab in dern Herrengarten",
      "Ich freue mich richtig auf den Tag mit dir.",
      "Gut siehst du aus.",
      "Wie war dein Tag bis jetzt?",
      "Was ist los?",
      "nichts sagen",
      "...aber das ist bestimmt in Ordnung, oder?",
      "...ich glaube der Film ist mir für heute zu anstrengend.",
      "Oder hast du schon zu Hause gegessen? Dann gehe ich uns noch schnell ein Wasser holen.",
      "Ich mache schnell die Käsesoße für die Nachos warm, okay?",
      "Soll ich uns ein bisschen Quark mit Rohkost machen?",
    ];
    //die Nachrichten des instant Feedbacks
    this.instantFeedbackMessage = [
      "Denk nicht zu  viel nach. Dieses Mal hatten beide Entscheidungen das gleiche Resultat.",
      "Denk nicht zu viel nach. Dieses Mal hatten beide Entscheidungen das gleiche Resultat.",
      "Manchmal kommt ein unerwarteter Trigger wie aus dem nichts.",
      "Think positive!",
      "Think positive!",
      "Manchen Betroffenen hilft es mit zu kochen. Probiere es beim nächsten Mal aus!",
      "Gut so! Du musst " +
        this.bP +
        "genau das Vertrauen gegenüberbrigen,das ihr beide gerade braucht",
      "Achte auf die Reaktionen deines Gegenübers.",
      "Gut gemacht. Achte auch weiter auf die Reaktionen deines Gegenübers.",
      "Gut gemacht. Alleine mit einem Problem zu sein, ist nie gut.",
      "Alleine mit seinen Problemen zu sein ist nie gut",
      "Gut, dass du " + this.bP + "eine Auswahl gibst. ",
      "Keine wirklich gute Alternative.. Vielleicht wählst du beim nächsten Mal lieber etwas mit weniger Kalorien.",
      "Alternativen machen es" + this.bP + "einfacher, gute Entscheidung!",
      "Nett von dir, die Entscheidung" + this.bP + "abzunehmen. ",
      "Lieb von dir, dass du die Entscheidung zurück an die Tante gibst.",
      "In dieser Situation hätte es" +
        this.bP +
        "bestimmt geholfen, wenn du etwas gesagt hättest, um die Situation zu beenden.",
      "Es war gut nachzufragen und deine Besorgnis zu zeigen. Einfach dazu sein und zuzuhören reicht oft schon aus.",
      "Das nächste Mal kannst du gerne nachfragen! Einfach dazu sein und zuzuhören reicht oft schon aus. ",
      "Egal wie" + this.bP + "das sieht: bei der Frage sagt niemand nein. ",
      "Lieb von dir, dass du die Entscheidung gegen den Film auf dich nimmst.",
      "Gut, dass du erst nachfragst!",
      "Versuche es beim nächsten Mal vielleicht mit einer gesünderen Alternative oder wenigstens einer Auswahlmöglichkeit.",
      "Super! Solche Alternativen sind für euch beide gesünder und " +
        this.bP +
        "muss sich nicht schlecht fühlen!",
    ];
    this.feedbackTextForNotebook = [];
    //Nach dem erscheinen von einem Instant Feedback wird der passende Notebook satz ins feddbacktextforNotebook gepusht
    //für die Situationen bei der Tante gibt es keine Notebook sätze
    //die nachrichten des instant Feedbacks für das Notizbuch
    this.instantFeedbackForNotebook = [
      "Man sollte sich nicht den Kopf zerbrechen. Auch Angehörige leiden psychisch unter der Krankheit.",
      "Magersüchtige Personen wollen oft nicht auf ihre Magersucht reduziert werden.",
      "Eine positive Einstellung kann sich positiv auf den Heilungsprozess der betroffenen Person auswirken.",
      "Durch das Kochen erlernen die Betroffenen wieder eine Beziehung zum Essen aufzubauen und verstehen was als eine normale Mahlzeit gilt.",
      "Anorexie ist eine Suchtkrankheit. Nur die Person alleine kann sich helfen. Du musst ihr Vertrauen schenken, damit sie selber anfängt sich zu vertrauen (und aus eigenen Stücken wächst)",
      "Versuche triggernde Situationen zu vermeiden, solange die betroffene Person nicht dafür bereit ist.",
      "Es kann sehr beruhigend wirken, wenn man weiß, dass man nicht alleine mit einem Problem ist.",
      "Zuhören ist sehr wichitg. Aber manche Betroffenen wünschen sich auch ,dass nahestehende Personen sie bewusst auf alte Muster hinweisen",
    ];
    this.displayMiddleFeedback = [];
    this.finalFeedback = [];
    //das Feedback am Ende einer Szene
    this.createMiddleFeedback = [
      "Wie du merkst, ist es für " +
        this.bP +
        " nicht in jeder Situation, in der Essen vorkommt, schwer damit zu hantieren. Hier musste " +
        this.bP +
        " außerdem nicht für sich selbst entscheiden, sondern konnte einfach den Ente was Gutes tun.",
      "Manchmal kommt ein unerwarteter Trigger wie aus dem nichts. In dieser Situation konntest du nicht erahnen, dass sich hinter einem harmlosen Spaziergang zur Schule, größere Trigger Punkte verbergen. Die meisten betroffenen Personen werden durch die Krankheit so sehr aus ihrem gewohnten Umfeld gezogen, dass auch Ausbildung oder Schule unmöglich zu bewältigen sind.  Dieses Thema kann also auch ein weiterer Rückschlag für diese Menschen sein.",
      "Das Abendessen stellt für die meisten Familien eine Hürde da. Wichtig ist hier, dass gegenseitige Vertrauen. Das " +
        this.bp +
        " sich selber Essen nehmen konnte, hilft " +
        this.bp +
        " dabei den eigenen Umgang mit Portionsgrößen auch außerhalb der Lehrküche zu entwickeln. Es fällt dir sicherlich schwer nicht aktiv einzugreifen, aber du kannst " +
        this.bp +
        " bei der Heilung nur unterstützen und nicht zu etwas zwingen.",
      "Das Abendessen stellt für die meisten Familien eine Hürde da. Wichtig ist hier, dass gegenseitige Vertrauen. Kommentare oder das Aufzwingen  von Essen sollte vermieden werden. Betroffene Personen kriegen in der Klinik Strategien an die Hand gegeben, mit denen sie eine solche Situation meistern können und sich selbst ermutigen.	",
      "Wenn du mit " +
        this.bp +
        " in solche triggerde Situationen kommst, ist es wichtig entspannt zu bleiben und genau hinzuschauen wie es " +
        this.bp +
        "  geht. 	",
      "Es ist von Vorteil Aktivitäten von denen du denkst sie könnten Triggern, einfach nicht vorzuschlagen. So wird " +
        this.bp +
        " nicht immer vor Herausforderungen gestellt und ihr zwei könnt auch mal unbeschwert Zeit verbringen.",
      "Momente wie der im Musikladen können stark auf " +
        this.bp +
        " wirken. Es gibt viele betroffene Personen, die ihre Erfahrung mit Hilfe von (eigener) Musik verarbeiten. Gut, dass du da warst und aufmerksam geblieben bist.",
      "Allerdings können Momente wie der im Musikladen, stark auf " +
        this.bp +
        " wirken. Es gibt viele betroffene Personen, die ihre Erfahrung mit Hilfe von (eigener) Musik verarbeiten. Natürlich können gewisse Inhalte " +
        this.bp +
        "  auch triggern, aber vorrangig zeigst du so, dass du aufmerksam geblieben bist.",
      "In dieser Situation stand " +
        this.bp +
        " schon vor einigen  Herausforderung. Hier fungierst du vor allem als sehr wachsamer Mensch. Je nachdem wie stark sich " +
        this.bp +
        " schon in solchen Situationen fühlt, ist es gut, wenn du unauffällig Entscheidungen für " +
        this.bp +
        "  abnimmst. So kannst du verhindern, dass die aktuelle Lage von " +
        this.bp +
        " in den Vordergrund rückt und ein gewisser Druck auf " +
        this.bp +
        " lastet.",
      "Wenn du das Gefühl hast, dass " +
        this.bp +
        " noch nicht an dem Punkt ist, derartige Situationen zu meistern, kannst du " +
        this.bp +
        " Entscheidungen abnehmen. Allerdings solltest du solche Alltagssituation nicht zu oft verhindern, weil " +
        this.bp +
        " schon in der Lage sein sollte, nach und nach mit Hilfe von erlernten Strategien diese Situationen hinter sich  zu bringen.",
      "Einen Ort wie das Oberfeld auszusuchen ist gut um " +
        this.bp +
        " ein privateres Umfeld zu geben. An solchen Orten fühlen sich betroffene Personen oft sicherer, weil sie unbeobachteter sind und nicht so vielen Reißen wie unterschiedlichen Körperbildern ausgesetzt sind. 	",
      "Ein öffentlicher Park kann für viele betroffene Personen ein anstrengender sein, denn sie fühlen einen gewissen Druck auf sich. Außerdem können hier Körperbilder verglichen werden. Beim nächsten Ausflug kannst du dich vielleicht für einen privateren Ort entscheiden. ",
      "Viele betroffene Personen würden sich freuen, besser mit ihren engsten Mitmenschen zu kommunizieren. Auch wie in der letzten Situation ist es immer gut sehr aufmerksam zu sein, trotzdem musst du nicht immer besonders vorsichtig auf betroffenen Personen zu gehen.",
      "Viele betroffene Personen würden sich freuen, besser mit ihren engsten Mitmenschen zu kommunizieren. Auch wie in der letzten Situation ist es immer gut sehr aufmerksam zu sein, trotzdem musst du nicht immer besonders vorsichtig auf betroffenen Personen zu gehen.",
    ];
    //die Hoveredanken
    this.hoverMessage = [
      "In der Klinik habe ich gelernt, dass man nicht immer das Essen celebrieren muss. Aber wie gerne würde ich mich so sehr über das Essen freuen wie die anderen",
      "Du weist doch, dass das nicht so einfach geht! Der Heilungsprozess wird noch lange brauchen",
      "Der Blumenladen duftet immer so fantastisch. Hier habe ich so viel Schönes erlebt",
      "Ich mag es nicht, wenn es so stark nach Essen riecht. Dann kann ich an nichts anderes denken. Vor allem in der Öffentlichkeit ist es schlimm.",
      "Die Sahnetorte ist zwar noch nichts für mich, aber in der Klinik habe ich gelernt, dass ich manchmal eine Herausforderung annehmen muss.",
      "Enten sind meine Lieblingstiere. Sie beruhigen mich",
      "Warum reduzieren mich Menschen so oft auf mein Gewicht?",
      "Wenn ich andere mit Problemen sehe, muss ich immer an die schlimme Klinikzeit denken...",
      "Ein paar gesunde Snacks wären schon cool, aber von dem kalorienhaltigen Käsedip bekomme ich bestimmt Bauchschmerzen",
      "Mhmm da sind nicht so viele Beobachter. Da fühle ich mich wohler.",
      "Im Schatten der Büsche fühle ich mich wohler und es ist privater.",
      "Schön zu wissen, dass ich nicht alleine mit dem Problem bin.",
    ];
    //die Sprechblasennachrichten
    this.dialogMessage = [
      "Hey, " +
        this.bP +
        " möchtest du mit mir kochen? Ich dachte an Kartoffeln un Fischstäbchen.",
      "Okay, ich komme gleich.",
      "Super",
      "Boar habe ich Hunger und ich liebe Fischstäbchen.",
      "Ist das genug?",
      "Danke, das reicht!",
      "Wie war dein Tag?",
      "Ganz gut.",
      "Wir haben doch in der Terapie darüber gesprochen, dass wir " +
        this.bP +
        " nicht immer überwachen sollen.",
      "Am Sonntag ist doch der Geburtstag von Tante Luise. Wir wollen sie kurz besuchen. Dafür müssen wir noch einkaufen gehen.",
      "Was wollen wir denn kaufen?",
      "Ich dachte an ein Stück Kuchen und ein paar Blumen. Ich wollte dich...",
      "Welche Blumen würden ihr wohl besser gefallen?",
      "Tante Luisa gefallen die blauen Blumen bestimmt besser.",
      "Tante Luisa hat mir vor Kurzem erzählt, dass sie die Sahnetorte hier sehr gerne isst.",
      "Ja, ich glaube, das wäre besser.",
      "Hi " +
        this.bP +
        ". Schön dich wieder zu sehen. Hast du Lust, spazieren zu gehen?",
      "Das klingt nach einer guten Idee. Wohin wollen wir gehen?",
      "Lass uns....",
      "Wollen wir uns auf den Rückweg machen?",
      "Ich würde lieber noch ein bisschen die Enten beobachten",
      "Hallo Frau Leni.",
      "Hallo! Geht ihr spazieren? Das sollte ich auch mal wieder machen. Ist besser für die Figur.",
      "Aber darüber muss " + this.bP + " sich ja keine Gedanken machen.",
      "Wir haben es sehr eilig.",
      "Wie schade. Meldet euch mal wieder.",
      "Was glaubst du, wann ich wieder an die Schule gehen kann?",
      "Super, klingt gut.",
      "Hm....okay.",
      "Das letzte Mal mit dir war echt schön! Wollen wir am Samstag wieder was zusammen machen?",
      "Hi, ja super gerne! Was wollen wir so machen?",
      "Hättest du Lust auf ein Picknick",
      "Ja, schon! An welchen Ort hättest du gedacht?",
      "Wie wäre es mit dem Herrengarten? Da war ich schon lange nicht mehr.",
      "Ja, okay, wie wäre es mir 16 Uhr?",
      "Ja, perfekt! Jeder bringt ein bisschen was mit? Ich freue mich.",
      "Jo, ich mich auch. Bis dann!",
      "Hi. Schön dich zu sehen.",
      "Hi!",
      "Oh, danke. Ja, ganz gut bis jetzt.",
      "Wo wollen wir uns hinsetzen? Eher hier, oder dort?",
      "Lieber dort hin.",
      "Ich habe leckere Brownies und Nüsse eingepackt, aber auch Gemüsesticks mit Humus und Erdbeeren dabei. Also eine große Auswahl.",
      "Worüber denkst du nach? Zählst du die Kalorien?",
      "Ja, ein bisschen. In der Klinik haben wir viel über gesunde und ausgewogene Ernährung gelernt.",
      "Aber das Kalorienzählen zu ignorieren fällt mir noch immer schwer. ",
      "Okay, was hast du mitgebracht?",
      "Ich habe Dinkelcracker mit Humus dabei und Obst.",
      "Mmmm klingt lecker. Wir haben auf jeden Fall genug Humus.",
      "Hast du eigentlich schon diesen neuen Film gesehen? „Der Rausch“ heißt er, glaube ich, der soll toll sein.",
      "Nein, noch nicht, aber ich habe schon viel davon  gehört.",
      "Wollen wir bald mal einen Filmabend zusammen machen?",
      "Ja, warum nicht?",
      "Wie wäre es mit dem Oberfeld. Da war ich schon lange nicht mehr.",
      "Ja, okay, wie wäre es mir 16 Uhr?",
      "Yes, perfekt. Jeder bringt ein bisschen was mit? Ich freue mich.",
      "Jo, ich mich auch. Bis dann!",
      "Hey, schön dich zu sehen.",
      "Hi!",
      "Wo wollen wir uns hinsetzen?",
      "Gerne da vorne beim Busch.",
      "Ich habe leckere Brownies und Nüsse eingepackt, aber auch Gemüsesticks mit Humus und Erdbeeren dabei. ",
      "Also eine große Auswahl.",
      "Worüber denkst du nach? Zählst du die Kalorien?",
      "Ja, ein bisschen. In der Klinik haben wir viel über gesunde und ausgewogene Ernährung gelernt.",
      "Aber das Kalorienzählen zu ignorieren fällt mir noch immer schwer. ",
      "Okay, was hast du mitgebracht?",
      "Ich habe Dinkelcracker mit Humus dabei und Obst.",
      "Mmmm klingt lecker. Wir haben auf jeden Fall genug Humus.",
      "Hast du eigentlich schon diesen neuen Film gesehen? „Der Rausch“  heißt er, glaube ich, der soll toll sein.",
      "Nein, noch nicht, aber ich habe schon viel davon  gehört.",
      "Wollen wir bald mal einen Filmabend zusammen machen?",
      "Ja, warum nicht?",
      "Hi  " + this.bP + ". Ich freue mich schon auf den heutigen Tag.",
      "Ich mich auch. Wo wollen wir denn hingehen?",
      "Lass uns einkaufen gehen. ",
      "Gerne. Das habe ich schon lange nicht mehr gemacht.",
      "Lass uns....",
      "Schau dir mal die süßen Kakteen an. Welcher würde am besten in mein Zimmer passen?",
      "Die dort hinten in den orangenen Töpfen.",
      "Ja, ich glaube, das wäre besser.",
      "Lass uns zum Musikladen gehen. ",
      "Gerne!",
      "Hast du die CD schon gesehen?",
      "Die ist ja cool. Vielleicht nehme ich die mit. ",
      "Hallo. Schön euch zu sehen.",
      "Hi. Alles Gute zum Geburtstag! Wir haben dir eine Kleinigkeit mitgebracht.",
      "Möchtet ihr mit rein kommen?",
      "Ja, gerne. Wir können aber wahrscheinlich nicht lange bleiben.",
      "Leider haben wir noch etwas vor. Nächstes Mal bestimmt.",
      "Schade, aber euch noch viel Spaß dabei.",
      "Ich habe mich sehr gefreut, dass ihr da wart. Wir sehen uns bald wieder.",
      "Wir freuen uns auch, dir noch einen schönen Geburtstag.",
      "Möchtest du ein Glas Sekt....",
      "Das letzte Stück Kuchen ist für dich.",
      "Ich freue mich schon so sehr, mit dir den Filmabend zu machen.",
      "Ich glaube, in dem Film geht es um psyhcische Probleme,",
      "Für einen perfekten Filmabend fehlen noch die Snacks.",
      "Ähm okay...Kannst du gerne machen.",
      "Dann können wir jetzt starten.",
      this.bP + " , das Wetter ist so schön. Hast du Lust, spazieren zu gehen?",
      "Das klingt nach einer guten Idee. Wohin wollen wir gehen?",
      "Lass uns....",
    ];
    //die Buttonkoordianten
    this.buttonY = [
      700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700,
      700, 400, 700, 700, 700, 700, 700, 700, 700, 700, 700, 700, 400, 700, 700,
      400, 700, 700, 700, 700, 400, 700, 700, 700, 700, 700, 700, 400,
    ];
    this.buttonX = [
      740, 967.5, 740, 967.5, 740, 967.5, 740, 967.5, 740, 967.5, 740, 967.5,
      740, 967.5, 740, 967.5, 740, 740, 967.5, 740, 967.5, 740, 967.5, 740,
      967.5, 740, 967.5, 740, 740, 967.5, 740, 740, 967.5, 740, 967.5, 740, 740,
      967.5, 740, 967.5, 740, 967.5, 740,
    ];
    //wann welche Person eine Aussage macht
    this.person = [
      "bP",
      "user",
      "user ",
      "sister",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "user",
      "bP",
      "user",
      "user",
      "bP",
      "bP",
      "bP",
      "user",
      "bP",
      "user",
      "user",
      "bP",
      "user",
      "Leni",
      "Leni",
      "user",
      "Leni",
      "bP",
      "bP",
      "bP",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "bP",
      "bP",
      "user",
      "bP",
      "user",
      "user",
      "bP",
      "bP",
      "user",
      "bP",
      "user",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "user",
      "user",
      "bP",
      "bP",
      "user",
      "bP",
      "user",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "bP",
      "user",
      "user",
      "bP",
      "bP",
      "user",
      "bP",
      "user",
      "bP",
      "aunt",
      "user",
      "aunt",
      "user",
      "user",
      "aunt",
      "aunt",
      "user",
      "user",
      "aunt",
      "user",
      "user",
      "user",
      "bP",
      "user",
      "user",
      "bP",
      "bP",
    ];
  }
  displayFeedback(x, y, width, height) {
    push();
    fill(0);
    textFont("Hero New");
    textSize(20);
    text(this.displayMiddleFeedback[0], x, y, width, height);
    pop();
  }
}

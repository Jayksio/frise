/* frise chrono dans l'ordre décroissant */
const dates = [2022, 2020, 2019, 2018, 2016, 2015, 2014, 2013, 2007, 2000];

function showText(date, element) {
  const text = getCustomText(date);
  const textContainer = document.getElementById("event-text");
  const selectedDate = document.getElementById("selected-date");

  const events = document.querySelectorAll(".event");
  const index = Array.from(events).indexOf(element);

  // supprime la div qui englobe le texte (h3 et p) à chaque nouvelle fois que la fonction est appelée
  while (textContainer.firstChild) {
    textContainer.removeChild(textContainer.firstChild);
  }

  // ajout du nouvel élément HTML à textContainer (lié à la function getCustomText)
  textContainer.appendChild(text);

  /* remove du texte */
  events.forEach((event) => {
    event.classList.remove("active");
    event.style.color = "";
  });

  /* add sur le texte */
  element.classList.add("active");
  element.style.color = "#F9945d";

  /* affichage des dates et de leurs dates précédentes et suivantes (s'il y en a) */
  selectedDate.textContent = dates[index];

  const prevDate = document.getElementById("prev-date");
  const nextDate = document.getElementById("next-date");

  /* si pas de date avant pour le premier index */
  if (index > 0) {
    prevDate.textContent = dates[index - 1];
  } else {
    prevDate.textContent = "";
  }

  /* si pas de date suivante pour le dernier index */
  if (index < dates.length - 1) {
    nextDate.textContent = dates[index + 1];
  } else {
    nextDate.textContent = "";
  }

  const precedenteDate = document.querySelector("#prev-date");
  const suivanteDate = document.querySelector("#next-date");
  if (!isNaN(prevDate)) {
    changeDateFromSquare(prevDate);
  }
  /* effet roulette */
  selectedDate.style.transform = "translateY(120px)";
  selectedDate.style.transition = "50ms";
  precedenteDate.style.transform = "translateY(80px)";
  precedenteDate.style.transition = "50ms";
  suivanteDate.style.transform = "translateY(95px)";
  suivanteDate.style.transition = "50ms";

  /* remise en place des paramètres par défaut */
  setTimeout(function () {
    selectedDate.style.transform = "translateY(-20px)";
    precedenteDate.style.transform = "translateY(22px)";
    suivanteDate.style.transform = "translateY(-77px)";
  }, 50);
}

function getCustomText(date) {
  /* switch case selon l'année choisie via le carré pour obtenir un texte */
  switch (date) {
    case 2000:
      const date2000h3 = document.createElement("h3");
      date2000h3.textContent = "Création de l’association Colombbus ";

      const date2000p = document.createElement("p");
      date2000p.textContent =
        "En 2000, l’association Colombbus voit le jour, marquant le début de son engagement dans le domaine de l’innovation sociale et numérique.";

      const date2000div = document.createElement("div");
      date2000div.appendChild(date2000h3);
      date2000div.appendChild(date2000p);

      return date2000div;

    case 2007:
      const date2007h3 = document.createElement("h3");
      date2007h3.textContent =
        "Premier atelier Tangara d’initiation à la programmation";

      const date2007p = document.createElement("p");
      date2007p.textContent =
        "Colombbus organise le premier atelier Tangara, dédié à l’initiation à la programmation, spécifiquement conçu pour des collégiens en Zone d’Éducation Prioritaire (ZEP) dans le 18e arrondissement de Paris.";

      const date2007div = document.createElement("div");
      date2007div.appendChild(date2007h3);
      date2007div.appendChild(date2007p);

      return date2007div;

    case 2013:
      const date2013h3 = document.createElement("h3");
      date2013h3.textContent = "Inauguration du Passage Numérique";

      const date2013p = document.createElement("p");
      date2013p.textContent =
        "En 2013, Colombbus réalise une étape importante en inaugurant le Passage Numérique dans le 10e arrondissement de Paris, renforçant ainsi sa présence et son impact sur le territoire Parisien.";

      const date2013div = document.createElement("div");
      date2013div.appendChild(date2013h3);
      date2013div.appendChild(date2013p);

      return date2013div;

    case 2014:
      const date2014h3 = document.createElement("h3");
      date2014h3.textContent =
        "Inauguration du premier ACI à Paris - Création de l’agence web sociale et solidaire";

      const date2014p = document.createElement("p");
      date2014p.textContent =
        "Colombbus atteint un jalon significatif en inaugurant le premier Atelier et Chantier d’Insertion (ACI) à Paris. Parallèlement, l’association crée l’agence web sociale et solidaire, afin de produire des sites internet dans le cadre des chantiers d’insertion.";

      const date2014div = document.createElement("div");
      date2014div.appendChild(date2014h3);
      date2014div.appendChild(date2014p);

      return date2014div;

    case 2015:
      const date2015h3 = document.createElement("h3");
      date2015h3.textContent =
        "Participation au lancement de la Grande École du Numérique - Mise en ligne de la plateforme declick.net";

      const date2015p = document.createElement("p");
      date2015p.textContent =
        "Colombbus s’engage dans le lancement de la Grande École du Numérique, une initiative nationale. Simultanément, la plateforme declick.net est mise en ligne, fournissant un espace d’initiation au code, alignant l’association avec les besoins croissants de formation dans le domaine numérique.";

      const date2015div = document.createElement("div");
      date2015div.appendChild(date2015h3);
      date2015div.appendChild(date2015p);

      return date2015div;

    case 2016:
      const date2016h3 = document.createElement("h3");
      date2016h3.textContent =
        "Ouverture d’un nouveau chantier d’insertion à Fontenay-aux-Roses";

      const date2016p = document.createElement("p");
      date2016p.textContent =
        "En 2016, Colombbus étend ses actions en ouvrant un nouveau chantier d’insertion à Fontenay-aux-Roses, consolidant ainsi son réseau d’initiatives sociales et numériques sur le territoire francilien.";

      const date2016div = document.createElement("div");
      date2016div.appendChild(date2016h3);
      date2016div.appendChild(date2016p);

      return date2016div;

    case 2018:
      const date2018h3 = document.createElement("h3");
      date2018h3.textContent =
        "Ouverture d’un nouveau chantier d’insertion à Evry - Démarrage de l’action Parkour Numerik’Up";

      const date2018p = document.createElement("p");
      date2018p.textContent =
        "Colombbus élargit son champ d’action en 2018 en ouvrant un nouveau chantier d’insertion à Evry, intégré au sein de l’ENSIIE. En parallèle, l’association lance l’action Parkour Numerik’Up, ciblant spécifiquement les NEET (ni en études, ni en emploi, ni en formation).";

      const date2018div = document.createElement("div");
      date2018div.appendChild(date2018h3);
      date2018div.appendChild(date2018p);

      return date2018div;

    case 2019:
      const date2019h3 = document.createElement("h3");
      date2019h3.textContent =
        "Création de l’entreprise 10MentionWeb Formation - Ouverture d’un nouveau chantier à Suresnes (92)";

      const date2019p = document.createElement("p");
      date2019p.textContent =
        "En 2019, Colombbus prend une décision stratégique en créant l’entreprise de l’Économie Sociale et Solidaire (ESS) 10MentionWeb Formation, devenant ainsi une filiale de Colombbus. L’association ouvre également un quatrième chantier à Suresnes en Île-de-France.";

      const date2019div = document.createElement("div");
      date2019div.appendChild(date2019h3);
      date2019div.appendChild(date2019p);

      return date2019div;

    case 2020:
      const date2020h3 = document.createElement("h3");
      date2020h3.textContent = "Certification Qualiopi";

      const date2020p = document.createElement("p");
      date2020p.textContent =
        "Colombbus obtient la certification Qualiopi, attestant de la qualité de ses prestations de formation, renforçant ainsi sa position dans le secteur de la formation professionnelle.";

      const date2020div = document.createElement("div");
      date2020div.appendChild(date2020h3);
      date2020div.appendChild(date2020p);

      return date2020div;

    case 2022:
      const date2022h3 = document.createElement("h3");
      date2022h3.textContent =
        "Ouverture d’un cinquième chantier à Massy - RNCP 34137 Responsable d’Espace de Médiation Numérique";

      const date2022p = document.createElement("p");
      date2022p.textContent =
        "L’année 2022 marque une nouvelle étape avec l’ouverture d’un cinquième chantier à Massy, mettant l’accent sur la formation avec la reconnaissance RNCP 34137 pour le métier de Responsable d’Espace de Médiation Numérique. Cela consolide la position de Colombbus en tant qu’acteur majeur dans la médiation numérique et l’insertion sociale par le biais de la formation.";

      const date2022div = document.createElement("div");
      date2022div.appendChild(date2022h3);
      date2022div.appendChild(date2022p);

      return date2022div;

    default:
      return `erreur sur le switch case`;
  }
}

/* dates carré */
function changeDateFromSquare(date) {
  const index = dates.indexOf(date);

  if (index !== -1) {
    let customText = getCustomText(date);
    showText(date, document.querySelector(`#event${index + 1}`));
  }
}

/* date affichée à l'arrivée sur le site */
changeDateFromSquare(2022);

/* event au click pour changer la date dans le carré */
document.getElementById("next-date").addEventListener("click", function () {
  const nextDate = parseInt(this.textContent);
  const selectedDate = document.querySelector("#selected-date");
  const prevDate = document.querySelector("#prev-date");
  const suivanteDate = document.querySelector("#next-date");
  if (!isNaN(nextDate)) {
    changeDateFromSquare(nextDate);
  }

  /* effet roulette */
  selectedDate.style.transform = "translateY(120px)";
  selectedDate.style.transition = "50ms";
  prevDate.style.transform = "translateY(80px)";
  prevDate.style.transition = "50ms";
  suivanteDate.style.transform = "translateY(95px)";
  suivanteDate.style.transition = "50ms";

  /* remise en place des valeurs initiale */
  setTimeout(function () {
    selectedDate.style.transform = "translateY(-20px)";
    prevDate.style.transform = "translateY(22px)";
    suivanteDate.style.transform = "translateY(-77px)";
  }, 50);
});

document.getElementById("prev-date").addEventListener("click", function () {
  const prevDate = parseInt(this.textContent);
  const selectedDate = document.querySelector("#selected-date");
  const precedenteDate = document.querySelector("#prev-date");
  const suivanteDate = document.querySelector("#next-date");
  if (!isNaN(prevDate)) {
    changeDateFromSquare(prevDate);
  }
  /* effet roulette */
  selectedDate.style.transform = "translateY(120px)";
  selectedDate.style.transition = "50ms";
  precedenteDate.style.transform = "translateY(80px)";
  precedenteDate.style.transition = "50ms";
  suivanteDate.style.transform = "translateY(95px)";
  suivanteDate.style.transition = "50ms";

  /* remise en place des paramètres initiale */
  setTimeout(function () {
    selectedDate.style.transform = "translateY(-20px)";
    precedenteDate.style.transform = "translateY(22px)";
    suivanteDate.style.transform = "translateY(-77px)";
  }, 50);
});

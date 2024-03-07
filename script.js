/* frise chrono dans l'ordre croissant */
/* const dates = [
  2000, 2007, 2013, 2014, 2015, 2016, 2018, 2019, 2020, 2022,
]; */

/* frise chrono dans l'ordre décroissant */
const dates = [2022, 2020, 2019, 2018, 2016, 2015, 2014, 2013, 2007, 2000];

function showText(text, element) {
  const textContainer = document.getElementById("event-text");
  const selectedDate = document.getElementById("selected-date");

  const events = document.querySelectorAll(".event");
  const index = Array.from(events).indexOf(element);

  /* remove du texte */
  events.forEach((event) => {
    event.classList.remove("active");
    event.style.color = "";
  });

  /* add sur le texte */
  element.classList.add("active");
  element.style.color = "#F9945d";

  textContainer.textContent = text;

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
      return "Lorem ipsum ";
    case 2007:
      return "Lorem ipsum dolor";
    case 2013:
      return "Lorem ipsum dolor sit";
    case 2014:
      return "Lorem ipsum dolor sit amet lorem";
    case 2015:
      return "Lorem ipsum dolor sit amet lorem ipsum";
    case 2016:
      return "Lorem ipsum dolor sit amet lorem ipsum dolor";
    case 2018:
      return "Lorem ipsum dolor sit amet lorem ipsum dolor sit";
    case 2019:
      return "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet";
    case 2020:
      return "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem";
    case 2022:
      return "Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum";
    default:
      return `erreur sur le switch case`;
  }
}

/* dates carré */
function changeDateFromSquare(date) {
  const index = dates.indexOf(date);

  if (index !== -1) {
    let customText = getCustomText(date);
    showText(customText, document.querySelector(`#event${index + 1}`));
  }
}

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

  /* remise en place des valeurs par défaut */
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

  /* remise en place des paramètres par défaut */
  setTimeout(function () {
    selectedDate.style.transform = "translateY(-20px)";
    precedenteDate.style.transform = "translateY(22px)";
    suivanteDate.style.transform = "translateY(-77px)";
  }, 50);
});
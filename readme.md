# Frise chronologique - Documentation

## Frise chronologique - Desktop

### Création d’une date

Pour ajouter une date au sein de la frise chronologique, il faut premièrement aller dans le script qui est visible dans le Divi Builder, situé en dessous de la frise chronologique qui se nomme “Script Frise chronologique”.

Dans ce script se trouve un tableau const dates = [] où se situent les dates, vous devez ajouter la date de votre choix, par exemple, si vous voulez ajouter 2024 :


Code actuel : 

```javascript
const dates = [2023, 2022, 2020, 2019, 2018, 2016, 2015, 2014, 2013, 2007, 2000];
```

Code avec l’ajout de la date 2024 : 

```javascript
const dates = [2024, 2023, 2022, 2020, 2019, 2018, 2016, 2015, 2014, 2013, 2007, 2000];
```

Dans ce script se trouve la fonction getCustomText() où on vient afficher le texte personnalisé, lié à la date sélectionnée par l’utilisateur. Par exemple nous avons le case 2023: qui indique l’année 2023.

Voici comment se présente le texte de l’année 2023 :

```javascript
 case 2023:
      const date2023h3 = document.createElement("h3");
      date2023h3.textContent =
        "Modification des statuts de l’association : mise en place de l’adhésion pour les bénéficiaires des actions de médiation numérique";

      const date2023p = document.createElement("p");
      date2023p.innerHTML =
        "Changement des noms des ateliers de médiation numérique<br>Renouvellement de la certification Qualiopi";

      const date2023div = document.createElement("div");
      date2023div.appendChild(date2023h3);
      date2023div.appendChild(date2023p);

      return date2023div;
}
```

Vous devrez tout simplement copier ce code et le coller à la suite et juste avant la ligne où est indiqué : 

```javascript
default:
      return `erreur sur le switch case`;
```

Exemple de code pour l’année 2024 : 

```javascript
 case 2024:
      const date2024h3 = document.createElement("h3");
      date2024h3.textContent =
        "Saisissez votre titre entre ces guillemets";

      const date2024p = document.createElement("p");
      date2024p.innerHTML =
        "Saisissez votre paragraphe entre ces guillemets";

      const date2024div = document.createElement("div");
      date2024div.appendChild(date2024h3);
      date2024div.appendChild(date2024p);

      return date2024div;
}
```
Désormais, vous en avez terminé avec le script JavaScript. Il vous faudra maintenant ajouter l’élément au code HTML. Pour cela, rendez-vous dans le Divi Builder et ouvrez le module “Frise Chronologique”

Voici l’exemple d’une date affichée dans le HTML : 

```javascript
<div class="line"></div>
                    <div class="event" id="event1" onclick="showText(2023, this)"><span class="event-date">2023</span>
                    </div>

Par exemple, pour ajouter 2024, copier ce code et ajouter le avant celui-ci en remplaçant la date copiée par la date désirée :

<div class="line"></div>
                    <div class="event" id="event1" onclick="showText(2024, this)"><span class="event-date">2024</span>
                    </div>
```

Vous devrez également modifier tous les id des éléments HTML. La dernière date a pour id=”event1”, l’avant-dernière a pour id=”event2”, etc. Modifiez donc toutes les dates afin que le script fonctionne correctement. Il suffit d’ajouter 1 à tous les id=”eventX”. (id=”event5” deviendrait donc id=”event6”).

Ensuite, se trouve à la fin du code :

```javascript
 <div class="date-square">
                        <p class="date-text" id="next-date">2020</p>
                        <p class="date-text" id="selected-date">2022</p>
                        <p class="date-text" id="prev-date">2023</p>
                    </div>
```

Vous pouvez modifier ce script en y ajoutant les 3 dernières dates. Ce sont les 3 dernières dates de la frise, nous passerions donc par exemple à :

```
 <div class="date-square">
                        <p class="date-text" id="next-date">2022</p>
                        <p class="date-text" id="selected-date">2023</p>
                        <p class="date-text" id="prev-date">2024</p>
                    </div>
```

### Suppression d’une date

Pour supprimer une date, par exemple, 2016, il faut se rendre sur le module code “Frise chronologique” et retirer toutes la balise <div> qui entoure la date, et également la balise <div> avec la classe “line” qui précède. Il faudrait donc supprimer les éléments suivants :

```javascript
<div class="line"></div>
<div class="event" id="event6" onclick="showText(2016, this)">
                       <span class="event-date">2016</span>
                   </div>
```

Il faut également, dans le module code “Script Frise chronologique” supprimer la date située dans la constante dates :

```javascript
const dates = [2023, 2022, 2020, 2019, 2018, 2016, 2015, 2014, 2013, 2007, 2000];
```

Et retirer la date souhaitée.

Dans la fonction getCustomText(), il faut aller à la ligne où il y a marqué “cases 2016” et supprimer tout l’élément jusqu’au return date2016div; qui correspond aux textes retournés à la sélection de la date :

```javascript
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
```

### Modification d’une date

Pour modifier le texte d’une date, il faut modifier la partie code située juste en dessous de la Frise chronologique sur le Divi Builder. Cette partie se nomme “Script Frise chronologique”.

Au sein de ce script se trouve une fonction getCustomText() dans laquelle se trouve une boucle switch. Ce n’est pas important de ne pas comprendre ce passage si vous n’êtes pas développeur.

Voici, par exemple, le code pour l’année 2000 :

```javascript
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
```

Ici est indiqué l’année qui est renseignée dans notre frise.

```javascript
date2000h3.textContent = "Création de l’association Colombbus ";
```

Il s’agit du titre de l’année 2000 qui est entre guillemets. Il suffit de modifier le titre qui est situé entre les guillemets.

```javascript
date2000p.textContent =
        "En 2000, l’association Colombbus voit le jour, marquant le début de son engagement dans le domaine de l’innovation sociale et numérique.";
```

Il s’agit du paragraphe de l’année 2000 qui est entre guillemets. Il suffit de modifier le texte qui est situé entre les guillemets.

### Modifier l’année affichée par défaut à l’utilisateur lorsqu’il arrive sur la page

Il suffit de modifier la fonction changeDateFromSquare(2023); et d’y mettre la date choisie entre les parenthèses.

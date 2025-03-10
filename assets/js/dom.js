//DOM document objet model

//methodes de selection
document.getElementById('container'); //selectionner un id dans le html
document.querySelector('.paragraphe'); // selectionner une classe
document.querySelectorAll('.paragraphe'); // selectionner toutes les classes "paragraphe"
document.querySelectorAll('p'); // selectionner tout les "p" du html

//Modification de contenu

//element.textContent; // modifier ou lire le contenu texte
//element.innerHTML; // modifier ou lire le contenu HTML
//element.value; // modifier ou lire la valeur d'un input

//on remplace "element" par l'element que l'on veut recuperer (p, input.....)



// exercice

//1----changer le texte du paragraphe
let changerParagraphe = document.querySelector('.texte');
changerParagraphe.textContent = "nouveau texte modifié";

//2-----modifier la valeur de l'input



//3----ajouter un nouveau paragraphe avec le HTML



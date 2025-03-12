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
/*let changerParagraphe = document.querySelector('.texte');
changerParagraphe.textContent = "nouveau texte modifié";

//2-----modifier la valeur de l'input
let changerInput = document.getElementById("monInput");
changerInput.value = "nouvelle valeur dans le input!!";


//3----ajouter un nouveau paragraphe avec le HTML
//version securisée
const nouveauParagraphe = document.createElement("p");
nouveauParagraphe.textContent = "paragraphe rajouté dynamiquement";
nouveauParagraphe.className = "nouveau";
editerMoi.appendChild(nouveauParagraphe);
nouveauParagraphe.style.color = "blue";


//manipulation des classes----------------------------------------------------------------------------------------------

//element.classList.add('classe');      ajouter une classe
//element.classList.remove('classe');   supprimer une classe
//element.classList.toggle('classe');   basculer une classe
//element.classList.contains('classe'); verifier si une classe existe
*/
//exercice classes

//1. ajouter un evenement click qui bascule de carre a rond
//2. verifier la presence d'une classe avant de la modifier
/*let box = document.getElementById("box");//je recupere mon element box
box.addEventListener("click", function(){
    box.style.transition = "all 0.3s ease";// on peut rajouter une transition
    if(box.classList.contains("carre")){
        box.classList.toggle("rond");
    }
    else{
        box.classList.toggle("carre");
    }
})
*/
//plus court
/*let box = document.getElementById("box");

box.addEventListener("click", function(){
    box.style.transition = "all 0.4s ease";
    box.classList.toggle("rond");
})*/


//creation et suppression d'elements
//document.createElement("div");creer un nouveau element
//parent.appendChild(element); ajoute un element enfant
//parent.removeChild(element); supprime un element enfant
//elemnt.remove(); on supprime un element



//exercice----------------------------------------------
//1. creer une fonction qui ajoute un nouvel element a la liste
//2. ajouter un bouton de suppression a chaque element
//3. implementer la suppression d'element




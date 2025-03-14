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



//creer variables liste et bouton ajout
/*let liste = document.getElementById("items");
let boutonAjout = document.getElementById("ajout");
let compteur = 1;

//fonction pour ajouter un element

function ajoutElement (){
    //creer les elements
    let li = document.createElement("li");
    let texte = document.createElement("span");
    let boutonSupp = document.createElement("button");

    //configurer le contenu
    li.classList.add("essai")
    texte.textContent = `Element ${compteur}`;
    boutonSupp.textContent = "supprimer";

    //ajouter du style
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.margin = "5px 0";
    boutonSupp.style.marginLeft = "10px";

    //ajouter bouton de suppression
    boutonSupp.onclick = function(){
        //implementer la suppression
        li.remove();
        compteur--;

    };

    //assembler les elemnets et ajouter a la liste
    li.appendChild(texte);
    li.appendChild(boutonSupp);
    liste.appendChild(li);


    compteur++;

}

//attacher evenement au boutton

boutonAjout.addEventListener("click", ajoutElement);*/

//gestions des evenements
//click
//submit
//keyup/keydown
//mouseover/mouseout
//change


//exercice
//1. empecher le comportement par defaut du formulaire
//2. afficher le texte saisi en temps reel
//3.valider le contenu avant soumission


//pseudo-code:
//selectionner les elements necessaires
//formulaire = selectionner element avec un id ("monFormulaire")
//champNom = selectionner element avec un id ("monInput")
//resultat = selectionner element avec un id ("resultat")

let monFormulaire = document.getElementById ("monFormulaire");
let champNom = document.getElementById ("monInput");
let resultat = document.getElementById ("resultat"); 

//1. empecher le comportement par defaut du formulaire
//ajouter un ecouteur submit a mon formulaire
monFormulaire.addEventListener("submit", function(e){
    e.preventDefault();

    //3.valider le contenu avant soumission
    if(champNom.value.trim() === ""){
        resultat.textContent = "Rentrez un nom svp...";
        resultat.style.color = "red";
        return;
    }
    else{
        resultat.textContent = `Nom : ${champNom.value}`;
        resultat.style.color = "green";
        monFormulaire.reset();
    }
});

//2. afficher le texte saisi en temps reel
champNom.addEventListener("input", function(){
    if(this.value.trim() === ""){
        resultat.textContent = "En attente de saisi....";
        resultat.style.color = "gray";
    }
    else{
        resultat.textContent = `Vous tapez : ${this.value}`;
        resultat.style.color = "blue";
    }
});


/*
Exercice 1:
ecrire un algo qui demande a l'utilisateur de saisir un nombre et qui affiche un carré
*/

//Pseudo-code
/* 
ALGO: calculCarre

VARIABLES:
nombre = reel
carre = reel

DEBUT:
ecrire "entrez un nombre"
lire nombre
carré = nombre*nombre
ecrire "le carre de" , nombre , "est" , carre
FIN
*/

function calculCarre(){
    let nombre = parseFloat(prompt("entrez un nombre :"));
    let carre = nombre * nombre;
    console.log(`le carré de ${nombre} est : ${carre}`);
}
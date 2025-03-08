//commentaire sur une ligne.

/*commentaire sur
plusieurs
lignes*/

//Variables
let age = 25; //variable qui peut etre modifier
const PI = 3.14; //variable qui ne peut pas etre modifier------const toujours en majuscule


//types de données principaux--------------------------------------------------------------

//string (chaine de caracteres)
let texte = "bonjour";
let texte2 = 'le monde';
let template = `${texte} ${texte2}`; // template litteral
let template2 = texte + " " + texte2; //concatenation
let phrase = `vous avez ${age} ans.`; // inserer une variable dans une string
console.log(phrase);


//Number
let entier = 42;
let decimal = 3.14;


//boolean
let estVrai = true;
let estFaux = false;

//Array (tableau)
let fruit = ["pomme" , "banane" , "orange"];

//Objets
let person = {
    nom : "anthony",
    age: 38,
    ville: "Saint-Paul"
}

//Null, undefined
let valeurNull = null;
let valeurUndefined;


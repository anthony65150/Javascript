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


//operateurs arithmetique
let a = 5;
let b = 4;

let addition = a + b;
let soustraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulo = a % b; // reste de la division
let puissance = a ** b;


//operateurs de comparaison

let x = 5;
let y = "5";

x == y // true (comparaison avec conversion de type)
x === y // false (comparaison stricte)
x != y // false (different)
x !== y // true (difference stricte)
x > 3 // true (superieur)
// >=  (sup ou egal) 
// <  (inferieur )
// <=  (inferieur ou egal)


//structures de controle
// if...else

if (age >= 18){
    console.log("majeur");
}
else{
    console.log("mineur");
}


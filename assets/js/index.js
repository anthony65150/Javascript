//commentaire sur une ligne.

/*commentaire sur
plusieurs
lignes*/

//Variables
let age = 25; //variable qui peut etre modifier
const PI = 3.14; //variable qui ne peut pas etre modifier------const toujours en majuscule


//types de données principaux----------------------------------------------------------------------------------

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


//operateurs arithmetique-----------------------------------------------------------------------------------------
let a = 5;
let b = 4;

let addition = a + b;
let soustraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulo = a % b; // reste de la division
let puissance = a ** b;


//operateurs de comparaison---------------------------------------------------------------------------------------

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


//structures de controle-----------------------------------------------------------------------------------------
// if...else

if (age >= 18){
    console.log("majeur");
}
else{
    console.log("mineur");
}


//switch
switch (fruit){
    case "pomme" :
        console.log("c'est une pomme");
        break;
    case "banane" : 
        console.log("c'est une banane");
        break;
    case "banane" : 
        console.log("c'est une banane");
        break;
    default:
        console.log("fruit inconnu!!");
}

//boucles-------------------------------------------------------------------------------------------------------

//for (pour...)
for (let i=0; i<5; i++){
    console.log(i)
}

//while (tant que...)
let i =0;
while (i<5){
    console.log(i);
    i++;
}

//for...of (pour les tableaux)
for(let fruit of fruits){
    console.log(fruit);
}

//for...in (pour les objets)
for(let propriete in personne){
    console.log(`${propriete}: ${personne[propriete]}`);
}


//fonctions-------------------------------------------------------------------------------------------------

//fonction classique
function direBonjour(nom){
    return (`Bonjour ${nom}!!`);
}

//fonction flechée
const addi = (a, b) => a + b;

//fonction avec valeur par defaut
function saluer (nom = "visiteur"){
    console.log(`Bonjour ${nom}`);
}

/* 
Methodes courante--------------------------------------------------------------------------------------------------

methode pour les chaines de caracteres
*/
let texte3 = "bonjour"
texte3.length // nombre de caractere
texte3.toUpperCase() //majuscule
texte3.toLocaleLowerCase() // minuscule
texte3.includes("bonjour") // est ce que le texte existe?
//.....

//methode pour les tableaux
let array = [1, 2, 3, 4, 5];
array.push(6); // il rajoute 6 a la fin du tableau
array.pop(); // retire le dernier element
array.unshift(0); // ajoute au debut du tableau
array.includes(3); // regarde si il existe la valeur 
array.join(", "); // converti nombres en chaine de caractere "1, 2, 3, ...."

//console et debug-------------------------------------------------------------------------------------------------

//afficher dans la console
console.log("message normal");
console.error("message d'erreur"); //message en rouge
console.warn("message d'avertissement"); // message en jaune

//deboggage
debugger; //cree un point d'arret pour le deboggage dans les outils de developpements




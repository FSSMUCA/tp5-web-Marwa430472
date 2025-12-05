// Saisie utilisateur
let x = prompt("Entrez une valeur pour x (ex : 150) :");
let y = Number(prompt("Entrez une valeur numérique pour y :"));
let z = prompt("Entrez une valeur pour z (true / false) :");

// Affichage des types initiaux
console.log("Type de x :", typeof x); // string (prompt → string)
console.log("Type de y :", typeof y); // number (on a converti)
console.log("Type de z :", typeof z); // string (car prompt → string)

// Conversion de x en nombre
x = Number(x);

// Afficher nouveau type
console.log("Nouveau type de x après conversion :", typeof x);

// Explication du typage dynamique
console.log("JavaScript utilise le typage dynamique :");
console.log("Le type d'une variable peut changer selon la valeur qu'on lui affecte.");

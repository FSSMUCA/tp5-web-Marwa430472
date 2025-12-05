let sommePairs = 0;
let sommeImpairs = 0;

// Parcourir les nombres de 1 à 50
for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) {
        sommePairs += i;      // nombre pair
    } else {
        sommeImpairs += i;    // nombre impair
    }
}

// Affichage
console.log("Somme des nombres pairs entre 1 et 50 :", sommePairs);
console.log("Somme des nombres impairs entre 1 et 50 :", sommeImpairs);

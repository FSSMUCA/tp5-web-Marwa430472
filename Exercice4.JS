// Demander les deux bornes à l'utilisateur
let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));

// Parcourir tous les nombres de min à max
for (let i = min; i <= max; i++) {

    // Vérifier si multiple de 3 et 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " : Five&Three");

    // Vérifier si multiple de 3
    } else if (i % 3 === 0) {
        console.log(i + " : Three");

    // Vérifier si multiple de 5
    } else if (i % 5 === 0) {
        console.log(i + " : Five");

    } else {
        console.log(i); // Pas multiple
    }
}

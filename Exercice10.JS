// Version 1 : itérative avec boucle
function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

// Version 2 : récursive
function sommeRecursive(n) {
    if (n === 0) {
        return 0; // cas de base
    } else {
        return n + sommeRecursive(n - 1); // appel récursif
    }
}

// Exemple d'utilisation
let n = Number(prompt("Entrez un nombre n :"));

console.log("Somme itérative de 1 à " + n + " =", sommeIterative(n));
console.log("Somme récursive de 1 à " + n + " =", sommeRecursive(n));

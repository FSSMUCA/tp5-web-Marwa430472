// Fonction récursive pour calculer la factorielle
function factorielle(n) {
    if (n === 0) {
        return 1; // Cas de base
    } else {
        return n * factorielle(n - 1); // Appel récursif
    }
}

// Exemple d'utilisation
let n = Number(prompt("Entrez un nombre pour calculer sa factorielle :"));
let resultat = factorielle(n);

console.log(`Factorielle de ${n} = ${resultat}`);

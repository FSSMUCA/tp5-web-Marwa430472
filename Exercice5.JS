// Demander le nombre à l'utilisateur
let n = Number(prompt("Entrez un nombre pour afficher sa table :"));

// Afficher la table de multiplication jusqu'à 10
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}

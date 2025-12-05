// Fonction pour vérifier le mot de passe
function verifierMotDePasse(mdp) {
    // Vérifie si la longueur est >= 8 et contient '@'
    if (mdp.length >= 8 && mdp.includes("@")) {
        return true;
    } else {
        return false;
    }
}

// Demander le mot de passe à l'utilisateur
let motDePasse = prompt("Entrez votre mot de passe :");

// Vérifier et afficher le résultat
if (verifierMotDePasse(motDePasse)) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}

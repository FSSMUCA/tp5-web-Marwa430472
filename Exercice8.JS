// Fonction pour calculer le total après remise
function totalAvecRemise(total, remise) {
    let totalFinal = total - (total * remise / 100);
    return totalFinal;
}

// Demander à l'utilisateur le total et la remise
let totalHT = Number(prompt("Entrez le total HT :"));
let remise = Number(prompt("Entrez le pourcentage de remise :"));

// Calculer le total final
let totalFinal = totalAvecRemise(totalHT, remise);

// Afficher le résultat
console.log("Total final après remise :", totalFinal.toFixed(2));

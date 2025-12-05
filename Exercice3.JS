// Demander un nombre à l'utilisateur
let n = Number(prompt("Entrez un nombre :"));

// Condition imbriquée
if (n < 0) {
    console.log("Nombre négatif");
} else {
    // Première couche : nombre >= 0
    if (n <= 10) {
        console.log("Petit");
    } else {
        // Deuxième couche : n > 10
        if (n <= 50) {
            console.log("Moyen");
        } else {
            // Troisième couche : n > 50
            if (n <= 100) {
                console.log("Grand");
            } else {
                console.log("Très grand");
            }
        }
    }
}

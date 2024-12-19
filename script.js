// Sélection des éléments
var display = document.getElementById('display');
var buttons = Array.from(document.getElementsByClassName('btn'));
var currentInput = "";

// Fonction pour ajouter un chiffre ou une opération à l'affichage
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        var buttonValue = event.target.innerHTML;

        if (buttonValue === "=") {
            // Calculer le résultat
            try {
                currentInput = eval(currentInput).toString(); 
                display.value = currentInput;
            } catch (e) {
                display.value = "Erreur";
                currentInput = "";
            }
        } else if (buttonValue === "C") {
            // Réinitialiser l'affichage
            currentInput = "";
            display.value = "";
        } else {
            // Ajouter le chiffre ou l'opération
            currentInput += buttonValue;
            display.value = currentInput;
        }
    });
});

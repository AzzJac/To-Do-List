// Fonction pour ajouter une nouvelle tâche à la liste
function ajouterTodo() {
    var inputValue = document.getElementById("todoInput").value; // Récupération de la valeur saisie
    if (inputValue === '') { // Vérification si le champ est vide
        alert("Vous devez écrire quelque chose !"); // Alerte si le champ est vide
        return; // Arrêt de la fonction
    }
    var li = document.createElement("li"); // Création d'un nouvel élément li
    li.style.marginBottom = "10px"; // Ajout d'une marge basse

    var tacheText = document.createTextNode(inputValue); // Création d'un nœud texte avec la valeur saisie

    var span = document.createElement("span"); // Création d'un élément span pour le texte de la tâche
    span.appendChild(tacheText); // Ajout du texte de la tâche au span
    span.style.marginRight = "10px"; // Ajout d'une marge à droite au span
    li.appendChild(span); // Ajout du span à l'élément li

    var modifierButton = document.createElement("button"); // Création du bouton Modifier
    var modifierText = document.createTextNode("Modifier"); // Création du texte pour le bouton Modifier
    modifierButton.appendChild(modifierText); // Ajout du texte au bouton Modifier
    modifierButton.style.backgroundColor = "blue"; // Définition de la couleur de fond du bouton Modifier
    modifierButton.onclick = function () { // Ajout d'un gestionnaire d'événement click
        modifierTache(li); // Appel de la fonction pour modifier la tâche
    };
    li.appendChild(modifierButton); // Ajout du bouton Modifier à l'élément li

    var supprimerButton = document.createElement("button"); // Création du bouton Supprimer
    var supprimerText = document.createTextNode("Supprimer"); // Création du texte pour le bouton Supprimer
    supprimerButton.appendChild(supprimerText); // Ajout du texte au bouton Supprimer
    supprimerButton.style.backgroundColor = "red"; // Définition de la couleur de fond du bouton Supprimer
    supprimerButton.onclick = function () { // Ajout d'un gestionnaire d'événement click
        supprimerTache(li); // Appel de la fonction pour supprimer la tâche
    };
    li.appendChild(supprimerButton); // Ajout du bouton Supprimer à l'élément li

    var checkBox = document.createElement("input"); // Création de la checkbox
    checkBox.type = "checkbox"; // Définition du type de la checkbox
    checkBox.onclick = function () { // Ajout d'un gestionnaire d'événement click
        completerTache(li, checkBox); // Appel de la fonction pour compléter la tâche
    };
    li.insertBefore(checkBox, li.firstChild); // Insertion de la checkbox avant le premier enfant de li

    var todoList = document.getElementById("todoList"); // Récupération de la liste des tâches
    todoList.insertBefore(li, todoList.firstChild); // Insertion de la nouvelle tâche en haut de la liste

    document.getElementById("todoInput").value = ""; // Réinitialisation du champ de saisie
}

// Fonction pour modifier une tâche
function modifierTache(li) {
    var nouveauText = prompt("Modifier la tâche :", li.querySelector("span").textContent); // Demande de saisie d'un nouveau texte
    if (nouveauText === null || nouveauText === '') { // Vérification si le champ est vide ou annulé
        return; // Arrêt de la fonction
    }
    li.querySelector("span").textContent = nouveauText; // Modification du texte de la tâche
}

// Fonction pour supprimer une tâche
function supprimerTache(li) {
    li.remove(); // Suppression de l'élément li de la liste
}

// Fonction pour compléter une tâche
function completerTache(li, checkBox) {
    var span = li.querySelector("span"); // Sélection du span contenant le texte de la tâche
    if (checkBox.checked) { // Vérification si la checkbox est cochée
        span.style.textDecoration = "line-through"; // Ajout du style "barré" au texte de la tâche
    } else {
        span.style.textDecoration = "none"; // Suppression du style "barré" du texte de la tâche
    }
}

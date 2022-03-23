/*
 * Language  : JavaScript Natif
 * Framework : None
 * Date      : 01/12/21
 * Author    : Janvier Wawens 
 * version   : ECMAScript 6 (ES6)
 */

// Déclaration de nos variables
let cardsGlobal = document.querySelectorAll(".carte");
let affiche = document.getElementById("toto");
let cardsIsReturn = false;
let firstCards;
let secondCards;
let freeze = false;
let relance = false;
let count = 0;

//
cardsGlobal.forEach(cardsGlobal => {
    cardsGlobal.addEventListener("click", returncartes)
});



// C'est function permettent à ce que nos cartes se retournent
function returncartes() {

    if (freeze) {
        return;
    }
    this.childNodes[1].classList.add("animation-cards");
    if (!cardsIsReturn) {
        cardsIsReturn = true;
        firstCards = this;
        return
    }

    cardsIsReturn = false;
    secondCards = this;
    identique();
}


// Dans cette function nous testons si ils sont identiques
function identique() {
    if (firstCards.getAttribute("data-attr") === secondCards.getAttribute("data-attr")) {
        count++
        affiche.innerHTML = "Vous avez une paire de " + count + "de cartes en " + second + "";
        firstCards.removeEventListener("click", returncartes);
        secondCards.removeEventListener("click", returncartes);
        alert('Bravo !')
        let date = new Date(); // j'initialise l'objet date 
        let second = date.getSeconds(); // je vais recuperer le temps en secondes de l'objet date grace à getSeconds.

        return second;
    } else {
        freeze = true;
        setTimeout(() => {
            firstCards.childNodes[1].classList.remove("animation-cards");
            secondCards.childNodes[1].classList.remove("animation-cards");
            freeze = false;
        }, 1700)

        setTimeout(() => {
            cardsGlobal.forEach(order => {
                let aleatoire = Math.floor(Math.random() * 3);
                order.style.order = aleatoire;
            })
        }, 1900)
    }
}


//Dans cette fonction  nous allons venir traiter tout ce qui est aléatoire
// Body
let body = document.querySelector("body");

// Header
let header = document.querySelector("header");

// Sections
let sections = document.querySelectorAll("section");

// Footer
let footer = document.querySelector("footer");

// Titre
let titre = document.querySelector("h1");

// Sous-titres
let sous_titres = document.querySelectorAll("h2");

// Paragraphes
let paragraphes = document.querySelectorAll("p");

// Astre
let astre = document.getElementById("astre");

// Switch pour savoir s'il fait nuit
let nuit = false;

// Div sombre
let sombre = document.getElementById("div_sombre");

// Fonction pour changer l'astre
function Astre()
{
    // S'il ne fait pas nuit, l'astre levé est le soleil
    if(!nuit)
    {
        // On lève l'astre correspondant
        astre.setAttribute("src", "img/thème/soleil.png");

        // On dit quel astre est levé
        console.log("Le soleil est levé.");
    }

    // S'il fait nuit, l'astre levé est la lune
    else
    {
       // On lève l'astre correspondant
       astre.setAttribute("src", "img/thème/lune.png");

       // On dit quel astre est levé
       console.log("La lune est levée."); 
    }
}

// Placement initial de l'astre
Astre();

// Fonction pour inverser le thème
function InversionThème()
{
    // La nuit devient le jour et vice-versa
    nuit = !nuit;

    // L'astre correspondant se lève
    Astre();

    // Le body est inversé
    body.classList.toggle("mode_nuit_body");

    // Le header est inversé
    header.classList.toggle("mode_nuit_h_f_s");

    // Les sections sont inversées
    for(let i = 0; i < sections.length; i++)
    {
        sections[i].classList.toggle("mode_nuit_h_f_s");
    }

    // Le footer est inversé
    footer.classList.toggle("mode_nuit_h_f_s");
}

// Fonction pour placer une image au centre de la page
function Centrage(image)
{
    // Ajout ou suppresion de la classe centre
    image.classList.toggle("centre");

    // La div sombre obtient ou non sa classe
    sombre.classList.toggle("sombre");
}
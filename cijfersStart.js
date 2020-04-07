function Opdracht(vak, beschrijving) {
    let opdrObj = this;

    opdrObj.vak = vak;
    opdrObj.beschrijving = beschrijving;
}

// OPDRACHT 1.
// Maak de Cijfer functie af.

// opdracht is een object die met behulp van de bovenstaande
// functie is aangemaakt.

// Cijfer een nummer van 0 tot 10

function Cijfer(opdracht, cijfer) {
    let cijferObj = this;

    cijferObj.opdracht = opdracht;
    cijferObj.cijfer = cijfer;
}

// OPDRACHT 2.
// Maak verschillende variabelen voor je opdrachten.
    // Minimaal 3 opdrachten voor 3 verschillende vakken.
    // Totaal dus 9 opdrachten
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new
let opdracht1 = new Opdracht("CMS", "Wordpress");
let opdracht2 = new Opdracht("FRO", "Fotogalerij met objecten");
let opdracht3 = new Opdracht("BAP", "Database connectie met function")
let opdracht4 = new Opdracht("CMS", "WP");
let opdracht5 = new Opdracht("FRO", "Fotogalerij");
let opdracht6 = new Opdracht("BAP", "Eindopdracht");
let opdracht7 = new Opdracht("CMS", "WP-Config");
let opdracht8 = new Opdracht("FRO", "FamDuck");
let opdracht9 = new Opdracht("BAP", "Eindopdracht 1-8");

// Maak voor al deze opdrachten een cijfer variabele aan
// Kijk in week6 of studie.js hoe je een variabele aanmaakt met het keyword new
let cijfer1 = new Cijfer(opdracht, 7);
let cijfer2 = new Cijfer(opdracht, 5.5);
let cijfer3 = new Cijfer(opdracht, 6);
let cijfer4 = new Cijfer(opdracht, 10);
let cijfer5 = new Cijfer(opdracht, 7.5);
let cijfer6 = new Cijfer(opdracht, 9);
let cijfer7 = new Cijfer(opdracht, 5.3);
let cijfer8 = new Cijfer(opdracht, 8.2);
let cijfer9 = new Cijfer(opdracht, 6);
// OPDRACHT 3.
// Vul de arrays met de opdrachten en cijfers die je hebt aangemaakt.
// Kijk in week6 voor een voorbeeld hoe je objecten in een array stopt!
let opdrachten = [];
 opdrachten.push(opdracht1);
 opdrachten.push(opdracht2);
 opdrachten.push(opdracht3);
 opdrachten.push(opdracht4);
 opdrachten.push(opdracht5);
 opdrachten.push(opdracht6);
 opdrachten.push(opdracht7);
 opdrachten.push(opdracht8);
 opdrachten.push(opdracht9);
let cijfers = [];
cijfers.push(cijfer1);
cijfers.push(cijfer2);
cijfers.push(cijfer3);
cijfers.push(cijfer4);
cijfers.push(cijfer5);
cijfers.push(cijfer6);
cijfers.push(cijfer7);
cijfers.push(cijfer8);
cijfers.push(cijfer9);

function Periode (opdrachten, cijfers) {
    let periodeObj = this;

    periodeObj.opdrachten = opdrachten;
    periodeObj.cijfers = cijfers;
}

// OPDRACHT 4.
// Maak een periode variabele op basis van de bovenstaande functie
let periode3 = new Periode(opdrachten, cijfers);
console.log(periode3);

// OPDRACHT 5.
// Schrijf de periode variabele naar een JSON variabele
// Kijk in week7 hoe je een JSON variabele aanmaakt
let jsToJSON = JSON.stringify(periode3);

// OPDRACHT 6.
// Schrijf de json variabele naar de localStorage
// Kijk in week week 6 hoe je een variabele naar de localStorage wegschrijft
localStorage.setItem('periode3', jsToJSON);


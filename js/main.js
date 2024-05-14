'use strict';

// MILESTONE 0

// Creo un array di oggetti
const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Deeloper',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
];

// MILESTONE 1

// Stampo su console l'array
console.table(team);

// stampo su console ogni singolo oggetto dentro l'array con un ciclo
for (let i = 0; i < team.length; i++) {
    console.log(team[i]);
    // stampo su console ogni singola chiave dei vari oggetti contenuti dall' array con lo stesso ciclo
    console.log(team[i].nome);
    console.log(team[i].ruolo);
    console.log(team[i].foto);
};


// MILESTONE 2

// Definisco la variabile della lista nel file js
const lista = document.querySelector('ul');

// Creo un ciclo per la stampa in pagina
for (let i = 0; i < team.length; i++) {

    // definisco variabile oggetto
    const currentObj = team[i];


    // definisco variabile li creando l'elemento html
    const li = document.createElement('li');


    // definisco variabile dell'immagine creando l'elemento html( un paragrafo perchè è momentaneamente una stringa)
    // BONUS 1
    // Sostituisco l'elemento creato 'p' della stringa della foto con l'elemento 'img'
    const fotoOut = document.createElement('img');
    // Aggiungo l'attributo .src per la ricerca del file giusto usando l'interpolazione per sfruttare la stringa = al nome del file
    fotoOut.src = (`../img/${currentObj.foto}`);
    
    
    // definisco variabile del nome creando l'elemento html h4
    const nomeOut = document.createElement('h4');
    // definisco variabile del nome creando l'elemento html p
    const ruoloOut = document.createElement('p');


    // appendo la stringa dell'immagine alla suo elemento html
    fotoOut.append(currentObj.foto);
    // appendo ad h4 la chiave nome dell'oggetto
    nomeOut.append(currentObj.nome);
    // appendo a p la chiave ruolo dell'oggetto
    ruoloOut.append(currentObj.ruolo);

    // appendo ad li le variabili dei tre elementi html
    li.append(fotoOut, nomeOut, ruoloOut);
    // appendo alla lista li
    lista.append(li);
};
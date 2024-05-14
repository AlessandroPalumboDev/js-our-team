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
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    },

    // DEBUG AGGIUNTO MEMBRO AL TEAM
    {
        nome: 'Alessandro Palumbo',
        ruolo: 'Full-Stack Web Developer',
        foto: 'alessandro-palumbo-full-stack-web-developer.jpg'
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
const lista = document.createElement('ul');

// BONUS 2
// Definisco la variabile di 'container'
const container = document.querySelector('.container');

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
    fotoOut.src = (`./img/${currentObj.foto}`);
    
    
    // definisco variabile del nome creando l'elemento html h3
    const nomeOut = document.createElement('h3');
    // definisco variabile del nome creando l'elemento html p
    const ruoloOut = document.createElement('p');

// BONUS 2
    // Definisco variabile card creando l' elemento html 'div'
    const card = document.createElement('div');
    // Aggiungo una classe alla variabile 'card' che mi serirà per lo stile
    card.classList.add('card');

    // appendo la stringa dell'immagine alla suo elemento html
    fotoOut.append(currentObj.foto);
    // appendo ad h4 la chiave nome dell'oggetto
    nomeOut.append(currentObj.nome);
    // appendo a p la chiave ruolo dell'oggetto
    ruoloOut.append(currentObj.ruolo);

    // le tre variabili delle chiavi vengono appese alla card
    card.append(fotoOut, nomeOut, ruoloOut);

    // la card viene appesa all' elemento 'li'
    li.append(card);
    // appendo alla lista li
    lista.append(li);
    // appendo lista a container
    container.append(lista);
};
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
        foto: 'angela-lope-social-media-manager.jpg'
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
let dateToday = new Date();

const devise = [['panda','renard','feu','vent','métro','vin'],['aggressif','blanc','rugueux','tendre','bruyant','moche'],['dormir','gratter','vomir','travailler','te recoucher','vagabonder']];

let target0 = Math.floor(Math.random() * 6);
let target1 = Math.floor(Math.random() * 6);
let target2 = Math.floor(Math.random() * 6);

const names = devise[0][target0];
const adjectives = devise[1][target1];
const verbs = devise[2][target2];


console.log('Hi there !!')
console.log('_________')
console.log('Bienvenue sur notre générateur de conseils avisés du jour !')
console.log('____________')
console.log('Aujourd\'hui nous sommes le '+ dateToday.toUTCString())
console.log('____________')
console.log('____________')
console.log('Voici la devise du jour : ')
console.log(`Si le ${names} est ${adjectives}, alors tu ferais mieux de ${verbs} !`);
console.log('____________')

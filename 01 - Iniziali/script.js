/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstLetter(myarray){
    const newArray = [];
    for(let i = 0; i < myarray.length; i++){
        myarray[i].charAt(0);
        newArray.push(myarray[i].charAt(0));
    }
    return newArray;
}


// Invoca la funzione qui e stampa il risultato in console
const iniziali = firstLetter(names);
console.log(iniziali)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraNomi(nomi, iniziale){
    const newArray = [];
    for(let i = 0; i < nomi.length; i++){
        const primaLettera = nomi[i].charAt(0);
        if(primaLettera === iniziale){
            newArray.push(nomi[i]);
        }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
const arrayFiltrato = filtraNomi(names, "A");
console.log(arrayFiltrato);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
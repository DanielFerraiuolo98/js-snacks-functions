/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(parola){
    const vocali = "aeiou";
    let inizializzatore = 0;

    for(let i = 0; i < parola.length; i++){
        if(vocali.includes(parola[i])){
            inizializzatore++
        }
    }
    return inizializzatore;
}

// Invoca la funzione qui e stampa il risultato in console
const stringa = contaVocali(word);
console.log(stringa);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
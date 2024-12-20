// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email

// creare lista di email di invitati
// chiedere all'utente email
// contollare se è presente nella lista
// messaggio  sull'esito (for)

let listaEmail = ["Alberto@gmail.com", "Sara@gmail.com", "Marco@gmail.com", "Maria@gmail.com"];
let email = prompt("inserire email");
let presente = false;

for (let i = 0; i < listaEmail.length; i++){
    if (email === listaEmail[i]){
        presente = true;
        break;
    }
}
if(presente){
    console.log("Puoi entrare");
}else{
    console.log("Non puoi entrare");
    
}






// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


let numeroCasuale1 = Math.floor(Math.random() * 6) + 1;
console.log(numeroCasuale1);

let numeroCasuale2 = Math.floor(Math.random() * 6) + 1;
console.log(numeroCasuale2);


if (numeroCasuale1 > numeroCasuale2){
    console.log("hai vinto");
    
}else if(numeroCasuale1 == numeroCasuale2){
    console.log("avete pareggiato");
    
}else{
    console.log("ha vinto il pc");
    
}

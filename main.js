// Il software deve generare casualmente le statistiche di gioco di 100 giocatori di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti informazioni, facendo attenzione che il numero generato abbia senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per da 3 punti
// Una volta generato il “database”, il programma deve chiedere all’utente di inserire un Codice Giocatore e il programma restituisce le statistiche.

// creo un array vuoto
var giocatori = [];
//ciclo for per popolare l'array dei 100giocatori
for(var i = 1; i <= 100; i++) {
  var giocatore = {
    'giocatoreUnivoco': univoco(),
    'numeroPunti': getRandomNumber(1, 50),
    'numeroRimbalzi': getRandomNumber(1, 50),
    'falli': getRandomNumber(1, 10),
    'percentuale2punti': getRandomNumber(15, 90) + '%',
    'percentuale3punti': getRandomNumber(15, 90) + '%'
  };
  // console.log('giocatore ' + i + ' ' +giocatore);
  giocatori.push(giocatore);
}

console.log(giocatori);
// document.writeln('Player '+ giocatori[key]);
function getRandomNumber(min, max) {
  var newNumeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
  return newNumeroRandom;
}
// creo una funzione che mi restituisca tre lettere maiuscole e tre numeri randomici
function univoco() {
  var gUnivoco = '';
  var lettere_list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numeri_list = '0123456789';
  for(var i=0; i < 3; i++ ) {
  gUnivoco += lettere_list.charAt(Math.floor(Math.random() * lettere_list.length));
  }
  for(var i=0; i < 3; i++ ) {
  gUnivoco += numeri_list.charAt(Math.floor(Math.random() * numeri_list.length));
  }
  return gUnivoco;
}

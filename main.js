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
  giocatore = {
    giocatoreUnivoco: 0,
    numeroPunti: 0,
    numeroRimbalzi: 0,
    falli: 0,
    percentuale2punti: 0,
    percentuale3punti: 0
  },
  // console.log('giocatore ' + i + ' ' +giocatore);
  giocatori.push('giocatore ' + i + ' ' +giocatore);
}
console.log(giocatori);

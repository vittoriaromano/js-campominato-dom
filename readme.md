Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


1. genera un array con 16 numeri casuali
  - avranno una classe speciale che cambia il colore
  - e non permette piu al'utente di clicare (eventlistner remove)
2. e un array con i numeri selezionati dall'utente
3. confrontiamo le due liste
  - i numeri sono uguali si mostra la classe speciale del array casuale
  - se l'utente clicca piu' numeri di quelli presenti nella lista vince





  function myCreateElement(htmlElement,className1,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className1);
    element.innerText = htmlValue;


    //al click cambiamo una classe colore e console.log la proprieta html
    element.addEventListener('click', function(){
        console.log(htmlValue);
        element.classList.add('colore');

    })
    return element;
}

function myAppendElement(containerElement, htmlElement){
    containerElement.append(htmlElement);
}

function play(){
    const containerBoard = document.querySelector('.board');
    let cellNumber = 100;

     for(let i = 1; i <= cellNumber; i++){
        const createdElement = myCreateElement('div', 'celle', i);
        myAppendElement(containerBoard, createdElement);
    }
    console.log('hai cliccato')
    
}


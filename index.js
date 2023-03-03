'use strict'

//FUNZIONI


function resetGame(){
    console.log('resetGame')
    const boardContainer = document.querySelector('.board');
    boardContainer.innerHTML='';
}

function createBoard(cellNumber){

    let fragmentBoard = document.createDocumentFragment();

    for(let i = 1; i <= cellNumber; i++){
        //console.log(i);

        //crea cella
        const element = document.createElement('div');
        element.classList.add('cell');
        element.classList.add(`cell-${Math.sqrt(cellNumber)}`)

        element.addEventListener('click', function(){
            console.log(i);
            element.classList.add('colore');
        })

        element.innerText = i;
        fragmentBoard.append(element);
    }
    return fragmentBoard;
    
}
// let difficolta = document.querySelector('.choose').value;
// console.log(difficolta);

//numero di celle e posizione nel dom
function campoMinato(){

    console.log('inizia il gioco');
    
    const boardContainer = document.querySelector('.board');
    resetGame();


    let cellNumber= 100; // sara definito da una selezione
     let level = 1 //difficolta;
    console.log(level)

    // if (difficolta === 'medium'){
    //     level = 2;
    // }else if (difficolta === 'hard'){
    //     level = 3;
    // }else{
    //     level = 1;
    // }


   
    
    switch(level){
        
        case 2:
            cellNumber = 81;
            break;
        case 3:
            cellNumber = 49;
            break;
        case 1:
        default :
            cellNumber = 100;
    }

    console.log(cellNumber)
    console.log(Math.sqrt(cellNumber));



    
   const fragmentBoard = createBoard(cellNumber);
   console.log(fragmentBoard);
    //append fragment a boardContainer
    boardContainer.append(fragmentBoard);
} 



//  MAIN

//bottone
const btn = document.querySelector('.btn');
const restButton = document.getElementById('reset');

btn.addEventListener('click', campoMinato ); //non aggiungere mai le parentesi
restButton.addEventListener('click', resetGame);

  
  

//logicaaaaaaa


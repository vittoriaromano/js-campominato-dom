'use strict'

//FUNZIONI


function myCreateElement(htmlElement,className1,htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className1);
    element.innerText = htmlValue;


    //al click cambiamo una classe colore e console.log la proprieta html
    element.addEventListener('click', function(){
        console.log(htmlValue);
        element.classList.add('colore');
        //Arrey numeri buoni
        let myNumberG = []
        myNumberG.push(htmlValue)
        console.log(myNumberG);
        //arrey numeri bombe
        const myNumber = myNumberB.filter((data) => myNumberG.includes(data));
        console.log('la somma' +myNumber)
        

        const punteggio = document.getElementById('punto')
        if(myNumber > 0){
            element.classList.add('colore3');
            console.log('hai perso')
            punteggio.innerText = 'Mi spiace hai perso';
            //myCreateElement.removeEventListner ('click',element);
        } else{
            // const punti = document.getElementById('pun').innerHTML;
            // for(i=0; i <= 84; i++){
            // }
            console.log('continua')
             punteggio.innerText += myNumberG.length;
}
        
        
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
}


//ARRAY DI NUMERI RANDOM
// function  myNumberB (){
//     const rands = []
//     while(rands.length < 16 ){
//         const r = Math.floor(Math.random()* 100 + 1);
//         if (rands.indexOf(r) === -1){
//             rands.push(r);
//         }
//     }
//     return rands
// }
// myNumberB()

// function getRndomNumber (){
//     let randomnumber =  Math.floor(Math.random() * 1) + 1
//     console.log('randomnumber ' + randomnumber)
// }



let myNumberB =[1,3,6,7,8,4,9,10,25,30,58,55,99,86,28,16] //TO DO CREA ARRAY RANDOMICO
        console.log(myNumberB)

// let myNumberG = []


let myNumber =[]
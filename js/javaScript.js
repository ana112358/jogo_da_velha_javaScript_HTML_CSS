let x = document.querySelector(".x")
let o = document.querySelector(".o")
let caixas = document.querySelectorAll(".box")
let mensagem = document.querySelector("#mensagem p") 
let segundoJogador;

let player1 = 0;
let player2 = 0;

for(let i=0 ; i<caixas.length;i++){
    
    caixas[i].addEventListener("click", function(){
        let el = checarEl(player1,player2) ;

       

        if(this.childNodes.length == 0){
            let clonarEl = el.cloneNode(true);

              this.appendChild(clonarEl);
            if(player1 == player2){
                player1++;
            }else{
                player2++;
            }   
        }
        //checar quem venceu
        checarVencedor();
        
    });


};

function checarEl(player1,player2){
    if (player1 == player2) {
        
        el = x;
    }else{
        el = o;
    }
    return el;
}

function checarVencedor(){
let caixa01 = document.getElementById("bloco01");
let caixa02 = document.getElementById("bloco02");
let caixa03 = document.getElementById("bloco03");
let caixa04 = document.getElementById("bloco04");
let caixa05 = document.getElementById("bloco05");
let caixa06 = document.getElementById("bloco06");
let caixa07 = document.getElementById("bloco07");
let caixa08 = document.getElementById("bloco08");
let caixa09 = document.getElementById("bloco09");

//Horizontais Vitórias

if(caixa01.childNodes.length >0 && caixa02.childNodes.length >0 && caixa03.childNodes.length >0){
    let b1 = caixa01.childNodes[0].className;
    let b2 = caixa02.childNodes[0].className;
    let b3 = caixa03.childNodes[0].className;
     
    console.log(b1);
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        console.log("O x venceeuuu");
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        console.log("O o venceeuuu");
    }
}

if(caixa04.childNodes.length >0 && caixa05.childNodes.length >0 && caixa06.childNodes.length >0){
    let b1 = caixa04.childNodes[0].className;
    let b2 = caixa05.childNodes[0].className;
    let b3 = caixa06.childNodes[0].className;
     
    console.log(b1);
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        console.log("O x venceeuuu");
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        console.log("O o venceeuuu");
    }
}

if(caixa07.childNodes.length >0 && caixa08.childNodes.length >0 && caixa09.childNodes.length >0){
    let b1 = caixa07.childNodes[0].className;
    let b2 = caixa08.childNodes[0].className;
    let b3 = caixa09.childNodes[0].className;
     
    console.log(b1);
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        console.log("O x venceeuuu");
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        console.log("O o venceeuuu");
    }
}

//Vencedor vertical
if(caixa01.childNodes.length >0 && caixa04.childNodes.length >0 && caixa07.childNodes.length >0){
    let b1 = caixa01.childNodes[0].className;
    let b2 = caixa04.childNodes[0].className;
    let b3 = caixa07.childNodes[0].className;
     
    console.log(b1);
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        console.log("O x venceeuuu");
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        console.log("O o venceeuuu");
    }
}

if(caixa02.childNodes.length >0 && caixa05.childNodes.length >0 && caixa08.childNodes.length >0){
    let b1 = caixa02.childNodes[0].className;
    let b2 = caixa05.childNodes[0].className;
    let b3 = caixa08.childNodes[0].className;
     
    console.log(b1);
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        console.log("O x venceeuuu");
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        console.log("O o venceeuuu");
    }
}

if(caixa03.childNodes.length >0 && caixa06.childNodes.length >0 && caixa09.childNodes.length >0){
    let b1 = caixa03.childNodes[0].className;
    let b2 = caixa06.childNodes[0].className;
    let b3 = caixa09.childNodes[0].className;
     
    console.log(b1);
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        console.log("O x venceeuuu");
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        console.log("O o venceeuuu");
    }
}

//Diagonal

}




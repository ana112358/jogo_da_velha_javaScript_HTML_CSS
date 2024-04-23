let x = document.querySelector(".x")
let o = document.querySelector(".o")
let caixas = document.querySelectorAll(".box")
let mensagem = document.querySelector("#mensagem p") 
let mensagemConteiner = document.querySelector('#mensagem')
let segundoJogador;
let botoes = document.querySelectorAll(".botoes-conteiner button");

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

                if (segundoJogador == 'ia-player') {
                    jogarContraPC();
                    player2++;
                }

            }else{
                player2++;
            }   
        }
        //checar quem venceu
        checarVencedor();
        
    });


};

for (let j = 0; j< botoes.length; j++) {
  botoes[j].addEventListener("click", function(){
    segundoJogador = this.getAttribute("id");
        for (let k = 0; k <botoes.length; k++) {
            botoes[k].style.display = 'none';  
        }

        setTimeout(function(){
            let conteiner = document.querySelector("#conteiner");
            conteiner.classList.remove("hide");
        },500);
    
  });
    }

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
     
   
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        declararVencedor('x');
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        declararVencedor('o');
    }
}

if(caixa04.childNodes.length >0 && caixa05.childNodes.length >0 && caixa06.childNodes.length >0){
    let b1 = caixa04.childNodes[0].className;
    let b2 = caixa05.childNodes[0].className;
    let b3 = caixa06.childNodes[0].className;
     
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        declararVencedor('x');
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        declararVencedor('o');
    }
}

if(caixa07.childNodes.length >0 && caixa08.childNodes.length >0 && caixa09.childNodes.length >0){
    let b1 = caixa07.childNodes[0].className;
    let b2 = caixa08.childNodes[0].className;
    let b3 = caixa09.childNodes[0].className;
     
    
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        declararVencedor('x');
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        declararVencedor('o');
    }
}

//Vencedor vertical
if(caixa01.childNodes.length >0 && caixa04.childNodes.length >0 && caixa07.childNodes.length >0){
    let b1 = caixa01.childNodes[0].className;
    let b2 = caixa04.childNodes[0].className;
    let b3 = caixa07.childNodes[0].className;
     
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        declararVencedor('x');
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        declararVencedor('o');
    }
}

if(caixa02.childNodes.length >0 && caixa05.childNodes.length >0 && caixa08.childNodes.length >0){
    let b1 = caixa02.childNodes[0].className;
    let b2 = caixa05.childNodes[0].className;
    let b3 = caixa08.childNodes[0].className;
     
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        declararVencedor('x');
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        declararVencedor('o');
    }
}

if(caixa03.childNodes.length >0 && caixa06.childNodes.length >0 && caixa09.childNodes.length >0){
    let b1 = caixa03.childNodes[0].className;
    let b2 = caixa06.childNodes[0].className;
    let b3 = caixa09.childNodes[0].className;
     
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        declararVencedor('x');
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        declararVencedor('o');
    }
}

//Diagonal
if(caixa01.childNodes.length >0 && caixa05.childNodes.length >0 && caixa09.childNodes.length >0){
    let b1 = caixa01.childNodes[0].className;
    let b2 = caixa05.childNodes[0].className;
    let b3 = caixa09.childNodes[0].className;
     
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        declararVencedor('x');
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        declararVencedor('o');
    }
}
if(caixa03.childNodes.length >0 && caixa05.childNodes.length >0 && caixa07.childNodes.length >0){
    let b1 = caixa03.childNodes[0].className;
    let b2 = caixa05.childNodes[0].className;
    let b3 = caixa07.childNodes[0].className;
     
    if (b1 == 'x' && b2=='x' && b3=='x') {
        //O x venceu
        declararVencedor('x');
    }else if (b1=='o'  && b2=='o' && b3=='o') {
        declararVencedor('o');
    }
}

let count = 0;

for (let i = 0; i < caixas.length; i++) {
    if (caixas[i].childNodes[0]!= undefined) {
        ++count;
    }
    
}
if (count == 9) {
    declararVencedor("velha");
}
}

function declararVencedor(vencedor){

    let placarx = document.querySelector("#score-1");
    let placary = document.querySelector("#score-2");
    let mensagemVitoria = '';

    if (vencedor == 'x'){
        mensagemVitoria = 'Parabéns o X venceu!!!';
        placarx.textContent = parseInt(placarx.textContent)+1;
    }else if(vencedor == 'o'){
        mensagemVitoria = 'Parabéns O venceu!!!';
        placary.textContent = parseInt(placary.textContent)+1;
    }else if(vencedor == "velha"){
        mensagemVitoria = 'iiihh , deu velha!';

    }

    mensagem.innerHTML = mensagemVitoria;
    mensagemConteiner.classList.remove("hide");

    setTimeout(function(){
        mensagemConteiner.classList.add("hide");
    },3000)
    player1 = 0;
    player2=0;

    let caixasRemover = document.querySelectorAll(".box div");

    for (let i = 0; i < caixasRemover.length; i++) {
        caixasRemover[i].parentNode.removeChild(caixasRemover[i]);
        
    }

}

function jogarContraPC(){
    let clonaro = o.cloneNode(true);
    contador = 0;
    filled = 0;

    for (let l = 0; l < caixas.length; l++) {
        let numeroAleatorio = Math.floor(Math.random()*5);

        if (caixas[l].childNodes[0] == undefined) {
            if (numeroAleatorio <= 1) {
            caixas[l].appendChild(clonaro)
            contador++;
            break;
        }}else{
            filled++;
        }
        
    }
    if(contador = 0 && filled<9){
        jogarContraPC();

    }




}


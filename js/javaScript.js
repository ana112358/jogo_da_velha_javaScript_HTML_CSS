let x = document.querySelector(".x")
let o = document.querySelector(".o")
let caixas = document.querySelectorAll(".box")
let mensagem = document.querySelector("#mensagem p") 
let segundoJogador;

let player1 = 0;
let player2 = 0;

for(let i=0 ; i<caixas.length;i++){
    
    caixas[i].addEventListener("click", function(){
        let el;

        if (player1==player2){
            el=x;
        }else {
            el =o;
        }
        

        if(this.childNodes.length == 0){
            let clonarEl = el.cloneNode(true);

              this.appendChild(clonarEl);
            if(player1 == player2){
                player1++;
            }else{
                player2++;
            }   
        }
        
    });

};

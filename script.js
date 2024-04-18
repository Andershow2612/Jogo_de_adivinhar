var opção1 = 'Cachorro';
var opção2 = 'Gato';
var input = document.getElementById("input1");

function verifica(){
    if(input.value === opção1 || input.value === opção2){
        alert("Você acertou! :D");
    }else{
        alert("Tente novamente :O");
    }
}

var button = document.getElementById("botao1");
button.onclick = verifica;
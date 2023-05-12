
function insereNumeroNoVisor(botao, visor){

    if(botao.value == "+" || botao.value == "+" || botao.value =="+" || botao.value == "/"){
        //Verificando o penultimo caractere do visor utilizando o atributo length
        if(visor.value[visor.value.length - 1] == "+" || visor.value[visor.value.length - 1] == "-" || visor.value[visor.value.length - 1] == "*" || visor.value[visor.value.length - 1] == "/") {
            visor.value.slice(1)
            
        }else{
            visor.value += botao.value;
        }
    }else{
        visor.value += botao.value;
    }
    
}

function limparVisor(visor) {
    visor.value = '';
  }


const resultadoDasOperacoes = (visor) =>{

    try {
        //Utilizando a função eval(expressão)
        visor.value = eval(visor.value);
    } catch (error) {

        if(visor.value[visor.value.length] == "+" || visor.value[visor.value.length] == "-" || visor.value[visor.value.length] == "*" || visor.value[visor.value.length] == "/") {
            visor.value = visor.value.slice(visor.value.length-1);s
        }else{
            visor.value = visor.value.slice(1);
        }
    }

    
}

// const resultadoDasOperacoes = (visor) =>{
//     //Utilizando a função eval(expressão)
//     visor.value = eval(visor.value);
// }

// function insereNumeroNoVisor(botao, visor){
//     const ultimoCaractere = visor.value.slice(-1);
//     if (ultimoCaractere === "+") {
//         if (botao.value === "+") {
//             return;
//         }
//     }
//     visor.value += botao.value;
// }
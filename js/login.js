//CRIAR OBJETO
// let usuario1 = {
//     nomeCompleto: "Ênio Casper",
//     nomeUsuario: "enio",
//     senhaUsuario: "123456",
//     ccUsuario: "sc",
// }

// let usuario2 = {
//     nomeCompleto: "Danid Silva",
//     nomeUsuario: "danid",
//     senhaUsuario: "123456",
//     ccUsuario: "rj",
// }

// usuario1.usuario2

// console.log("Nome do usuário: " + usuario1.nomeCompleto);

// usuario1.nomeCompleto = "Lukas";
// console.log("Nome do usuário: " + usuario1.nomeCompleto);

// usuario1["cpf"] = "12345678900"
// console.log("Cpf do usuário: " + usuario1.cpf)

//Lista de usuários

// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1, usuario2);

//LISTA DE USUARIOS

let listaDeUsuarios = [
    {
        nomeCompleto : "Enio Casper",
        nomeUsuario : "enio",
        senhaUsuario : "123456",
        ccUsuario : "sc",
    },

    {
        nomeCompleto : "Danid Silva",
        nomeUsuario : "danid",
        senhaUsuario : "123456",
        ccUsuario : "sp",
    },

    {
        nomeCompleto : "Jorginho Lima",
        nomeUsuario : "jojo",
        senhaUsuario : "123456",
        ccUsuario : "rj",
    },

    {
        nomeCompleto : "Gerson Lima",
        nomeUsuario : "gege",
        senhaUsuario : "123456",
        ccUsuario : "sp",
    },

    {
        nomeCompleto : "Edulado Biolante",
        nomeUsuario : "dudu",
        senhaUsuario : "123456",
        ccUsuario : "sp"
    },
];

const msgStatus = document.querySelector("#msg");
const formLogin = document.querySelector("form[name='frm01']")

const botaoSubmit = document.querySelector("#btnSubmit");
botaoSubmit.addEventListener("click", ()=> validaFormularioCompleto);

function validaFormularioCompleto() {
    
    formLogin.OnpreventDefault();

    const inputUser = document.querySelector("#idNm");
    const inputPass = document.querySelector("#idPass");
    const selCentroCusto = document.querySelector("#idCusto");


    console.log(inputUser);
    console.log(inputPass);
    console.log(selCentroCusto);

    //Objeto Usuário-Logado
    const usuarioLogado = {
        nomeUsuarioLogado: inputUser.value,
        senhaUsuarioLogado: inputPass.value,
        ccUsuarioLogado: selCentroCusto.value,
    }

    //Objeto Usuário Validado
    let usuarioValidado = {};

    if(usuarioLogado.nomeUsuarioLogado != "" && usuarioLogado.senhaUsuarioLogado != "" && usuarioLogado.ccUsuarioLogado != 0){
        

        for (let x = 0; x < listaDeUsuarios.length; x++) {

            if(usuarioLogado.nomeUsuarioLogado == listaDeUsuarios[x].nomeUsuario && usuarioLogado.senhaUsuarioLogado == listaDeUsuarios[x].senhaUsuario && usuarioLogado.ccUsuarioLogado == listaDeUsuarios[x].ccUsuario ){

            usuarioValidado = listaDeUsuarios[x];
           
            }
        
        }

    }else{
        console.log("Existe algum campo sem preenchimento!")
    }

    if(usuarioValidado != null){
        msgStatus.setAttribute("style", "color: #00ff00");
        msgStatus.innerHTML = `<span><strong>O usuário ${usuarioValidado.nomeCompleto} fez o login com Sucesso!</strong></span>`;
    } else{
                
        msgStatus.setAttribute("style", "color: #00ff00");
        msgStatus.innerHTML = `<span><strong>Nome de usuário ou senha inválidos </strong></span>`;
    }

} 

// const form1 = document.querySelector("form[name='frm01']");
// // console.log(form1);

// form1.addEventListener("submit", ()=>{
    const inputUser = document.querySelector("#idNm");
    const inputPass = document.querySelector("#idPass");
    const selectCusto = document.querySelector("#idCusto");

    const labelUser = document.querySelector("label[for='idNm']");
    const labelPass = document.querySelector("label[for='idPass']");

    inputUser.addEventListener("keyup", ()=>{

        if(inputUser.value.length < 4){
            labelUser.setAttribute("style", "color:#ff0000;");
        }else{
            labelUser.setAttribute("style", "color:#00ff00;");
        }   
    });

    inputPass.addEventListener("keyup" ,()=>{

        if(inputPass.value.length < 4){
            labelPass.setAttribute("style","color:#ff0000;");
        }else{
            labelPass.setAttribute("style","color:#00ff00;");
        }
    });
console.log("Olá Mundo")

//Comentário em linha

    /* Comentario
        de
        Blobo*/

    // Declarar uma variável com a palavra reservada var

    // var nr1 = 10;
    // var nr2 = 5;

    // //Imprimir as variáveis com o objeto console.

    // console.log(nr1);
    // console.log(nr2);

    // //Realizando as operações básicas com estes valores

    // // + / - / * e %

    // //Adição

    // /* Jeito básico
    // console.log("Resultado: " + (nr1 + nr2)); */
    
    // /*Jeito certinho
    // console.log("Resultado: " + (parseInt(nr1) + parseInt(nr2))); */
        
    // //"Melhor" jeito de fazer
    // console.log(`Resultado Adição: ${parseInt(nr1) + parseInt(nr2)}`);

    // //SUBTRAÇÃO

    // //console.log("Resultado: " + (nr1 - nr2));
    // console.log(`Resultado Subtração: ${parseInt(nr1) - parseInt(nr2)}`);

    // //MULTIPLICAÇÃO

    // //console.log("Resultado: " + (nr1 * nr2));
    // console.log(`Resultado Multiplicação: ${parseInt(nr1) * parseInt(nr2)}`);

    // //DIVISÃO

    // //console.log("Resultado: " + (nr1 / nr2))
    // console.log(`Resultado Divisão: ${parseInt(nr1) / parseInt(nr2)}`);

    // //OBTENHA O RESTO DA DIVISÃO

    // //console.log("Resultado: " + (nr1 % nr2))
    // console.log(`Resultado do resto da divisão: ${parseInt(nr1) % parseInt(nr2)}`);

    //DESCOBRINDO SE UM NÚMERO É PAR OU IMPAR
    //UTILIZANDO OPERADOR TERNÁRIO ( ? )

    // var nr1 = "10";
    // var nr2 = "5";
    // var resultado;

    // resultado = !(parseInt(nr1) % parseInt(nr1)) ? "Par" : "Impar";
    // console.log(`O número é impar: ${resultado}`)

    //DIFERENÇA ENTRE VAR/LET/CONST

    //var nome1 = "Beatriz";
    //let nome2 = "Matheus";

    //REGRAS DO CONST
    //1 REGRA = Inicializar na declaração
    //const nome3 = "Violante";
        
    //2 REGRA = Não pode ser alterado durante o fluxo do programa
    //nome3 = "Jonathan";

    // let nome = "Beatriz";

    // if(nome != ""){
    //     let nome = "Robson"
    // }

    // console.log(nome);

    //ARRAY e seus métodos

    //let frutas = ["banana", "maçã", "morango", "carambola", "acerola", "laranja"]
    //Imprimindo um array

    // console.log(frutas);
    // console.table(frutas);
    // console.log(frutas[4]);

    //Adicionar um item ao final do array com o metodo push(item);

    // frutas.push("melão");
    // console.log(frutas);

    //Adicionando um item no inicio do array co o metodo unshift(item)
    // frutas.unshift("caju");
    // console.log(frutas);

    //Remover um item do início do array com o método shift();
    // frutas.shift();
    // console.log(frutas);

    //Para localizar um item dentro do array, utilizamos o metodo indexOf(itemNome);
    // let indice = frutas.indexOf("morango");
    // console.log(frutas[indice]);

    //Para localizar um itém dentro do array, e apagar ele apagar ele utilizamos o método splice(indice do item, quantidade de vezes que o indice será removido).
    //Obs: utilize o método indexOf(itenNome) para obter o indice do item;
    // let indice2 = frutas.indexOf("carambola");
    // frutas.splice(indice,);
    // console.log(frutas[1]);
    
    // frutas.forEach( (fruta)=>{
    //     console.log("olha ele: " + fruta);
    // } );

    const inputUser = document.getElementById("idNm")
    console.log(inputUser.value)
        

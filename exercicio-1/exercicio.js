function mudarCor() {
  const colors = ["red", "green", "blue", "yellow", "orange", "purple"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

function adicionarItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim(); // Remove espaços em branco antes e depois do texto

  if (value !== "") { // Verifica se o texto não está vazio
    const list = document.getElementById("listaItens");
    const newItem = document.createElement("li");
    newItem.textContent = value;
    list.appendChild(newItem);
    input.value = ""; // Limpa o campo de entrada de texto
  }
}

const imagens = ["./img/img1.png", "./img/img2.png", "./img/img3.png", "./img/img4.jpg", "./img/img5.jpg"];
let indiceAtual = 0;

function proximo() {
	indiceAtual++;
	if (indiceAtual >= imagens.length) {
		indiceAtual = 0;
	}
	document.getElementById("imagem").src = imagens[indiceAtual];
}

function anterior() {
	indiceAtual--;
	if (indiceAtual < 0) {
		indiceAtual = imagens.length - 1;
	}
	document.getElementById("imagem").src = imagens[indiceAtual];
}

window.onload = function() {
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
  if (mensagem.textContent === "") {
    mensagem.textContent = "Mensagem exibida com sucesso :)";
  } else {
    mensagem.textContent = "";
  }
});
}

//onst elemento = document.getElementById("elemento");
botao.addEventListener("click", function() {
  if (elemento.style.display === "none") {
    elemento.style.display = "block";
    mensagem.innerHTML = "O elemento foi exibido novamente";
  } else {
    elemento.style.display = "none";
    mensagem.innerHTML = "O elemento foi ocultado";
  }
});

let tituloVisivel = true;
const titulo = document.getElementById("titulo");

function toggleH2() {
  const titulo = document.getElementById("titulo");
  if (titulo.style.display === "none") {
    titulo.style.display = "block";
  } else {
    titulo.style.display = "none";
  }
}






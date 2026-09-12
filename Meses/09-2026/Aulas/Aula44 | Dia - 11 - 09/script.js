const central = document.getElementById("central");
const botaoMostrar = document.getElementById("mostrar");
const nomePagina = document.getElementById("titulo");
nomePagina.innerText = "Tops professores que tive";

let nome1 = "Thiago Cardoso";
let nome2 = "Lucas";
let nome3 = "Eu mesmo";
let nome4 = "Quase todos do meu Fundamental";

central.innerHTML = `
  <ul>
    <li>${nome1}</li>
    <li>${nome2}</li>
    <li>${nome3}</li>
    <li>${nome4}</li>
  </ul>
  <button id="fechar" onclick="fecharProfessores()">Fechar</button>
`;

botaoMostrar.style.display = "block";

function mostrarProfessores() {
  central.style.display = "flex";
  botaoMostrar.classList.add("abrido");
  nomePagina.style.color = "red";
}

function fecharProfessores() {
  central.style.display = "none";
  botaoMostrar.classList.remove("abrido");
  nomePagina.style.color = "black";
}

/// let estacao de metro, quer que exiba essa estacao no console, e mude ela pra uma nova/proxima

let estacao = [
  { nome: "luz" },
  { nome: "ana rosa" },
  { nome: "faria lima" },
  { nome: "sacoma" },
];

for (let i = 0; i < estacao.length; i++) {
  setTimeout(
    () => {
      console.log(`Estação atual: ${estacao[i].nome}`);
      if (estacao[i + 1]) {
        console.log(`Próxima estação: ${estacao[i + 1].nome}`);
      } else {
        console.log("Esta é a última estação.");
      }
    },
    (i + 1) * 2222,
  );
}

// testando function

function fazerCafe(vezes) {
  for (vezes; vezes > 0; vezes--) {
    console.log("Fazendo café");
  }
}
fazerCafe(2);

// outro

function iniciarAtendimento() {
  const titulo = document.getElementById("aguardando");
  let tempo = 60;

  titulo.innerText = `Aguardando... ${tempo} segundos`;

  const contador = setInterval(() => {
    tempo--;

    if (tempo > 0) {
      titulo.innerText = `Aguardando... ${tempo} segundos`;
    } else {
      titulo.innerText = "Atendimento concluido";
    }
  }, 1000);
}

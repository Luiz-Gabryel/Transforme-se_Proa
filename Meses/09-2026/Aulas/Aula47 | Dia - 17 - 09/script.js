/* um dos exemplos do professor 
function VerificarIdade() {
  let idade = Number(document.getElementById("idade").value);
  let resultado = document.getElementById("resultado");

  if (idade < 0) {
    resultado.innerText = "Como você tem anos negativos?!";
    resultado.style.color = "#FF0000";
  } else if (idade >= 60) {
    resultado.innerText = "Não aceitamos idosos";
    resultado.style.color = "#FF0000";
  } else if (idade >= 18) {
    resultado.innerText = "Pode Entrar!";
    resultado.style.color = "#00FF00";
  } else {
    resultado.innerText = "Não Pode Entrar!";
    resultado.style.color = "#FF0000";
  }
}

outro exemplo
function verificar() {
  let idade = Number(document.getElementById("idade").value);
  let resultado = document.getElementById("resultado");
  let cnh = document.getElementById("cnhValor").value;

  if (idade >= 18 && cnh == "sim") {
    resultado.innerText = "Pode dirigir!";
  } else {
    resultado.innerText = "Não pode dirigir!";
  }
}
*/

let nota = 8

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

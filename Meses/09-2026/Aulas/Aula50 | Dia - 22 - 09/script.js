//Memória do caixa (quanto eu faturei no dia)
let totalDoCaixa = 0;

//Memória do pedido atual
let qtdHamburguer = 0;
let qtdBatata = 0;
let qtdRefri = 0;

//Controles de adicionar e remover do Hamburguer

function adicionarHamburguer() {
  qtdHamburguer = qtdHamburguer + 1; //Isso que faz somar + 1 na variável
  document.getElementById("qtd-hamburguer").value = qtdHamburguer;
}

function removerHamburguer() {
  if (qtdHamburguer > 0) {
    //isso que que faz não ficar -1
    qtdHamburguer = qtdHamburguer - 1;
    document.getElementById("qtd-hamburguer").value = qtdHamburguer;
  }
}

//Controles da batata frita

function adicionarBatata() {
  qtdBatata = qtdBatata + 1;
  document.getElementById("qtd-batata").value = qtdBatata;
}

function removerBatata() {
  if (qtdBatata > 0) {
    qtdBatata = qtdBatata - 1;
    document.getElementById("qtd-batata").value = qtdBatata;
  }
}

//controles do refri

function adicionarRefri() {
  qtdRefri = qtdRefri + 1;
  document.getElementById("qtd-refri").value = qtdRefri;
}

function removerRefri() {
  if (qtdRefri > 0) {
    qtdRefri = qtdRefri - 1;
    document.getElementById("qtd-refri").value = qtdRefri;
  }
}

//preço dos itens

let precoHamburguer = 20.0;
let precoBatata = 10.0;
let precoRefri = 5.0;

//sistema, resumo do pedido

function irParaResumo() {
  //1. Calcular o valor de cada item
  let totalHamburguer = qtdHamburguer * precoHamburguer;
  let totalBatata = qtdBatata * precoBatata;
  let totalRefri = qtdRefri * precoRefri;

  //2. Soma o subtotal
  let subtotal = totalHamburguer + totalBatata + totalRefri;

  //3. Desconto
  //let desconto = 0;
  let desconto = 0;
  if (subtotal > 150) {
    desconto = subtotal * 0.1; // 10% de desconto
  }
  console.log("Subtotal: " + subtotal);
  console.log("Desconto: " + desconto);

  //Regra de desconto

  //Atividade para casa

  //total subtotal - desconto

  //let totalPagar = subtotal - desconto;

  //Fazer aparecer na tela

  document.getElementById("lista-pedido").innerHTML =
    "<li> Hamburguer (" +
    qtdHamburguer +
    "): R$ " +
    totalHamburguer +
    "</li>" +
    "<li> Batata (" +
    qtdBatata +
    "): R$ " +
    totalBatata +
    "</li>" +
    "<li> Refri (" +
    qtdRefri +
    "): R$ " +
    totalRefri +
    "</li>";

  document.getElementById("texto-total").innerHTML =
    "Total a Pagar: R$ " + totalPagar;
}

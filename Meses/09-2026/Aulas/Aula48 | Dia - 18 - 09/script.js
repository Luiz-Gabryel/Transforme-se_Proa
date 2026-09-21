let hamburguer = document.getElementById("qtdhamburguer");
let batata = document.getElementById("qtdbatata");
let refrigerante = document.getElementById("qtdrefrigerante");
let listaDePedidos = document.getElementById("lista-pedido");

let elementoTotalPagar = document.getElementById("texto-total");

let totalDoCaixa = 0;
let qtdHamburguer = 0;
let qtdBatata = 0;
let qtdRefrigerante = 0;
let totalHamburguer = 0;
let totalBatata = 0;
let totalRefrigerante = 0;
let precoHamburguer = 15;
let precoBatata = 10;
let precoRefrigerante = 5;
let desconto = 0;

function adicionarHamburguer() {
  qtdHamburguer += 1;
  hamburguer.value = qtdHamburguer;
}

function removerHamburguer() {
  if (qtdHamburguer > 0) {
    qtdHamburguer -= 1;
    hamburguer.value = qtdHamburguer;
  }
}

function adicionarBatata() {
  qtdBatata += 1;
  batata.value = qtdBatata;
}

function removerBatata() {
  if (qtdBatata > 0) {
    qtdBatata -= 1;
    batata.value = qtdBatata;
  }
}

function adicionarRefrigerante() {
  qtdRefrigerante += 1;
  refrigerante.value = qtdRefrigerante;
}

function removerRefrigerante() {
  if (qtdRefrigerante > 0) {
    qtdRefrigerante -= 1;
    refrigerante.value = qtdRefrigerante;
  }
}

function irParaResumo() {
  totalHamburguer = qtdHamburguer * precoHamburguer;
  totalBatata = qtdBatata * precoBatata;
  totalRefrigerante = qtdRefrigerante * precoRefrigerante;

  totalDoCaixa = totalHamburguer + totalBatata + totalRefrigerante;
    let valorFinal = totalDoCaixa - desconto;

  listaDePedidos.innerHTML = `
    <li>Hambúrguer: ${qtdHamburguer} x R$ ${precoHamburguer},00 = R$ ${totalHamburguer},00</li>
    <li>Batata Frita: ${qtdBatata} x R$ ${precoBatata},00 = R$ ${totalBatata},00</li>
    <li>Refrigerante: ${qtdRefrigerante} x R$ ${precoRefrigerante},00 = R$ ${totalRefrigerante},00</li>
    <li>Total do Caixa: R$ ${totalDoCaixa},00</li>
    <li>Desconto: R$ ${desconto},00</li>
  `;

  elementoTotalPagar.textContent = `Total a Pagar: R$ ${valorFinal},00`;
}
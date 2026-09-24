let telaProdutos = document.getElementById("tela-produtos");
let telaPedidos = document.getElementById("tela-pedidos");
let telaExtrato = document.getElementById("tela-extrato");

let botaoCarrinho = document.getElementById("carrinho");
let textoTotal = document.getElementById("total");

let hamburguer = document.getElementById("qtdhamburguer");
let batata = document.getElementById("qtdbatata");
let refrigerante = document.getElementById("qtdrefrigerante");

let pedidoHamburguer = document.getElementById("pedido-hamburguer");
let pedidoBatata = document.getElementById("pedido-batata");
let pedidoRefrigerante = document.getElementById("pedido-refrigerante");

let qtdHamburguer = 0;
let qtdBatata = 0;
let qtdRefrigerante = 0;

let precoHamburguer = 15;
let precoBatata = 5;
let precoRefrigerante = 7;

function atualizarTotal() {
  let total =
    qtdHamburguer * precoHamburguer +
    qtdBatata * precoBatata +
    qtdRefrigerante * precoRefrigerante;

  textoTotal.textContent = total.toFixed(2);
  botaoCarrinho.textContent =
    "Carrinho (" + (qtdHamburguer + qtdBatata + qtdRefrigerante) + ")";
}

function adicionarHamburguer() {
  qtdHamburguer += 1;
  hamburguer.value = qtdHamburguer;
  pedidoHamburguer.style.display = "block";
  atualizarTotal();
}

function removerHamburguer() {
  if (qtdHamburguer > 0) {
    qtdHamburguer -= 1;
    hamburguer.value = qtdHamburguer;
  }
  if (qtdHamburguer === 0) {
    pedidoHamburguer.style.display = "none";
  }
  atualizarTotal();
}

function adicionarBatata() {
  qtdBatata += 1;
  batata.value = qtdBatata;
  pedidoBatata.style.display = "block";
  atualizarTotal();
}

function removerBatata() {
  if (qtdBatata > 0) {
    qtdBatata -= 1;
    batata.value = qtdBatata;
  }
  if (qtdBatata === 0) {
    pedidoBatata.style.display = "none";
  }
  atualizarTotal();
}

function adicionarRefrigerante() {
  qtdRefrigerante += 1;
  refrigerante.value = qtdRefrigerante;
  pedidoRefrigerante.style.display = "block";
  atualizarTotal();
}

function removerRefrigerante() {
  if (qtdRefrigerante > 0) {
    qtdRefrigerante -= 1;
    refrigerante.value = qtdRefrigerante;
  }
  if (qtdRefrigerante === 0) {
    pedidoRefrigerante.style.display = "none";
  }
  atualizarTotal();
}

function irParaPedidos() {
  if (qtdHamburguer + qtdBatata + qtdRefrigerante === 0) {
    alert("Seu carrinho está vazio!");
  } else {
    telaProdutos.style.display = "none";
    telaPedidos.style.display = "block";
    botaoCarrinho.style.display = "none";
  }
}

function voltarParaProdutos() {
  telaPedidos.style.display = "none";
  telaProdutos.style.display = "block";
  botaoCarrinho.style.display = "block";
}

function finalizarPedido() {
  let subtotal =
    qtdHamburguer * precoHamburguer +
    qtdBatata * precoBatata +
    qtdRefrigerante * precoRefrigerante;

  if (subtotal === 0) {
    alert("Seu carrinho está vazio!");
  } else {
    document.getElementById("extrato-hamburguer").style.display = "none";
    document.getElementById("extrato-batata").style.display = "none";
    document.getElementById("extrato-refrigerante").style.display = "none";

    if (qtdHamburguer > 0) {
      let linha = document.getElementById("extrato-hamburguer");
      linha.textContent =
        "🍔 Hambúrguer: " +
        qtdHamburguer +
        " x R$ " +
        precoHamburguer +
        " = R$ " +
        qtdHamburguer * precoHamburguer;
      linha.style.display = "block";
    }
    if (qtdBatata > 0) {
      let linha = document.getElementById("extrato-batata");
      linha.textContent =
        "🍟 Batata frita: " +
        qtdBatata +
        " x R$ " +
        precoBatata +
        " = R$ " +
        qtdBatata * precoBatata;
      linha.style.display = "block";
    }
    if (qtdRefrigerante > 0) {
      let linha = document.getElementById("extrato-refrigerante");
      linha.textContent =
        "🥤 Refrigerante: " +
        qtdRefrigerante +
        " x R$ " +
        precoRefrigerante +
        " = R$ " +
        qtdRefrigerante * precoRefrigerante;
      linha.style.display = "block";
    }

    let desconto = 0;
    if (subtotal > 150) {
      desconto = subtotal * 0.1;
    }

    let total = subtotal - desconto;

    document.getElementById("extrato-subtotal").textContent =
      "Subtotal: R$ " + subtotal.toFixed(2);

    if (desconto > 0) {
      document.getElementById("extrato-desconto").textContent =
        "Desconto de 10% (compras acima de R$ 150): - R$ " +
        desconto.toFixed(2);
    } else {
      document.getElementById("extrato-desconto").textContent =
        "Sem desconto (compras acima de R$ 150 ganham 10%)";
    }

    document.getElementById("extrato-total").textContent =
      "Total: R$ " + total.toFixed(2);

    telaPedidos.style.display = "none";
    telaExtrato.style.display = "block";
  }
}

function novoPedido() {
  qtdHamburguer = 0;
  qtdBatata = 0;
  qtdRefrigerante = 0;

  hamburguer.value = 0;
  batata.value = 0;
  refrigerante.value = 0;

  pedidoHamburguer.style.display = "none";
  pedidoBatata.style.display = "none";
  pedidoRefrigerante.style.display = "none";

  atualizarTotal();

  telaExtrato.style.display = "none";
  telaProdutos.style.display = "block";
  botaoCarrinho.style.display = "block";
}


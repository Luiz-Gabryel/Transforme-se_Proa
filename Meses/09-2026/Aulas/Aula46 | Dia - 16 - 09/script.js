/* 
let preco = Number(prompt("Qual o preço do negocio: "));
let quantidade = Number(prompt("Quantos negocios sao: "));
let total = preco * quantidade;
console.log(`Preco total e  R$${total.toFixed(2)}`);
alert(`Preco total e  R$${total.toFixed(2)}`);

console.log(8 < 3);
console.log(8 === 8);
console.log(8 !== 8);
console.log(8 >= 8);
console.log(8 <= 5);

*/

function subtrair() {
  let numero1 = Number(document.getElementById("numero1").value);
  let numero2 = Number(document.getElementById("numero2").value);
  let resultado = numero1 - numero2;
  document.getElementById("resultado").innerText =
    `O resultado da subtração é: ${resultado}`;
}

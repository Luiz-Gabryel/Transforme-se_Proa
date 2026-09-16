/* 
 Teste a parte

const nome = "Luiz"; 
let idade = 17; 
let escolaridade = false; 
let cidade = "São Caetano do Sul"; 
let profissao = "Estudante"; 
let stack = "Back-end"; 

console.log("Meu nome é " + nome + ", tenho " + idade + " anos, moro em " + cidade + ", sou " + profissao + " e minha escolaridade atual é: " + escolaridade + ". Minha stack é " + stack + "."); 

let escolhaEscolaridade = ""; 

if (escolaridade === false) { 
    escolhaEscolaridade = prompt("Você não possui escolaridade cadastrada. Você quer adicionar uma? (sim ou não)"); 
    
    if (escolhaEscolaridade && escolhaEscolaridade.toLowerCase() === "sim") { 
        let escolha = prompt("Escolha uma das opções:\n1 - Ensino Médio\n2 - Ensino Médio + Tecnológico\n3 - Ensino Superior\n4 - Ensino Superior + Tecnológico\n5 - Pós-Graduação\n6 - Mestrado\n7 - Doutorado"); 
        
        switch (escolha) { 
            case "1": 
                escolaridade = "Ensino Médio"; 
                break; 
            case "2": 
                escolaridade = "Ensino Médio + Tecnológico"; 
                break; 
            case "3": 
                escolaridade = "Ensino Superior"; 
                break; 
            case "4": 
                escolaridade = "Ensino Superior + Tecnológico"; 
                break; 
            case "5": 
                escolaridade = "Pós-Graduação"; 
                break; 
            case "6": 
                escolaridade = "Mestrado"; 
                break; 
            case "7": 
                escolaridade = "Doutorado"; 
                break; 
            default: 
                console.log("Escolha inválida"); 
        } 
        
        if (escolha < "1" || escolha > "7") { 
            console.log("Escolha um número válido, por favor"); 
        } else { 
            console.log("Escolaridade atualizada para: " + escolaridade); 
        } 
    } 
}

 */

/*
Primeira exemplo do professor 

let valorProduto = 35;
let quantidade = 4;
let total = valorProduto * quantidade;
console.log("O valor total da compra é: " + total + " reais.");
*/

/*
Exemplo a parte

let senha = "umdoistresmudar";
let tentativa = 0;
let maxTentativas = 3;
let logado = false;

while (tentativa < maxTentativas) {
    let Senhatentativa = prompt("Digite a senha pra entrar:");
    tentativa += 1;

    if (Senhatentativa === senha) {
        console.log("Acesso permitido.");
        alert(`Você conseguiu acessar em ${tentativa} tentativa(s).`);
        logado = true;
        break; 
    } else {
        console.log("Acesso negado.");
        alert(`Senha incorreta! Tentativa ${tentativa} de ${maxTentativas}.`);
    }
}

if (!logado) {
    console.log("Você excedeu o número de tentativas.");
    alert("Você excedeu o número de tentativas e a conta foi bloqueada.");
}

*/
/* 
exemplo do professor if e else 


let nota = -1;

if (nota <= 0) { 
    console.log("Como voce conseguiu tirar uma nota negativa?"); 
} else if (nota < 4) { 
    console.log("Reprovado"); 
} else if (nota < 5) { 
    console.log("Recuperação / Reprovado");
} else if (nota < 7) { 
    console.log("Sortudo"); 
} else if (nota < 9) { 
    console.log("Aprovado"); 
} else { 
    console.log("Excelente"); 
}


// outro exemplo do professor if e else
    let idade = 17;

if (idade < 18) {
    console.log("Você é adolecente.");
} else if (idade < 60) {
    console.log("Você é adulto.");
} else {
    console.log("Você é idoso.");
}
    */

let compra = Number(prompt("Digite o valor da compra:"));

if (compra >= 200) {
  console.log("Você ganhou um desconto de 20% no valor da compra.");
  alert("Você ganhou um desconto de 20% no valor da compra.");
} else if (compra >= 100 && compra < 200) {
  console.log("Você ganhou um desconto de 10% no valor da compra.");
  alert("Você ganhou um desconto de 10% no valor da compra.");
} else if (compra < 100 && compra > 0) {
  console.log("Você não ganhou desconto no valor da compra.");
  alert("Você não ganhou desconto no valor da compra.");
}

if (isNaN(compra) || compra <= 0) {
  console.log("Isso nao e um numero e nao vale algo menor ou igual a zero.");
  alert("Isso nao e um numero e nao vale algo menor ou igual a zero.");
}

let senhaAtual = document.getElementById("senha");
let localAtual = document.getElementById("local");
let localAntigo = document.getElementById("lista-chamadas");
let novaSenha = senhaAtual.textContent;
let senhaAtualLetra = novaSenha.slice(0, 1);
let senhaAtualNumero = Number(novaSenha.slice(1));
let ultimaSenha;
console.log(senhaAtualLetra);
let senhaNova = 0;
function atualizarSenha() {
  setInterval(() => {
    let sortear = Math.random();
    let sortearMultiplicar = sortear * opcoes.length;
    let sorteado = Math.floor(sortearMultiplicar);
    let encontrar = opcoes[sorteado];
    ultimaSenha = senhaNova;
    senhaAtualNumero += 1;
    senhaNova = encontrar.tipo + senhaAtualNumero;
    console.log(`sua senha nova ${senhaNova}`);
    senhaAtual.textContent = senhaNova;

    console.log(sorteado);

    console.log(opcoes[sorteado]);
    console.log(encontrar.local);
    localAtual.textContent = encontrar.local;
    
    localAntigo.innerHTML = `<li>${ultimaSenha} - ${localAtual.textContent}</li>` + localAntigo.innerHTML;
  }, 1000);
}

let opcoes = [
  { tipo: "P", local: "Pediatria" },
  { tipo: "I", local: "Idoso" },
  { tipo: "X", local: "Raio-X" },
  { tipo: "RX", local: "Raio-X" },
  { tipo: "G", local: "Gestante" },
  { tipo: "M", local: "Mulher" },
  { tipo: "A", local: "Adulto" },
  { tipo: "H", local: "Homem" },
  { tipo: "D", local: "Deficiente" },
  { tipo: "US", local: "Ultrassonografia" },
  { tipo: "USG", local: "Ultrassonografia" },
  { tipo: "TC", local: "Tomografia Computadorizada" },
  { tipo: "TM", local: "Tomografia Computadorizada" },
  { tipo: "RM", local: "Ressonância Magnética" },
  { tipo: "MAM", local: "Mamografia" },
  { tipo: "LAB", local: "Exames Laboratoriais" },
  { tipo: "ECG", local: "Eletrocardiograma" },
  { tipo: "AG", local: "Agendado" },
  { tipo: "ST", local: "Sem Agendamento" },
  { tipo: "RET", local: "Retorno" },
  { tipo: "TELE", local: "Teleconsulta" },
  { tipo: "OD", local: "Odontologia" },
  { tipo: "ENF", local: "Enfermagem" },
];


atualizarSenha();

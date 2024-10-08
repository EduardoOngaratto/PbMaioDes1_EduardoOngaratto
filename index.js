// Importando o modulo interno (core modulo) fs para escrever em um arquivo txt
const fs = require("fs");

// Criando as bolas e suas probabilidades
const bolas = [
  { cor: "verde", peso: 1 },
  { cor: "azul", peso: 2 },
  { cor: "amarelo", peso: 3 },
  { cor: "vermelho", peso: 5 },
];

// Criando uma função para escolher uma bola de acordo com o pesos
function escolherBola() {
  const totalPeso = bolas.reduce((total, bola) => total + bola.peso, 0);
  const escolha = Math.random() * totalPeso;
  let somaPeso = 0;

  for (let i = 0; i < bolas.length; i++) {
    somaPeso += bolas[i].peso;
    if (escolha < somaPeso) {
      return bolas[i].cor;
    }
  }
}

// Criando uma função para gerar uma sequencia de 4 bolas
function gerararrSequencia() {
  let arrSequencia = [];
  for (let i = 0; i < 4; i++) {
    arrSequencia.push(escolherBola());
  }
  return arrSequencia.join(",");
}

// Gerando uma sequências e escrevendo no arquivo
let = quantidadeDaSequencia = 1000;
let arrSequencias = "";
for (let i = 0; i < quantidadeDaSequencia; i++) {
  arrSequencias += gerararrSequencia() + "\n";
}

fs.writeFileSync("resultado.txt", arrSequencias.trim());

// Lendo o arquivo e contabilizando as cores escolhidas
const conteudo = fs.readFileSync("resultado.txt", "utf-8");
const linhas = conteudo.split("\n");

const contagem = {
  verde: 0,
  azul: 0,
  amarelo: 0,
  vermelho: 0,
};

for (let i = 0; i < linhas.length; i++) {
  const cores = linhas[i].split(",");
  for (let j = 0; j < cores.length; j++) {
    contagem[cores[j]]++;
  }
}

// Contagem de cores no console
console.log(`Verde: ${contagem.verde}`);
console.log(`Azul: ${contagem.azul}`);
console.log(`Amarelo: ${contagem.amarelo}`);
console.log(`Vermelho: ${contagem.vermelho}`);

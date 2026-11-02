// Importando os módulos criados
const { nome, anoCriacao, versaoAtual } = require('./src/variaveis');
const { saudar, somar } = require('./src/funcoes');

console.log("--- Executando Exemplos do Projeto ---");

// Testando Variáveis
console.log(`Nome do ecossistema: ${nome}`);
console.log(`Criado em: ${anoCriacao}`);
console.log(`Versão utilizada no teste: ${versaoAtual}`);

console.log("\n--- Testando Funções ---");

// Testando Funções
const mensagemSaudacao = saudar("Iniciante em Node");
console.log(mensagemSaudacao);

const resultadoSoma = somar(10, 15);
console.log(`O resultado da soma de 10 + 15 é: ${resultadoSoma}`);{
    
}


// Exemplos de declaração de variáveis em JavaScript ("Node.js")
// 1. const: Usado para valores que não mudam (imutáveis)
const nome = "Node.js";
const anoCriacao = 2009;

// 2. let: Usado para variáveis cujo valor pode ser alterado
let versaoAtual = "20.x";
versaoAtual = "21.x"; // Alterando o valor

// Exportando as variáveis para uso em outros arquivos
module.exports = { nome, anoCriacao, versaoAtual };
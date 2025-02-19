// 2. Faça um programa que leia o nome de uma pessoa e de boas vindas. ex.: “Olá, Lucas!”

// Criação da interface de leitura para entrada e saída de dados
const readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Terminal pede para que o usuário informe o seu nome e captura o dado
readline.question("Escreva seu nome: ", (nome) => {
  console.log(`Olá, ${nome}, seja bem-vindo!`);

  readline.close(); // Fecha a interface após a captura do dado
});

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Escreva seu nome: ", (nome) => {
  rl.question("Escreva seu salário: ", (salario) => {
    console.log(`O funcionário ${nome} recebe R$${salario} por mês.`);

    rl.close();
  });
});

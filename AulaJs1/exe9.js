const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
rl.question("Insira quantos dias você trbalhou este mês:", (dias) => {
  console.log(`Você fez R$${parseInt(dias) * 200} este mês`);
  rl.close();
});

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Insira o valor na sua carteira em R$:", (valor) => {
  console.log(
    `O valor da sua carteira em dólares é de $${parseFloat(valor) * 5.6}`
  );

  rl.close();
});

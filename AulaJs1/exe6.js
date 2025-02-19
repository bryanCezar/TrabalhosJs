const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Insira um número inteiro", (num) => {
  console.log(
    `O antecessor desse número é ${parseInt(num) - 1} e o seu sucessor é ${
      parseInt(num) + 1
    }`
  );
  rl.close();
});

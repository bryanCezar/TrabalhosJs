const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
rl.question("Insira seu salário atual: ", (sal) => {
  console.log(
    `Seu novo salário é de R$${parseInt(sal) + parseInt(sal) * 0.15}`
  );
  rl.close();
});

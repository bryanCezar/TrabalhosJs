const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
rl.question("Informe o nome do cliente:", (nome) => {
  rl.question("Informe o sexo:", (sexo) => {
    rl.question("Informe o valor total das compras", (valor) => {
      if (sexo == "feminino") {
        console.log(
          `O valor final é de R$${
            parseFloat(valor) - parseFloat(valor) * 0.13
          } com 13% de desconto`
        );
      } else {
        console.log(
          `O valor final é de R$${
            parseFloat(valor) - parseFloat(valor) * 0.05
          } com 5% de desconto`
        );
      }
      rl.close();
    });
  });
});

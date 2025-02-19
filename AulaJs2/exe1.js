const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
rl.question("Informe a velocidade do carro em KM/h:", (vel) => {
  if (vel > 80) {
    console.log(
      `O carro ultrapassou a velocidade permitida, a multa de R$${
        (parseInt(vel) - 80) * 5
      } será aplicada`
    );
  } else {
    console.log(`Carro dentro da velocidade permitida`);
  }
  rl.close();
});

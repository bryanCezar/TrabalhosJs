const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Insira a largura da parede a ser pintada:", (largura) => {
  rl.question("Insira a altura:", (altura) => {
    console.log(
      `a área da parede é de ${parseInt(largura) * parseInt(largura)}m²
     e a quantidade em tinta é de ${
       (parseInt(largura) * parseInt(largura)) / 2
     }}`
    );

    rl.close();
  });
});

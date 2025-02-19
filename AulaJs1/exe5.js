const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite a primeira nota do aluno: ", (num1) => {
  rl.question("Digite a segunda nota do aluno: ", (num2) => {
    let media = (parseInt(num1) + parseInt(num2)) / 2;
    console.log("A média do aluno é:", media);
    rl.close();
  });
});

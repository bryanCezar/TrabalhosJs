const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
rl.question("Insira um ano:", (ano) => {
  if (ano % 4 === 0) {
    console.log(`${ano} é um ano bissexto`);
  } else {
    console.log(`${ano} não é um ano bissexto`);
  }
  rl.close();
});

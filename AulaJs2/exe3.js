const { stdin, stdout } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});
rl.question("Insira seu ano de nascimento:", (ano) => {
  if (2025 - parseInt(ano) === 17) {
    console.log(
      `Falta ${18 - (2025 - parseInt(ano))} ano para seu alistamento`
    );
  } else if (2025 - parseInt(ano) < 18) {
    console.log(
      `Faltam ${18 - (2025 - parseInt(ano))} anos para seu alistamento`
    );
  } else if (2025 - parseInt(ano) === 18) {
    console.log(`Você já se alistou ou se alistará esse ano`);
  } else if (2025 - ano === 19) {
    `Faz ${18 - (2025 - parseInt(ano))} ano desde seu alistamento`;
  } else {
    console.log(`Fazem ${2025 - parseInt(ano) - 18} anos que você se alistou`);
  }
  rl.close();
});

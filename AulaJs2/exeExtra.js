const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
  rl.question("Insira o tamanho da reta A:", (a) =>{
    rl.question("Insira o tamanho da reta B:", (b) =>{
        rl.question("Insira o tamanho da reta C:", (c) =>{
        if(parseInt(b) + parseInt(c) < parseInt(a) || parseInt(a) + parseInt(c) < parseInt(b) || parseInt(a) + parseInt(b) < parseInt(c)){
            console.log(`É possivel formar um triangulo com o tamanho informado dos três segmentos de reta`)
        }else{
            console.log(`Não é possivel formar um triangulo com o tamanho informado dos três segmentos de reta`)
        }
        rl.close();
        })
    })
  })
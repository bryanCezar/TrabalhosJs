const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Insira qual distancia você deseja percorrer em Km/h:", (dis) => {
  if(parseInt(dis) <= 200){
console.log(`O total da viagem  deu R$${ 0.50 * parseInt(dis)}`)
  }else if(parseInt(dis) <= 0){ 
console.log(`Não é possivel inserir distâcias nulas ou negativas`)
  }else{
    console.log(`O total da viagem deu R$${0.45 * parseInt(dis)}`)
  }
  rl.close();
})
let heroi
let saldoVitorias = 20
let saldoDerrotas = 8
let nivel = Number(saldoVitorias - saldoDerrotas);


function ranks(nivel){
 
if (nivel <= 10){
  return heroi = "Ferro";
} else if(nivel >= 11 && nivel <= 20){
  return heroi = "Bronze";
} else if(nivel >= 21 && nivel <= 50){
  return heroi = "Prata";
}else if(nivel >= 51 && nivel <= 80){
  return heroi = "Ouro";
}else if(nivel >= 81 && nivel <= 90){
  return heroi  = "Diamante";
} else if(nivel >= 91 && nivel <= 100){
  return heroi = "Lendário";
} else if(nivel >= 101){
  return heroi = "Imortal";
  
}
}


ranks(nivel);


console.log("O Herói tem de saldo de "+ nivel + " está no nível de " + heroi);

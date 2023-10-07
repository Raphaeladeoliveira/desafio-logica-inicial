let response = victoryDefeat(25, 3)
let nivel =""

if(response <= 10){
	nivel = "Ferro"
}
else if(response >10 && response < 20){
	nivel= "Bronze"
}
else if(response >20 && response < 50){
	nivel= "Prata"
}
else if(response >50 && response <80){
	nivel = "Ouro"
}
else if(response >80 && response <90){
	nivel = "Diamante"
}
else if(response > 90 && response <100){
	nivel = "Lendário"
}
else if(response >= 101){
	nivel = "Imortal"
}
console.log("O Herói tem de saldo de "+ response + " está no nível: " + nivel)


//calculo das batalhas
function victoryDefeat(v, d){
	let calculation = v - d
	return calculation
}



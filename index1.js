let vitoria = 102
let derrota = 1

function resultado(vitoria, derrota){
    return vitoria - derrota
}

let ranking = resultado(vitoria, derrota)
let elo = ""

if (ranking <11) {
    elo = "Ferro"
}
else if (ranking >= 11 && ranking <=20) {
    elo = "Bronze"
}
else if (ranking >= 21 && ranking <=50) {
    elo = "Prata"
}
else if (ranking >= 51 && ranking <=80) {
    elo = "Ouro"
}
else if (ranking >= 81 && ranking <=90) {
    elo = "Diamante"
}
else if (ranking >= 91 && ranking <=100) {
    elo = "Lendário"
}
else {
    elo = "Imortal"
}

console.log(`O Herói tem saldo de ${ranking}, está no nível de ${elo}.`)


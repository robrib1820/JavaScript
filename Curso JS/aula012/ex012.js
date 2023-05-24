var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 && hora >= 6) {
    console.log("Bom dia!")
} else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde!")
} else if (hora < 24 && hora >= 19 ) {
    console.log("Boa Noite!")
} else if(hora < 6 && hora >= 1) {
    console.log("Boa Madrugada!")
} else {
    console.log("Por favor, informe um horário correto!")
}
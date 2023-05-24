function Carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var horario = new Date()
    var hora = horario.getHours()

    
    if (hora >= 6 && hora <= 12) {
        //Bom dia!
        img.src = "manha.jpg"
        document.body.style.background ="#e2cd9f"
        msg.innerHTML = `Agora são ${hora} horas da manhã.`
    } else if (hora > 12 && hora <= 18) {
        //Boa Tarde
        img.src = "tarde.jpg"
        document.body.style.background ="#b9846f"
        msg.innerHTML = `Agora são ${hora} horas da tarde.`
    } else if (hora > 18 && hora <= 24) {
        //Boa Noite
        img.src = "noite.jpg"
        document.body.style.background = "#515154"
        msg.innerHTML = `Agora são ${hora} horas da noite.`
    } else {
        //Boa Madrugada
        img.src = "madrugada.jpg"
        document.body.style.background = "black"
        msg.innerHTML = `Agora são ${hora} hora da madrugada.`
    }
    
}



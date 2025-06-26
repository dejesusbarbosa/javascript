function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')

    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    //let hora = 12

    msg.innerHTML = (`Agora são exatamente ${hora} horas e ${min} min.`)

    if (hora >= 6 && hora < 12) {
        //bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#e8ee32'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#ff8c00'
    } else if (hora >= 18 && hora <= 23) {
        //boa noite
        img.src = 'imagens/sol.jpg'
        document.body.style.background = '#3655b3'
    } else {
        img.src = 'imagens/madrugada.jpg'
        document.body.style.background = '#2c2c2c'
    }

    
}
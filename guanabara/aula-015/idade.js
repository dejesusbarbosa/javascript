function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/homem.criança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/homem.jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem.adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/homem.velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/mulher.criança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/mulher.jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher.adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/mulher.velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que seu sexo é ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
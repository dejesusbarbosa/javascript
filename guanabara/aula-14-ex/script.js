function contar() {
    let ini = document.getElementById('txtn1')
    let fim = document.getElementById('txtn2')
    let passo = document.getElementById('txtn3')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Ímposivel realizar a conta!'
        window.alert('[ERRO] Preencha os dados!!')
    } else {
       res.innerHTML = 'contando..  <br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p <= 0 ) {
        window.alert('Passo inválido! Considerando PASSO 1')
       }

       // Contagem crescente
       if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} -->`
            }
       } else {
        // Contagem decrescente
        for(let c = i; c >= f; c-= p) {
            res.innerHTML += `${c} --> `
        }
       }
    }
}
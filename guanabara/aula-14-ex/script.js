function verificar() {
let n1 = document.getElementById('txtn1')
let n2 = document.getElementById('txtn2')
let n3 = document.getElementById('txtn3')
let res = document.getElementById('resultado')

let inicio = Number(n1.value)
let fim = Number(n2.value)
let passo = Number(n3.value)

while (inicio <= fim) {
    res.innerHTML = `Você está no passo ${inicio}`
}
}
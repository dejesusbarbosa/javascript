let num = [5, 6, 7, 8, 9]
num[5] = 10
num.push(11)
num.sort()

console.log(`Nosso vetor tem ${num.length}. posições`)
console.log(`O primeiro valor do vetor é ${0}`)

let pos = num.indexOf(0)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

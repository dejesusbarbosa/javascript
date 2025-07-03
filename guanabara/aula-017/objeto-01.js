let amigo = {nome: 'josé', 
peso: 85.4,
sexo: 'M',
    engordar(p = 0){
        console.log('engordou')
        this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
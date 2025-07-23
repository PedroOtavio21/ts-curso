// ---ARRAYS---

const nomes: string[] = ['Pedro', 'Gabriel', 'Arthur']
const numeros: number[] = [100, 120, 140, 160]

nomes.forEach((nome) => {
    console.log(nome.toUpperCase())
})

numeros.forEach((numero) => {
    console.log(numero)
})

// ---TUPLAS---

// Funcionam como arrays, porém com possibilidade de serem de mais de 1 tipo de dado

// Além disso, você mesmo define sua quantidade de itens logo de início

const pessoa: [string, number] = ['Pedro', 25]

console.log(`Meu nome é ${pessoa[0].toUpperCase()} e eu tenho ${pessoa[1]}`)
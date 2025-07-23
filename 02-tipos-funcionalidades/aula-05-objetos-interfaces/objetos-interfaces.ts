// ---OBJETOS---

// Agora possibilita que você passe sua tipagem entre chaves

let pessoa: { nome: string, idade: number, endereco?: string}

pessoa = {
    nome: 'Pedro',
    idade: 22
}

// ---INTERFACES---

// Servem para definir estruturas e propriedades de um objeto, de maneira que evite repetição de código

interface Carro {
    modelo: string,
    fabricante: string,
    ano?: number
}

let toro: Carro = {
    modelo: 'Toro',
    fabricante: 'Fiat',
    ano: 2019
}

let kicks: Carro = {
    modelo: 'Kicks',
    fabricante: 'Nissan',
    ano: 2022
}

function imprimir( carro: Carro) {
    console.log(carro.modelo)
    console.log(carro.ano)
}
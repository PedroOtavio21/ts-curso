// ---UNION---

// Forma de garantir que uma variável consiga ter mais de um tipo

let idade: number | string
idade = 25
idade = 'vinte e cinco'

function imprimirId(id: string | number) {
    if (typeof(id) === 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}

imprimirId(123)
imprimirId('123')

// ---LITERAL-TYPE---

// Tipagem para valores literais, fixos

let regiao: 'norte' | 'nordeste' | 'sudeste' | 'sul' | 'centro-oeste'

// Será visto em uma aula posterior
// type Regiao = 'norte' | 'nordeste' | 'sudeste' | 'sul' | 'centro-oeste'

function viajar(regiao: 'norte' | 'nordeste' | 'sudeste' | 'sul' | 'centro-oeste') {
    console.log(`Viajando para ${regiao.toUpperCase()}`)
}

viajar('sudeste')
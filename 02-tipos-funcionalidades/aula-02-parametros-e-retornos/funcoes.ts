// ---PARAMETROS-E-RETORNOS

// Assim como variáveis, as funções também podem ter tipagens, tanto no parâmetro, quanto no tipo do retorno

// Dessa forma, funções conseguem ser muito mais seguras!

// ---PARÂMETROS-OPCIONAIS---

// Caso queira passar mais de um parâmetro, mas com algum deles não sendo obrigatório, basta utilizar:
// - "variavel?: tipo"

function darBomDia(nome: string, idade?: number): string {
    if (idade) {
        return `Bom dia, sou ${nome.toUpperCase()} e eu tenho ${idade} anos`
    } else {
        return `Bom dia, sou ${nome.toUpperCase()}`
    }
}

console.log(darBomDia('Pedro', 22))
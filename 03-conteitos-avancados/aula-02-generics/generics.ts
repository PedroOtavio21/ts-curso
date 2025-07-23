// ---GENERICS---

// Maneira de fazer com que funções trabalhem com tipo que quisermos

// Geralmente é utilizado para evitar situações como no caso abaixo, 
// onde uma funcionalidade qualquer que retornaria qualquer tipo de variável

function obterPrimeiroNumero(arr: number[]): number {
    return arr[0]
}

function obterPrimeiraString(arr: string[]): string {
    return arr[0]
}

// sintaxe: function nomeFuncao<T>(variavel: T): T {}

// Este "T" representa que, pode ser passado qualquer tipo como parâmetro, 
// tornando o generic bastante versátil!

function obterPrimeiroElemento<T>(arr: T[]): T{
    return arr[0]
}

const primeiroNumero = obterPrimeiroElemento<number>([1, 2, 3, 4, 5])

const primeiraString = obterPrimeiroElemento<string>(['Ferrari', 'Masserati', 'Lamborguini'])

// Também podem ser postos em interfaces

interface Repositorio<T> {
    adicionar(item: T): void,
    obterTodos(): void,

    lista: T[]
}

class UsuarioRepositorio implements Repositorio<string> {
    public lista: string[]
    
    constructor(){
        this.lista = []
    }

    adicionar(item: string): void {
        this.lista.push(item)
    }

    obterTodos(): string[] {
        return this.lista
    }
}

// Além de ser passado direto em classes

class Caixa<T> {
    private conteudo: T

    constructor(conteudo: T) {
        this.conteudo = conteudo
    }

    obterConteudo(): T {
        return this.conteudo
    }
}

const caixaNumero = new Caixa<number>(42)
console.log(caixaNumero.obterConteudo())

const caixaString = new Caixa<string>('Teste')
console.log(caixaString.obterConteudo())
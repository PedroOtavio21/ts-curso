// ---CLASSES---

// O TypeScript também possui a margem para utilização de orientação a objetos, 
// porém com algumas diferenças

// ---MODIFICADORES-DE-ACESSO---

// Permite ou restringe acesso a propriedades ou métodos fora do escopo da classe
// São os 3 tipos existentes:

// public
// - Permite que qualquer elemento (variável ou método) seja acessado fora da classe

// protected
// - Apenas as classes filhas (por meio de herança) podem acessar elementos

// private
// - Restrição absoluta, sendo acessado um elemento apenas no escopo da própria classe



class ContaBancaria {
    protected saldo: number
    private readonly id: number

    constructor(saldoInicial: number, id: number) {
        this.saldo = saldoInicial
        this.id = id
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.log('Valor inserido inválido.')
            return
        } else {
            this.saldo += valor
            console.log('Saldo depositado com sucesso.')
        }
    }

    public consultarSaldo(): number {
        return this.saldo
    }

    protected consultarId(): number {
        return this.id
    }
}

class ContaPessoaJuridica extends ContaBancaria {
    consultarSaldoPj(): number {
        console.log(this.consultarId())
        return this.saldo
    }
}

const conta = new ContaPessoaJuridica(100, 45)

conta.depositar(50)
conta.consultarSaldo()
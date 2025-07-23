// ---ENUMS---

// Tipo de dado que deixa valores pré-definidos e enumerados

enum StatusPedido {
    PENDENTE, // 0
    PROCESSANDO, // 1
    CONCLUIDO // 2
}

function processarPedido(status: StatusPedido): void {
    console.log(`Status do pedido: ${StatusPedido[status]}`)
}

processarPedido(StatusPedido.CONCLUIDO)

enum Cores {
    VERMELHO = '#f00',
    VERDE = '#0F0',
    AZUL = '#00F'
}

let cor: Cores = Cores.VERDE
console.log(cor)
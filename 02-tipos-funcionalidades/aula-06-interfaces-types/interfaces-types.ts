// ---TYPE---

// Consiste em um apelido para um tipo customizado
// Usado geralmente quando você quer facilitar o uso de um dado, com um apelido

type Regiao = 'norte' | 'nordeste' | 'sudeste' | 'sul' | 'centro-oeste'

type Nome = string

type Pessoa = {
    nome: string,
    idade: number
}

// ---INTERFACE---

// Usada expecificamente para objetos
// Por padrão, você utilizará sempre que lidar com objetos

interface Usuario {
    id: number,
    nome: string
}

interface Admin extends Usuario{
    permissoes: string[]
}

let admin: Admin = {
    id: 1,
    nome: 'Pedro',
    permissoes: ['Acesso', 'Deleção']
}
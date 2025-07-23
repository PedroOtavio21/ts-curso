// ---UTILITY-TYPES---

// Tipos pré definidos no typescript, onde recebe outros tipos como um generic 
// São utilizados para manipular tipos já existentes

interface Usuario {
    id: number;
    nome: string;
    email: string;
}

// Partial<>
// - Declara que todas as propriedades serão opicionais!
const usuario: Partial<Usuario> = {
    nome: 'Pedro',
    email: 'pedro@email.com',
}

// Readonly<>
// - Define as propriedades apenas uma vez
const usuario2: Readonly<Usuario> = {
    nome: 'João',
    email: 'joao@email',
    id: 1
}

// usuario2.nome = 'teste' -> ocasionará um erro

// Omit<>
// - Serve para omitir uma determinada propriedade da classe
const usuario3: Omit<Usuario, 'nome'> = {
    id: 2,
    email: 'teste@email.com'
}

// Pick
// - Seria o inverso do Omit, pegando apenas propriedades selecionadas, omitindo o restante
const usuario4: Pick<Usuario, 'nome' | 'email'> = {
    nome: 'Beatriz',
    email: 'bia@email.com'
}

// Required
// - Define todas as propriedades como obrigatórias
interface Carro {
    modelo?: string,
    fabricante?: string
    ano?: number
}

const carro: Required<Carro> = {
    modelo: 'Onix',
    fabricante: 'Chevrolet',
    ano: 2023
}
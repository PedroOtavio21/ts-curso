// ---TIPOS-PRIMITIVOS---

// Assim como no js, o ts possui tipos similares, como string, number e boolean

// Para definir um tipo com tipagem, você utiliza de ":", seguido do tipo de variável

const nome: string = 'Pedro'
const idade: number = 22
const maiorIdade: boolean = true
const cursos: string[] = ['fullstack', 'ciência da computação']

// OBS: tipo "any"

// Um tipo coringa, que desativa a verificação de tipagem do TS, funcionando como o JS convencional

let variavel: any = true
variavel = 'teste'
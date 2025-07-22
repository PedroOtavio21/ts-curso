# Aula 02 - Configurações de ambiente

## Instalando o TypeScript

Você terá duas opções:

1 - Instalar globalmente, mas não tanto recomendável:

```bash
npm install -g typescript
```

2 - Instalar em um projeto, em formato de desenvolvimento
```bash
# Inicialize um projeto com npm
npm init -y

# Instale o ts em formato de desenvolvimento
npm install --save-dev typescript
```

## Configurando o TypeScript

Após instalar a dependência da linguagem, utilize o seguinte comando:

```bash
# Irá criar um arquivo de configuração do typescript
npx tsc --init
```

Com isso, irá ter algumas funcionalidades principais, como o modelo javascript configurado, dentre outras

### DICA - Utilizando o `--watch`

Para não re-compilar o projeto inumeras vezes, utilize do seguinte comando:

```bash
npx tsc nome-arquivo.ts --watch
```

Desta forma, ele irá recompilar o arquivo typescript automaticamente, além de especificar onde seu código poderá gerar erro em algum momento! 
// 1 Crie dois módulos em arquivos distintos: filtrarPares.js e somaImpares.js.

// 2 No módulo filtrarPares.js, exporte uma função chamada filtrarPares, que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares.

export function filtrarPares (numeros) {
    return numeros.filter(numero => numero % 2 === 0)
} // Função filtra os números pares do array




// 1 Crie dois módulos em arquivos distintos: filtrarPares.js e somaImpares.js.

// 3 No módulo somaImpares.js, exporte uma função chamada somaImpares, que recebe um array de números como parâmetro e retorna a soma de todos os números ímpares.

export function somaImpares(numeros) {
    return numeros.filter(numero => numero % 2 !== 0)
} // Função filtra os números ímpares do array, soma será feita no main.js



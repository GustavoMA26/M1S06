// 4 No módulo principal, importe as duas funções e solicite ao usuário que insira um array de números.
import {filtrarPares} from "./modules/filtrarPares.js";
import {somaImpares} from "./modules/somaImpares.js";

const novosNumeros = [1,2,3,4]

// 5 Utilize a função filtrarPares para obter um novo array contendo apenas os números pares do array fornecido pelo usuário.
console.log(filtrarPares(novosNumeros))

// 6 Em seguida, utilize a função somaImpares para calcular e exibir no console a soma dos números ímpares do array fornecido pelo usuário.
const numerosImpares = somaImpares(novosNumeros); //Variável que armazena apenas os ímpares do array

const valorInicial = 0;
const somaImparesFinal = numerosImpares.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    valorInicial
); //Método reduce para calcular a soma dos itens do array numerosImpares

console.log(somaImpares(novosNumeros))
console.log(somaImparesFinal)

// 1 Crie um array com uma lista de objetos, cada um representando um aluno. Cada aluno deve possuir as propriedades nome (string), nota1 (number) e nota2 (number).
const estudantes = [
    {
        nome: "Gustavo",
        nota1: 9.0,
        nota2: 6.0,
    },
    {
        nome: "Maria",
        nota1: 7.0,
        nota2: 5.0,
    },
    {
        nome: "Joao",
        nota1: 10.0,
        nota2: 8.0,
    },
];
// 2 Utilize uma função de array, como map, filter ou reduce, para calcular a média das notas de cada aluno.
// 3 Crie um novo array contendo objetos com as propriedades nome e media, onde media é a média das notas.
const mediaEstudantes = estudantes.map((estudante) => {
    const media = (estudante.nota1 + estudante.nota2) / 2;
    return {nome: estudante.nome, media} // Retorna o array
});

// 4 Exiba o array resultante no console, ordenado em ordem decrescente de média.
console.log (mediaEstudantes.sort((a, b) => b.media - a.media))
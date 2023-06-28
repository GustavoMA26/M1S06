// 1 Crie uma classe chamada Livro com as propriedades titulo (string), autor (string) e anoPublicacao (number).
class Livro {
    constructor(title, writer, publishDate) {
        this.title = title;
        this.writer = writer;
        this.publishDate = publishDate;
    }

// 2 Implemente um método na classe chamado obterInformacoes, que retorna uma string formatada com as informações do livro.
    obterInformacoes () { 
        return(`The book ${this.title} was written by ${this.writer} and first published in ${this.publishDate}.`)
    }
}

// 3 Crie três objetos da classe Livro, cada um representando um livro diferente.
const livro1 = new Livro ("1984", "George Orwell", 1949);
const livro2 = new Livro ("Da Vinci Code", "Dan Brown", 2006);
const livro3 = new Livro ("The Prince", "Machiavelli", 1532);

// 4 Exiba no console as informações de cada livro, utilizando o método obterInformacoes.
console.log(livro1.obterInformacoes());
console.log(livro2.obterInformacoes());
console.log(livro3.obterInformacoes());
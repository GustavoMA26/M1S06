// 1 Crie uma classe chamada Veiculo com as propriedades marca (string) e ano (number).
class Veiculo {
    constructor (marca, ano) {
    this.marca = marca;
    this.ano = ano;
    }
    // 3 Crie um método na classe Veiculo chamado obterDetalhes, que retorna uma string com as informações do veículo (marca e ano).
    obterDetalhes () {
        return (`O veículo é da ${this.marca} e do ano ${this.ano}.`)
    }
}

// 2 Crie uma classe chamada Carro que herde da classe Veiculo. Adicione à classe Carro a propriedade adicional portas (number).
class Carro extends Veiculo {
    constructor (marca, ano, portas) {
        super (marca, ano);
        this.portas = portas;
    }
    // 4 Crie um método na classe Carro chamado obterDetalhes, que sobrescreve o método na classe Veiculo e retorna uma string com as informações do carro (marca, ano e número de portas).
    obterDetalhes () {
        console.log (`O veículo é da ${this.marca}, do ano ${this.ano} e tem ${this.portas} portas.`)
    }
}
// 5 Crie um objeto da classe Carro e exiba no console as informações detalhadas do carro utilizando o método obterDetalhes.
const carro1 = new Carro ('Chevrolet', 2010, 4)
carro1.obterDetalhes();


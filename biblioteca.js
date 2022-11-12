/*
1. Crie uma classe Livro com as seguintes propriedades:
● Titulo - qual o nome do livro;
● Autor- quem escreveu o livro;
● Editora - qual empresa que publicou o livro;
● Ano de publicação - o ano em que o livro foi publicado
● Disponibilidade - se o livro está disponível ou não (verdadeiro ou falso);

2. Crie alguns objetos da classe Livro e adicione-os em um array;

3. Crie uma classe Biblioteca com as seguintes propriedades:
● Nome - nome da biblioteca;
● Endereco - onde a biblioteca fica localizada;
● Telefone - telefone de contato da biblioteca

4. Adicione na classe Biblioteca um método para buscar um livro específico, deve
passar como parâmetro o nome do livro e exibir no console todas as informações
de um livro;

5. Adicione na classe Biblioteca um método de empréstimo de um livro, deve ser
passado como parâmetro o nome do livro, então verificar a disponibilidade e se
estiver disponível retornar true e trocar o valor da propriedade do livro para false, se
não estiver disponível retornar false.

6. Adicione na classe Biblioteca um método de devolução de um livro, deve ser
passado como parâmetro o nome do livro, então trocar o valor da propriedade de
disponibilidade desse livro para true;

7. Crie um objeto da classe Biblioteca e chame seus métodos
*/

let indexGeral = 0

class Livro{
    Titulos = []
    Autores = []
    Editoras = []
    Anos = []
    Disponibilidades = []

    constructor(){
        this.Titulos[indexGeral] = prompt("Informe o nome do livro.")
        this.Autores[indexGeral] = prompt("Informe o nome do autor.")
        this.Editoras[indexGeral] = prompt("Informe a editora do livro.")
        this.Anos[indexGeral] = parseInt(prompt("Informe o ano de publicação do livro."))
        this.Disponibilidades[indexGeral] = prompt("O livro está disponível?. s = sim e n = não")
        if(this.Disponibilidades[indexGeral] == "s"){
            this.Disponibilidades[indexGeral] = true
        }else{
            this.Disponibilidades[indexGeral] = false
        }
        indexGeral++
    }
}

class Biblioteca{
    NomeBiblioteca = []
    EnderecoBiblioteca = []
    TelefoneBiblioteca = []
}

let livro = new Livro()
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

PARTE 2

1. Crie um método construtor para a classe Livro que recebe como parâmetro as
informações que serão atribuídas as propriedades, com exceção de
“Disponibilidade” que deve ter por padrão o valor “true” quando o objeto for criado;

2. Na classe Biblioteca, adicione uma nova propriedade “AcervoDeLivros” que deve
ser um array;

3. Crie um método construtor para a classe Biblioteca que deve receber como
parâmetro as informações que serão atribuídas as propriedades, com exceção da
“AcervoDeLivros”;

4. Na classe Biblioteca crie um método para adicionar um novo Livro na propriedade
“AcervoDeLivros”;
*/

let indexLivro = 0
let IndexBiblioteca = 0


class Livro{
    Titulos
    Autores 
    Editoras 
    Anos 
    Disponibilidades 

    constructor(){
        this.Titulos = prompt("Informe o nome do livro.")
        this.Autores = prompt("Informe o nome do autor.")
        this.Editoras = prompt("Informe a editora do livro.")
        this.Anos = parseInt(prompt("Informe o ano de publicação do livro."))
        this.Disponibilidades = prompt("O livro está disponível?. s = sim e n = não")
        if(this.Disponibilidades == "s"){
            this.Disponibilidades = true
        }else{
            this.Disponibilidades = false
        }
    }
}

class Biblioteca{
    Livros = []
    NomeBiblioteca 
    EnderecoBiblioteca 
    TelefoneBiblioteca 

    constructor(){
        this.NomeBiblioteca = prompt("Informe o nome da biblioteca.")
        this.EnderecoBiblioteca = prompt("Informe o endereço da biblioteca.")
        this.TelefoneBiblioteca = parseInt(prompt("Informe o telefone da biblioteca."))
    }

    BuscarLivro(nome){
        for (let index = 0; index < this.Livros.length; index++) {
            if(nome == this.Livros[index].Titulos){
                alert("O nome do livro é " + this.Livros[index].Titulos + ". O seu autor é " + this.Livros[index].Autores + ". Editado por " + this.Livros[index].Editoras + ". Publicado em " + this.Livros[index].Anos + ". Disponibilidade (true = tem disponibilidade e false = não tem): " + this.Livros[index].Disponibilidades)
            }         
        }

    }

    EmprestarLivro(nome){
        for (let index = 0; index < this.Livros.length; index++) {
            if(nome == this.Livros[index].Titulos){
                if(this.Livros[index].Disponibilidades == true){
                    alert("O livro foi emprestado a você, cuide bem dele!!!")
                    this.Livros[index].Disponibilidades = false
                }else{
                    alert("O livro foi emprestado a outra pessoa, sinto muito!")
                }
            }         
        }
    }

    DevolverLivro(nome){
        for (let index = 0; index < this.Livros.length; index++) {
            if(nome == this.Livros[index].Titulos){
                if(this.Livros[index].Disponibilidades == true){
                    alert("O livro já foi devolvido!!!")
                }else{
                    alert("Obrigado por devolver o livro!")
                    this.Livros[index].Disponibilidades = true
                }
            }         
        }
    }
}

let biblioteca = new Biblioteca()


        let desejar = "0"

        do {
            desejar = prompt("O que deseja fazer? 1 = criar novo Livro. 2 = Buscar livro em nossa biblioteca. 3 = Pedir emprestado o livro. 4 = Devolver o Livro. 5 = Sair do site")
            switch (desejar) {
                case "1":
                    let livro = new Livro()
                    biblioteca.Livros.push(livro)
                    indexLivro++
                    break;
                case "2":
                    let nome = prompt("Informe o livro que deseja buscar em nossa biblioteca.")
                    biblioteca.BuscarLivro(nome)
                    break;

                case "3":
                    let nome2 = prompt("Informe o livro que deseja pegar emprestado")
                    biblioteca.EmprestarLivro(nome2)
                    break;

                case "4":
                    let nome3 = prompt("Informe o livro que deseja devolver")
                    biblioteca.DevolverLivro(nome3)
                    break;

                case "5":
                    alert("Obrigado por usar nosso site!")
                    break;

                default:
                    break;
            }
        } while (desejar != "5");
class Livro{
    constructor(titulo,autor,ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    emprestar(){
        console.log(`O livro ${this.titulo} foi emprestado`);
    }

    devolver(){
        console.log(`O livro ${this.titulo} foi devolvido`);
    }

    informaAutor(){
        console.log (`O autor do livro ${this.titulo} é ${this.autor}`);
    }
}

let livro = new Livro('Biblia Sagrada' , ['Lucas' , 'Mateus' , 'Marcos' , 'João'], 0 );

livro.emprestar();
livro.devolver();
livro.informaAutor();
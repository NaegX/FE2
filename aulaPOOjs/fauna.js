function Animal(tipo, nome , som ){
    this.tipo = tipo;
    this.nome = nome;
    this.som = som;
}

Animal.prototype = {
    emitirSom() {
        console.log (`O animal faz ${this.som}`);
    },
    locomover(){
        console.log("O animal se moveu.");
    },
    comer(){
        console.log("O animal comeu.");
    }
}

let bicho = new Animal("mamifero" , "Onça" , "uarrrrrrrrrrrrr");
bicho.comer();
bicho.emitirSom();
bicho.locomover();
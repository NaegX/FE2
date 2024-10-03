function carro(ano,modelo,marca){
    let c = Object.create(carro.definicao);
    c.ano = ano;
    c.modelo = modelo;
    c.marca = marca;
    return c;
}

carro.definicao = {
    andar: function(){
        console.log("O carro comecou a andar.");
    },
    buzinar: function(){
        console.log("BIBIBIBI");
    },
    virar: function(direcao){
        console.log(`O carro virou para ${direcao}`);
    }
}

let carrao = carro(1968,'Fusca', "Wolkswagem");
carrao.andar();
carrao.buzinar();
carrao.virar("direita");

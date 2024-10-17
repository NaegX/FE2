//Ex. 1
let numeros = [5,4,3,2,1, 13 , 0];

function quadrado(array) {
    //let quadrados = [];

    //for (let i = 0; i < array.length; i++) {
        // quadrados.push( array[i] * array[i]);
    //    quadrados.push(array[i] ** 2);
    //}

    quadrados = array.map(n => n ** 2);

    return quadrados;for (let i = 0; i < array.length; i++) {
        // quadrados.push( array[i] * array[i]);
        quadrados.push(array[i] ** 2);
    }
}

console.log(numeros);
console.log(quadrado(numeros));
console.log(numeros);

//Ex. 2

let produtos = [
    {nome : "sabonete",preco:2},
    {nome: "shampoo",preco:5},
    {nome: "pasta de dente",preco: 3}
]

function aumentaPreco(produtos){
    
    return produtos.map( produto =>{
        return{
            nome: produto.nome,
            preco: produto.preco * 1.1
        };
    });
}

console.log(produtos)
console.log(aumentaPreco(produtos))
console.log(produtos)

//Ex. 3

let maiorElemento = function(array) {
    return array.reduce((maior,numero) => numero > maior ? numero : maior )
}

console.log(numeros);
console.log(maiorElemento(numeros));
console.log(numeros);

//Ex. 4 

function somaParesAoQuadradro(array){

    return array 
    .filter(n => n % 2 ===0)
    .map( n => n ** 2)
    .reduce( ( soma , n ) => soma + n);
}

console.log(somaParesAoQuadradro(numeros));

//Ex. 5 

let palavras = ['banana' , 'casa' , 'maca' , 'amora']
function stringsMaiusculas(array){
    return array
    .filter(palavra => palavra.length >= 5)
    .map( palavra => palavra.toUpperCase());
}
console.log(stringsMaiusculas(palavras));

//Ex. 6

function incrementarPor(quantidade){
    return valor => valor + quantidade;
}

let incrementarCinco = incrementarPor(5);

console.log(incrementarCinco(10))
//Versão complexa

/*
for (var i = 0; i < array.length; i++){
    if (array.indexOf(array[ i ])=== i) {
        models.push(array[ i ] );
    }
}


//Array.prototype.filter: Cria um novo array com todos os elementos que passaram no teste da função fornecida.
//var newArray = arr.map(callback, [thisArg])

//Versão simples
var produtosUnicos = array.filter( function( elem, i, array) {
    return array.indexOf(elem) === i;
} );
*/



const comida= [
    {
        nome: "hamburguer",
        tipo: "carnívoro"
    },
    {
        nome: "batata frita",
        tipo: "vegetariano"
    },
    {
        nome: "picanha",
        tipo: "carnívoro"
    },
    {
        nome: "cachorro-quente",
        tipo: "carnívoro"
    }
]


const newComida = comida.filter((comida)=>{
    return comida.tipo === "carnívoro"
})

console.log(comida)
console.log(newComida)



//Na prática, podemos simplificar a sintaxe do filter da seguinte forma:
const comida= [
    {
        nome: "hamburguer",
        tipo: "carnívoro"
    },
    {
        nome: "batata frita",
        tipo: "vegetariano"
    },
    {
        nome: "picanha",
        tipo: "carnívoro"
    },
    {
        nome: "cachorro-quente",
        tipo: "carnívoro"
    }
]
const carnivoro = (string) => {
    return string=== "carnívoro"
}

const newComida = comida.filter(({tipo})=> carnivoro(tipo))

console.log(newComida)
console.log(comida)





//Array.prototype.map(): Chama callback para cada elemento e devolve um novo array com a mesma quantidade de itens. Transforma os elementos.
//var newArray = arr.map(callback, [thisArg])



const comida= [
    {
        nome: "hamburguer",
        tipo: "carnívoro",
        quantidade: "200g"
    },
    {
        nome: "batata frita",
        tipo: "vegetariano",
        quantidade: "100g"
    },
    {
        nome: "picanha",
        tipo: "carnívoro",
        quantidade: "280g"
    },
    {
        nome: "cachorro-quente",
        tipo: "carnívoro",
        quantidade: "170g"
    },
    {
        nome: "Salada de Maionese",
        tipo: "vegetariano",
        quantidade: "90g"
    }
]

const nome = comida.map((comida) =>{
    return comida.nome
})

const quantidade = comida.map((comida) =>{
    return comida.quantidade
})

console.log(comida)
console.log(nome)
console.log(quantidade)
//forEach: Não retona um novo array coma mesma quantidade de itens.
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

const forEachNome = comida.forEach((comida) =>{
    return comida.nome
})

console.log(comida)
console.log(forEachNome) //undefined, não retorna array



//Para retorna um array, fazemos o seguinte:
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

const forEachNome = []

comida.forEach((comida) =>{
    forEachNome.push(comida.nome)
    comida.nome
})

console.log(comida)
console.log(forEachNome) //retorna array

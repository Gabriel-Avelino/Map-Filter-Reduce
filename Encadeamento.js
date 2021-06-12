//Podemos usar as funções map, filter e reduce ao mesmo tempo
const comida= [
    {
        nome: "hamburguer",
        tipo: "carnívoro",
        quantidadeGramas: 200,
        calorias: 500
    },
    {
        nome: "batata frita",
        tipo: "vegetariano",
        quantidadeGramas: 100,
        calorias: 300
    },
    {
        nome: "picanha",
        tipo: "carnívoro",
        quantidadeGramas: 280,
        calorias: 380 
    },
    {
        nome: "cachorro-quente",
        tipo: "carnívoro",
        quantidadeGramas: 170,
        calorias: 450
    },
    {
        nome: "Salada de Maionese",
        tipo: "vegetariano",
        quantidadeGramas: 90,
        calorias: 100
    }
]

const carnívoro = comida.filter((comida)=>{
    return comida.tipo=== "carnívoro"
})

//colocamos na função a função nova que criamos
const totalCalorias = carnívoro.reduce((total, comida)=> {
    return total+comida.calorias
}, 0)

console.log(totalCalorias)



//Podemos também unir o reduce e o map em uma mesma função, sem declarar várias variáveis
const comida= [
    {
        nome: "hamburguer",
        tipo: "carnívoro",
        quantidadeGramas: 200,
        calorias: 500
    },
    {
        nome: "batata frita",
        tipo: "vegetariano",
        quantidadeGramas: 100,
        calorias: 300
    },
    {
        nome: "picanha",
        tipo: "carnívoro",
        quantidadeGramas: 280,
        calorias: 380 
    },
    {
        nome: "cachorro-quente",
        tipo: "carnívoro",
        quantidadeGramas: 170,
        calorias: 450
    },
    {
        nome: "Salada de Maionese",
        tipo: "vegetariano",
        quantidadeGramas: 90,
        calorias: 100
    }
]


const Total = comida.filter((comida)=>{
    return comida.tipo=== "carnívoro"
}).reduce((total, comida)=> {
    return total+comida.calorias
}, 0)

console.log(Total)
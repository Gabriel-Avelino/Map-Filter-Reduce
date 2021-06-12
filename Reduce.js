//reduce: executa uma função para cada elemento retornando um único valor de retorno
const comida= [
    {
        nome: "hamburguer",
        tipo: "carnívoro",
        quantidadeGramas: 200
    },
    {
        nome: "batata frita",
        tipo: "vegetariano",
        quantidadeGramas: 100
    },
    {
        nome: "picanha",
        tipo: "carnívoro",
        quantidadeGramas: 280
    },
    {
        nome: "cachorro-quente",
        tipo: "carnívoro",
        quantidadeGramas: 170
    },
    {
        nome: "Salada de Maionese",
        tipo: "vegetariano",
        quantidadeGramas: 90
    }
]

const quantidadeTotal = comida.reduce((total, comida)=>{
    return total + comida.quantidadeGramas
}, 0)

console.log(quantidadeTotal)



//Podemos também retonar objetos no reduce.
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

const Total = comida.reduce((total, comida)=>{
    return {
        totalGramas: total.totalGramas + comida.quantidadeGramas,
        totalCalorias: total.totalCalorias + comida.calorias
    }
}, {totalGramas: 0, totalCalorias:0 })

console.log(Total)



//O reduce também pode ser utilizado em situações onde é necessário utilizar tanto map quanto um filter.
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

//quero somar apenas as calorias de comidas vegetarianas
const Total = comida.reduce((total, comida)=>{
    if(comida.tipo !== "vegetariano") return total
    
    return total + comida.calorias
},0)

console.log(Total)
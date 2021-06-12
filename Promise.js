//Promise: Possui um valor que pode estar disponível agora, no futuro ou nunca.
//Async/await: simplifica o promise
const items = ['a','b', 'c', 'd']

;(async function(){
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject)=> {
            return resolve(`${element} - promise`)
        }) 
    }

    const itemMapped = promiseFunction('x')
    console.log(await itemMapped)

   
})()



//Utilizando map dentro do promise
const items = ['a','b', 'c', 'd']

;(async function(){
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject)=> {
            return resolve(`${element} - promise`)
        }) 
    }
    const itemsMappedPromise = items.map(promiseFunction)

    const itemsMapped = await Promise.all(itemsMappedPromise)
    console.log(itemsMapped)
})()
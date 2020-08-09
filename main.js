
// Explicacion setTimeout
console.log(1)
setTimeout(function(){console.log(2)}, 5000)
console.log(3)



console.log(1)
setTimeout(function(){console.log(2)}, 1000)
setTimeout(function(){console.log(3)}, 1000)
setTimeout(function(){console.log(2)}, 1000)

console.log(5)

// Explicacion callback
function getUsers(callback){
    let users = [
    {name : `david`, edad: 25, city: `CDMX`},
    {name : `eduado`, edad: 31, city: "Paris"},
    {name : `urfali`, edad: 7, city: "Chiapas"}
]
        console.log(`Antes del callback`)
        setTimeout(function(){
        callback(users, `Todo bien`)
        console.log(`after callback`)
        }, 4000)
    
}
getUsers(function(users,text){
    console.log(users)
    console.log(text)
});


// Otra explicacion
function saludo(callback){
    console.log(`Hola desde la function`)
    callback()
}
function despedida (){
    console.warn(`Adios desde el callback`)
}
function burla(){
    console.log(`Me burlo de ti`)
}
saludo(despedida)
saludo(burla)

// Sin setTimeout
function revisarPrecio(callback){
    console.log(`Hola estoy viendo cuanto cuesta tu modeda`)
    callback()
}
function comprarBTC (){
    console.warn(`Compraste un BTC`)
}
function comprarEther(){
    console.log(`Compraste Ether`)
}
revisarPrecio(comprarBTC)
revisarPrecio(comprarEther)

// con setTimeout
function revisarPrecio(callback){
    console.log(`Hola estoy viendo cuanto cuesta tu modeda`)
    setTimeout(function(){callback()}, 2000)
}
function comprarBTC (){
    console.warn(`Compraste un BTC`)
}
function comprarEther(){
    console.log(`Compraste Ether`)
}
revisarPrecio(comprarBTC)
revisarPrecio(comprarEther)




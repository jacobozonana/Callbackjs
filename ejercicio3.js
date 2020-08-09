function superior(a,b, callback){
    callback(a,b)
}
function suma(a,b){
    return a+b
}
console.log(superior(12,3,suma))

function resta(a,b){
    return a-b
}
console.log(superior(12,3,resta))

function multi(a,b){
    return a*b
}
console.log(superior(12,3,multi))

console.log(`esto va al final`)
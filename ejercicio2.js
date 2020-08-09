function superior(v, callback){
    callback(v)
}
function tipodedato(a){
    console.log(typeof(a))
}
superior([12, `Hola`],tipodedato)
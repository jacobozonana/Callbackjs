function superior(a,callback){
    callback(a)
}
function mensaje(b){
    console.warn(b);
}
superior(`Hola como estas?`,mensaje)
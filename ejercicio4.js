function superior(a, callback){
    callback(a)
}
function mayusculas(a){
    console.log(a.toUpperCase())
}
superior(`jacobozonana`,mayusculas)
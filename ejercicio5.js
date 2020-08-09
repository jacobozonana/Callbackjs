function numeros(a,callback){
    callback(a)
}
function mayores(b){
    let numeros = b;
    let mayores = [];
    for (let i=0;i<numeros.length;i++)
    if (numeros[i] >= 120)
    mayores.push(numeros[i]);
    console.log(mayores);
}
numeros([120, 80, 200, 100],mayores)
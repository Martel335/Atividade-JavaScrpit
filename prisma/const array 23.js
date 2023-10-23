const array_numeros = [1,2,3,4,5,6];

function multiplicarPorDois(array, callback){
    const resultado = [];
    for(let i in array){
        resultado.push(callback(array[i]));
    }
    return resultado;
}

function dobrarNumero(numero){
    return numero * 2;
}

const numeroDobrados = multiplicarPorDois(array_numeros, dobrarNumero);
console.log(numeroDobrados);
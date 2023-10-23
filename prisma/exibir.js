exibir = (arg) => {
    console.log(`O resultado da operação é ${arg}`);
}

soma = (a,b,cb) => {
    let op = a +b;
    cb(op);
}


multiplicação = (a,b,cb) => {
    let op = a * b;
    cb(op);
}

soma (1,2,exibir);
multiplicação(2,4,exibir);
function calcularNumeros(num1, num2) {
    return new Promise((resolve, reject) => {
        if (typeof num1 === 'number' && typeof num2 === 'number') {;
            const resultado = num1 + num2;
            resolve(`O resultado da operação é: ${resultado}`);
        } else {
            reject(new Error(`Ambos  os valores  devem  ser números.`));
        }
    });
}

const numero1 =5;
const numero2 = 10;

calcularNumeros(numero1, numero2)
.then(resultado => {
    console.log(resultado);
})
.catch(error => {
    console.error(error.message);
});
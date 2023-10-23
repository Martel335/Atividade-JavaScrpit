let maior = 0
let menor= 99999999;

let array= [1, 3 , 5, 10]
for (let i = 0; i < array.length; i++) {
    let temporaria = array[i]
    if (temporaria > maior) {
        maior = temporaria 
     } else if (temporaria < menor) {
        menor = temporaria
}

console.log(`O maior número é ${maior}`)
console.log(`O menor núnumero é ${menor}`)
}

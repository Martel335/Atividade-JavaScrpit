let kg = 67
let altura = 1.80

const imc = kg /(altura*altura)  

if (imc < 18.5) {
    console.log(`O seu IMC é ${imc}`)
    console.log(`MAGREZA`)
} else if (imc <= 24.9) {
    console.log(`O seu IMC é ${imc}`)
    console.log(`NORMAL`) 
} else if ( imc <= 29.9) {
    console.log(`O seu IMC é ${imc}`)
    console.log(`SOBREPESO`)  
} else if (imc <= 39.9) {
    console.log(`O seu IMC é ${imc}`)
    console.log(`OBESIDADE`) 
} else {
    console.log(` O seu IMC é ${imc}`)
    console.log(`OBESIDADE GRAVE`)
}
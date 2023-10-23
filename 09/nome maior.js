let listaNomes = {
    nomes: ["Joao", "Roberta", "Marcos"]
}

let nomes = Object.values(listaNomes,nomes)

let maiorNome = 0;
for(let i in nomes){
    if(nomes[i].length > maiorNome) {
        maiorNome = nomes[i];
    }
}

console.log(maiorNome)

function palavrasComLetra(strings, letra) {
    const palavrasComLetra = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].toLowerCase() === letra) {
            palavrasComLetra.push(strings[i]);
        }
    }
    return `A letra ${letra} aparece ${palavrasComLetra.length} vezes `;
}

console.log(palavrasComLetra(`Eu gosto de programmmar`, 'm'));
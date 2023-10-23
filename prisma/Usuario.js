function UsuarioInfo(id, callback){
    const Usuario = {
        id: id,
        nome:'Marcos',
        gmail: 'marcos@mail.com'
    }
    callback(Usuario)
}

function MostarNoTerminal(dados){
    const result = dados;
    console.log(`ID: ${result.id}`);
    console.log(`Nome: ${result.nome}`);
    console.log(`Email: ${result.gmail}`);
    console.log(``)
}
UsuarioInfo(3,MostarNoTerminal);
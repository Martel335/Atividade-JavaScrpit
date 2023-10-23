const {sign, verify} = require("jsonwebtoken");

const createTokens = (users) => {
   const acessToken = sign({nome: usuario.nome, id: usuario.id},
    "jwtsecret");
    return acessToken;
}

const validaToken = (req,res,next) => {
    const acessToken = req.cookies["acess-token"];
    if(!acessToken) return res.status(404).json("Something went wrong");
    try{
        const validaToken = verify(acessToken, "jwtsecret");
        if(validaToken){
            req.authenticated = true;
            return next();
        }
    } catch(err){
        return res.status(404).json("Erro")

    }
}

module.exports = { createTokens, validaToken } 
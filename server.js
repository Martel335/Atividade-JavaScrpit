const express = require("express");
const {Prismaclient} = require("@prisma/client");
const cookieParser = require("@cookie-parser");
const bcrypt = require ("bcrypt")
const {createTokens} = require ("./JWT.JS");
const { validaToken } = require("./prisma/migrations/JWT.JS");

const app = express()

app.use(express.json());

app.use(cookieParser());

const prisma = new Prismaclient();

app.post("/registrar", async (req, res)=> {
   await bcrypt.hash(senha, 10).then((hash) => {
    prisma.usuario.create({
        data: {
            nome,
            senha: hash 
        }
   }).then(() => {
    res.json("User create");
   }).catch((err) => {
    res.json ({err:"Something went wrong"})
   })
})

app.post("/login", async (req, res)=> {
 const {nome, senha} = req.body;
 const usuario = await prisma.usuario.findFirst({
     where: {nome}
 })
 if(!usuario){
 res.status(404).json({error: "User inexistent"})};
})
const pSenha = usuario.senha;
bcrypt.compare(senha, PSenha).then((match) =>{
    if(!match){
        res.json({error: "Incorrect password"});
    }else{
        const acessToken = createTokens(usuario);
        res.cookie("acess-tojen", acessToken, {
            httpOnly: false
        })
        res.json("Logged in");
    }
})

app.get("/perfil", validaToken, (req, res)=> {
  res.json("Entrou no perfil");
})
})


app.listen(5555, () => {
    res.json("Running on port 8080...")
})
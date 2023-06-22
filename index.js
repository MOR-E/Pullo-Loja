const express = require("express");
const app = express();
const connection = require("./database/database")
const finaliza = require("./models/Finaliza")
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');
app.use(express.static("public"));
    

app.get("/", (req, res) => {
        res.render("index.ejs");
}) 
app.get("/contact.ejs", (req, res) => {
    res.render("contact.ejs");
}) 
app.get("/collection.ejs", (req, res) => {
    res.render("collection.ejs");
}) 
app.get("/shoes.ejs", (req, res) => {
    res.render("shoes.ejs");
}) 
app.get("/racing_boots.ejs", (req, res) => {
    res.render("racing_boots.ejs");
}) 

app.get("/carrinho", (req, res) => {
    res.render("./compra/carrinho.ejs");
}) 
app.get("/edicao1", (req, res) => {
    res.render("./edicao/edicao1");
}) 
app.get("/finaliza", (req, res) => {
    res.render("./compra/finaliza.ejs");
}) 
app.get("/casual", (req, res) => {
    res.render("./edicao/casual.ejs");
}) 

app.get("/esportivo", (req, res) => {
    res.render("./edicao/esportivo.ejs");
}) 



app.post("/finaliza/salva", (req, res) => {
    var rua = req.body.rua;
    var bairro = req.body.bairro;
    var numero = req.body.numero;
    var complemento = req.body.complemento;
    var cep = req.body.cep;
    var numero_cartao = req.body.numero_cartao;
    var nome = req.body.nome;
    var cvv = req.body.cvv;
    var data_expiracao = req.body.data_expiracao;
    var email = req.body.email;

    
        finaliza.create({
            rua: rua,
            bairro: bairro,
            numero: numero,
            complemento: complemento,
            cep: cep,
            numero_cartao: numero_cartao,
            cvv:cvv,
            nome: nome,
            data_expiracao: data_expiracao,
            email: email,
        }).then(() => {
            res.redirect("/");
        })

        });


connection 
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso")
    }).catch((error) => {
        console.log("Error")
    })

app.listen(7600, () => {
        console.log("servidor rodando");
})


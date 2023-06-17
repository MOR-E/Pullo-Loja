const express = require("express");
const app = express();


app.set('view engine','ejs');
app.use(express.static("public"));


app.get("/index.ejs", (req, res) => {
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

app.listen(8000, () => {
        console.log("servidor rodando");
})
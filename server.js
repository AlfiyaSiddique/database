const express = require("express");
const ejs = require("ejs");
const parser = require("body-parser");

const app = express();

app.use(express.static(__dirname+"/public"));
app.use(parser.urlencoded({extended: true}));
app.set("view engine", "ejs")

app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/findPage", (req,res)=>{
    res.render("findUser")
 })

app.listen(80, ()=>{
    console.log("Server is running at port 80");
})

console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router");






// 1: Kirish 
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 

// 2 Session 

// 3 View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.use("/", router); // for restAPI ::: har qanday kelgan requestni router filega yubor;



module.exports = app;
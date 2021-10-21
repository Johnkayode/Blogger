const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const BlogPost = require("./models/BlogPost")
const app = express()

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")

mongoose.connect("mongodb://localhost/blogger", {useNewUrlParser:true})


app.get("/", (req, res) => {
    res.render("index")
})

app.get("/create", (req, res) => {
    res.render("create")
})

app.post("/post/create", (req, res) => {
    console.log(req.body)
    res.redirect("/")
})

app.listen(3000) 
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


app.get("/", async (req, res) => {
    var blogposts = await BlogPost.find({})
    console.log(blogposts)
    res.render("index", {blogposts: blogposts})
})

app.get("/create", (req, res) => {
    res.render("create")
})

app.post("/post/create", async (req, res) => {
    await BlogPost.create({
        title: req.body.title,
        body: req.body.body,
        created: new Date()
    })
    res.redirect("/")
})

app.listen(3000) 
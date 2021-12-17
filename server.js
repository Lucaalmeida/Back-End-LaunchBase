const express = require("express")
const server = express()

const nunjucks = require("nunjucks")


server.use (express.static('public'))

server.set("view engine", "html")

nunjucks.configure(__dirname + "/views",{
    express:server
})


server.get("/", function(req, res){
    return res.render("about")
})

server.get("/portifolio", function(req, res){
    return res.render("portifolio")
})




server.listen(4000, function ( ){ 
    console.log("server is running")
})